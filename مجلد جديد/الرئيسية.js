"use strict";

const PLAYER_STORAGE_KEY = "carrom_player_data";
const PROFILE_IMAGE_KEY = "carrom_profile_image";
const LAST_GIFT_KEY = "carrom_last_gift_time";
const STARTER_COINS_VERSION_KEY = "carrom_starter_coins_v4";
const MILLION_COINS_GRANT_KEY = "carrom_million_coins_grant_v1";
const MATCH_ROTATION_KEY = "carrom_match_rotation_v1";
const MAIN_SETTINGS_KEY = "carrom_main_settings_v1";

const STARTER_COINS = 20000;
const BOT_FIND_TIME = 5000;
const DEFAULT_PLAYER_NAME = "اسم المستخدم";

const BOT_NAMES = [
  "بوت كيرم"
];

const coinsValue = document.getElementById("coinsValue");
const coinsButton = document.getElementById("coinsButton");

const playerInfoButton = document.getElementById("playerInfoButton");
const playerNameElement = document.getElementById("playerName");
const playerIdElement = document.getElementById("playerId");

const profileButton = document.getElementById("profileButton");
const profileInput = document.getElementById("profileInput");
const profileImage = document.getElementById("profileImage");

const playButton = document.getElementById("playButton");
const rankingButton = document.getElementById("rankingButton");
const giftButton = document.getElementById("giftButton");

const navButtons = document.querySelectorAll(".nav-button");
const mainSettingsPanel = document.getElementById("mainSettingsPanel");
const mainSettingsClose = document.getElementById("mainSettingsClose");
const mainSfxToggle = document.getElementById("mainSfxToggle");
const mainMusicToggle = document.getElementById("mainMusicToggle");
const mainVolumeRange = document.getElementById("mainVolumeRange");
const mainVolumeValue = document.getElementById("mainVolumeValue");
const mainHapticsToggle = document.getElementById("mainHapticsToggle");
const mainBatteryToggle = document.getElementById("mainBatteryToggle");
const mainNotificationsToggle = document.getElementById("mainNotificationsToggle");
const languageArabic = document.getElementById("languageArabic");
const languageEnglish = document.getElementById("languageEnglish");
const privacyInfoButton = document.getElementById("privacyInfoButton");
const mainSettingsReset = document.getElementById("mainSettingsReset");
const mainChatUnread = document.getElementById("mainChatUnread");
const socialHub = document.getElementById("socialHub");
const socialClose = document.getElementById("socialClose");
const socialAddOpen = document.getElementById("socialAddOpen");
const socialSearch = document.getElementById("socialSearch");
const socialTabs = document.querySelectorAll("[data-social-tab]");
const socialPeopleList = document.getElementById("socialPeopleList");
const socialListTitle = document.getElementById("socialListTitle");
const socialOnlineCount = document.getElementById("socialOnlineCount");
const socialChatPane = document.getElementById("socialChatPane");
const socialEmpty = document.getElementById("socialEmpty");
const socialConversation = document.getElementById("socialConversation");
const socialMobileBack = document.getElementById("socialMobileBack");
const socialChatProfile = document.getElementById("socialChatProfile");
const socialChatAvatar = document.getElementById("socialChatAvatar");
const socialChatName = document.getElementById("socialChatName");
const socialChatStatus = document.getElementById("socialChatStatus");
const socialMessages = document.getElementById("socialMessages");
const socialForm = document.getElementById("socialForm");
const socialMessageInput = document.getElementById("socialMessageInput");
const socialVoice = document.getElementById("socialVoice");
const socialUnread = document.getElementById("socialUnread");
const socialFriendUnread = document.getElementById("socialFriendUnread");
const socialRequestBadge = document.getElementById("socialRequestBadge");
const socialMore = document.getElementById("socialMore");
const socialProfileModal = document.getElementById("socialProfileModal");
const socialProfileClose = document.getElementById("socialProfileClose");
const socialProfileAvatar = document.getElementById("socialProfileAvatar");
const socialProfileName = document.getElementById("socialProfileName");
const socialProfileId = document.getElementById("socialProfileId");
const socialProfileState = document.getElementById("socialProfileState");
const socialProfileLastSeen = document.getElementById("socialProfileLastSeen");
const socialProfileWins = document.getElementById("socialProfileWins");
const socialProfileLevel = document.getElementById("socialProfileLevel");
const socialProfileAction = document.getElementById("socialProfileAction");
const socialProfileAdd = document.getElementById("socialProfileAdd");
const socialProfileView = document.getElementById("socialProfileView");
const socialProfileRemove = document.getElementById("socialProfileRemove");
const socialProfileBlock = document.getElementById("socialProfileBlock");
const socialAddModal = document.getElementById("socialAddModal");
const socialAddClose = document.getElementById("socialAddClose");
const socialAddForm = document.getElementById("socialAddForm");
const socialFriendId = document.getElementById("socialFriendId");

const usernameDialog = document.getElementById("usernameDialog");
const usernameInput = document.getElementById("usernameInput");

const cancelUsernameButton =
  document.getElementById("cancelUsernameButton");

const saveUsernameButton =
  document.getElementById("saveUsernameButton");

const playDialog = document.getElementById("playDialog");
const closePlayDialog = document.getElementById("closePlayDialog");

const playPriceButtons =
  document.querySelectorAll(".play-price-button");

const matchmakingPage =
  document.getElementById("matchmakingPage");

const selectedStake =
  document.getElementById("selectedStake");

const cancelSearchButton =
  document.getElementById("cancelSearchButton");

const matchmakingTitle =
  document.getElementById("matchmakingTitle");

const matchmakingDesc =
  document.getElementById("matchmakingDesc");

const loadingDots =
  document.getElementById("loadingDots");

const gameTablePage =
  document.getElementById("gameTablePage");

const tablePlayerImage =
  document.getElementById("tablePlayerImage");

const tablePlayerName =
  document.getElementById("tablePlayerName");

const botOpponentName =
  document.getElementById("botOpponentName");

const playerTurnTimer =
  document.getElementById("playerTurnTimer");

const botTurnTimer =
  document.getElementById("botTurnTimer");

const botTurnArrow =
  document.getElementById("botTurnArrow");

const tableStakeValue =
  document.getElementById("tableStakeValue");

const playerScoreEl =
  document.getElementById("playerScore");

const botScoreEl =
  document.getElementById("botScore");

const playerColorLabel = document.getElementById("playerColorLabel");
const botColorLabel = document.getElementById("botColorLabel");
const playerColorDot = document.getElementById("playerColorDot");
const botColorDot = document.getElementById("botColorDot");

const gameStatusEl =
  document.getElementById("gameStatus");

const queenStatusEl =
  document.getElementById("queenStatus");

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const strikerImage = new Image();
strikerImage.src = "مضرب.png";

const whitePieceImage = new Image();
whitePieceImage.src = "حبه بيضاء.png";

const blackPieceImage = new Image();
blackPieceImage.src = "حبه سوداء.png";

const redPieceImage = new Image();
redPieceImage.src = "حبه حمراء.png";

const track = document.getElementById("track");
const trackStriker = document.getElementById("trackStriker");

const powerFill = document.getElementById("powerFill");
const powerText = document.getElementById("powerText");

const winner = document.getElementById("winner");
const winnerTitle = document.getElementById("winnerTitle");
const winnerText = document.getElementById("winnerText");
const winnerTrophy = document.getElementById("winnerTrophy");
const winnerReward = document.getElementById("winnerReward");
const winnerRewardBox = document.getElementById("winnerRewardBox");
const winnerPlayerImage = document.getElementById("winnerPlayerImage");
const winnerAdButton = document.getElementById("winnerAdButton");
const winnerProfileButton = document.getElementById("winnerProfileButton");
const winnerOpponentProfileButton = document.getElementById("winnerOpponentProfileButton");
const winnerOpponentImage = document.getElementById("winnerOpponentImage");
const winnerSelfName = document.getElementById("winnerSelfName");
const winnerOpponentName = document.getElementById("winnerOpponentName");
const resultProfileCard = document.getElementById("resultProfileCard");
const resultProfileClose = document.getElementById("resultProfileClose");
const resultProfileImage = document.getElementById("resultProfileImage");
const resultProfileName = document.getElementById("resultProfileName");
const resultProfileId = document.getElementById("resultProfileId");
const resultAddFriend = document.getElementById("resultAddFriend");

const winnerExitButton =
  document.getElementById("winnerExitButton");

const micButton = document.getElementById("micButton");
const micIcon = document.getElementById("micIcon");
const micLabel = document.getElementById("micLabel");
const speakerButton = document.getElementById("speakerButton");
const chatToggleButton = document.getElementById("chatToggleButton");
const chatBadge = document.getElementById("chatBadge");
const roomChat = document.getElementById("roomChat");
const chatDragHandle = document.getElementById("chatDragHandle");
const chatTopReturn = document.getElementById("chatTopReturn");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatPlayerImage = document.getElementById("chatPlayerImage");
const chatSelfParticipant = document.getElementById("chatSelfParticipant");
const chatOpponentParticipant = document.getElementById("chatOpponentParticipant");
const opponentMuteBadge = document.getElementById("opponentMuteBadge");
const voicePermission = document.getElementById("voicePermission");
const voicePermissionText = document.getElementById("voicePermissionText");
const dismissVoicePermission = document.getElementById("dismissVoicePermission");
const roomSettingsButton = document.getElementById("roomSettingsButton");
const roomSettings = document.getElementById("roomSettings");
const closeSettingsButton = document.getElementById("closeSettingsButton");
const gameSoundToggle = document.getElementById("gameSoundToggle");
const opponentSoundToggle = document.getElementById("opponentSoundToggle");
const vibrationToggle = document.getElementById("vibrationToggle");
const surrenderButton = document.getElementById("surrenderButton");
const surrenderConfirm = document.getElementById("surrenderConfirm");
const cancelSurrenderButton = document.getElementById("cancelSurrenderButton");
const confirmSurrenderButton = document.getElementById("confirmSurrenderButton");

let microphoneStream = null;
let microphoneAudioContext = null;
let microphoneAnalyser = null;
let microphoneActivityFrame = null;
let onlineVoicePeer = null;
let onlineRemoteAudio = null;
let chatDragStartY = null;
let speakerMuted = false;
let chatDisabled = false;
let opponentMuted = false;
let unreadMessages = 0;
let roomMessages = [];

const DEFAULT_PLAYER_DATA = {
  coins: STARTER_COINS,
  wins: 0,
  losses: 0,
  playerName: DEFAULT_PLAYER_NAME,
  playerId: ""
};

let playerData = loadPlayerData();
let mainSettings = loadMainSettings();
let gameAudioContext = null;
let menuMusicTimer = null;
let menuMusicStep = 0;
let lastCollisionFeedbackAt = 0;

function loadMainSettings() {
  const defaults = {sfx:true,music:false,volume:70,haptics:true,battery:false,notifications:true,language:"ar"};
  try { return Object.assign(defaults, JSON.parse(localStorage.getItem(MAIN_SETTINGS_KEY)) || {}); }
  catch (_) { return defaults; }
}

function saveMainSettings() {
  localStorage.setItem(MAIN_SETTINGS_KEY, JSON.stringify(mainSettings));
}

let currentSearchPrice = 0;
let currentBotName = "";

let matchmakingTimer = null;
let botTimer = null;
let finishShotTimer = null;
let turnTimerInterval = null;
let turnSecondsRemaining = 15;
let botAimPlan = null;
let botAimStartedAt = 0;
let activeBotPlan = null;
let botAvoidTarget = null;
let botTargetFailures = new Map();
let botRecentStarts = [];
let botRecentTargets = [];

let matchSettled = false;
let lastMatchReward = 0;
let resultAdClaimed = false;
let selectedResultProfile = "opponent";
let gameAssignmentReady = false;

const BOT_PROFILE_IMAGE =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><radialGradient id="b"><stop stop-color="#176cc4"/><stop offset="1" stop-color="#020b1c"/></radialGradient></defs><rect width="200" height="200" rx="100" fill="url(#b)"/><rect x="42" y="55" width="116" height="92" rx="34" fill="#e9f7ff" stroke="#45d8ff" stroke-width="7"/><rect x="57" y="74" width="86" height="50" rx="20" fill="#031027"/><circle cx="80" cy="99" r="10" fill="#32e7ff"/><circle cx="120" cy="99" r="10" fill="#32e7ff"/><path d="M82 133h36" stroke="#133a63" stroke-width="7" stroke-linecap="round"/><path d="M100 55V31" stroke="#ffd34f" stroke-width="8"/><circle cx="100" cy="25" r="10" fill="#ffca39"/></svg>');

function generatePlayerId() {
  let id = "";

  for (let index = 0; index < 8; index++) {
    id += Math.floor(Math.random() * 10);
  }

  if (id === "00000000") {
    return "10000000";
  }

  return id;
}

function loadPlayerData() {
  let savedData = null;

  try {
    savedData = JSON.parse(
      localStorage.getItem(PLAYER_STORAGE_KEY)
    );
  } catch (error) {
    savedData = null;
  }

  const data = {
    ...DEFAULT_PLAYER_DATA,
    ...(savedData || {})
  };

  if (
    !data.playerId ||
    data.playerId === "00000000" ||
    data.playerId === "00000001"
  ) {
    data.playerId = generatePlayerId();
  }

  if (typeof data.coins !== "number") {
    data.coins = STARTER_COINS;
  }

  if (!localStorage.getItem(MILLION_COINS_GRANT_KEY)) {
    data.coins += 1000000;
    localStorage.setItem(MILLION_COINS_GRANT_KEY, "done");
  }

  if (typeof data.wins !== "number") {
    data.wins = 0;
  }

  if (typeof data.losses !== "number") {
    data.losses = 0;
  }

  if (!data.playerName) {
    data.playerName = DEFAULT_PLAYER_NAME;
  }

  if (!localStorage.getItem(STARTER_COINS_VERSION_KEY)) {
    if (data.coins < STARTER_COINS) {
      data.coins = STARTER_COINS;
    }

    localStorage.setItem(
      STARTER_COINS_VERSION_KEY,
      "done"
    );
  }

  localStorage.setItem(
    PLAYER_STORAGE_KEY,
    JSON.stringify(data)
  );

  return data;
}

function savePlayerData() {
  localStorage.setItem(
    PLAYER_STORAGE_KEY,
    JSON.stringify(playerData)
  );
}

function updateInterface() {
  coinsValue.textContent = formatNumber(playerData.coins);
  playerNameElement.textContent = playerData.playerName;
  playerIdElement.textContent = "ID: " + playerData.playerId;
}

function formatNumber(number) {
  const value = Math.max(0, Number(number) || 0);
  if (value >= 1000000000) return compactAmount(value, 1000000000, "B");
  if (value >= 1000000) return compactAmount(value, 1000000, "M");
  if (value >= 1000) return compactAmount(value, 1000, "K");
  return String(Math.floor(value));
}

function compactAmount(value, divisor, suffix) {
  const compact = value / divisor;
  const digits = Number.isInteger(compact) ? 0 : (compact < 100 ? 1 : 0);
  return compact.toFixed(digits).replace(/\.0$/, "") + suffix;
}

function openUsernameDialog() {
  usernameDialog.hidden = false;

  usernameInput.value =
    playerData.playerName === DEFAULT_PLAYER_NAME
      ? ""
      : playerData.playerName;

  setTimeout(function () {
    usernameInput.focus();

    if (usernameInput.value) {
      usernameInput.select();
    }
  }, 80);
}

function closeUsernameDialog() {
  usernameDialog.hidden = true;
}

function saveUsername() {
  const newName = usernameInput.value.trim();

  if (newName.length < 2) {
    usernameInput.value = "";
    usernameInput.placeholder = "اكتب اسم من حرفين أو أكثر";
    usernameInput.focus();
    return;
  }

  playerData.playerName = newName;

  savePlayerData();
  updateInterface();
  closeUsernameDialog();

  showToast("تم حفظ اسم المستخدم");
}

playerInfoButton.addEventListener("click", function (event) {
  if (event.target.id === "playerId") {
    copyPlayerId();
    return;
  }

  openUsernameDialog();
});

saveUsernameButton.addEventListener("click", saveUsername);

cancelUsernameButton.addEventListener(
  "click",
  closeUsernameDialog
);

usernameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    saveUsername();
  }

  if (event.key === "Escape") {
    closeUsernameDialog();
  }
});

usernameDialog.addEventListener("click", function (event) {
  if (event.target === usernameDialog) {
    closeUsernameDialog();
  }
});

function copyPlayerId() {
  const text = playerData.playerId;

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(showCopiedId)
      .catch(function () {
        fallbackCopy(text);
      });

    return;
  }

  fallbackCopy(text);
}

function fallbackCopy(text) {
  const input = document.createElement("input");

  input.value = text;
  document.body.appendChild(input);

  input.select();
  document.execCommand("copy");

  input.remove();
  showCopiedId();
}

function showCopiedId() {
  const oldText = playerIdElement.textContent;

  playerIdElement.textContent = "تم نسخ ID";

  setTimeout(function () {
    playerIdElement.textContent = oldText;
  }, 1000);
}

profileButton.addEventListener("click", function () {
  profileInput.click();
});

profileInput.addEventListener("change", function () {
  const file = profileInput.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    showToast("اختر صورة فقط");
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    profileImage.src = reader.result;

    localStorage.setItem(
      PROFILE_IMAGE_KEY,
      reader.result
    );

    tablePlayerImage.src = reader.result;

    showToast("تم تغيير الصورة");
  };

  reader.readAsDataURL(file);
});

function loadProfileImage() {
  const savedImage = localStorage.getItem(PROFILE_IMAGE_KEY);

  if (savedImage) {
    profileImage.src = savedImage;
  }

  tablePlayerImage.src = profileImage.src;
}

function addCoins(amount) {
  playerData.coins += Number(amount);

  if (playerData.coins < 0) {
    playerData.coins = 0;
  }

  savePlayerData();
  updateInterface();
}

function spendCoins(amount) {
  if (playerData.coins < amount) {
    showToast("عملاتك غير كافية");
    return false;
  }

  playerData.coins -= amount;

  savePlayerData();
  updateInterface();

  return true;
}

function recordWin() {
  playerData.wins += 1;
  savePlayerData();
  updateInterface();
}

