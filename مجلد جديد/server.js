import http from "node:http";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const publicDir = here;
const dataDir = process.env.DATA_DIR || path.join(here, "data");
const dataFile = path.join(dataDir, "database.json");
const PORT = Number(process.env.PORT || 5500);
fs.mkdirSync(dataDir, { recursive: true });

const blank = { users: {}, sessions: {}, friendships: {}, blocks: {}, messages: [], rooms: {}, results: [] };
let db = fs.existsSync(dataFile) ? Object.assign(blank, JSON.parse(fs.readFileSync(dataFile, "utf8"))) : blank;
let saveTimer;
const streams = new Map();
const uid = (n = 12) => crypto.randomBytes(n).toString("hex");
const playerId = () => String(10000000 + crypto.randomInt(90000000));
const text = (v, n = 500) => String(v || "").trim().slice(0, n);
const pair = (a, b) => [a, b].sort().join(":");
const blocked = (a, b) => Boolean(db.blocks[pair(a, b)]);
function save() { clearTimeout(saveTimer); saveTimer = setTimeout(() => fs.writeFileSync(dataFile, JSON.stringify(db, null, 2)), 50); }
function online(id) { return Boolean(streams.get(id)?.size); }
function view(user) { return user && { id: user.id, name: user.name, avatar: user.avatar || "", coins: user.coins, online: online(user.id), lastSeen: user.lastSeen || 0 }; }
function session(token) { const s = db.sessions[token]; return s && s.expires > Date.now() ? db.users[s.userId] : null; }
function roomView(room, userId) { return { ...room, opponents: room.players.filter((x) => x !== userId).map((x) => view(db.users[x])) }; }
function eventTo(userId, event) {
  for (const res of streams.get(userId) || []) res.write(`data:${JSON.stringify(event)}\n\n`);
}
function eventAll(event, allow = () => true) {
  for (const id of streams.keys()) if (allow(id)) eventTo(id, event);
}
function presence(user) { eventAll({ type: "presence", user: view(user) }, (id) => !blocked(id, user.id)); }
function json(res, status, value) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" });
  res.end(JSON.stringify(value));
}
async function body(req) {
  let raw = "";
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 300000) throw new Error("too_large");
  }
  try { return raw ? JSON.parse(raw) : {}; } catch { return {}; }
}
function auth(req, res, url) {
  const token = String(req.headers.authorization || url.searchParams.get("token") || "").replace(/^Bearer\s+/i, "");
  const user = session(token);
  if (!user) { json(res, 401, { error: "unauthorized" }); return null; }
  return { user, token };
}
function match(pathname, pattern) {
  const keys = [];
  const source = pattern.replace(/:[^/]+/g, (part) => { keys.push(part.slice(1)); return "([^/]+)"; });
  const found = pathname.match(new RegExp(`^${source}$`));
  if (!found) return null;
  return Object.fromEntries(keys.map((key, i) => [key, decodeURIComponent(found[i + 1])]));
}
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".mp3": "audio/mpeg" };
function staticFile(req, res, url) {
  let relative = decodeURIComponent(url.pathname === "/" ? "/صوره البدايه.html" : url.pathname);
  const target = path.resolve(publicDir, "." + relative);
  if (!target.startsWith(publicDir) || !fs.existsSync(target) || fs.statSync(target).isDirectory()) return false;
  res.writeHead(200, { "Content-Type": mime[path.extname(target).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-cache" });
  fs.createReadStream(target).pipe(res); return true;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  if (req.method === "OPTIONS") {
    res.writeHead(204, { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type, Authorization", "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS" }); return res.end();
  }
  try {
    if (req.method === "GET" && url.pathname === "/api/health") {
      return json(res, 200, { ok: true, service: "carrom-online" });
    }
    if (req.method === "POST" && url.pathname === "/api/session/guest") {
      const input = await body(req); const deviceId = text(input.deviceId, 80);
      let user = Object.values(db.users).find((x) => deviceId && x.deviceId === deviceId);
      if (!user) {
        let id = playerId();
        while (db.users[id]) id = playerId();
        user = { id, deviceId: deviceId || uid(), name: text(input.name, 24) || "لاعب جديد", avatar: "", coins: 1000000, createdAt: Date.now(), lastSeen: Date.now() };
        db.users[user.id] = user;
      }
      const token = uid(32); db.sessions[token] = { userId: user.id, expires: Date.now() + 30 * 86400000 }; save();
      return json(res, 200, { token, user: view(user) });
    }
    if (req.method === "GET" && url.pathname === "/api/live") {
      const a = auth(req, res, url); if (!a) return;
      res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive", "Access-Control-Allow-Origin": "*" });
      if (!streams.has(a.user.id)) streams.set(a.user.id, new Set());
      streams.get(a.user.id).add(res); a.user.lastSeen = Date.now(); presence(a.user);
      res.write(`data:${JSON.stringify({ type: "connected", user: view(a.user) })}\n\n`);
      const heartbeat = setInterval(() => res.write(":ping\n\n"), 20000);
      req.on("close", () => { clearInterval(heartbeat); streams.get(a.user.id)?.delete(res); if (!streams.get(a.user.id)?.size) streams.delete(a.user.id); a.user.lastSeen = Date.now(); save(); presence(a.user); });
      return;
    }
    if (url.pathname.startsWith("/api/")) {
      const a = auth(req, res, url); if (!a) return;
      const input = ["POST", "PATCH"].includes(req.method) ? await body(req) : {};
      if (req.method === "GET" && url.pathname === "/api/me") return json(res, 200, { user: view(a.user) });
      if (req.method === "PATCH" && url.pathname === "/api/me") {
        if (text(input.name, 24)) a.user.name = text(input.name, 24);
        if (text(input.avatar, 180000)) a.user.avatar = text(input.avatar, 180000);
        save(); presence(a.user); return json(res, 200, { user: view(a.user) });
      }
      if (req.method === "POST" && url.pathname === "/api/wallet/change") {
        const amount = Math.trunc(Number(input.amount || 0));
        if (!Number.isFinite(amount) || Math.abs(amount) > 1000000) return json(res, 400, { error: "invalid_amount" });
        a.user.coins = Math.max(0, Math.trunc(a.user.coins + amount)); save(); return json(res, 200, { coins: a.user.coins });
      }
      if (req.method === "GET" && url.pathname === "/api/friends") {
        const relations = Object.values(db.friendships).filter((x) => x.users.includes(a.user.id));
        const accepted = relations.filter((x) => x.status === "accepted");
        const incoming = relations.filter((x) => x.status === "pending" && x.requestedBy !== a.user.id);
        const outgoing = relations.filter((x) => x.status === "pending" && x.requestedBy === a.user.id);
        const usersFor = (items) => items.map((x) => x.users.find((id) => id !== a.user.id)).map((id) => view(db.users[id])).filter(Boolean);
        return json(res, 200, {
          friends: usersFor(accepted),
          requests: usersFor(incoming),
          sent: usersFor(outgoing)
        });
      }
      let p = match(url.pathname, "/api/friends/:userId");
      if (p && req.method === "POST") {
        const target = db.users[p.userId]; if (!target || target.id === a.user.id) return json(res, 404, { error: "user_not_found" });
        db.friendships[pair(a.user.id, target.id)] = { users: [a.user.id, target.id], status: "pending", requestedBy: a.user.id, at: Date.now() }; save();
        eventTo(target.id, { type: "friend-request", from: view(a.user) }); return json(res, 200, { ok: true });
      }
      if (p && req.method === "DELETE") { delete db.friendships[pair(a.user.id, p.userId)]; save(); return json(res, 200, { ok: true }); }
      p = match(url.pathname, "/api/friends/:userId/accept");
      if (p && req.method === "POST") {
        const f = db.friendships[pair(a.user.id, p.userId)];
        if (!f || f.requestedBy === a.user.id) return json(res, 404, { error: "request_not_found" });
        f.status = "accepted"; save(); eventTo(p.userId, { type: "friend-accepted", user: view(a.user) }); return json(res, 200, { ok: true });
      }
      p = match(url.pathname, "/api/blocks/:userId");
      if (p && req.method === "POST") {
        db.blocks[pair(a.user.id, p.userId)] = { by: a.user.id, target: p.userId, at: Date.now() }; delete db.friendships[pair(a.user.id, p.userId)]; save(); return json(res, 200, { ok: true });
      }
      p = match(url.pathname, "/api/messages/:scope");
      if (p && req.method === "GET") {
        const messages = db.messages.filter((m) => m.scope === text(p.scope, 80) && !blocked(a.user.id, m.userId)).slice(-100).map((m) => ({ ...m, user: view(db.users[m.userId]) }));
        return json(res, 200, { messages });
      }
      if (p && req.method === "POST") {
        const messageText = text(input.text, 500); if (!messageText) return json(res, 400, { error: "empty_message" });
        const message = { id: uid(8), scope: text(p.scope, 80), userId: a.user.id, text: messageText, at: Date.now() };
        db.messages.push(message); db.messages = db.messages.slice(-5000); save();
        const packet = { type: "message", message: { ...message, user: view(a.user) } };
        if (message.scope === "group") {
          eventAll(packet, (id) => !blocked(id, a.user.id));
        } else if (message.scope.startsWith("dm:")) {
          message.scope.slice(3).split(":").forEach((id) => { if (!blocked(id, a.user.id)) eventTo(id, packet); });
        } else if (message.scope.startsWith("room:")) {
          const room = db.rooms[message.scope.slice(5)];
          room?.players.forEach((id) => { if (!blocked(id, a.user.id)) eventTo(id, packet); });
        }
        return json(res, 200, { message });
      }
      if (req.method === "POST" && url.pathname === "/api/rooms/join") {
        const stake = Math.max(0, Math.trunc(Number(input.stake || 500)));
        const now = Date.now();
        Object.values(db.rooms).forEach((r) => {
          if (r.status === "waiting" && (!online(r.players[0]) || now - r.createdAt > 120000)) {
            delete db.rooms[r.id];
          }
        });
        let room = Object.values(db.rooms).find((r) => r.status === "waiting" && r.stake === stake && r.players[0] !== a.user.id && online(r.players[0]));
        if (!room) {
          const roomId = uid(6);
          room = db.rooms[roomId] = { id: roomId, stake, status: "waiting", players: [a.user.id], state: null, turn: a.user.id, createdAt: Date.now() };
        }
        else {
          room.players.push(a.user.id); room.status = "playing"; room.turn = room.players[Math.floor(Math.random() * 2)];
          const first = Math.random() < .5 ? "white" : "black"; room.colors = { [room.players[0]]: first, [room.players[1]]: first === "white" ? "black" : "white" };
          room.players.forEach((id) => eventTo(id, { type: "room-ready", room: roomView(room, id) }));
        }
        save(); return json(res, 200, { room: roomView(room, a.user.id) });
      }
      if (req.method === "POST" && url.pathname === "/api/live/send") {
        const room = db.rooms[text(input.roomId, 40)];
        if (!room || !room.players.includes(a.user.id)) return json(res, 404, { error: "room_not_found" });
        const allowed = ["game-state", "shot", "turn", "voice-offer", "voice-answer", "ice-candidate", "mic-state"];
        if (!allowed.includes(input.type)) return json(res, 400, { error: "invalid_event" });
        room.players.filter((id) => id !== a.user.id).forEach((id) => eventTo(id, { ...input, from: a.user.id }));
        if (input.type === "game-state") room.state = input.state;
        if (input.type === "turn") room.turn = input.turn;
        save(); return json(res, 200, { ok: true });
      }
      p = match(url.pathname, "/api/rooms/:roomId/result");
      if (p && req.method === "POST") {
        const room = db.rooms[p.roomId]; if (!room || !room.players.includes(a.user.id)) return json(res, 404, { error: "room_not_found" });
        room.status = "finished"; room.winner = text(input.winnerId, 40); db.results.push({ roomId: room.id, winner: room.winner, at: Date.now() }); save();
        room.players.forEach((id) => eventTo(id, { type: "game-result", winnerId: room.winner })); return json(res, 200, { ok: true });
      }
      return json(res, 404, { error: "not_found" });
    }
    if (!staticFile(req, res, url)) json(res, 404, { error: "not_found" });
  } catch (error) { json(res, 500, { error: "server_error", detail: error.message }); }
});

server.listen(PORT, () => console.log(`Carrom server: http://localhost:${PORT}/`));
