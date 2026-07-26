(function () {
  "use strict";
  const API = location.protocol === "file:" || location.hostname === "localhost"
    ? "http://172.20.10.5:5500"
    : location.origin;
  const TOKEN_KEY = "carrom_server_token";
  const DEVICE_KEY = "carrom_device_id";
  const listeners = new Map();
  let token = localStorage.getItem(TOKEN_KEY) || "";
  let live = null;
  let me = null;
  let room = null;

  function emit(type, payload) { (listeners.get(type) || []).forEach((fn) => fn(payload)); }
  function on(type, fn) {
    if (!listeners.has(type)) listeners.set(type, new Set());
    listeners.get(type).add(fn);
    return () => listeners.get(type)?.delete(fn);
  }
  async function request(path, options) {
    const response = await fetch(API + path, {
      ...options,
      headers: { "Content-Type": "application/json", Authorization: token ? "Bearer " + token : "", ...(options?.headers || {}) }
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "server_error");
    return data;
  }
  async function connect(name) {
    let deviceId = localStorage.getItem(DEVICE_KEY);
    if (!deviceId) { deviceId = crypto.randomUUID(); localStorage.setItem(DEVICE_KEY, deviceId); }
    if (!token) {
      const session = await request("/api/session/guest", { method: "POST", body: JSON.stringify({ deviceId, name }) });
      token = session.token; me = session.user; localStorage.setItem(TOKEN_KEY, token);
    } else me = (await request("/api/me")).user;
    connectLive();
    emit("ready", me);
    return me;
  }
  function connectLive() {
    live?.close();
    live = new EventSource(API + "/api/live?token=" + encodeURIComponent(token));
    live.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "room-ready" && data.room) room = data.room;
      emit(data.type, data);
    };
    live.onerror = () => { live?.close(); setTimeout(connectLive, 1500); };
  }
  async function joinRoom(stake) {
    room = (await request("/api/rooms/join", { method: "POST", body: JSON.stringify({ stake }) })).room;
    return room;
  }
  function sendLive(type, payload) {
    if (!room) return false;
    request("/api/live/send", { method: "POST", body: JSON.stringify({ type, roomId: room.id, ...payload }) }).catch(() => {});
    return true;
  }
  window.CarromOnline = {
    connect, on, request, joinRoom, sendLive,
    get me() { return me; },
    get room() { return room; },
    updateProfile: (profile) => request("/api/me", { method: "PATCH", body: JSON.stringify(profile) }),
    changeCoins: (amount) => request("/api/wallet/change", { method: "POST", body: JSON.stringify({ amount }) }),
    friends: () => request("/api/friends"),
    addFriend: (id) => request("/api/friends/" + encodeURIComponent(id), { method: "POST" }),
    acceptFriend: (id) => request("/api/friends/" + encodeURIComponent(id) + "/accept", { method: "POST" }),
    removeFriend: (id) => request("/api/friends/" + encodeURIComponent(id), { method: "DELETE" }),
    block: (id) => request("/api/blocks/" + encodeURIComponent(id), { method: "POST" }),
    messages: (scope) => request("/api/messages/" + encodeURIComponent(scope)),
    sendMessage: (scope, text) => request("/api/messages/" + encodeURIComponent(scope), { method: "POST", body: JSON.stringify({ text }) })
  };
})();