function recordLoss() {
  playerData.losses += 1;
  savePlayerData();
  updateInterface();
}

coinsButton.addEventListener("click", function () {
  showToast(
    "رصيدك: " +
      formatNumber(playerData.coins) +
      " عملة"
  );
});

playButton.addEventListener("click", function () {
  playDialog.hidden = false;
});

closePlayDialog.addEventListener("click", function () {
  playDialog.hidden = true;
});

playDialog.addEventListener("click", function (event) {
  if (event.target === playDialog) {
    playDialog.hidden = true;
  }
});

playPriceButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const price = Number(button.dataset.price);

    if (!spendCoins(price)) {
      return;
    }

    currentSearchPrice = price;
    playDialog.hidden = true;

    startMatchmaking(price);
  });
});

function startMatchmaking(price) {
  clearMatchmakingTimer();

  selectedStake.textContent = formatNumber(price);

  matchmakingTitle.textContent =
    "جاري العثور على خصم";

  matchmakingDesc.textContent =
    "انتظر قليلًا... يتم البحث عن لاعب مناسب لك";

  loadingDots.hidden = false;
  matchmakingPage.hidden = false;

  if (window.CarromOnline) {
    window.CarromOnline.joinRoom(price).then(function (room) {
      if (room.status === "playing") {
        const opponent = room.opponents && room.opponents[0];
        currentBotName = opponent ? opponent.name : "لاعب متصل";
        matchmakingTitle.textContent = "تم العثور على خصم";
        matchmakingDesc.textContent = currentBotName + " جاهز للعب";
        loadingDots.hidden = true;
        setTimeout(openGameTable, 650);
      } else {
        matchmakingDesc.textContent = "بانتظار دخول لاعب حقيقي إلى الغرفة...";
      }
    }).catch(function () {
      matchmakingDesc.textContent = "تعذر الاتصال بالسيرفر، سيتم اللعب ضد البوت";
      matchmakingTimer = setTimeout(findBotOpponent, 1200);
    });
    return;
  }

  matchmakingTimer = setTimeout(findBotOpponent, BOT_FIND_TIME);
}

function clearMatchmakingTimer() {
  if (!matchmakingTimer) {
    return;
  }

  clearTimeout(matchmakingTimer);
  matchmakingTimer = null;
}

function findBotOpponent() {
  clearMatchmakingTimer();

  currentBotName =
    BOT_NAMES[
      Math.floor(Math.random() * BOT_NAMES.length)
    ];

  matchmakingTitle.textContent =
    "تم العثور على خصم";

  matchmakingDesc.textContent =
    currentBotName + " جاهز للعب";

  loadingDots.hidden = true;

  setTimeout(openGameTable, 900);
}

cancelSearchButton.addEventListener("click", function () {
  clearMatchmakingTimer();

  if (currentSearchPrice > 0) {
    addCoins(currentSearchPrice);
    currentSearchPrice = 0;
  }

  matchmakingPage.hidden = true;

  showToast("تم إلغاء البحث واسترجاع المبلغ");
});

function openGameTable() {
  gameAssignmentReady = false;
  matchmakingPage.hidden = true;

  tablePlayerName.textContent = playerData.playerName;
  tablePlayerImage.src = profileImage.src;

  botOpponentName.textContent =
    currentBotName || "BOT PRO";

  tableStakeValue.textContent =
    formatNumber(currentSearchPrice);

  gameTablePage.hidden = false;
  matchSettled = false;
  lastMatchReward = 0;
  resetRoomChat();

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      resizeBoard(true);
    });
  });

  showToast("حرّك المضرب ثم اسحب للخلف للضرب");
}

function closeGameTable() {
  clearBoardTimers();

  gameOver = true;
  shotActive = false;
  aiming = false;
  movingTrack = false;

  winner.classList.remove("show");
  closeRoomChat();
  closeRoomSettings();
  stopMicrophone();
  gameTablePage.hidden = true;

  currentSearchPrice = 0;
  currentBotName = "";
}

let W = 0;
let H = 0;
let dpr = 1;

let pieces = [];
let striker = null;

let turn = "player";
let gameOver = false;

let aiming = false;
let movingTrack = false;
let shotActive = false;
let turnPending = false;

let pointer = {
  x: 0,
  y: 0
};

let smoothPointer = {
  x: 0,
  y: 0
};

let power = 0;
let pocketEffects = [];

let lastAimDirection = {
  x: 0,
  y: -1
};

let score = {
  player: 0,
  bot: 0
};

let queen = {
  secured: false,
  owner: null,
  pending: null
};

let shot = {
  own: 0,
  opponent: 0,
  queen: false,
  queenEarly: false,
  striker: false
};

const COLOR = {
  player: "white",
  bot: "black"
};

const settings = {
  friction: 0.9825,
  wallBounce: 0.88,
  pieceBounce: 0.91,
  minShot: 2.7,
  maxShot: 13.4,
  stopSpeed: 0.045
};

const FIXED_STEP = 1 / 180;

let previousTime = performance.now();
let accumulator = 0;

function clearBoardTimers() {
  if (botTimer) {
    clearTimeout(botTimer);
    botTimer = null;
  }

  if (finishShotTimer) {
    clearTimeout(finishShotTimer);
    finishShotTimer = null;
  }

  stopTurnTimer();
}

function stopTurnTimer() {
  if (turnTimerInterval) {
    clearInterval(turnTimerInterval);
    turnTimerInterval = null;
  }

  if (playerTurnTimer) {
    playerTurnTimer.hidden = true;
    playerTurnTimer.classList.remove("urgent");
  }

  if (botTurnTimer) {
    botTurnTimer.hidden = true;
    botTurnTimer.classList.remove("urgent");
  }

  if (botTurnArrow) {
    botTurnArrow.hidden = true;
  }
}

function updateTurnTimerDisplay(owner) {
  const activeTimer = owner === "player" ? playerTurnTimer : botTurnTimer;
  const inactiveTimer = owner === "player" ? botTurnTimer : playerTurnTimer;

  if (inactiveTimer) {
    inactiveTimer.hidden = true;
  }

  if (activeTimer) {
    activeTimer.textContent = String(turnSecondsRemaining);
    activeTimer.hidden = false;
    activeTimer.classList.toggle("urgent", turnSecondsRemaining <= 5);
  }

  if (botTurnArrow) {
    botTurnArrow.hidden = owner !== "bot";
  }
}

function startTurnTimer(owner) {
  stopTurnTimer();
  turnSecondsRemaining = 15;
  updateTurnTimerDisplay(owner);

  turnTimerInterval = setInterval(function () {
    if (gameOver || shotActive || turn !== owner) {
      stopTurnTimer();
      return;
    }

    turnSecondsRemaining -= 1;
    updateTurnTimerDisplay(owner);

    if (turnSecondsRemaining > 0) {
      return;
    }

    stopTurnTimer();

    if (owner === "player") {
      aiming = false;
      movingTrack = false;
      gameStatusEl.textContent = "انتهى الوقت — انتقل الدور إلى بوت كيرم";
      switchTurn();
    } else {
      clearTimeout(botTimer);
      botAimPlan = null;
      gameStatusEl.textContent = "انتهى وقت بوت كيرم — دورك الآن";
      switchTurn();
    }
  }, 1000);
}

function resizeBoard(resetGame) {
  const rect = canvas.getBoundingClientRect();

  if (!rect.width || !rect.height) {
    return;
  }

  W = rect.width;
  H = rect.height;

  dpr = Math.max(
    1,
    window.devicePixelRatio || 1
  );

  canvas.width = Math.floor(W * dpr);
  canvas.height = Math.floor(H * dpr);

  ctx.setTransform(
    dpr,
    0,
    0,
    dpr,
    0,
    0
  );

  if (resetGame || !striker) {
    setupGame();
  }
}

window.addEventListener("resize", function () {
  if (!gameTablePage.hidden) {
    resizeBoard(true);
  }
});

function setupGame() {
  clearBoardTimers();

  gameOver = false;

  if (!gameAssignmentReady) {
    const matchRotation = Number(localStorage.getItem(MATCH_ROTATION_KEY) || 0);
    const playerGetsWhite = matchRotation % 2 === 0;
    COLOR.player = playerGetsWhite ? "white" : "black";
    COLOR.bot = playerGetsWhite ? "black" : "white";
    turn = matchRotation % 2 === 0 ? "player" : "bot";
    localStorage.setItem(MATCH_ROTATION_KEY, String(matchRotation + 1));
    gameAssignmentReady = true;
  }

  aiming = false;
  movingTrack = false;
  shotActive = false;
  turnPending = false;
  activeBotPlan = null;
  botAvoidTarget = null;
  botTargetFailures.clear();
  botRecentStarts = [];
  botRecentTargets = [];

  score.player = 0;
  score.bot = 0;

  queen = {
    secured: false,
    owner: null,
    pending: null
  };

  resetShot();
  createPieces();

  striker = makeObject(
    "striker",
    W * 0.5,
    H * 0.84,
    Math.min(W, H) * 0.0365,
    1.35
  );

  pointer = {
    x: striker.x,
    y: striker.y
  };

  smoothPointer = {
    x: striker.x,
    y: striker.y
  };

  power = 0;
  pocketEffects = [];

  lastAimDirection = {
    x: 0,
    y: -1
  };

  updateScore();
  updateQueenStatus();
  updatePower();
  updateTrack();
  updateAssignedColorInterface();
  winner.classList.remove("show");

  if (turn === "player") {
    preparePlayerTurn(true);
  } else {
    prepareBotTurn(true);
  }
}

function arabicPieceColor(color) {
  return color === "white" ? "الأبيض" : "الأسود";
}

function updateAssignedColorInterface() {
  playerColorLabel.querySelector("span").textContent = arabicPieceColor(COLOR.player);
  botColorLabel.querySelector("span").textContent = arabicPieceColor(COLOR.bot);

  playerColorDot.classList.toggle("player-white", COLOR.player === "white");
  playerColorDot.classList.toggle("player-black", COLOR.player === "black");
  botColorDot.classList.toggle("player-white", COLOR.bot === "white");
  botColorDot.classList.toggle("player-black", COLOR.bot === "black");

  playerScoreEl.parentElement.classList.toggle("white-score", COLOR.player === "white");
  playerScoreEl.parentElement.classList.toggle("black-score", COLOR.player === "black");
  botScoreEl.parentElement.classList.toggle("white-score", COLOR.bot === "white");
  botScoreEl.parentElement.classList.toggle("black-score", COLOR.bot === "black");
}

function makeObject(
  type,
  x,
  y,
  radius,
  mass = 1
) {
  return {
    type,
    x,
    y,
    vx: 0,
    vy: 0,
    r: radius,
    mass,
    angle: Math.random() * Math.PI * 2,
    spin: 0,
    pocketed: false
  };
}

function createPieces() {
  pieces = [];

  const centerX = W * 0.5;
  const centerY = H * 0.49;

  const radius =
    Math.min(W, H) * 0.029;

  pieces.push(
    makeObject(
      "red",
      centerX,
      centerY,
      radius,
      1.04
    )
  );

  const innerRadius = 2.12 * radius;
  const outerRadius = 4.25 * radius;

  for (let index = 0; index < 6; index++) {
    const angle =
      -Math.PI / 2 +
      index * Math.PI / 3;

    pieces.push(
      makeObject(
        index % 2 === 0
          ? "white"
          : "black",

        centerX +
          Math.cos(angle) *
          innerRadius,

        centerY +
          Math.sin(angle) *
          innerRadius,

        radius
      )
    );
  }

  for (let index = 0; index < 12; index++) {
    const angle =
      -Math.PI / 2 +
      index * Math.PI / 6;

    pieces.push(
      makeObject(
        index % 2 === 0
          ? "black"
          : "white",

        centerX +
          Math.cos(angle) *
          outerRadius,

        centerY +
          Math.sin(angle) *
          outerRadius,

        radius
      )
    );
  }
}

function getPockets() {
  const pocketRadius =
    Math.min(W, H) * 0.0435;

  const leftX = W * 0.076;
  const rightX = W * 0.924;

  const topY = H * 0.076;
  const bottomY = H * 0.924;

  return [
    {
      x: leftX,
      y: topY,
      r: pocketRadius
    },
    {
      x: rightX,
      y: topY,
      r: pocketRadius
    },
    {
      x: leftX,
      y: bottomY,
      r: pocketRadius
    },
    {
      x: rightX,
      y: bottomY,
      r: pocketRadius
    }
  ];
}

function draw() {
  if (!W || !H) {
    return;
  }

  ctx.clearRect(0, 0, W, H);

  drawPockets();

  if (
    aiming &&
    turn === "player" &&
    !strikerOverPiece()
  ) {
    drawAim();
  }

  if (
    turn === "bot" &&
    botAimPlan &&
    !shotActive &&
    !gameOver
  ) {
    drawBotAim();
  }

  pieces.forEach(function (piece) {
    if (!piece.pocketed) {
      drawPiece(piece);
    }
  });

  drawStriker();
  drawPocketEffects();
}

function drawPockets() {
  getPockets().forEach(function (pocket) {
    ctx.save();

    ctx.shadowColor = "rgba(0,0,0,0.96)";
    ctx.shadowBlur = pocket.r * 0.8;
    ctx.shadowOffsetY = pocket.r * 0.12;

    ctx.beginPath();

    ctx.arc(
      pocket.x,
      pocket.y,
      pocket.r * 1.26,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = "rgba(48,20,7,0.96)";
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    const rim = ctx.createRadialGradient(
      pocket.x - pocket.r * 0.38,
      pocket.y - pocket.r * 0.4,
      pocket.r * 0.08,
      pocket.x,
      pocket.y,
      pocket.r * 1.2
    );

    rim.addColorStop(0, "#d79a60");
    rim.addColorStop(0.25, "#914c23");
    rim.addColorStop(0.62, "#4a210c");
    rim.addColorStop(1, "#180600");

    ctx.beginPath();

    ctx.arc(
      pocket.x,
      pocket.y,
      pocket.r * 1.18,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = rim;
    ctx.fill();

    ctx.beginPath();

    ctx.arc(
      pocket.x,
      pocket.y,
      pocket.r * 1.02,
      0,
      Math.PI * 2
    );

    ctx.lineWidth = Math.max(
      2,
      pocket.r * 0.13
    );

    ctx.strokeStyle =
      "rgba(255,220,165,0.82)";

    ctx.stroke();

    const hole = ctx.createRadialGradient(
      pocket.x - pocket.r * 0.2,
      pocket.y - pocket.r * 0.22,
      pocket.r * 0.03,
      pocket.x,
      pocket.y,
      pocket.r * 0.92
    );

    hole.addColorStop(0, "#251208");
    hole.addColorStop(0.35, "#090302");
    hole.addColorStop(0.72, "#010000");
    hole.addColorStop(1, "#000");

    ctx.beginPath();

    ctx.arc(
      pocket.x,
      pocket.y,
      pocket.r * 0.92,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = hole;
    ctx.fill();

    ctx.restore();
  });
}

function drawPiece(piece) {
  ctx.save();

  ctx.translate(piece.x, piece.y);
  ctx.rotate(piece.angle);

  const pieceImage =
    piece.type === "white"
      ? whitePieceImage
      : piece.type === "black"
        ? blackPieceImage
        : redPieceImage;

  const imageSize = piece.r * 2;

  if (
    pieceImage.complete &&
    pieceImage.naturalWidth > 0
  ) {
    ctx.drawImage(
      pieceImage,
      -piece.r,
      -piece.r,
      imageSize,
      imageSize
    );

    ctx.restore();
    return;
  }

  ctx.beginPath();

  ctx.ellipse(
    2,
    4,
    piece.r * 0.92,
    piece.r * 0.31,
    0,
    0,
    Math.PI * 2
  );

  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.fill();

  const gradient = ctx.createRadialGradient(
    -piece.r * 0.35,
    -piece.r * 0.35,
    piece.r * 0.13,
    0,
    0,
    piece.r
  );

  if (piece.type === "white") {
    gradient.addColorStop(0, "#fff");
    gradient.addColorStop(0.38, "#f5ead4");
    gradient.addColorStop(0.72, "#d2ba91");
    gradient.addColorStop(1, "#856943");
  }

  if (piece.type === "black") {
    gradient.addColorStop(0, "#737373");
    gradient.addColorStop(0.35, "#292929");
    gradient.addColorStop(0.72, "#0b0b0b");
    gradient.addColorStop(1, "#000");
  }

  if (piece.type === "red") {
    gradient.addColorStop(0, "#ffabab");
    gradient.addColorStop(0.38, "#e9213b");
    gradient.addColorStop(0.75, "#a8001b");
    gradient.addColorStop(1, "#57000c");
  }

  ctx.beginPath();

  ctx.arc(
    0,
    0,
    piece.r,
    0,
    Math.PI * 2
  );

  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.lineWidth = 1.8;

  ctx.strokeStyle =
    piece.type === "black"
      ? "#d5ab54"
      : "rgba(255,255,255,0.88)";

  ctx.stroke();

  ctx.beginPath();

  ctx.arc(
    0,
    0,
    piece.r * 0.54,
    0,
    Math.PI * 2
  );

  ctx.lineWidth = 1.2;

  ctx.strokeStyle =
    piece.type === "black"
      ? "rgba(255,210,100,0.27)"
      : "rgba(90,65,35,0.27)";

  ctx.stroke();

  ctx.restore();
}

function drawStriker() {
  if (!striker || striker.pocketed) {
    return;
  }

  ctx.save();

  if (
    strikerOverPiece() &&
    !shotActive
  ) {
    ctx.globalAlpha = 0.3;
  }

  ctx.translate(
    striker.x,
    striker.y
  );

  ctx.rotate(striker.angle);

  const imageSize =
    striker.r * 2;

  if (
    strikerImage.complete &&
    strikerImage.naturalWidth > 0
  ) {
    ctx.shadowColor =
      aiming
        ? "rgba(40,190,255,0.95)"
        : "rgba(0,80,255,0.65)";

    ctx.shadowBlur =
      aiming
        ? striker.r * 0.9
        : striker.r * 0.4;

    ctx.drawImage(
      strikerImage,
      -striker.r,
      -striker.r,
      imageSize,
      imageSize
    );
  } else {
    const gradient =
      ctx.createRadialGradient(
        -striker.r * 0.3,
        -striker.r * 0.3,
        striker.r * 0.1,
        0,
        0,
        striker.r
      );

    gradient.addColorStop(
      0,
      "#75efff"
    );

    gradient.addColorStop(
      0.5,
      "#096cff"
    );

    gradient.addColorStop(
      1,
      "#041a70"
    );

    ctx.beginPath();

    ctx.arc(
      0,
      0,
      striker.r,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffd75a";
    ctx.stroke();
  }

  ctx.restore();
}

function drawAim() {
  if (
    !striker ||
    !aiming ||
    power < 0.025
  ) {
    return;
  }

  const rawDistance = Math.hypot(
    striker.x - pointer.x,
    striker.y - pointer.y
  );

  if (rawDistance < striker.r * 0.35) {
    return;
  }

  const direction = getRawShotDirection();

  if (!direction) {
    return;
  }

  const arrowLength = 8 + power * 70;
  const arrowWidth = 2;

  const headLength = 3 + power * 4;
  const headHalfWidth = 2 + power * 3;

  const startDistance = striker.r * 0.7;

  const startX =
    striker.x +
    direction.x *
    startDistance;

  const startY =
    striker.y +
    direction.y *
    startDistance;

  const tipX =
    startX +
    direction.x *
    arrowLength;

  const tipY =
    startY +
    direction.y *
    arrowLength;

  const headBaseX =
    tipX -
    direction.x *
    headLength;

  const headBaseY =
    tipY -
    direction.y *
    headLength;

  const sideX = -direction.y;
  const sideY = direction.x;

  const leftX =
    headBaseX +
    sideX *
    headHalfWidth;

  const leftY =
    headBaseY +
    sideY *
    headHalfWidth;

  const rightX =
    headBaseX -
    sideX *
    headHalfWidth;

  const rightY =
    headBaseY -
    sideY *
    headHalfWidth;

  ctx.save();

  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.shadowColor =
    "rgba(30,255,100,0.95)";

  ctx.shadowBlur =
    8 +
    power * 10;

  ctx.beginPath();

  ctx.moveTo(startX, startY);
  ctx.lineTo(headBaseX, headBaseY);

  ctx.lineWidth =
    arrowWidth + 3;

  ctx.strokeStyle =
    "rgba(240,255,245,0.92)";

  ctx.stroke();

  ctx.beginPath();

  ctx.moveTo(startX, startY);
  ctx.lineTo(headBaseX, headBaseY);

  ctx.lineWidth = arrowWidth;
  ctx.strokeStyle = "#29ff68";

  ctx.stroke();

  ctx.beginPath();

  ctx.moveTo(tipX, tipY);
  ctx.lineTo(leftX, leftY);
  ctx.lineTo(rightX, rightY);

  ctx.closePath();

  ctx.lineWidth = 2.5;

  ctx.strokeStyle =
    "rgba(245,255,248,0.95)";

  ctx.fillStyle = "#29ff68";

  ctx.stroke();
  ctx.fill();

  const dotsCount = Math.max(
    0,
    Math.round(power * 7)
  );

  ctx.shadowColor =
    "rgba(255,255,255,0.8)";

  ctx.shadowBlur = 4;

  ctx.fillStyle =
    "rgba(255,255,255,0.92)";

  for (
    let index = 0;
    index < dotsCount;
    index++
  ) {
    const distance =
      12 +
      index * 10;

    const dotSize =
      1.7 +
      power * 1.2;

    ctx.beginPath();

    ctx.arc(
      tipX +
        direction.x *
        distance,

      tipY +
        direction.y *
        distance,

      dotSize,
      0,
      Math.PI * 2
    );

    ctx.fill();
  }

  ctx.restore();
}

function getRawShotDirection() {
  if (!striker || !aiming) {
    return null;
  }

  const rawDistance = Math.hypot(
    striker.x - pointer.x,
    striker.y - pointer.y
  );

  if (rawDistance < striker.r * 0.35) {
    return null;
  }

  const deltaX =
    striker.x -
    smoothPointer.x;

  const deltaY =
    striker.y -
    smoothPointer.y;

  const length = Math.hypot(
    deltaX,
    deltaY
  );

  if (length < 2) {
    return null;
  }

  lastAimDirection = {
    x: deltaX / length,
    y: deltaY / length
  };

  return lastAimDirection;
}

function createPocketEffect(
  x,
  y,
  radius,
  type
) {
  const particles = [];

  const count =
    type === "striker"
      ? 12
      : 16;

  for (
    let index = 0;
    index < count;
    index++
  ) {
    particles.push({
      angle:
        Math.random() *
        Math.PI *
        2,

      speed:
        random(
          radius * 1.1,
          radius * 2.7
        ),

      size:
        random(
          1.4,
          3.2
        ),

      delay:
        random(
          0,
          0.1
        )
    });
  }

  pocketEffects.push({
    x,
    y,
    r: radius,
    age: 0,
    duration:
      type === "striker"
        ? 0.62
        : 0.72,
    particles
  });
}
function updatePocketEffects(deltaTime) {
  pocketEffects.forEach(function (effect) {
    effect.age += deltaTime;
  });

  pocketEffects = pocketEffects.filter(
    function (effect) {
      return effect.age < effect.duration;
    }
  );
}

function drawPocketEffects() {
  if (!pocketEffects.length) {
    return;
  }

  ctx.save();

  ctx.globalCompositeOperation =
    "lighter";

  pocketEffects.forEach(function (effect) {
    const progress = clamp(
      effect.age / effect.duration,
      0,
      1
    );

    const fade = 1 - progress;

    const glow = ctx.createRadialGradient(
      effect.x,
      effect.y,
      0,
      effect.x,
      effect.y,
      effect.r *
        (
          1.1 +
          progress * 2
        )
    );

    glow.addColorStop(
      0,
      "rgba(235,252,255," +
        0.9 * fade +
        ")"
    );

    glow.addColorStop(
      0.25,
      "rgba(74,221,255," +
        0.75 * fade +
        ")"
    );

    glow.addColorStop(
      1,
      "rgba(0,72,255,0)"
    );

    ctx.beginPath();

    ctx.arc(
      effect.x,
      effect.y,
      effect.r *
        (
          1.1 +
          progress * 2
        ),
      0,
      Math.PI * 2
    );

    ctx.fillStyle = glow;
    ctx.fill();

    effect.particles.forEach(
      function (particle) {
        const localProgress = clamp(
          (
            effect.age -
            particle.delay
          ) /
          (
            effect.duration -
            particle.delay
          ),
          0,
          1
        );

        if (localProgress <= 0) {
          return;
        }

        const distance =
          particle.speed *
          localProgress;

        ctx.beginPath();

        ctx.arc(
          effect.x +
            Math.cos(particle.angle) *
            distance,

          effect.y +
            Math.sin(particle.angle) *
            distance,

          particle.size *
            (
              1 -
              localProgress * 0.35
            ),

          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(111,227,255," +
          (1 - localProgress) *
          fade +
          ")";

        ctx.fill();
      }
    );
  });

  ctx.restore();
}

function frame(currentTime) {
  const elapsed = Math.min(
    (
      currentTime -
      previousTime
    ) /
    1000,
    0.05
  );

  previousTime = currentTime;
  accumulator += elapsed;

  updatePocketEffects(elapsed);

  if (aiming) {
    smoothPointer.x +=
      (
        pointer.x -
        smoothPointer.x
      ) *
      0.34;

    smoothPointer.y +=
      (
        pointer.y -
        smoothPointer.y
      ) *
      0.34;

    updateAimPower();
  }

  while (accumulator >= FIXED_STEP) {
    physicsStep(FIXED_STEP);
    accumulator -= FIXED_STEP;
  }

  if (!gameTablePage.hidden) {
    draw();
  }

  if (
    shotActive &&
    allStopped() &&
    !turnPending
  ) {
    shotActive = false;
    turnPending = true;

    finishShotTimer = setTimeout(
      function () {
        turnPending = false;
        finishShot();
      },
      420
    );
  }

  requestAnimationFrame(frame);
}

function physicsStep(deltaTime) {
  if (!shotActive) {
    return;
  }

  const objects = pieces.filter(
    function (piece) {
      return !piece.pocketed;
    }
  );

  if (striker && !striker.pocketed) {
    objects.push(striker);
  }

  const scale = deltaTime * 60;

  const damping = Math.pow(
    settings.friction,
    scale
  );

  objects.forEach(function (object) {
    object.x += object.vx * scale;
    object.y += object.vy * scale;

    object.angle += object.spin * scale;

    object.vx *= damping;
    object.vy *= damping;

    object.spin *= Math.pow(
      0.96,
      scale
    );

    if (
      Math.hypot(
        object.vx,
        object.vy
      ) <
      settings.stopSpeed
    ) {
      object.vx = 0;
      object.vy = 0;
    }

    if (Math.abs(object.spin) < 0.001) {
      object.spin = 0;
    }

    checkPocket(object, scale);

    if (!object.pocketed) {
      checkWalls(object);
    }
  });

  const activeObjects = objects.filter(
    function (object) {
      return !object.pocketed;
    }
  );

  for (let pass = 0; pass < 3; pass++) {
    resolveCollisions(activeObjects);
  }
}

function nearPocketMouth(object) {
  return getPockets().some(function (pocket) {
    const distance = Math.hypot(
      object.x - pocket.x,
      object.y - pocket.y
    );

    return distance < pocket.r * 1.72;
  });
}

function keepObjectInsideCanvas(object) {
  const hardMargin = Math.max(
    3,
    object.r + 1.5
  );

  if (object.x < hardMargin) {
    object.x = hardMargin;

    object.vx =
      Math.abs(object.vx) *
      0.42;
  }

  if (object.x > W - hardMargin) {
    object.x = W - hardMargin;

    object.vx =
      -Math.abs(object.vx) *
      0.42;
  }

  if (object.y < hardMargin) {
    object.y = hardMargin;

    object.vy =
      Math.abs(object.vy) *
      0.42;
  }

  if (object.y > H - hardMargin) {
    object.y = H - hardMargin;

    object.vy =
      -Math.abs(object.vy) *
      0.42;
  }
}

function checkWalls(object) {
  keepObjectInsideCanvas(object);

  const edgeInset = Math.max(
    5,
    Math.min(W, H) * 0.030
  );

  const leftWall =
    edgeInset +
    object.r;

  const rightWall =
    W -
    edgeInset -
    object.r;

  const topWall =
    edgeInset +
    object.r;

  const bottomWall =
    H -
    edgeInset -
    object.r;

  if (object.x < leftWall) {
    object.x = leftWall;

    object.vx =
      Math.abs(object.vx) *
      settings.wallBounce;
  }

  if (object.x > rightWall) {
    object.x = rightWall;

    object.vx =
      -Math.abs(object.vx) *
      settings.wallBounce;
  }

  if (object.y < topWall) {
    object.y = topWall;

    object.vy =
      Math.abs(object.vy) *
      settings.wallBounce;
  }

  if (object.y > bottomWall) {
    object.y = bottomWall;

    object.vy =
      -Math.abs(object.vy) *
      settings.wallBounce;
  }
}

function checkPocket(object, scale) {
  const pockets = getPockets();

  for (const pocket of pockets) {
    const deltaX =
      pocket.x -
      object.x;

    const deltaY =
      pocket.y -
      object.y;

    const distance =
      Math.hypot(
        deltaX,
        deltaY
      ) || 1;

    const speed =
      Math.hypot(
        object.vx,
        object.vy
      );

    const lipRadius =
      pocket.r * 1.18;

    if (
      distance < lipRadius &&
      speed > 0.1
    ) {
      const closeness =
        1 -
        distance /
        lipRadius;

      const smallPull =
        closeness *
        closeness *
        0.018 *
        scale;

      object.vx +=
        (
          deltaX /
          distance
        ) *
        smallPull;

      object.vy +=
        (
          deltaY /
          distance
        ) *
        smallPull;

      object.vx *= Math.pow(
        0.985,
        scale
      );

      object.vy *= Math.pow(
        0.985,
        scale
      );
    }

    const captureRadius =
      object.type === "striker"
        ? pocket.r * 0.66
        : pocket.r * 0.78;

    if (distance < captureRadius) {
      pocketObject(object, pocket);
      return;
    }
  }
}

function pocketObject(object, pocket) {
  createPocketEffect(
    pocket.x,
    pocket.y,
    object.r,
    object.type
  );

  object.pocketed = true;

  object.vx = 0;
  object.vy = 0;
  object.spin = 0;

  object.x = pocket.x;
  object.y = pocket.y;

  if (object.type === "striker") {
    shot.striker = true;
    return;
  }

  if (object.type === "red") {
    if (score[turn] < 8) {
      shot.queenEarly = true;
    } else {
      shot.queen = true;
    }
    return;
  }

  const owner =
    object.type === COLOR.player
      ? "player"
      : "bot";

  score[owner]++;

  if (owner === turn) {
    shot.own++;
  } else {
    shot.opponent++;
  }

  updateScore();
}

function resolveCollisions(objects) {
  for (
    let firstIndex = 0;
    firstIndex < objects.length;
    firstIndex++
  ) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < objects.length;
      secondIndex++
    ) {
      const first = objects[firstIndex];
      const second = objects[secondIndex];

      const deltaX =
        second.x -
        first.x;

      const deltaY =
        second.y -
        first.y;

      const distance = Math.hypot(
        deltaX,
        deltaY
      );

      const minimumDistance =
        first.r +
        second.r;

      if (
        distance <= 0 ||
        distance >= minimumDistance
      ) {
        continue;
      }

      const normalX =
        deltaX /
        distance;

      const normalY =
        deltaY /
        distance;

      const overlap =
        minimumDistance -
        distance;

      const totalMass =
        first.mass +
        second.mass;

      first.x -=
        normalX *
        overlap *
        (
          second.mass /
          totalMass
        );

      first.y -=
        normalY *
        overlap *
        (
          second.mass /
          totalMass
        );

      second.x +=
        normalX *
        overlap *
        (
          first.mass /
          totalMass
        );

      second.y +=
        normalY *
        overlap *
        (
          first.mass /
          totalMass
        );

      const relativeVelocityX =
        second.vx -
        first.vx;

      const relativeVelocityY =
        second.vy -
        first.vy;

      const velocityAlongNormal =
        relativeVelocityX *
        normalX +
        relativeVelocityY *
        normalY;

      if (velocityAlongNormal > 0) {
        continue;
      }

      collisionFeedback(Math.abs(velocityAlongNormal));

      const impulse =
        -(
          1 +
          settings.pieceBounce
        ) *
        velocityAlongNormal /
        (
          1 /
          first.mass +
          1 /
          second.mass
        );

      const impulseX =
        impulse *
        normalX;

      const impulseY =
        impulse *
        normalY;

      first.vx -=
        impulseX /
        first.mass;

      first.vy -=
        impulseY /
        first.mass;

      second.vx +=
        impulseX /
        second.mass;

      second.vy +=
        impulseY /
        second.mass;

      const tangentX = -normalY;
      const tangentY = normalX;

      const tangentSpeed =
        relativeVelocityX *
        tangentX +
        relativeVelocityY *
        tangentY;

      first.spin -=
        tangentSpeed *
        0.0025;

      second.spin +=
        tangentSpeed *
        0.0025;
    }
  }
}

function finishShot() {
  if (gameOver) {
    return;
  }

  const currentPlayer = turn;

  // If the bot failed to pocket its own piece, remember the attempted
  // target so the next turn evaluates another black piece first.
  if (currentPlayer === "bot") {
    if (
      shot.own === 0 &&
      activeBotPlan &&
      Number.isFinite(activeBotPlan.targetX) &&
      Number.isFinite(activeBotPlan.targetY)
    ) {
      botAvoidTarget = pieces
        .filter(function (piece) {
          return !piece.pocketed && piece.type === COLOR.bot;
        })
        .sort(function (first, second) {
          return (
            Math.hypot(
              first.x - activeBotPlan.targetX,
              first.y - activeBotPlan.targetY
            ) -
            Math.hypot(
              second.x - activeBotPlan.targetX,
              second.y - activeBotPlan.targetY
            )
          );
        })[0] || null;

      if (botAvoidTarget) {
        botTargetFailures.set(
          botAvoidTarget,
          (botTargetFailures.get(botAvoidTarget) || 0) + 1
        );
      }
    } else if (shot.own > 0) {
      botAvoidTarget = null;
      botTargetFailures.clear();
    }
  }

  // The last coin is the cover for the queen. If either player's cover is
  // pocketed before that player pockets the queen, return it to the centre.
  const prematureCoverOwners = ["player", "bot"].filter(function (owner) {
    const pocketedByCurrentPlayer =
      owner === currentPlayer ? shot.own > 0 : shot.opponent > 0;
    const queenPocketedByOwnerNow = owner === currentPlayer && shot.queen;

    return (
      !queen.secured &&
      queen.pending !== owner &&
      !queenPocketedByOwnerNow &&
      score[owner] >= 9 &&
      pocketedByCurrentPlayer
    );
  });

  prematureCoverOwners.forEach(function (owner) {
    applyFoul(owner);

    if (owner === currentPlayer) {
      shot.own = Math.max(0, shot.own - 1);
    } else {
      shot.opponent = Math.max(0, shot.opponent - 1);
    }
  });

  if (prematureCoverOwners.length > 0) {
    gameStatusEl.textContent =
      "دخل غطاء الخمسين قبل الخمسين — أُعيد إلى منتصف الميدان";
  }

  if (shot.queenEarly) {
    returnQueen();
    gameStatusEl.textContent =
      currentPlayer === "player"
        ? "الحبة الحمراء في الأخير — تمت إعادتها"
        : "بوت كيرم أدخل الحمراء مبكرًا — تمت إعادتها";
  }

  if (shot.striker) {
    applyFoul(currentPlayer);

    if (queen.pending === currentPlayer) {
      returnQueen();
    }

    gameStatusEl.textContent =
      currentPlayer === "player"
        ? "مخالفة: دخل المضرب"
        : "BOT ارتكب مخالفة";

    switchTurn();
    return;
  }

  if (shot.queen) {
    queen.pending = currentPlayer;

    if (shot.own > 0) {
      // The cover must be pocketed on the following shot, not together with
      // the queen. Return an own piece pocketed in the queen shot.
      applyFoul(currentPlayer);
      shot.own = Math.max(0, shot.own - 1);
    }

    gameStatusEl.textContent =
      currentPlayer === "player"
        ? "أدخلت الخمسين — أدخل حبة بيضاء في الضربة التالية لتغطيتها"
        : "بوت كيرم أدخل الخمسين — بقيت الحبة السوداء الأخيرة للتغطية";
  } else if (
    queen.pending === currentPlayer
  ) {
    if (shot.own > 0) {
      secureQueen(currentPlayer);
    } else {
      returnQueen();
    }
  }

  updateQueenStatus();

  if (checkWinner()) {
    return;
  }

  const scoredOwn = shot.own > 0;
  const scoredOpponent = shot.opponent > 0;

  const keepsTurn =
    scoredOwn ||
    shot.queen;

  if (keepsTurn) {
    const bothColors =
      scoredOwn &&
      scoredOpponent;

    resetShot();

    if (turn === "player") {
      gameStatusEl.textContent =
        queen.pending === "player"
          ? "استمر لتغطية الحمراء"
          : bothColors
            ? "دخلت حبتك وحبة الخصم — استمر"
            : "أدخلت حبة صحيحة — استمر";

      preparePlayerTurn(false);
    } else {
      gameStatusEl.textContent =
        queen.pending === "bot"
          ? "BOT يحاول تغطية الحمراء"
          : bothColors
            ? "BOT أدخل حبة له وحبة لك — يستمر"
            : "BOT أدخل حبة صحيحة";

      prepareBotTurn(false);
    }

    return;
  }

  if (scoredOpponent) {
        gameStatusEl.textContent =
      currentPlayer === "player"
        ? "أدخلت حبة الخصم فقط — انتهى دورك"
        : "BOT أدخل حبتك فقط";
  }

  switchTurn();
}

function resetShot() {
  shot = {
    own: 0,
    opponent: 0,
    queen: false,
    queenEarly: false,
    striker: false
  };
}

function applyFoul(player) {
  const playerColor = COLOR[player];

  const returnedPiece = [...pieces]
    .reverse()
    .find(function (piece) {
      return (
        piece.type === playerColor &&
        piece.pocketed
      );
    });

  if (!returnedPiece) {
    return;
  }

  score[player] = Math.max(
    0,
    score[player] - 1
  );

  respot(returnedPiece, false);
  updateScore();
}

function secureQueen(player) {
  queen.secured = true;
  queen.owner = player;
  queen.pending = null;

  gameStatusEl.textContent =
    player === "player"
      ? "تمت تغطية الحمراء"
      : "BOT غطّى الحمراء";
}

function returnQueen() {
  const redPiece = pieces.find(
    function (piece) {
      return piece.type === "red";
    }
  );

  if (redPiece) {
    respot(redPiece, true);
  }

  queen.secured = false;
  queen.owner = null;
  queen.pending = null;

  updateQueenStatus();
}

function respot(piece, isQueen) {
  piece.pocketed = false;

  piece.vx = 0;
  piece.vy = 0;
  piece.spin = 0;

  const centerX = W * 0.5;
  const centerY = H * 0.49;

  const spots = [
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1]
  ];

  for (const spot of spots) {
    const x =
      centerX +
      spot[0] *
      piece.r *
      2.3;

    const y =
      centerY +
      spot[1] *
      piece.r *
      2.3;

    if (isSpotFree(x, y, piece)) {
      piece.x = x;
      piece.y = y;
      return;
    }
  }

  piece.x = centerX;

  piece.y =
    centerY +
    (
      isQueen
        ? 0
        : piece.r * 3
    );
}

function isSpotFree(
  x,
  y,
  ignoredPiece
) {
  return pieces.every(function (piece) {
    return (
      piece === ignoredPiece ||
      piece.pocketed ||
      Math.hypot(
        piece.x - x,
        piece.y - y
      ) >
      piece.r +
        ignoredPiece.r +
        2
    );
  });
}

function checkWinner() {
  let winningPlayer = null;

  if (
    score.player >= 9 &&
    queen.secured
  ) {
    winningPlayer = "player";
  }

  if (
    score.bot >= 9 &&
    queen.secured
  ) {
    winningPlayer = "bot";
  }

  if (!winningPlayer) {
    return false;
  }

  gameOver = true;
  shotActive = false;
  aiming = false;

  settleMatch(winningPlayer);

  const playerWon = winningPlayer === "player";

  winnerTitle.textContent = playerWon ? "لقد فزت" : "لقد خسرت";

  winnerTrophy.textContent = playerWon ? "✓" : "✕";
  winnerPlayerImage.src = profileImage.src;
  winnerOpponentImage.src = BOT_PROFILE_IMAGE;
  winnerSelfName.textContent = playerData.playerName;
  winnerOpponentName.textContent = currentBotName || "بوت كيرم";
  resultProfileCard.hidden = true;
  winner.querySelector(".winner-box").classList.toggle("loss-state", !playerWon);

  winnerText.textContent = "";

  winnerReward.textContent = formatNumber(playerWon ? lastMatchReward : 0);
  winnerRewardBox.classList.toggle(
    "no-reward",
    !playerWon
  );

  resultAdClaimed = false;
  winnerAdButton.disabled = false;
  winnerAdButton.innerHTML = '<span aria-hidden="true">▶</span> مشاهدة إعلان لزيادة المكافأة';

  winner.classList.add("show");
  playMatchResultSound(playerWon);

  return true;
}

function settleMatch(winningPlayer) {
  if (matchSettled) {
    return;
  }

  matchSettled = true;

  if (winningPlayer === "player") {
    playerData.wins += 1;

    const prize =
      currentSearchPrice * 2;

    lastMatchReward = prize;

    playerData.coins += prize;

    showToast(
      "فزت بـ " +
      formatNumber(prize) +
      " عملة"
    );
  } else {
    lastMatchReward = 0;
    playerData.losses += 1;
  }

  savePlayerData();
  updateInterface();
}

function switchTurn() {
  clearTimeout(botTimer);
  stopTurnTimer();
  shotActive = false;
  turnPending = false;
  resetShot();

  turn =
    turn === "player"
      ? "bot"
      : "player";

  if (turn === "player") {
    preparePlayerTurn(true);
  } else {
    prepareBotTurn(true);
  }
}

function preparePlayerTurn(
  changeText = true
) {
  botAimPlan = null;
  botAimStartedAt = 0;
  activeBotPlan = null;
  striker.pocketed = false;

  striker.x = W * 0.5;
  striker.y = H * 0.84;

  striker.vx = 0;
  striker.vy = 0;
  striker.spin = 0;

  pointer.x = striker.x;
  pointer.y = striker.y;

  smoothPointer.x = striker.x;
  smoothPointer.y = striker.y;

  power = 0;

  updatePower();
  updateTrack();

  if (changeText) {
    gameStatusEl.textContent =
      "دورك الآن — لونك " + arabicPieceColor(COLOR.player);
  }

  startTurnTimer("player");
}

function drawBotAim() {
  if (!striker || !botAimPlan) {
    return;
  }

  const elapsed = Math.max(0, performance.now() - botAimStartedAt);
  const moveDuration = 2000;
  const moveProgress =
    1 -
    Math.pow(
      1 - clamp(elapsed / moveDuration, 0, 1),
      3
    );

  const safeStartX = clamp(
    botAimPlan.startX,
    W * 0.22,
    W * 0.78
  );

  striker.x =
    W * 0.5 +
    (safeStartX - W * 0.5) * moveProgress;

  striker.x = clamp(striker.x, W * 0.22, W * 0.78);

  if (elapsed < moveDuration) {
    return;
  }

  const previewAngle = botAimPlan.angle;

  const direction = {
    x: Math.cos(previewAngle),
    y: Math.sin(previewAngle)
  };

  const previewPower = 0.82;
  const arrowLength = 8 + previewPower * 70;
  const arrowWidth = 2;
  const headLength = 3 + previewPower * 4;
  const headHalfWidth = 2 + previewPower * 3;
  const startDistance = striker.r * 0.7;
  const startX = striker.x + direction.x * startDistance;
  const startY = striker.y + direction.y * startDistance;
  const tipX = startX + direction.x * arrowLength;
  const tipY = startY + direction.y * arrowLength;
  const headBaseX = tipX - direction.x * headLength;
  const headBaseY = tipY - direction.y * headLength;
  const sideX = -direction.y;
  const sideY = direction.x;
  const leftX = headBaseX + sideX * headHalfWidth;
  const leftY = headBaseY + sideY * headHalfWidth;
  const rightX = headBaseX - sideX * headHalfWidth;
  const rightY = headBaseY - sideY * headHalfWidth;

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.shadowColor = "rgba(30,255,100,0.95)";
  ctx.shadowBlur = 8 + previewPower * 10;

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(headBaseX, headBaseY);
  ctx.lineWidth = arrowWidth + 3;
  ctx.strokeStyle = "rgba(240,255,245,0.92)";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(headBaseX, headBaseY);
  ctx.lineWidth = arrowWidth;
  ctx.strokeStyle = "#29ff68";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(tipX, tipY);
  ctx.lineTo(leftX, leftY);
  ctx.lineTo(rightX, rightY);
  ctx.closePath();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "rgba(245,255,248,0.95)";
  ctx.fillStyle = "#29ff68";
  ctx.stroke();
  ctx.fill();

  ctx.shadowColor = "rgba(255,255,255,0.8)";
  ctx.shadowBlur = 4;
  ctx.fillStyle = "rgba(255,255,255,0.92)";

  for (let index = 0; index < 6; index++) {
    const distance = 12 + index * 10;
    ctx.beginPath();
    ctx.arc(
      tipX + direction.x * distance,
      tipY + direction.y * distance,
      2.4,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  ctx.restore();
}

function prepareBotTurn(
  changeText = true
) {
  striker.pocketed = false;

  striker.x = W * 0.5;
  striker.y = H * 0.16;

  striker.vx = 0;
  striker.vy = 0;
  striker.spin = 0;

  const plannedShot = planBotShot("expert");
  const directShot = doesBotPlanHitItsTarget(plannedShot)
    ? null
    : buildDirectBotPlan();

  // Freeze the final plan before the arrow appears. The shot must use this
  // exact same start position and angle without replacing it at fire time.
  botAimPlan = directShot || plannedShot;
  botAimStartedAt = performance.now();
  striker.x = W * 0.5;

  if (changeText) {
    gameStatusEl.textContent =
      "دور BOT — لونه " + arabicPieceColor(COLOR.bot);
  }

  startTurnTimer("bot");

  clearTimeout(botTimer);

  botTimer = setTimeout(
    botShoot,
    4000
  );
}

function botShoot() {
  if (
    gameOver ||
    turn !== "bot" ||
    shotActive
  ) {
    return;
  }

  stopTurnTimer();

  const plan = botAimPlan;

  if (!plan) {
    botAimPlan = null;
    gameStatusEl.textContent = "لم يجد بوت كيرم مساراً صحيحاً — دورك الآن";
    switchTurn();
    return;
  }

  activeBotPlan = plan;

  botRecentStarts.push(plan.startX);
  botRecentTargets.push({ x: plan.targetX, y: plan.targetY });

  if (botRecentStarts.length > 6) {
    botRecentStarts.shift();
  }

  if (botRecentTargets.length > 6) {
    botRecentTargets.shift();
  }

  striker.x = clamp(plan.startX, W * 0.22, W * 0.78);
  striker.y = H * 0.16;

  striker.vx =
    Math.cos(plan.angle) *
    plan.speed;

  striker.vy =
    Math.sin(plan.angle) *
    plan.speed;

  shotActive = true;
  shotFeedback(Math.min(1, plan.speed / settings.maxShot));
  botAimPlan = null;
  botAimStartedAt = 0;

  resetShot();

  gameStatusEl.textContent =
    "BOT يضرب";
}

function guaranteeExpertBotPocket() {
  let target = null;

  // The queen must be taken before the bot's final black piece.
  // Once it is pending, the next guaranteed target must be a black cover.
  const mustTakeQueen =
    !queen.secured &&
    queen.pending !== "bot" &&
    score.bot >= 8;

  const desiredType = mustTakeQueen ? "red" : COLOR.bot;

  if (
    activeBotPlan &&
    Number.isFinite(activeBotPlan.targetX) &&
    Number.isFinite(activeBotPlan.targetY)
  ) {
    target = pieces.find(function (piece) {
      return (
        !piece.pocketed &&
        piece.type === desiredType &&
        Math.hypot(
          piece.x - activeBotPlan.targetX,
          piece.y - activeBotPlan.targetY
        ) < piece.r * 2.4
      );
    });
  }

  if (!target) {
    target = pieces
      .filter(function (piece) {
        return !piece.pocketed && piece.type === desiredType;
      })
      .sort(function (first, second) {
        const firstDistance = Math.min.apply(
          null,
          getPockets().map(function (pocket) {
            return Math.hypot(first.x - pocket.x, first.y - pocket.y);
          })
        );

        const secondDistance = Math.min.apply(
          null,
          getPockets().map(function (pocket) {
            return Math.hypot(second.x - pocket.x, second.y - pocket.y);
          })
        );

        return firstDistance - secondDistance;
      })[0];
  }

  if (!target) {
    return;
  }

  const pocket = getPockets()
    .slice()
    .sort(function (first, second) {
      return (
        Math.hypot(target.x - first.x, target.y - first.y) -
        Math.hypot(target.x - second.x, target.y - second.y)
      );
    })[0];

  if (pocket) {
    pocketObject(target, pocket);
    gameStatusEl.textContent =
      desiredType === "red"
        ? "بوت كيرم أدخل الخمسين ويحتاج إلى تغطيتها"
        : "بوت كيرم أدخل حبة سوداء";
  }
}

function isBotStartClear(startX, startY) {
  if (!striker) {
    return false;
  }

  return pieces.every(function (piece) {
    if (piece.pocketed) {
      return true;
    }

    return (
      Math.hypot(piece.x - startX, piece.y - startY) >
      piece.r + striker.r + 4
    );
  });
}

function findSafeBotStartX() {
  const startY = H * 0.16;
  let bestX = W * 0.5;
  let bestClearance = -Infinity;

  for (let index = 0; index <= 30; index++) {
    const candidateX = W * (0.22 + index * (0.56 / 30));
    let clearance = Infinity;

    pieces.forEach(function (piece) {
      if (piece.pocketed) {
        return;
      }

      clearance = Math.min(
        clearance,
        Math.hypot(piece.x - candidateX, piece.y - startY) -
          piece.r -
          striker.r
      );
    });

    if (clearance > bestClearance) {
      bestClearance = clearance;
      bestX = candidateX;
    }
  }

  return clamp(bestX, W * 0.22, W * 0.78);
}

function getBotStartRepeatPenalty(startX) {
  return botRecentStarts.reduce(function (penalty, previousStart, index) {
    const distance = Math.abs(startX - previousStart);
    const recency = index + 1;

    if (distance < W * 0.055) {
      return penalty + 1900 + recency * 90;
    }

    if (distance < W * 0.11) {
      return penalty + 650;
    }

    return penalty;
  }, 0);
}

function getBotTargetRepeatPenalty(targetX, targetY) {
  return botRecentTargets.reduce(function (penalty, previousTarget, index) {
    const distance = Math.hypot(
      targetX - previousTarget.x,
      targetY - previousTarget.y
    );
    const recency = index + 1;

    if (distance < W * 0.065) {
      return penalty + 1700 + recency * 80;
    }

    if (distance < W * 0.13) {
      return penalty + 500;
    }

    return penalty;
  }, 0);
}

function firstPieceOnBotRay(plan) {
  if (!plan || !Number.isFinite(plan.angle)) {
    return null;
  }

  const directionX = Math.cos(plan.angle);
  const directionY = Math.sin(plan.angle);
  let firstHit = null;
  let firstDistance = Infinity;

  for (const piece of pieces) {
    if (piece.pocketed) {
      continue;
    }

    const offsetX = piece.x - plan.startX;
    const offsetY = piece.y - H * 0.16;
    const projection = offsetX * directionX + offsetY * directionY;

    if (projection <= 0) {
      continue;
    }

    const perpendicular = Math.abs(
      offsetX * directionY - offsetY * directionX
    );
    const collisionRadius = piece.r + striker.r;

    if (perpendicular > collisionRadius) {
      continue;
    }

    const entryDistance =
      projection -
      Math.sqrt(
        Math.max(0, collisionRadius * collisionRadius - perpendicular * perpendicular)
      );

    if (entryDistance < firstDistance) {
      firstDistance = entryDistance;
      firstHit = piece;
    }
  }

  return firstHit;
}

function doesBotPlanHitItsTarget(plan) {
  if (
    !plan ||
    !plan.targetPiece ||
    plan.targetPiece.pocketed ||
    (plan.targetPiece.type !== COLOR.bot && plan.targetPiece.type !== "red")
  ) {
    return false;
  }

  return firstPieceOnBotRay(plan) === plan.targetPiece;
}

function buildDirectBotPlan() {
  let directTargets = pieces.filter(function (piece) {
    return !piece.pocketed && piece.type === COLOR.bot;
  });

  if (!queen.secured && queen.pending !== "bot" && score.bot >= 8) {
    directTargets = pieces.filter(function (piece) {
      return !piece.pocketed && piece.type === "red";
    });
  }

  const startPositions = Array.from({ length: 25 }, function (_, index) {
    return W * (0.22 + index * (0.56 / 24));
  }).sort(function (first, second) {
    return getBotStartRepeatPenalty(first) - getBotStartRepeatPenalty(second);
  });

  const targetOrder = directTargets.slice().sort(function (first, second) {
    const firstFailures = botTargetFailures.get(first) || 0;
    const secondFailures = botTargetFailures.get(second) || 0;

    if (firstFailures !== secondFailures) {
      return firstFailures - secondFailures;
    }

    return second.y - first.y;
  });

  for (const target of targetOrder) {
    for (const startX of startPositions) {
      const startY = H * 0.16;
      const nearBotBaseline =
        target.type === COLOR.bot &&
        target.y <= H * 0.31;

      if (
        (!nearBotBaseline && target.y <= startY + striker.r) ||
        !isBotStartClear(startX, startY) ||
        !segmentClear(startX, startY, target.x, target.y, target)
      ) {
        continue;
      }

      const directPlan = {
        startX,
        angle: Math.atan2(target.y - startY, target.x - startX),
        speed: settings.maxShot,
        targetPiece: target,
        targetX: target.x,
        targetY: target.y,
        ghostX: target.x,
        ghostY: target.y,
        pocketX: target.x,
        pocketY: target.y
      };

      if (doesBotPlanHitItsTarget(directPlan)) {
        return directPlan;
      }
    }
  }

  return null;
}

function planBotShot(difficulty) {
  let targets = pieces.filter(
    function (piece) {
      return (
        !piece.pocketed &&
        piece.type === COLOR.bot
      );
    }
  );

  if (botAvoidTarget && targets.length > 1) {
    const alternativeTargets = targets.filter(function (piece) {
      return piece !== botAvoidTarget;
    });

    if (alternativeTargets.length > 0) {
      targets = alternativeTargets;
    }
  }

  if (
    !queen.secured &&
    score.bot >= 8
  ) {
    const redPiece = pieces.find(
      function (piece) {
        return (
          piece.type === "red" &&
          !piece.pocketed
        );
      }
    );

    if (redPiece) {
      // At eight black pieces the queen is the only legal target. The last
      // black piece is reserved as its cover and the winning piece.
      targets = [redPiece];
    }
  }

  if (targets.length === 0) {
    targets = pieces.filter(
      function (piece) {
        return !piece.pocketed;
      }
    );
  }

  const candidates = [];

  // Pieces trapped near any rail need a clean centre hit first. Trying to
  // cut them toward a pocket often sends the striker into the wall instead.
  for (const target of targets) {
    const nearRail =
      target.x <= W * 0.19 ||
      target.x >= W * 0.81 ||
      target.y <= H * 0.27 ||
      target.y >= H * 0.75;

    if (!nearRail || target.y <= H * 0.16 + striker.r * 0.5) {
      continue;
    }

    for (let index = 0; index < 25; index++) {
      const startX = W * (0.22 + index * (0.56 / 24));
      const startY = H * 0.16;

      if (!isBotStartClear(startX, startY)) {
        continue;
      }

      if (!segmentClear(startX, startY, target.x, target.y, target)) {
        continue;
      }

      const directAngle = Math.atan2(
        target.y - startY,
        target.x - startX
      );

      if (Math.sin(directAngle) <= 0.08) {
        continue;
      }

      const directDistance = Math.hypot(
        target.x - startX,
        target.y - startY
      );

      candidates.push({
        startX,
        angle: directAngle,
        rating:
          1100 -
          directDistance * 0.45 -
          (botTargetFailures.get(target) || 0) * 1200 -
          getBotStartRepeatPenalty(startX) -
          getBotTargetRepeatPenalty(target.x, target.y),
        targetPiece: target,
        targetX: target.x,
        targetY: target.y,
        ghostX: target.x,
        ghostY: target.y,
        pocketX: target.x,
        pocketY: target.y,
        total: directDistance,
        centreRelease: true
      });
    }
  }

  for (const target of targets) {
    for (const pocket of getPockets()) {
      const nearBotBaseline =
        target.type === COLOR.bot &&
        target.y <= H * 0.31;

      // A black piece beside the bot is played toward one of the two nearby
      // top pockets by moving the striker to its right or left side.
      if (nearBotBaseline && pocket.y > H * 0.5) {
        continue;
      }

      const targetToPocketX =
        pocket.x -
        target.x;

      const targetToPocketY =
        pocket.y -
        target.y;

      const targetPocketLength =
        Math.hypot(
          targetToPocketX,
          targetToPocketY
        ) || 1;

      const unitX =
        targetToPocketX /
        targetPocketLength;

      const unitY =
        targetToPocketY /
        targetPocketLength;

      const ghostX =
        target.x -
        unitX *
        (
          target.r +
          striker.r +
          2
        );

      const ghostY =
        target.y -
        unitY *
        (
          target.r +
          striker.r +
          2
        );

      const planningInset =
        Math.min(W, H) * 0.03 + striker.r;

      if (
        ghostX <= planningInset ||
        ghostX >= W - planningInset ||
        ghostY <= planningInset ||
        ghostY >= H - planningInset
      ) {
        continue;
      }

      for (
        let index = 0;
        index < 25;
        index++
      ) {
        const startX =
          W *
          (
            0.22 +
            index * (0.56 / 24)
          );

        const startY =
          H * 0.16;

        if (!isBotStartClear(startX, startY)) {
          continue;
        }

        // The bot plays from the upper baseline, so every valid aim point
        // must be in front of the striker. This prevents backward shots.
        if (
          !nearBotBaseline &&
          ghostY <= startY + striker.r * 0.5
        ) {
          continue;
        }

        const clearStrikerPath =
          segmentClear(
            startX,
            startY,
            ghostX,
            ghostY,
            target
          );

        const clearPocketPath =
          segmentClear(
            target.x,
            target.y,
            pocket.x,
            pocket.y,
            target
          );

        if (!clearStrikerPath || !clearPocketPath) {
          continue;
        }

        const firstDistance =
          Math.hypot(
            ghostX - startX,
            ghostY - startY
          );

        const strikerAngle =
          Math.atan2(
            ghostY - startY,
            ghostX - startX
          );

        if (
          !nearBotBaseline &&
          Math.sin(strikerAngle) <= 0.08
        ) {
          continue;
        }

        // The striker must approach from the side that can actually send the
        // piece toward the selected pocket. Reject opposite-side impacts.
        const impactDirectionX = Math.cos(strikerAngle);
        const impactDirectionY = Math.sin(strikerAngle);
        const alignment =
          impactDirectionX * unitX +
          impactDirectionY * unitY;

        if (alignment < (nearBotBaseline ? 0.06 : 0.2)) {
          continue;
        }

        let rating =
          1600 -
          firstDistance * 0.72 -
          targetPocketLength * 0.88;

        // A verified black-to-pocket route must always outrank merely
        // releasing or moving a piece near a rail.
        rating += 3500;

        // Reward clean, nearly straight transfers of force into the pocket.
        rating += alignment * 420;

        if (nearBotBaseline) {
          rating += 1800;
        }

        // Do not repeat targets that already produced useless shots.
        // A failed target can still be used later if it becomes the only one.
        rating -= (botTargetFailures.get(target) || 0) * 1200;
        rating -= getBotStartRepeatPenalty(startX);
        rating -= getBotTargetRepeatPenalty(target.x, target.y);

        const pocketDirectness = Math.abs(unitY);
        rating += pocketDirectness * 95;

        if (target.type === "red") {
          rating += 70;
        }

        candidates.push({
          startX,
          angle: strikerAngle,
          rating,
          targetPiece: target,
          targetX: target.x,
          targetY: target.y,
          ghostX,
          ghostY,
          pocketX: pocket.x,
          pocketY: pocket.y,
          total:
            firstDistance +
            targetPocketLength
        });
      }
    }
  }

  let rankedCandidates = candidates.slice();

  const lastStart = botRecentStarts[botRecentStarts.length - 1];
  if (Number.isFinite(lastStart)) {
    const differentStarts = rankedCandidates.filter(function (candidate) {
      return Math.abs(candidate.startX - lastStart) >= W * 0.1;
    });

    if (differentStarts.length > 0) {
      rankedCandidates = differentStarts;
    }
  }

  rankedCandidates.sort(function (first, second) {
    return second.rating - first.rating;
  });

  let chosenShot;

  if (difficulty === "easy") {
    chosenShot =
      rankedCandidates[
        Math.floor(
          Math.random() *
          Math.max(
            1,
            Math.min(
              rankedCandidates.length,
              18
            )
          )
        )
      ];
  } else if (difficulty === "medium") {
    chosenShot =
      rankedCandidates[
        Math.floor(
          Math.random() *
          Math.max(
            1,
            Math.min(
              rankedCandidates.length,
              5
            )
          )
        )
      ];
  } else {
    chosenShot = rankedCandidates[0];
  }

  if (!chosenShot) {
    let safeStartX = findSafeBotStartX();
    let fallbackTarget = null;

    const orderedTargets = targets
      .filter(function (piece) {
        return !piece.pocketed && piece.y > H * 0.16 + striker.r;
      })
      .sort(function (first, second) {
        const failureDifference =
          (botTargetFailures.get(first) || 0) -
          (botTargetFailures.get(second) || 0);

        if (failureDifference !== 0) {
          return failureDifference;
        }

        return first.y - second.y;
      });

    const fallbackStarts = Array.from({ length: 25 }, function (_, index) {
      return W * (0.22 + index * (0.56 / 24));
    }).sort(function (first, second) {
      return (
        getBotStartRepeatPenalty(first) -
        getBotStartRepeatPenalty(second)
      );
    });

    // Search the whole permitted baseline for a direct, unobstructed hit,
    // beginning with positions that were not used in recent turns.
    for (let index = 0; index < fallbackStarts.length && !fallbackTarget; index++) {
      const candidateX = fallbackStarts[index];
      const candidateY = H * 0.16;

      if (!isBotStartClear(candidateX, candidateY)) {
        continue;
      }

      const visibleTarget = orderedTargets.find(function (piece) {
        return segmentClear(
          candidateX,
          candidateY,
          piece.x,
          piece.y,
          piece
        );
      });

      if (visibleTarget) {
        safeStartX = candidateX;
        fallbackTarget = visibleTarget;
      }
    }

    // A board position should always expose at least one piece. If it does
    // not, aim at the nearest piece in front instead of an empty location.
    if (!fallbackTarget) {
      fallbackTarget = orderedTargets
        .sort(function (first, second) {
          return (
            Math.hypot(first.x - safeStartX, first.y - H * 0.16) -
            Math.hypot(second.x - safeStartX, second.y - H * 0.16)
          );
        })[0];
    }

    return {
      startX: safeStartX,
      angle: fallbackTarget
        ? Math.atan2(
            fallbackTarget.y - H * 0.16,
            fallbackTarget.x - safeStartX
          )
        : Math.PI / 2,
      speed: 8.4,
      targetPiece: fallbackTarget || null,
      targetX: fallbackTarget ? fallbackTarget.x : W * 0.5,
      targetY: fallbackTarget ? fallbackTarget.y : H * 0.5
    };
  }

  const angleError =
    difficulty === "easy"
      ? 0.15
      : difficulty === "medium"
        ? 0.055
        : difficulty === "hard"
          ? 0.006
          : 0;

  const basePower = clamp(
    0.42 +
    chosenShot.total /
    (
      W * 1.7
    ),
    0.45,
    0.92
  );

  const powerNoise =
    difficulty === "easy"
      ? random(
          -0.18,
          0.18
        )
      : difficulty === "medium"
        ? random(
            -0.07,
            0.07
          )
        : difficulty === "hard"
          ? random(-0.008, 0.008)
          : 0;

  const selectedPower =
    difficulty === "expert"
      ? clamp(basePower + 0.04, 0.58, 0.88)
      : clamp(
          basePower + powerNoise,
          0.35,
          1
        );

  return {
    startX:
      chosenShot.startX,

    angle:
      chosenShot.angle +
      random(
        -angleError,
        angleError
      ),

    speed:
      settings.minShot +
      selectedPower *
      (
        settings.maxShot -
        settings.minShot
      ),

    targetX: chosenShot.targetX,
    targetY: chosenShot.targetY,
    ghostX: chosenShot.ghostX,
    ghostY: chosenShot.ghostY,
    pocketX: chosenShot.pocketX,
    pocketY: chosenShot.pocketY,
    targetPiece: chosenShot.targetPiece
  };
}

function segmentClear(
  startX,
  startY,
  endX,
  endY,
  ignoredPiece
) {
  for (const piece of pieces) {
    if (
      piece === ignoredPiece ||
      piece.pocketed
    ) {
      continue;
    }

    const distance =
      pointSegmentDistance(
        piece.x,
        piece.y,
        startX,
        startY,
        endX,
        endY
      );

    if (distance < piece.r * 2.15) {
      return false;
    }
  }

  return true;
}

function pointSegmentDistance(
  pointX,
  pointY,
  startX,
  startY,
  endX,
  endY
) {
  const lineX = endX - startX;
  const lineY = endY - startY;

  const lengthSquared =
    lineX * lineX +
    lineY * lineY;

  if (lengthSquared === 0) {
    return Math.hypot(
      pointX - startX,
      pointY - startY
    );
  }

  let position =
    (
      (
        pointX - startX
      ) *
      lineX +
      (
        pointY - startY
      ) *
      lineY
    ) /
    lengthSquared;

  position = clamp(
    position,
    0,
    1
  );

  return Math.hypot(
    pointX -
    (
      startX +
      lineX * position
    ),

    pointY -
    (
      startY +
      lineY * position
    )
  );
}

track.addEventListener(
  "pointerdown",
  function (event) {
    if (
      gameOver ||
      turn !== "player" ||
      shotActive ||
      !allStopped()
    ) {
      return;
    }

    movingTrack = true;

    try {
      track.setPointerCapture(
        event.pointerId
      );
    } catch (error) {}

    moveStrikerFromTrack(event);
  }
);

track.addEventListener(
  "pointermove",
  function (event) {
    if (movingTrack) {
      moveStrikerFromTrack(event);
    }
  }
);

track.addEventListener(
  "pointerup",
  stopTrack
);

track.addEventListener(
  "pointercancel",
  stopTrack
);

function stopTrack(event) {
  movingTrack = false;

  try {
    track.releasePointerCapture(
      event.pointerId
    );
  } catch (error) {}
}

function moveStrikerFromTrack(event) {
  const rect =
    track.getBoundingClientRect();

  const sliderPercent = clamp(
    (
      event.clientX -
      rect.left
    ) /
    rect.width,
    0.08,
    0.92
  );

  const normalized =
    (
      sliderPercent -
      0.08
    ) /
    0.84;

  const boardPercent =
    0.22 +
        normalized * 0.56;

  striker.x = W * boardPercent;
  striker.y = H * 0.84;

  striker.vx = 0;
  striker.vy = 0;
  striker.spin = 0;

  pointer.x = striker.x;
  pointer.y = striker.y;

  smoothPointer.x = striker.x;
  smoothPointer.y = striker.y;

  trackStriker.style.left =
    sliderPercent * 100 +
    "%";

  gameStatusEl.textContent =
    strikerOverPiece()
      ? "المضرب فوق حبة — حرّكه"
      : "دورك الآن — لونك الأبيض";
}

canvas.addEventListener(
  "pointerdown",
  function (event) {
    if (
      gameOver ||
      turn !== "player" ||
      shotActive ||
      !allStopped()
    ) {
      return;
    }

    if (strikerOverPiece()) {
      gameStatusEl.textContent =
        "لا يمكن الضرب والمضرب فوق حبة";

      return;
    }

    const position =
      pointerPosition(event);

    const grabDistance =
      Math.hypot(
        position.x -
        striker.x,

        position.y -
        striker.y
      );

    if (
      grabDistance >
      striker.r * 2.25
    ) {
      gameStatusEl.textContent =
        "المس المضرب أولًا ثم اسحب للخلف";

      return;
    }

    aiming = true;

    lastAimDirection = {
      x: 0,
      y: -1
    };

    pointer.x = striker.x;
    pointer.y = striker.y + 2;

    smoothPointer.x = pointer.x;
    smoothPointer.y = pointer.y;

    updateAimPower();

    try {
      canvas.setPointerCapture(
        event.pointerId
      );
    } catch (error) {}
  }
);

canvas.addEventListener(
  "pointermove",
  function (event) {
    if (!aiming) {
      return;
    }

    const position =
      pointerPosition(event);

    pointer.x = position.x;
    pointer.y = position.y;
  }
);

canvas.addEventListener(
  "pointerup",
  function (event) {
    if (!aiming) {
      return;
    }

    const position =
      pointerPosition(event);

    pointer.x = position.x;
    pointer.y = position.y;

    smoothPointer.x = position.x;
    smoothPointer.y = position.y;

    updateAimPower();

    const direction =
      getRawShotDirection();

    aiming = false;

    try {
      canvas.releasePointerCapture(
        event.pointerId
      );
    } catch (error) {}

    if (
      strikerOverPiece() ||
      power < 0.08 ||
      !direction
    ) {
      power = 0;
      updatePower();
      return;
    }

    const easedPower =
      power *
      power *
      (
        3 -
        2 * power
      );

    const speed =
      settings.minShot +
      easedPower *
      (
        settings.maxShot -
        settings.minShot
      );

    striker.vx =
      direction.x *
      speed;

    striker.vy =
      direction.y *
      speed;

    striker.spin = clamp(
      (
        smoothPointer.x -
        striker.x
      ) /
      W,
      -0.06,
      0.06
    );

    if (window.CarromOnline && window.CarromOnline.room) {
      window.CarromOnline.sendLive("shot", {
        shot: { x: striker.x, y: striker.y, vx: striker.vx, vy: striker.vy, spin: striker.spin }
      });
    }

    shotActive = true;
    shotFeedback(power);

    resetShot();

    stopTurnTimer();

    gameStatusEl.textContent =
      "ضربتك";

    power = 0;
    updatePower();
  }
);

canvas.addEventListener(
  "pointercancel",
  function () {
    aiming = false;
    power = 0;

    updatePower();
  }
);

function updateAimPower() {
  if (!striker) {
    power = 0;
    updatePower();
    return;
  }

  const dragDistance = Math.hypot(
    striker.x - pointer.x,
    striker.y - pointer.y
  );

  if (
    dragDistance <
    striker.r * 0.35
  ) {
    power = 0;

    smoothPointer.x = pointer.x;
    smoothPointer.y = pointer.y;

    updatePower();
    return;
  }

  power = clamp(
    dragDistance /
    (
      Math.min(W, H) *
      0.34
    ),
    0,
    1
  );

  updatePower();
}

function updatePower() {
  const percent = Math.round(
    power * 100
  );

  powerFill.style.width =
    percent + "%";

  powerText.textContent =
    percent >= 100
      ? "MAX"
      : percent + "%";
}

function updateTrack() {
  const boardPercent =
    striker.x / W;

  const normalized = clamp(
    (
      boardPercent -
      0.22
    ) /
    0.56,
    0,
    1
  );

  const sliderPercent =
    0.08 +
    normalized * 0.84;

  trackStriker.style.left =
    sliderPercent * 100 +
    "%";
}

function updateScore() {
  playerScoreEl.textContent = score.player;
  botScoreEl.textContent = score.bot;
}

function updateQueenStatus() {
  if (queen.secured) {
    queenStatusEl.textContent =
      "الحبة الحمراء مغطاة بواسطة " +
      (
        queen.owner === "player"
          ? "أنت"
          : "BOT"
      );

    return;
  }

  if (queen.pending) {
    queenStatusEl.textContent =
      "الحبة الحمراء تنتظر تغطية " +
      (
        queen.pending === "player"
          ? "أنت"
          : "BOT"
      );

    return;
  }

  queenStatusEl.textContent =
    "الحبة الحمراء لم تُحسم";
}

function allStopped() {
  const activeObjects = pieces.filter(
    function (piece) {
      return !piece.pocketed;
    }
  );

  if (
    shotActive &&
    striker &&
    !striker.pocketed
  ) {
    activeObjects.push(striker);
  }

  return activeObjects.every(
    function (object) {
      return (
        Math.abs(object.vx) < 0.07 &&
        Math.abs(object.vy) < 0.07
      );
    }
  );
}

function strikerOverPiece() {
  if (!striker) {
    return false;
  }

  return pieces.some(function (piece) {
    return (
      !piece.pocketed &&
      Math.hypot(
        striker.x - piece.x,
        striker.y - piece.y
      ) <
      striker.r +
      piece.r * 0.92
    );
  });
}

function pointerPosition(event) {
  const rect =
    canvas.getBoundingClientRect();

  return {
    x:
      event.clientX -
      rect.left,

    y:
      event.clientY -
      rect.top
  };
}

function openResultProfile() {
  selectedResultProfile = "opponent";
  const profileId = "BOT-" + playerData.playerId.slice(-5);
  const friendKey = "carrom_friend_" + profileId;
  const isAdded = localStorage.getItem(friendKey) === "added";

  resultProfileImage.src = BOT_PROFILE_IMAGE;
  resultProfileName.textContent = currentBotName || "بوت كيرم";
  resultProfileId.textContent = "ID: " + profileId;
  resultAddFriend.classList.toggle("added", isAdded);
  resultAddFriend.textContent = isAdded ? "✓ تمت الإضافة" : "＋ إضافة صديق";
  resultProfileCard.hidden = false;
}

winnerOpponentProfileButton.addEventListener("click", function () {
  openResultProfile();
});

resultProfileClose.addEventListener("click", function () {
  resultProfileCard.hidden = true;
});

resultAddFriend.addEventListener("click", function () {
  if (selectedResultProfile !== "opponent") {
    return;
  }

  const profileId = "BOT-" + playerData.playerId.slice(-5);
  localStorage.setItem("carrom_friend_" + profileId, "added");
  resultAddFriend.classList.add("added");
  resultAddFriend.textContent = "✓ تمت الإضافة";
  showToast("تمت إضافة " + (currentBotName || "المنافس") + " إلى الأصدقاء");
});

function playMatchResultSound(won) {
  if (!gameSoundToggle.checked || !mainSettings.sfx || mainSettings.volume <= 0) {
    return;
  }

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContextClass();
    const notes = won ? [523.25, 659.25, 783.99, 1046.5] : [392, 349.23, 293.66, 220];

    notes.forEach(function (frequency, index) {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = audioContext.currentTime + index * 0.15;

      oscillator.type = won ? "triangle" : "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime((won ? 0.2 : 0.13) * (mainSettings.volume / 100), start + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.34);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.36);
    });

    setTimeout(function () { audioContext.close(); }, 1300);
  } catch (error) {
    // تستمر شاشة النتيجة بصورة طبيعية إذا منع المتصفح تشغيل الصوت.
  }
}

winnerAdButton.addEventListener("click", function () {
  if (resultAdClaimed) {
    return;
  }

  resultAdClaimed = true;
  winnerAdButton.disabled = true;
  winnerAdButton.textContent = "جاري مشاهدة الإعلان...";

  setTimeout(function () {
    const adReward = 500;
    addCoins(adReward);
    winnerReward.textContent = formatNumber(lastMatchReward + adReward);
    winnerAdButton.textContent = "تم استلام 500 عملة";
    showToast("تمت إضافة 500 عملة إلى حسابك");
  }, 1800);
});

winnerExitButton.addEventListener(
  "click",
  function () {
    closeGameTable();
  }
);

rankingButton.addEventListener(
  "click",
  function () {
    showToast(
      "الفوز: " +
      playerData.wins +
      " | الخسارة: " +
      playerData.losses
    );
  }
);

giftButton.addEventListener(
  "click",
  function () {
    const now = Date.now();

    const lastGiftTime =
      Number(
        localStorage.getItem(
          LAST_GIFT_KEY
        )
      ) || 0;

    const oneDay =
      24 *
      60 *
      60 *
      1000;

    const timePassed =
      now -
      lastGiftTime;

    if (timePassed < oneDay) {
      const remaining =
        oneDay -
        timePassed;

      const hours = Math.floor(
        remaining /
        (
          1000 *
          60 *
          60
        )
      );

      const minutes = Math.floor(
        (
          remaining %
          (
            1000 *
            60 *
            60
          )
        ) /
        (
          1000 *
          60
        )
      );

      showToast(
        "الهدية بعد " +
        hours +
        " ساعة و " +
        minutes +
        " دقيقة"
      );

      return;
    }

    addCoins(50);

    localStorage.setItem(
      LAST_GIFT_KEY,
      String(now)
    );

    showToast("استلمت 50 عملة");
  }
);

const SOCIAL_MESSAGES_KEY = "carrom_social_messages_v2";
const SOCIAL_FRIENDS_KEY = "carrom_social_friends_v4";
const SOCIAL_BLOCKED_KEY = "carrom_social_blocked_v1";
const socialPeople = [
  {id:"group",name:"المحادثة الجماعية",avatar:"★",online:true,wins:0,level:0,last:"شات جماعي لجميع اللاعبين",time:"الآن",unread:0,friend:false,group:true},
  {id:"27481953",name:"ناصر",avatar:"ن",online:true,wins:128,level:12,last:"جاهز لجولة؟",time:"الآن",unread:2,friend:true},
  {id:"61830427",name:"سلطان",avatar:"س",online:true,wins:94,level:10,last:"كانت مباراة قوية 🔥",time:"8:42",unread:0,friend:true},
  {id:"53019684",name:"ريم",avatar:"ر",online:true,wins:211,level:18,last:"أرسلت لك دعوة",time:"7:15",unread:1,friend:true},
  {id:"90542176",name:"فارس",avatar:"ف",online:false,wins:76,level:9,last:"نشوفك بكرة",time:"أمس",unread:0,friend:true},
  {id:"77700123",name:"خالد التجريبي",avatar:"خ",online:true,lastSeen:"آخر ظهور منذ لحظات",wins:57,level:8,last:"اضغط لبدء المحادثة",time:"",unread:0,friend:true,demo:true},
];
let socialActiveTab = "chats";
let socialSelectedPerson = null;
let socialProfilePerson = null;
let socialVoiceRecording = false;
let socialVoiceStartedAt = 0;
let socialGroupUnreadCount = 0;
let socialFriendUnreadCount = 0;
let socialMessagesStore = loadSocialMessages();
let socialFriendIds = loadSocialFriends();
let socialBlockedIds = loadSocialBlocked();

function loadSocialMessages() {
  try {
    const saved = JSON.parse(localStorage.getItem(SOCIAL_MESSAGES_KEY)) || {};
    if (!saved.group) saved.group = [];
    if (!saved["77700123"]) saved["77700123"] = [
      {side:"them",authorId:"77700123",author:"خالد التجريبي",avatar:"خ",text:"أهلًا بك، هذه محادثتنا الخاصة 👋",time:"الآن"}
    ];
    return saved;
  } catch (_) { return {}; }
}

function loadSocialFriends() { try { return JSON.parse(localStorage.getItem(SOCIAL_FRIENDS_KEY)) || ["77700123"]; } catch (_) { return ["77700123"]; } }
function loadSocialBlocked() { try { return JSON.parse(localStorage.getItem(SOCIAL_BLOCKED_KEY)) || []; } catch (_) { return []; } }

function saveSocialState() {
  localStorage.setItem(SOCIAL_MESSAGES_KEY, JSON.stringify(socialMessagesStore));
  localStorage.setItem(SOCIAL_FRIENDS_KEY, JSON.stringify(socialFriendIds));
  localStorage.setItem(SOCIAL_BLOCKED_KEY, JSON.stringify(socialBlockedIds));
}

function updateSocialBadges() {
  if (!mainSettings.notifications) {
    socialUnread.hidden = true; socialFriendUnread.hidden = true; socialRequestBadge.hidden = true; mainChatUnread.hidden = true;
    return;
  }
  const hasGroupUnread = socialGroupUnreadCount > 0;
  const hasFriendUnread = socialFriendUnreadCount > 0;
  socialUnread.hidden = !hasGroupUnread;
  socialFriendUnread.hidden = !hasFriendUnread;
  const pendingRequests = socialPeople.filter(function(person){
    return person.request && !socialBlockedIds.includes(person.id);
  }).length;
  socialRequestBadge.hidden = pendingRequests === 0;
  mainChatUnread.hidden = !(hasGroupUnread || hasFriendUnread || pendingRequests > 0);
}

function addSocialUnread(type) {
  if (type === "friend") socialFriendUnreadCount += 1;
  else socialGroupUnreadCount += 1;
  updateSocialBadges();
}

function openSocialHub() {
  socialHub.hidden = false;
  socialHub.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  socialActiveTab = "chats";
  socialGroupUnreadCount = 0;
  updateSocialBadges();
  socialHub.classList.add("group-chat-mode");
  socialAddOpen.hidden = true;
  socialOnlineCount.hidden = true;
  socialTabs.forEach(function(tab){ tab.classList.toggle("active", tab.dataset.socialTab === "chats"); });
  renderSocialPeople();
  openSocialConversation(socialPeople[0]);
}

function closeSocialHub() {
  socialHub.hidden = true;
  socialHub.setAttribute("aria-hidden", "true");
  socialChatPane.classList.remove("mobile-open");
  document.body.style.overflow = "";
  navButtons.forEach(function(item){ item.classList.toggle("active", item.dataset.page === "home"); });
}

function renderSocialPeople() {
  const query = "";
  socialPeopleList.textContent = "";
  socialListTitle.textContent = socialActiveTab === "requests" ? "طلبات الصداقة" : socialActiveTab === "friends" ? "قائمة الأصدقاء" : "المحادثات";
  updateSocialBadges();
  const filtered = socialPeople.filter(function(person){
    const matchesSearch = !query || person.name.toLowerCase().includes(query) || person.id.includes(query);
    if (socialBlockedIds.includes(person.id)) return false;
    if (socialActiveTab === "requests") return matchesSearch && person.request;
    if (socialActiveTab === "friends") return matchesSearch && socialFriendIds.includes(person.id);
    return matchesSearch && person.group;
  });

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "social-empty";
    empty.innerHTML = "<span>⌕</span><h2>لا توجد نتائج</h2><p>جرّب اسمًا أو رقم لاعب آخر</p>";
    socialPeopleList.appendChild(empty);
    return;
  }

  filtered.forEach(function(person){
    const row = document.createElement("button");
    row.type = "button";
    row.className = "social-person" + (socialSelectedPerson && socialSelectedPerson.id === person.id ? " active" : "");
    const personSummary = person.request ? "يريد إضافتك إلى الأصدقاء" : (socialActiveTab === "friends" ? (person.online ? "متصل الآن • " + (person.lastSeen || "آخر ظهور منذ لحظات") : (person.lastSeen || "غير متصل")) : person.last);
    row.innerHTML = '<span class="social-avatar '+(person.online?"":"offline")+(person.request?" request":"")+'"><span>'+person.avatar+'</span><i></i></span><span class="social-person-main"><b>'+person.name+'</b><small>'+personSummary+'</small></span><span class="social-person-meta">'+(person.request?'<span class="social-request-actions"><button class="accept" type="button">قبول</button><button class="reject" type="button">رفض</button></span>':'<time>'+person.time+'</time>'+(person.unread?'<em>'+person.unread+'</em>':''))+'</span>';
    row.addEventListener("click", function(event){
      if (event.target.classList.contains("accept")) { acceptOnlineFriend(person); return; }
      if (event.target.classList.contains("reject")) { person.request = false; renderSocialPeople(); showToast("تم رفض الطلب"); return; }
      if (person.request) { showSocialProfile(person); return; }
      openSocialConversation(person);
    });
    socialPeopleList.appendChild(row);
  });
}

function openSocialConversation(person) {
  socialSelectedPerson = person;
  socialHub.classList.toggle("group-chat-mode", Boolean(person.group));
  person.unread = 0;
  socialEmpty.hidden = true;
  socialConversation.hidden = false;
  socialChatPane.classList.add("mobile-open");
  socialChatAvatar.textContent = person.avatar;
  socialChatName.textContent = person.name;
  socialChatStatus.textContent = person.group ? "" : (person.online ? "● متصل الآن • " + (person.lastSeen || "آخر ظهور منذ لحظات") : (person.lastSeen || "غير متصل"));
  socialChatStatus.style.color = person.online ? "#34d7a2" : "#7891a6";
  socialChatProfile.disabled = Boolean(person.group);
  renderSocialMessages();
  renderSocialPeople();
  syncOnlineSocialMessages(person);
}

function socialOnlineScope(person) {
  if (!person) return "";
  if (person.group) return "group";
  const myId = window.CarromOnline && window.CarromOnline.me ? window.CarromOnline.me.id : playerData.playerId;
  return "dm:" + [String(myId), String(person.id)].sort().join(":");
}

async function syncOnlineSocialMessages(person) {
  if (!window.CarromOnline || document.documentElement.dataset.server !== "online") return;
  try {
    const result = await window.CarromOnline.messages(socialOnlineScope(person));
    socialMessagesStore[person.id] = result.messages.map(function (message) {
      const mine = window.CarromOnline.me && message.userId === window.CarromOnline.me.id;
      return {
        side: mine ? "me" : "them",
        authorId: mine ? "me" : message.userId,
        author: message.user ? message.user.name : "لاعب",
        avatar: message.user && message.user.name ? message.user.name.charAt(0) : "ل",
        text: message.text,
        time: new Date(message.at).toLocaleTimeString("ar-SA", {hour:"2-digit",minute:"2-digit"})
      };
    });
    saveSocialState();
    if (socialSelectedPerson && socialSelectedPerson.id === person.id) renderSocialMessages();
  } catch (_) {}
}

function renderSocialMessages() {
  socialMessages.textContent = "";
  const visibleMessages = (socialMessagesStore[socialSelectedPerson.id] || []).filter(function(message){
    return !(message.authorId && socialBlockedIds.includes(message.authorId));
  });
  if (visibleMessages.length > 0) {
    const date = document.createElement("span");
    date.className = "social-date";
    date.textContent = "اليوم";
    socialMessages.appendChild(date);
  }
  visibleMessages.forEach(function(message){
    const bubble = document.createElement("article");
    bubble.className = "social-bubble " + (message.side === "them" ? "them" : "me");
    if (socialSelectedPerson.group) {
      const author = document.createElement("button");
      author.type = "button";
      author.className = "social-message-author";
      const displayName = message.side === "me" ? (playerData.playerName || "أنت") : (message.author || "لاعب");
      const displayAvatar = message.side === "me" ? "أ" : (message.avatar || displayName.charAt(0));
      author.innerHTML = '<span class="social-author-avatar">'+displayAvatar+'</span><b>'+displayName+'</b>';
      if (message.side === "me") author.disabled = true;
      else author.addEventListener("click", function(){
        const sender = socialPeople.find(function(person){ return person.id === message.authorId; });
        if (sender) showSocialProfile(sender);
      });
      bubble.appendChild(author);
    }
    if (message.voice) bubble.insertAdjacentHTML("beforeend", '<div class="social-voice-bubble"><span>▶</span><i></i><small>'+message.voice+'</small></div><time>'+message.time+'</time>');
    else {
      const content = document.createElement("p");
      content.textContent = message.text;
      const time = document.createElement("time");
      time.textContent = message.time;
      bubble.append(content, time);
    }
    socialMessages.appendChild(bubble);
  });
  socialMessages.scrollTop = socialMessages.scrollHeight;
}

function socialTime() { return new Date().toLocaleTimeString("ar-SA", {hour:"2-digit",minute:"2-digit"}); }

function showSocialProfile(person) {
  if (!person || person.group) return;
  socialProfilePerson = person;
  socialProfileModal.classList.remove("photo-view");
  socialProfileView.textContent = "◉ مشاهدة صورة العرض";
  socialProfileAvatar.textContent = person.avatar;
  socialProfileName.textContent = person.name;
  socialProfileId.textContent = "ID: " + person.id;
  socialProfileState.textContent = person.online ? "● متصل الآن" : "● غير متصل";
  socialProfileLastSeen.textContent = person.online ? (person.lastSeen || "آخر ظهور منذ لحظات") : (person.lastSeen || "آخر ظهور غير معروف");
  socialProfileState.style.color = person.online ? "#39dca5" : "#7891a6";
  socialProfileWins.textContent = person.wins;
  socialProfileLevel.textContent = person.level;
  const isFriend = socialFriendIds.includes(person.id);
  socialProfileAdd.textContent = isFriend ? "✓ ضمن الأصدقاء" : "＋ إضافة صديق";
  socialProfileAdd.disabled = isFriend;
  socialProfileRemove.hidden = !isFriend;
  socialProfileModal.hidden = false;
}

function addSocialFriend(person) {
  if (!socialFriendIds.includes(person.id)) socialFriendIds.push(person.id);
  person.friend = true; person.request = false;
  saveSocialState();
  renderSocialPeople();
}

function upsertOnlinePerson(user, options) {
  if (!user || !user.id) return null;
  let person = socialPeople.find(function(item){ return item.id === user.id; });
  if (!person) {
    person = {
      id: user.id,
      name: user.name || "لاعب",
      avatar: (user.name || "ل").charAt(0),
      online: Boolean(user.online),
      lastSeen: user.lastSeen ? "آخر ظهور " + new Date(user.lastSeen).toLocaleString("ar-SA") : "غير متصل",
      wins: 0,
      level: 1,
      last: "ابدأ المحادثة",
      time: "",
      unread: 0,
      friend: false
    };
    socialPeople.push(person);
  }
  person.name = user.name || person.name;
  person.avatar = user.avatar || person.avatar || person.name.charAt(0);
  person.online = Boolean(user.online);
  if (options && options.request) person.request = true;
  if (options && options.friend) {
    person.friend = true;
    person.request = false;
    if (!socialFriendIds.includes(person.id)) socialFriendIds.push(person.id);
  }
  return person;
}

async function syncOnlineFriends() {
  if (!window.CarromOnline || document.documentElement.dataset.server !== "online") return;
  try {
    const result = await window.CarromOnline.friends();
    (result.friends || []).forEach(function(user){ upsertOnlinePerson(user, {friend:true}); });
    (result.requests || []).forEach(function(user){ upsertOnlinePerson(user, {request:true}); });
    saveSocialState();
    renderSocialPeople();
  } catch (_) {}
}

async function acceptOnlineFriend(person) {
  if (!person) return;
  try {
    if (window.CarromOnline && document.documentElement.dataset.server === "online") {
      await window.CarromOnline.acceptFriend(person.id);
    }
    addSocialFriend(person);
    showToast("تم قبول طلب " + person.name);
  } catch (_) {
    showToast("تعذر قبول الطلب");
  }
}

function getGameAudioContext() {
  if (!gameAudioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    gameAudioContext = new AudioContextClass();
  }
  if (gameAudioContext.state === "suspended") gameAudioContext.resume().catch(function(){});
  return gameAudioContext;
}

function playGameSound(kind, strength) {
  if (!mainSettings.sfx || mainSettings.volume <= 0) return;
  try {
    const audio = getGameAudioContext();
    if (!audio) return;
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    const now = audio.currentTime;
    const power = Math.max(0.12, Math.min(1, Number(strength) || 0.5));
    oscillator.type = kind === "shot" ? "triangle" : "sine";
    oscillator.frequency.setValueAtTime(kind === "shot" ? 125 : 260 + power * 110, now);
    oscillator.frequency.exponentialRampToValueAtTime(kind === "shot" ? 72 : 165, now + 0.075);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime((mainSettings.volume / 100) * power * 0.13, now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.095);
    oscillator.connect(gain); gain.connect(audio.destination);
    oscillator.start(now); oscillator.stop(now + 0.11);
  } catch (_) {}
}

function triggerGameVibration(pattern) {
  if (mainSettings.haptics && navigator.vibrate) navigator.vibrate(pattern);
}

function collisionFeedback(speed) {
  const now = Date.now();
  if (now - lastCollisionFeedbackAt < 65 || speed < 0.8) return;
  lastCollisionFeedbackAt = now;
  const strength = Math.min(1, speed / 14);
  playGameSound("collision", strength);
  triggerGameVibration(strength > 0.62 ? 22 : 10);
}

function shotFeedback(power) {
  playGameSound("shot", Math.min(1, Math.max(0.35, power || 0.65)));
  triggerGameVibration([18, 15, 28]);
}

function playMenuMusicNote() {
  if (!mainSettings.music || mainSettings.volume <= 0) return;
  try {
    const audio = getGameAudioContext();
    if (!audio) return;
    const notes = [220, 277.18, 329.63, 277.18, 246.94, 329.63];
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    const now = audio.currentTime;
    oscillator.type = "sine";
    oscillator.frequency.value = notes[menuMusicStep % notes.length];
    menuMusicStep += 1;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime((mainSettings.volume / 100) * 0.035, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
    oscillator.connect(gain); gain.connect(audio.destination);
    oscillator.start(now); oscillator.stop(now + 0.95);
  } catch (_) {}
}

function updateMenuMusic() {
  if (menuMusicTimer) { clearInterval(menuMusicTimer); menuMusicTimer = null; }
  if (mainSettings.music) {
    playMenuMusicNote();
    menuMusicTimer = setInterval(playMenuMusicNote, 1050);
  }
}

function applyMainLanguage() {
  const english = mainSettings.language === "en";
  document.documentElement.lang = english ? "en" : "ar";
  document.documentElement.dir = english ? "ltr" : "rtl";
  document.querySelectorAll("[data-setting-ar]").forEach(function(element){
    element.textContent = english ? element.dataset.settingEn : element.dataset.settingAr;
  });
  const navText = english ? ["Settings","Store","Chat","Home"] : ["الإعدادات","المتجر","الدردشة","الرئيسية"];
  navButtons.forEach(function(button,index){ const label=button.querySelector(".nav-text"); if(label) label.textContent=navText[index]; });
  const playLabel = document.querySelector(".play-text");
  if (playLabel) playLabel.textContent = english ? "PLAY" : "ابدأ اللعب";
  const rankingLabel = rankingButton.querySelector(".card-title");
  const giftLabel = giftButton.querySelector(".card-title");
  if (rankingLabel) rankingLabel.textContent = english ? "Ranking" : "التصنيف";
  if (giftLabel) giftLabel.textContent = english ? "Daily Gift" : "هدية اليوم";
  languageArabic.classList.toggle("active", !english);
  languageEnglish.classList.toggle("active", english);
}

function applyMainSettings() {
  mainSfxToggle.checked = mainSettings.sfx;
  mainMusicToggle.checked = mainSettings.music;
  mainVolumeRange.value = String(mainSettings.volume);
  mainVolumeValue.textContent = mainSettings.volume + "%";
  mainHapticsToggle.checked = mainSettings.haptics;
  mainBatteryToggle.checked = mainSettings.battery;
  mainNotificationsToggle.checked = mainSettings.notifications;
  document.body.classList.toggle("battery-saver", mainSettings.battery);
  applyMainLanguage();
  updateMenuMusic();
}

function openMainSettings() {
  mainSettingsPanel.hidden = false;
  mainSettingsPanel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  applyMainSettings();
}

function closeMainSettings() {
  mainSettingsPanel.hidden = true;
  mainSettingsPanel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  updateMenuMusic();
  navButtons.forEach(function(item){ item.classList.toggle("active", item.dataset.page === "home"); });
}

navButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    navButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const page = button.dataset.page;

    if (page === "home") {
      showToast("الرئيسية");
    }

    if (page === "chat") {
      openSocialHub();
    }

    if (page === "store") {
      showToast("المتجر قريبًا");
    }

    if (page === "settings") {
      openMainSettings();
    }
  });
});

mainSettingsClose.addEventListener("click", closeMainSettings);
mainSfxToggle.addEventListener("change", function(){ mainSettings.sfx=mainSfxToggle.checked; saveMainSettings(); if(mainSettings.sfx) playGameSound("collision",.8); });
mainMusicToggle.addEventListener("change", function(){ mainSettings.music=mainMusicToggle.checked; saveMainSettings(); updateMenuMusic(); });
mainVolumeRange.addEventListener("input", function(){ mainSettings.volume=Number(mainVolumeRange.value); mainVolumeValue.textContent=mainSettings.volume+"%"; saveMainSettings(); });
mainHapticsToggle.addEventListener("change", function(){ mainSettings.haptics=mainHapticsToggle.checked; saveMainSettings(); if(mainSettings.haptics) triggerGameVibration(35); });
mainBatteryToggle.addEventListener("change", function(){ mainSettings.battery=mainBatteryToggle.checked; saveMainSettings(); document.body.classList.toggle("battery-saver",mainSettings.battery); });
mainNotificationsToggle.addEventListener("change", function(){ mainSettings.notifications=mainNotificationsToggle.checked; saveMainSettings(); if(!mainSettings.notifications){socialUnread.hidden=true;socialFriendUnread.hidden=true;socialRequestBadge.hidden=true;mainChatUnread.hidden=true;}else updateSocialBadges(); });
languageArabic.addEventListener("click", function(){ mainSettings.language="ar"; saveMainSettings(); applyMainLanguage(); });
languageEnglish.addEventListener("click", function(){ mainSettings.language="en"; saveMainSettings(); applyMainLanguage(); });
privacyInfoButton.addEventListener("click", function(){ showToast(mainSettings.language==="en"?"Your messages and settings are stored securely on this device":"تُحفظ رسائلك وإعداداتك بأمان على هذا الجهاز"); });
mainSettingsReset.addEventListener("click", function(){ mainSettings={sfx:true,music:false,volume:70,haptics:true,battery:false,notifications:true,language:"ar"}; saveMainSettings(); applyMainSettings(); showToast("تمت إعادة الإعدادات الافتراضية"); });

socialClose.addEventListener("click", closeSocialHub);
socialTabs.forEach(function(tab){
  tab.addEventListener("click", function(){
    socialActiveTab = tab.dataset.socialTab;
    socialHub.classList.toggle("group-chat-mode", socialActiveTab === "chats");
    socialAddOpen.hidden = socialActiveTab === "chats";
    socialOnlineCount.hidden = true;
    socialTabs.forEach(function(item){ item.classList.toggle("active", item === tab); });
    renderSocialPeople();
    if (socialActiveTab === "chats") {
      socialGroupUnreadCount = 0;
      updateSocialBadges();
      openSocialConversation(socialPeople[0]);
    } else {
      if (socialActiveTab === "friends") {
        socialFriendUnreadCount = 0;
        updateSocialBadges();
      }
      socialConversation.hidden = true;
      socialEmpty.hidden = false;
      socialChatPane.classList.remove("mobile-open");
    }
  });
});
socialMobileBack.addEventListener("click", function(){ socialChatPane.classList.remove("mobile-open"); });
socialChatProfile.addEventListener("click", function(){ if (socialSelectedPerson) showSocialProfile(socialSelectedPerson); });
socialMore.addEventListener("click", function(){ if (socialSelectedPerson) showSocialProfile(socialSelectedPerson); });
socialProfileClose.addEventListener("click", function(){ socialProfileModal.hidden = true; socialProfileModal.classList.remove("photo-view"); });
socialProfileModal.addEventListener("click", function(event){ if (event.target === socialProfileModal) socialProfileModal.hidden = true; });
socialProfileAction.addEventListener("click", function(){ socialProfileModal.hidden = true; if (socialProfilePerson) openSocialConversation(socialProfilePerson); });
socialProfileAdd.addEventListener("click", async function(){
  if (!socialProfilePerson) return;
  try {
    if (!window.CarromOnline || document.documentElement.dataset.server !== "online") throw new Error("offline");
    await window.CarromOnline.addFriend(socialProfilePerson.id);
    socialProfileAdd.textContent = "✓ تم إرسال الطلب";
    socialProfileAdd.disabled = true;
    showToast("تم إرسال طلب صداقة إلى " + socialProfilePerson.name);
  } catch (_) {
    showToast("تعذر إرسال طلب الصداقة");
  }
});
socialProfileView.addEventListener("click", function(){
  socialProfileModal.classList.toggle("photo-view");
  socialProfileView.textContent = socialProfileModal.classList.contains("photo-view") ? "رجوع إلى البروفايل" : "◉ مشاهدة صورة العرض";
});
socialProfileAvatar.addEventListener("click", function(){ socialProfileView.click(); });
socialProfileRemove.addEventListener("click", function(){
  if (!socialProfilePerson) return;
  if (window.CarromOnline && document.documentElement.dataset.server === "online") {
    window.CarromOnline.removeFriend(socialProfilePerson.id).catch(function(){});
  }
  socialFriendIds = socialFriendIds.filter(function(id){ return id !== socialProfilePerson.id; });
  saveSocialState();
  socialProfileModal.hidden = true;
  renderSocialPeople();
  showToast("تمت إزالة " + socialProfilePerson.name + " من الأصدقاء");
});
socialProfileBlock.addEventListener("click", function(){
  if (!socialProfilePerson || socialProfilePerson.group) return;
  if (!socialBlockedIds.includes(socialProfilePerson.id)) socialBlockedIds.push(socialProfilePerson.id);
  socialFriendIds = socialFriendIds.filter(function(id){ return id !== socialProfilePerson.id; });
  saveSocialState();
  socialProfileModal.hidden = true;
  socialProfileModal.classList.remove("photo-view");
  renderSocialPeople();
  showToast("تم حظر " + socialProfilePerson.name);
});
socialAddOpen.addEventListener("click", function(){ socialAddModal.hidden = false; socialFriendId.value = ""; });
socialAddClose.addEventListener("click", function(){ socialAddModal.hidden = true; });
socialAddModal.addEventListener("click", function(event){ if (event.target === socialAddModal) socialAddModal.hidden = true; });
socialAddForm.addEventListener("submit", async function(event){
  event.preventDefault();
  const id = socialFriendId.value.trim();
  if (id.length < 5) { showToast("اكتب رقم لاعب صحيح"); return; }
  try {
    if (!window.CarromOnline || document.documentElement.dataset.server !== "online") throw new Error("offline");
    await window.CarromOnline.addFriend(id);
    socialAddModal.hidden = true;
    showToast("تم إرسال طلب الصداقة إلى " + id);
  } catch (error) {
    showToast(error && error.message === "user_not_found" ? "رقم اللاعب غير موجود" : "تعذر إرسال طلب الصداقة");
  }
});
socialForm.addEventListener("submit", function(event){
  event.preventDefault();
  if (!socialSelectedPerson) return;
  const text = socialMessageInput.value.trim();
  if (!text) return;
  if (!socialMessagesStore[socialSelectedPerson.id]) socialMessagesStore[socialSelectedPerson.id] = [];
  socialMessagesStore[socialSelectedPerson.id].push({side:"me",authorId:"me",author:playerData.playerName || "أنت",avatar:"أ",text:text,time:socialTime()});
  socialSelectedPerson.last = text;
  socialSelectedPerson.time = "الآن";
  socialMessageInput.value = "";
  saveSocialState();
  renderSocialMessages();
  renderSocialPeople();
  if (window.CarromOnline && document.documentElement.dataset.server === "online") {
    window.CarromOnline.sendMessage(socialOnlineScope(socialSelectedPerson), text).catch(function(){
      showToast("تعذر إرسال الرسالة");
    });
  } else if (socialSelectedPerson.group) queueGroupReply();
  else queuePrivateReply(socialSelectedPerson);
});

let socialReplyIndex = 0;
function queueGroupReply() {
  const responders = [
    {id:"27481953",name:"ناصر",avatar:"ن",replies:["وصلت رسالتك 👍","أنا معك، كلام جميل","من جاهز لجولة؟"]},
    {id:"61830427",name:"سلطان",avatar:"س",replies:["هلا بالجميع 👋","أتفق معك","بالتوفيق يا أبطال"]},
    {id:"53019684",name:"ريم",avatar:"ر",replies:["موجودة معكم ✨","فكرة جميلة","حياكم في الشات الجماعي"]}
  ];
  const responder = responders[socialReplyIndex % responders.length];
  const replyText = responder.replies[socialReplyIndex % responder.replies.length];
  socialReplyIndex += 1;
  window.setTimeout(function(){
    if (!socialMessagesStore.group) socialMessagesStore.group = [];
    socialMessagesStore.group.push({side:"them",authorId:responder.id,author:responder.name,avatar:responder.avatar,text:replyText,time:socialTime()});
    saveSocialState();
    if (socialSelectedPerson && socialSelectedPerson.group && !socialHub.hidden && socialActiveTab === "chats") renderSocialMessages();
    else addSocialUnread("group");
  }, 900);
}

function queuePrivateReply(person) {
  if (!person || person.group) return;
  window.setTimeout(function(){
    if (!socialMessagesStore[person.id]) socialMessagesStore[person.id] = [];
    const privateReplies = ["وصلت رسالتك، أهلًا بك 👋","تمام، أنا موجود معك","حلو، خلنا نتكلم هنا 👍"];
    const privateText = privateReplies[socialReplyIndex % privateReplies.length];
    socialReplyIndex += 1;
    socialMessagesStore[person.id].push({side:"them",authorId:person.id,author:person.name,avatar:person.avatar,text:privateText,time:socialTime()});
    saveSocialState();
    if (socialSelectedPerson && socialSelectedPerson.id === person.id && !socialHub.hidden) renderSocialMessages();
    else addSocialUnread("friend");
  }, 850);
}
socialVoice.addEventListener("click", async function(){
  if (!socialSelectedPerson) return;
  if (!socialVoiceRecording) {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new Error("unavailable");
      const stream = await navigator.mediaDevices.getUserMedia({audio:true});
      stream.getTracks().forEach(function(track){ track.stop(); });
      socialVoiceRecording = true;
      socialVoiceStartedAt = Date.now();
      socialVoice.classList.add("recording");
      socialVoice.textContent = "■";
      showToast("جاري تسجيل الرسالة الصوتية");
    } catch (_) { showToast("اسمح للمتصفح باستخدام الميكروفون"); }
    return;
  }
  socialVoiceRecording = false;
  socialVoice.classList.remove("recording");
  socialVoice.textContent = "🎙️";
  const seconds = Math.max(1, Math.min(60, Math.round((Date.now() - socialVoiceStartedAt) / 1000)));
  if (!socialMessagesStore[socialSelectedPerson.id]) socialMessagesStore[socialSelectedPerson.id] = [];
  socialMessagesStore[socialSelectedPerson.id].push({side:"me",authorId:"me",author:playerData.playerName || "أنت",avatar:"أ",voice:"0:"+String(seconds).padStart(2,"0"),time:socialTime()});
  saveSocialState();
  renderSocialMessages();
});

function resetRoomChat() {
  roomMessages = [];
  unreadMessages = 0;
  updateChatBadge();
  renderChatMessages();
}

function renderChatMessages() {
  chatMessages.textContent = "";

  if (roomMessages.length === 0) {
    return;
  }

  roomMessages.forEach(function (message) {
    const item = document.createElement("article");
    item.className = "chat-message" + (message.sender === "opponent" ? " opponent" : "");

    const author = document.createElement("strong");
    author.textContent = message.sender === "player" ? "أنت" : (currentBotName || "الخصم");

    const content = document.createElement("p");
    content.textContent = message.text;

    const time = document.createElement("time");
    time.textContent = message.time;

    item.append(author, content, time);
    chatMessages.appendChild(item);
  });

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addRoomMessage(sender, text) {
  const cleanText = String(text || "").trim().slice(0, 120);

  if (!cleanText) {
    return;
  }

  roomMessages.push({
    sender: sender,
    text: cleanText.replace(/^.*?:\s*/, sender === "opponent" ? "" : "$&"),
    time: new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })
  });

  if (roomMessages.length > 60) {
    roomMessages.shift();
  }

  if (sender === "opponent" && !roomChat.classList.contains("open")) {
    unreadMessages += 1;
    updateChatBadge();
  }

  renderChatMessages();
}

function sendRoomMessage(text) {
  const cleanText = String(text || "").trim();
  if (!cleanText) return;
  addRoomMessage("player", cleanText);
  chatInput.value = "";
  if (window.CarromOnline && window.CarromOnline.room) {
    window.CarromOnline.sendMessage("room:" + window.CarromOnline.room.id, cleanText).catch(function(){
      showToast("تعذر إرسال رسالة الغرفة");
    });
  }
}

function openRoomChat() {
  if (chatDisabled) {
    showToast("المحادثة متوقفة من الإعدادات");
    return;
  }

  closeRoomSettings();
  chatPlayerImage.src = profileImage.src;
  roomChat.classList.add("open");
  roomChat.setAttribute("aria-hidden", "false");
  chatToggleButton.setAttribute("aria-expanded", "true");
  unreadMessages = 0;
  updateChatBadge();
  chatInput.blur();
}

function closeRoomChat() {
  stopMicrophone();
  chatInput.blur();
  roomChat.classList.remove("open");
  roomChat.setAttribute("aria-hidden", "true");
  chatToggleButton.setAttribute("aria-expanded", "false");
}

function updateChatBadge() {
  chatBadge.textContent = unreadMessages > 9 ? "9+" : String(unreadMessages);
  chatBadge.hidden = unreadMessages === 0;
}

async function toggleMicrophone() {
  if (microphoneStream) {
    stopMicrophone();
    showToast("تم كتم الميكروفون");
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    showVoiceError("افتح اللعبة من رابط آمن HTTPS أو من localhost لتشغيل الميكروفون.");
    return;
  }

  try {
    microphoneStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      video: false
    });

    micButton.classList.add("active");
    micButton.classList.remove("muted");
    micButton.setAttribute("aria-pressed", "true");
    micIcon.textContent = "🎙️";
    micLabel.textContent = "المايك مفتوح";
    startVoiceActivityDetection();
    startOnlineVoice();

    microphoneStream.getAudioTracks().forEach(function (track) {
      track.addEventListener("ended", stopMicrophone, { once: true });
    });

    showToast("تم تشغيل الميكروفون");
  } catch (error) {
    showVoiceError(
      error && error.name === "NotAllowedError"
        ? "تم رفض الإذن. اسمح للعبة باستخدام الميكروفون ثم حاول مرة أخرى."
        : "تعذر تشغيل الميكروفون على هذا الجهاز."
    );
  }
}

function stopMicrophone() {
  stopVoiceActivityDetection();
  stopOnlineVoice();

  if (microphoneStream) {
    microphoneStream.getTracks().forEach(function (track) { track.stop(); });
    microphoneStream = null;
  }

  micButton.classList.remove("active");
  micButton.classList.add("muted");
  micButton.setAttribute("aria-pressed", "false");
  micIcon.textContent = "🔇";
  micLabel.textContent = "تشغيل المايك";
}

async function ensureOnlineVoicePeer() {
  if (onlineVoicePeer || !window.CarromOnline || !window.CarromOnline.room) return onlineVoicePeer;
  onlineVoicePeer = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
  if (microphoneStream) microphoneStream.getTracks().forEach(function (track) { onlineVoicePeer.addTrack(track, microphoneStream); });
  onlineVoicePeer.onicecandidate = function (event) {
    if (event.candidate) window.CarromOnline.sendLive("ice-candidate", { candidate: event.candidate });
  };
  onlineVoicePeer.ontrack = function (event) {
    if (!onlineRemoteAudio) {
      onlineRemoteAudio = document.createElement("audio");
      onlineRemoteAudio.autoplay = true;
      onlineRemoteAudio.playsInline = true;
      onlineRemoteAudio.hidden = true;
      document.body.appendChild(onlineRemoteAudio);
    }
    onlineRemoteAudio.srcObject = event.streams[0];
    onlineRemoteAudio.play().catch(function () {});
  };
  return onlineVoicePeer;
}

async function startOnlineVoice() {
  if (!window.CarromOnline || !window.CarromOnline.room || !window.RTCPeerConnection) return;
  const peer = await ensureOnlineVoicePeer();
  window.CarromOnline.sendLive("mic-state", { active: true });
  const ids = window.CarromOnline.room.players || [];
  if (ids.length === 2 && window.CarromOnline.me && window.CarromOnline.me.id === ids.slice().sort()[0]) {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    window.CarromOnline.sendLive("voice-offer", { description: peer.localDescription });
  }
}

function stopOnlineVoice() {
  if (window.CarromOnline && window.CarromOnline.room) window.CarromOnline.sendLive("mic-state", { active: false });
  if (onlineVoicePeer) onlineVoicePeer.close();
  onlineVoicePeer = null;
  if (onlineRemoteAudio) {
    onlineRemoteAudio.srcObject = null;
    onlineRemoteAudio.remove();
    onlineRemoteAudio = null;
  }
}

function startVoiceActivityDetection() {
  stopVoiceActivityDetection();

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass || !microphoneStream) {
    return;
  }

  microphoneAudioContext = new AudioContextClass();
  microphoneAnalyser = microphoneAudioContext.createAnalyser();
  microphoneAnalyser.fftSize = 512;
  microphoneAnalyser.smoothingTimeConstant = 0.78;

  const source = microphoneAudioContext.createMediaStreamSource(microphoneStream);
  source.connect(microphoneAnalyser);

  const samples = new Uint8Array(microphoneAnalyser.fftSize);
  let noiseFloor = 0.012;
  let voiceConfidence = 0;
  let lastDetectedVoice = 0;

  function measureVoice() {
    if (!microphoneAnalyser || !microphoneStream) {
      return;
    }

    microphoneAnalyser.getByteTimeDomainData(samples);

    let energy = 0;
    let peak = 0;

    for (let index = 0; index < samples.length; index++) {
      const value = Math.abs((samples[index] - 128) / 128);
      energy += value * value;
      peak = Math.max(peak, value);
    }

    const volume = Math.sqrt(energy / samples.length);
    const threshold = Math.max(0.018, noiseFloor * 2.35);
    const voiceDetected = volume > threshold && peak > threshold * 1.45;

    if (!voiceDetected) {
      noiseFloor = noiseFloor * 0.985 + Math.min(volume, 0.04) * 0.015;
      voiceConfidence = Math.max(0, voiceConfidence - 0.075);
    } else {
      voiceConfidence = Math.min(1, voiceConfidence + 0.24);
      lastDetectedVoice = performance.now();
    }

    const speaking =
      voiceConfidence > 0.32 ||
      performance.now() - lastDetectedVoice < 170;

    const intensity = Math.max(
      0,
      Math.min(1, (volume - threshold) / Math.max(0.025, threshold * 2.2))
    );

    micButton.classList.toggle("speaking", speaking);
    chatSelfParticipant.classList.toggle("speaking", speaking);
    chatSelfParticipant.style.setProperty("--voice-intensity", intensity.toFixed(3));
    micButton.style.setProperty("--voice-intensity", intensity.toFixed(3));

    microphoneActivityFrame = requestAnimationFrame(measureVoice);
  }

  measureVoice();
}

function stopVoiceActivityDetection() {
  if (microphoneActivityFrame) {
    cancelAnimationFrame(microphoneActivityFrame);
    microphoneActivityFrame = null;
  }

  if (microphoneAudioContext) {
    microphoneAudioContext.close().catch(function () {});
    microphoneAudioContext = null;
  }

  microphoneAnalyser = null;
  micButton.classList.remove("speaking");
  chatSelfParticipant.classList.remove("speaking");
  micButton.style.removeProperty("--voice-intensity");
  chatSelfParticipant.style.removeProperty("--voice-intensity");
}

function showVoiceError(message) {
  voicePermissionText.textContent = message;
  voicePermission.hidden = false;
  stopMicrophone();
}

chatToggleButton.addEventListener("click", function () {
  if (roomChat.classList.contains("open")) {
    closeRoomChat();
  } else {
    openRoomChat();
  }
});

chatForm.addEventListener("submit", function (event) {
  event.preventDefault();
  sendRoomMessage(chatInput.value);
});

if (chatDragHandle) {
  chatDragHandle.addEventListener("pointerdown", function (event) {
    chatDragStartY = event.clientY;
    chatDragHandle.setPointerCapture(event.pointerId);
  });

  chatDragHandle.addEventListener("pointerup", function (event) {
    if (chatDragStartY !== null && event.clientY - chatDragStartY > 38) {
      closeRoomChat();
    }

    chatDragStartY = null;
  });

  chatDragHandle.addEventListener("pointercancel", function () {
    chatDragStartY = null;
  });
}

if (chatTopReturn) {
  chatTopReturn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    closeRoomChat();
  });
}

micButton.addEventListener("click", toggleMicrophone);

function openRoomSettings() {
  closeRoomChat();
  roomSettings.classList.add("open");
  roomSettings.setAttribute("aria-hidden", "false");
  roomSettingsButton.setAttribute("aria-expanded", "true");
}

function closeRoomSettings() {
  roomSettings.classList.remove("open");
  roomSettings.setAttribute("aria-hidden", "true");
  roomSettingsButton.setAttribute("aria-expanded", "false");
}

roomSettingsButton.addEventListener("click", function () {
  if (roomSettings.classList.contains("open")) {
    closeRoomSettings();
  } else {
    openRoomSettings();
  }
});

closeSettingsButton.addEventListener("click", closeRoomSettings);

opponentSoundToggle.addEventListener("change", function () {
  chatDisabled = opponentSoundToggle.checked;
  chatToggleButton.classList.toggle("disabled", chatDisabled);
  chatToggleButton.setAttribute("aria-disabled", String(chatDisabled));

  if (chatDisabled) {
    closeRoomChat();
  }

  showToast(chatDisabled ? "تم إيقاف المحادثة" : "تم تشغيل المحادثة");
});

function muteOpponentFromPicture() {
  if (opponentMuted) {
    return;
  }

  opponentMuted = true;
  speakerMuted = true;
  chatOpponentParticipant.classList.add("muted");
  opponentMuteBadge.hidden = false;
  showToast("تم كتم الخصم");
}

if (chatOpponentParticipant) {
  chatOpponentParticipant.addEventListener("click", muteOpponentFromPicture);
  chatOpponentParticipant.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      muteOpponentFromPicture();
    }
  });
}

gameSoundToggle.addEventListener("change", function () {
  showToast(gameSoundToggle.checked ? "تم تشغيل أصوات اللعبة" : "تم إيقاف أصوات اللعبة");
});

vibrationToggle.addEventListener("change", function () {
  if (vibrationToggle.checked && navigator.vibrate) {
    navigator.vibrate(40);
  }
});

surrenderButton.addEventListener("click", function () {
  surrenderConfirm.hidden = false;
});

cancelSurrenderButton.addEventListener("click", function () {
  surrenderConfirm.hidden = true;
});

confirmSurrenderButton.addEventListener("click", function () {
  surrenderConfirm.hidden = true;

  if (!matchSettled) {
    matchSettled = true;
    recordLoss();
  }

  closeGameTable();
  showToast("تم الانسحاب واحتساب المباراة خسارة");
});

dismissVoicePermission.addEventListener("click", function () {
  voicePermission.hidden = true;
});

stopMicrophone();

function setupPressEffect() {
  const items = document.querySelectorAll(
    ".clickable, .nav-button, .dialog-button, .play-price-button, .play-close-button, .cancel-search-button, .reset-table-button, .exit-table-button"
  );

  items.forEach(function (item) {
    item.addEventListener(
      "pointerdown",
      function () {
        item.classList.add("pressed");
      }
    );

    item.addEventListener(
      "pointerup",
      function () {
        item.classList.remove("pressed");
      }
    );

    item.addEventListener(
      "pointercancel",
      function () {
        item.classList.remove("pressed");
      }
    );

    item.addEventListener(
      "pointerleave",
      function () {
        item.classList.remove("pressed");
      }
    );
  });
}

function showToast(message) {
  let toast =
    document.getElementById("gameToast");

  if (!toast) {
    toast = document.createElement("div");

    toast.id = "gameToast";

    toast.style.position = "absolute";
    toast.style.left = "50%";
    toast.style.bottom = "125px";

    toast.style.transform =
      "translateX(-50%) translateY(20px)";

    toast.style.zIndex = "999";
    toast.style.maxWidth = "85%";

    toast.style.padding = "12px 18px";
    toast.style.borderRadius = "18px";

    toast.style.border =
      "1px solid rgba(68,225,255,.75)";

    toast.style.background =
      "linear-gradient(180deg, rgba(7,29,65,.96), rgba(1,9,25,.96))";

    toast.style.color = "#fff";
    toast.style.fontSize = "15px";
    toast.style.fontWeight = "800";
    toast.style.textAlign = "center";

    toast.style.opacity = "0";
    toast.style.pointerEvents = "none";
    toast.style.transition = ".25s ease";

    document
      .querySelector(".app")
      .appendChild(toast);
  }

  toast.textContent = message;

  clearTimeout(toast.hideTimer);

  requestAnimationFrame(function () {
    toast.style.opacity = "1";

    toast.style.transform =
      "translateX(-50%) translateY(0)";
  });

  toast.hideTimer = setTimeout(
    function () {
      toast.style.opacity = "0";

      toast.style.transform =
        "translateX(-50%) translateY(20px)";
    },
    1800
  );
}

function clamp(
  value,
  minimum,
  maximum
) {
  return Math.max(
    minimum,
    Math.min(
      maximum,
      value
    )
  );
}

function random(
  minimum,
  maximum
) {
  return (
    Math.random() *
    (
      maximum -
      minimum
    ) +
    minimum
  );
}

loadProfileImage();
applyMainSettings();
updateInterface();
setupPressEffect();

if (window.CarromOnline) {
  window.CarromOnline.on("ready", function (serverUser) {
    playerData.playerId = serverUser.id;
    playerData.playerName = serverUser.name || playerData.playerName;
    playerData.coins = Number(serverUser.coins) || 0;
    savePlayerData();
    updateInterface();
    document.documentElement.dataset.server = "online";
    const serverStatus = document.getElementById("serverStatus");
    if (serverStatus) {
      serverStatus.dataset.state = "online";
      serverStatus.querySelector("span").textContent = "متصل بالسيرفر";
    }
    syncOnlineFriends();
  });
  window.CarromOnline.on("friend-request", function (event) {
    const person = upsertOnlinePerson(event.from, {request:true});
    if (person) {
      updateSocialBadges();
      renderSocialPeople();
      showToast("وصل طلب صداقة من " + person.name);
    }
  });
  window.CarromOnline.on("friend-accepted", function (event) {
    const person = upsertOnlinePerson(event.user, {friend:true});
    saveSocialState();
    renderSocialPeople();
    if (person) showToast(person.name + " قبل طلب الصداقة");
  });
  window.CarromOnline.on("presence", function (event) {
    const person = event.user && socialPeople.find(function(item){ return item.id === event.user.id; });
    if (person) {
      person.online = Boolean(event.user.online);
      renderSocialPeople();
    }
  });
  window.CarromOnline.on("room-ready", function (event) {
    clearMatchmakingTimer();
    const opponent = event.room.opponents && event.room.opponents[0];
    currentBotName = opponent ? opponent.name : "لاعب متصل";
    matchmakingTitle.textContent = "تم العثور على خصم";
    matchmakingDesc.textContent = currentBotName + " جاهز للعب";
    loadingDots.hidden = true;
    setTimeout(openGameTable, 650);
  });
  window.CarromOnline.on("message", function (event) {
    const message = event.message;
    if (!message || (window.CarromOnline.me && message.userId === window.CarromOnline.me.id)) return;
    if (message.scope.startsWith("room:") && window.CarromOnline.room && message.scope === "room:" + window.CarromOnline.room.id) {
      addRoomMessage("opponent", message.text);
      return;
    }
    const person = message.scope === "group"
      ? socialPeople.find(function(item){ return item.group; })
      : socialPeople.find(function(item){ return item.id === message.userId; });
    if (!person) return;
    if (!socialMessagesStore[person.id]) socialMessagesStore[person.id] = [];
    socialMessagesStore[person.id].push({
      side:"them",
      authorId:message.userId,
      author:message.user ? message.user.name : person.name,
      avatar:message.user && message.user.name ? message.user.name.charAt(0) : person.avatar,
      text:message.text,
      time:new Date(message.at).toLocaleTimeString("ar-SA",{hour:"2-digit",minute:"2-digit"})
    });
    saveSocialState();
    if (socialSelectedPerson && socialSelectedPerson.id === person.id && !socialHub.hidden) renderSocialMessages();
    else addSocialUnread(person.group ? "chat" : "friend");
  });
  window.CarromOnline.on("shot", function (event) {
    if (!event.shot || !striker || shotActive) return;
    striker.x = Number(event.shot.x) || striker.x;
    striker.y = Number(event.shot.y) || striker.y;
    striker.vx = Number(event.shot.vx) || 0;
    striker.vy = Number(event.shot.vy) || 0;
    striker.spin = Number(event.shot.spin) || 0;
    shotActive = true;
    stopTurnTimer();
  });
  window.CarromOnline.on("voice-offer", async function (event) {
    const peer = await ensureOnlineVoicePeer();
    if (!peer) return;
    await peer.setRemoteDescription(event.description);
    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);
    window.CarromOnline.sendLive("voice-answer", { description: peer.localDescription });
  });
  window.CarromOnline.on("voice-answer", async function (event) {
    if (onlineVoicePeer) await onlineVoicePeer.setRemoteDescription(event.description);
  });
  window.CarromOnline.on("ice-candidate", async function (event) {
    if (onlineVoicePeer && event.candidate) {
      await onlineVoicePeer.addIceCandidate(event.candidate).catch(function () {});
    }
  });
  window.CarromOnline.connect(playerData.playerName).catch(function () {
    document.documentElement.dataset.server = "offline";
    const serverStatus = document.getElementById("serverStatus");
    if (serverStatus) {
      serverStatus.dataset.state = "offline";
      serverStatus.querySelector("span").textContent = "غير متصل بالسيرفر";
    }
  });
}

requestAnimationFrame(frame);
