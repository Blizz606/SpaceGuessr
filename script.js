import { gameModes, rankTiers } from "./game-config.js?v=20260718-profile-stats";
import { spaceLocations } from "./game-data.js?v=20260718-profile-stats";
import { isFeatureEnabled } from "./features-toggle.js?v=20260718-profile-stats";

// Small DOM grab section so everything important is up here in one place.
const screens = {
  start: document.getElementById("start-screen"),
  game: document.getElementById("game-screen"),
  end: document.getElementById("end-screen")
};

const gamePanel = document.querySelector(".game-panel");
const endPanel = document.querySelector(".end-panel");
const modeGroupButtons = document.querySelectorAll(".mode-group-button");
const modeButtons = document.querySelectorAll(".mode-card");
const modeGrid = document.getElementById("mode-grid");
const mobileModeSelect = document.getElementById("mobile-mode-select");
const learnPackModal = document.getElementById("learn-pack-modal");
const learnPackClose = document.getElementById("learn-pack-close");
const learnPackPicker = document.getElementById("learn-pack-picker");
const learnPackSelectedLabel = document.getElementById("learn-pack-selected-label");
const learnPackStart = document.getElementById("learn-pack-start");
const modeDescription = document.getElementById("mode-description");
const modeBestScore = document.getElementById("mode-best-score");
const startButton = document.getElementById("start-button");
const dailyButton = document.getElementById("daily-button");
const helpWidget = document.getElementById("help-widget");
const helpToggleButton = document.getElementById("help-toggle-button");
const helpCloseButton = document.getElementById("help-close-button");
const helpPanel = document.getElementById("help-panel");
const statsWidget = document.getElementById("stats-widget");
const statsToggleButton = document.getElementById("stats-toggle-button");
const statsCloseButton = document.getElementById("stats-close-button");
const statsPanel = document.getElementById("stats-panel");
const statsGamesPlayed = document.getElementById("stats-games-played");
const statsBestScore = document.getElementById("stats-best-score");
const statsBestStreak = document.getElementById("stats-best-streak");
const statsCorrectTotal = document.getElementById("stats-correct-total");
const statsFavoriteMode = document.getElementById("stats-favorite-mode");
const statsAccuracy = document.getElementById("stats-accuracy");
const resetLocalStatsButton = document.getElementById("reset-local-stats-button");
if (helpCloseButton) {
  helpCloseButton.textContent = "\u00D7";
}
const homeButtons = document.querySelectorAll(".home-button, .end-home-button");
const playAgainButton = document.getElementById("play-again-button");
const nextButton = document.getElementById("next-button");
const gameHeader = document.querySelector(".game-header");
const roundLabel = document.getElementById("round-label");
const roundValue = document.getElementById("round-value");
const roundProgressBar = document.getElementById("round-progress-bar");
const mistakesLabel = document.getElementById("mistakes-label");
const streakLabel = document.getElementById("streak-label");
const timerLabel = document.getElementById("timer-label");
const scoreLabel = document.getElementById("score-label");
const spaceImage = document.getElementById("space-image");
const imageFrame = document.querySelector(".image-frame");
const reversePromptOverlay = document.getElementById("reverse-prompt-overlay");
const reversePromptLabel = document.getElementById("reverse-prompt-label");
const reversePromptCopy = document.getElementById("reverse-prompt-copy");
const confettiLayer = document.getElementById("confetti-layer");
const answersContainer = document.getElementById("answers-container");
const feedbackPanel = document.getElementById("feedback-panel");
const feedbackText = document.getElementById("feedback-text");
const factText = document.getElementById("fact-text");
const sourceText = document.getElementById("source-text");
const promptLabel = document.getElementById("prompt-label");
const promptCopy = document.getElementById("prompt-copy");
const hintRow = document.querySelector(".hint-row");
const hintButton = document.getElementById("hint-button");
const hintCount = document.getElementById("hint-count");
const finalHeading = document.getElementById("final-heading");
const finalScore = document.getElementById("final-score");
const runSummaryTitle = document.getElementById("run-summary-title");
const runSummaryText = document.getElementById("run-summary-text");
const ratingText = document.getElementById("rating-text");
const rankBadge = document.getElementById("rank-badge");
const endStatCorrect = document.getElementById("end-stat-correct");
const endStatWrong = document.getElementById("end-stat-wrong");
const endStatAccuracy = document.getElementById("end-stat-accuracy");
const openLearnReviewButton = document.getElementById("open-learn-review-button");
const learnReviewModal = document.getElementById("learn-review-modal");
const closeLearnReviewButton = document.getElementById("close-learn-review-button");
const learnReviewPanel = document.querySelector(".learn-review-modal .learn-review-panel");
const learnReviewCount = document.getElementById("learn-review-count");
const learnReviewList = document.getElementById("learn-review-list");
const openShareButton = document.getElementById("open-share-button");
const shareModal = document.getElementById("share-modal");
const closeShareButton = document.getElementById("close-share-button");
const sharePreviewText = document.getElementById("share-preview-text");
const copyShareButton = document.getElementById("copy-share-button");
const nativeShareButton = document.getElementById("native-share-button");
const transitionOverlay = document.getElementById("transition-overlay");
const transitionText = document.getElementById("transition-text");
const toastMessage = document.getElementById("toast-message");
const themeToggle = document.getElementById("theme-toggle");
const scoreForm = document.getElementById("score-form");
const savedPlayerName = document.getElementById("saved-player-name");
const playerNameInput = document.getElementById("player-name");
const autoNameForm = document.getElementById("auto-name-form");
const autoPlayerNameInput = document.getElementById("auto-player-name");
const saveMessage = document.getElementById("save-message");
const endLeaderboardToggle = document.getElementById("end-leaderboard-toggle");
const endLeaderboardPanel = document.getElementById("end-leaderboard-panel");
const leaderboardList = document.getElementById("leaderboard-list");
const leaderboardMode = document.getElementById("leaderboard-mode");
const menuScoreboardToggle = document.getElementById("menu-scoreboard-toggle");
const menuScoreboardPanel = document.getElementById("menu-scoreboard-panel");
const menuLeaderboardList = document.getElementById("menu-leaderboard-list");
const menuLeaderboardMode = document.getElementById("menu-leaderboard-mode");
const menuLeaderboardPanelCard = document.querySelector(".menu-leaderboard-panel");
const leaderboardOnlyElements = document.querySelectorAll(".leaderboard-only");

const uiStateTargets = [document.body, gamePanel, endPanel].filter(Boolean);
const uiStateClassMap = {
  transitioning: "is-transitioning",
  answering: "is-answering",
  feedbackOpen: "is-feedback-open",
  roundComplete: "is-round-complete",
  resultsView: "is-results-view"
};

const supabaseUrl = "https://dqevbyrtagkmgesrixrf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxZXZieXJ0YWdrbWdlc3JpeHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MjA1NTUsImV4cCI6MjA5NzE5NjU1NX0.-OITqkgJLIGi1KPHQcxxdPsccUk6UYwr6kKo5wUVjUc";
const leaderboardTable = "leaderboard";
const leaderboardStorageKey = "spaceguessr-leaderboard";
const localStatsStorageKey = "spaceguessr-local-stats";
const playerNameStorageKey = "spaceguessr-player-name";
const dailyPlayedStorageKey = "spaceguessr-daily-played";
const gameThemeStorageKey = "spaceguessr-game-theme";
const mobileThemeLock = window.matchMedia("(max-width: 640px)");
const supabaseClient = window.supabase
  ? window.supabase.createClient(supabaseUrl, supabaseAnonKey)
  : null;

let gameDeck = [];
let randomBag = [];
let currentRound = 0;
let totalRounds = gameModes.classic.rounds;
let score = 0;
let hasAnswered = false;
let selectedModeKey = "classic";
let hasSavedCurrentScore = false;
let wrongAnswerCount = 0;
let correctGuessCount = 0;
let currentStreak = 0;
let bestStreak = 0;
let learnMissedQuestions = [];
let selectedModeGroup = "casual";
let selectedLearnPackId = "all";
let isLearnPackPickerOpen = false;
let contentQuestions = [];
let contentQuestionsById = new Map();
let contentPacks = [];
let hintsLeft = 0;
let usedHintThisRound = false;
let timeLeft = 0;
let scoreFeedbackTimer;
let rewardFeedbackTimer;
let streakFeedbackTimer;
let gameOverTimer;
let roundTimer;
let blindRevealTimer;
let blindRevealStepIndex = 0;
let confettiCleanupTimer;
let copyButtonResetTimer;
let roundStatusTimer;
let toastTimer;
let modeGroupTransitionTimer;
let menuLeaderboardCache = null;
let menuLeaderboardPrefetchPromise = null;
let isEndLeaderboardOpen = false;
let isLearnReviewModalOpen = false;
let isStatsPanelOpen = false;
let audioContext = null;
let audioMasterGain = null;
const TRANSITION_MIN_DURATION = 420;
const TRANSITION_MAX_DURATION = 2000;
const FEEDBACK_OPEN_DELAY = 220;
const NEXT_BUTTON_DELAY = 380;
const ROUND_PROGRESS_VISIBLE_DURATION = 1500;
const MODE_GROUP_EXIT_DURATION = 170;
const MODE_GROUP_ENTER_DURATION = 420;
const BLIND_REVEAL_INTERVAL = 2500;
const BLIND_REVEAL_HIDDEN_PROGRESS = 0.08;
const BLIND_REVEAL_SETTLE_DELAY = 140;
const GAME_LAUNCH_ANIMATION_DURATION = 1280;
const BLIND_REVEAL_STEPS = [0.14, 0.24, 0.36, 0.5, 0.66, 0.84, 1];
const BLIND_REVEAL_POINTS = [80, 70, 60, 50, 40, 30, 20];
const STREAK_BONUS_STEP = 10;
const CONFETTI_COLORS = ["#f2d74e", "#95c3de", "#ff9a91", "#7dd3fc", "#86efac"];
const CONFETTI_COUNT = 56;
const AUDIO_MASTER_LEVEL = 0.22;
const preloadedImageUrls = new Set();
const modeGroups = {
  casual: ["quick", "classic", "timed", "blind"],
  special: ["learn", "reverse"]
};

const fallbackLearnPacks = [
  {
    id: "all",
    label: "All Images",
    description: "The full SpaceGuessr image pool.",
    difficulty: "mixed",
    questionIds: spaceLocations.map((question) => question.nasaId),
    coverQuestionId: spaceLocations[0]?.nasaId
  }
];

function normalizeContentQuestion(question) {
  return {
    imageUrl: question.imageUrl,
    nasaId: question.nasaId || question.id,
    source: question.source,
    correctAnswer: question.answer || question.correctAnswer,
    wrongAnswers: question.wrongAnswers,
    fact: question.fact,
    difficulty: question.difficulty,
    category: question.category,
    tags: question.tags || []
  };
}

function getFallbackLearnQuestions() {
  return spaceLocations;
}

function getActiveLearnPack() {
  return contentPacks.find((pack) => pack.id === selectedLearnPackId)
    || contentPacks[0]
    || fallbackLearnPacks[0];
}

function getLearnPackQuestions(pack = getActiveLearnPack()) {
  if (!pack || !contentQuestionsById.size) {
    return getFallbackLearnQuestions();
  }

  const packQuestions = pack.questionIds
    .map((questionId) => contentQuestionsById.get(questionId))
    .filter(Boolean)
    .map(normalizeContentQuestion);

  return packQuestions.length > 0 ? packQuestions : getFallbackLearnQuestions();
}

function getPackCoverQuestion(pack) {
  const coverId = pack.coverQuestionId || pack.questionIds?.[0];
  return contentQuestionsById.get(coverId) || contentQuestions[0] || null;
}

function getPackCount(pack) {
  return Array.isArray(pack.questionIds) ? pack.questionIds.length : 0;
}

function getLearnPackDisplayLabel(pack) {
  return pack.id === "all" ? "No pack" : pack.label;
}

function getLearnPackDisplayDescription(pack) {
  return pack.id === "all"
    ? "Use the full image pool with no filter."
    : pack.description;
}

function setLearnPackPickerOpen(isOpen) {
  const shouldOpen = isOpen && hasLearnPackSelection();
  isLearnPackPickerOpen = shouldOpen;
  learnPackModal?.classList.toggle("open", shouldOpen);
  learnPackModal?.setAttribute("aria-hidden", String(!shouldOpen));
}

function updateLearnPackSummary() {
  const activePack = getActiveLearnPack();

  if (learnPackSelectedLabel) {
    learnPackSelectedLabel.textContent = `Selected: ${getLearnPackDisplayLabel(activePack)}`;
  }
}

function renderLearnPackPicker() {
  if (!learnPackPicker) {
    return;
  }

  const packs = contentPacks.length > 0 ? contentPacks : fallbackLearnPacks;
  learnPackPicker.innerHTML = "";
  updateLearnPackSummary();

  packs
    .forEach((pack, index) => {
      const coverQuestion = getPackCoverQuestion(pack);
      const button = document.createElement("button");
      button.className = "learn-pack-card";
      button.type = "button";
      button.dataset.packId = pack.id;
      button.style.setProperty("--pack-index", String(index));
      button.classList.toggle("selected", pack.id === selectedLearnPackId);
      button.setAttribute("aria-pressed", String(pack.id === selectedLearnPackId));

      const cover = document.createElement("span");
      cover.className = "learn-pack-cover";
      if (coverQuestion?.imageUrl) {
        cover.style.backgroundImage = `url("${coverQuestion.imageUrl}")`;
      }

      const overlay = document.createElement("span");
      overlay.className = "learn-pack-overlay";

      const label = document.createElement("span");
      label.className = "learn-pack-label";
      label.textContent = getLearnPackDisplayLabel(pack);

      const meta = document.createElement("span");
      meta.className = "learn-pack-meta";
      meta.textContent = `${getPackCount(pack)} images`;

      const copy = document.createElement("span");
      copy.className = "learn-pack-copy";
      copy.textContent = getLearnPackDisplayDescription(pack);

      cover.appendChild(overlay);
      button.append(cover, label, meta, copy);
      button.addEventListener("click", () => {
        selectedLearnPackId = pack.id;
        renderLearnPackPicker();
      });

      learnPackPicker.appendChild(button);
    });
}

async function loadContentPacks() {
  if (!hasLearnPackSelection() || !isFeatureEnabled("content.jsonPacks")) {
    contentQuestions = [];
    contentQuestionsById = new Map();
    contentPacks = fallbackLearnPacks;
    selectedLearnPackId = "all";
    renderLearnPackPicker();
    return;
  }

  try {
    const response = await fetch("content/spaceguessr-content.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Content request failed with ${response.status}`);
    }

    const content = await response.json();
    contentQuestions = Array.isArray(content.questions) ? content.questions : [];
    contentQuestionsById = new Map(contentQuestions.map((question) => [question.id, question]));
    contentPacks = Array.isArray(content.packs) ? content.packs : [];

    if (!contentPacks.some((pack) => pack.id === selectedLearnPackId)) {
      selectedLearnPackId = contentPacks.find((pack) => pack.id === "all")?.id
        || contentPacks[0]?.id
        || selectedLearnPackId;
    }
  } catch {
    contentQuestions = [];
    contentQuestionsById = new Map();
    contentPacks = fallbackLearnPacks;
    selectedLearnPackId = "all";
  }

  renderLearnPackPicker();
}

function getSupabaseErrorMessage(error, fallbackText) {
  if (!error) {
    return fallbackText;
  }

  const details = [error.message, error.details, error.hint]
    .filter(Boolean)
    .join(" ");

  return details
    ? `${fallbackText} (${details})`
    : fallbackText;
}

function applyGameTheme(themeName) {
  document.body.classList.remove("game-ui-dark");

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", "false");
    themeToggle.setAttribute("aria-label", "Game UI stays in light mode");
  }

  localStorage.setItem(gameThemeStorageKey, "light");
}

function loadGameTheme() {
  applyGameTheme("light");
}

function syncThemeForViewport() {
  applyGameTheme("light");
}

function ensureAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
    audioMasterGain = audioContext.createGain();
    audioMasterGain.gain.value = AUDIO_MASTER_LEVEL;
    audioMasterGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    void audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function scheduleTone(startTime, frequency, duration, volume, type = "sine") {
  const activeAudioContext = ensureAudioContext();

  if (!activeAudioContext || !audioMasterGain) {
    return;
  }

  const oscillator = activeAudioContext.createOscillator();
  const gainNode = activeAudioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume), startTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioMasterGain);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.04);
}

function playSoundEffect(effectName) {
  if (!isFeatureEnabled("gameplay.audioFeedback")) {
    return;
  }

  const activeAudioContext = ensureAudioContext();

  if (!activeAudioContext) {
    return;
  }

  const now = activeAudioContext.currentTime + 0.01;

  if (effectName === "correct") {
    scheduleTone(now, 523.25, 0.12, 0.12, "triangle");
    scheduleTone(now + 0.1, 659.25, 0.16, 0.11, "triangle");
    scheduleTone(now + 0.2, 783.99, 0.22, 0.1, "sine");
    return;
  }

  if (effectName === "wrong") {
    scheduleTone(now, 220, 0.16, 0.11, "sawtooth");
    scheduleTone(now + 0.08, 174.61, 0.22, 0.1, "triangle");
    return;
  }

  if (effectName === "streak") {
    scheduleTone(now, 659.25, 0.08, 0.1, "square");
    scheduleTone(now + 0.07, 783.99, 0.1, 0.09, "square");
    scheduleTone(now + 0.14, 987.77, 0.14, 0.08, "triangle");
    return;
  }

  if (effectName === "hint") {
    scheduleTone(now, 440, 0.08, 0.06, "sine");
    scheduleTone(now + 0.08, 587.33, 0.1, 0.05, "triangle");
    return;
  }

  if (effectName === "finish-good") {
    scheduleTone(now, 392, 0.16, 0.12, "triangle");
    scheduleTone(now + 0.1, 523.25, 0.2, 0.11, "triangle");
    scheduleTone(now + 0.22, 659.25, 0.3, 0.1, "sine");
    scheduleTone(now + 0.36, 783.99, 0.42, 0.08, "sine");
    return;
  }

  if (effectName === "finish-bad") {
    scheduleTone(now, 311.13, 0.16, 0.1, "triangle");
    scheduleTone(now + 0.12, 261.63, 0.24, 0.09, "triangle");
  }
}

function isInfiniteMode() {
  return false;
}

function isDailyMode() {
  return selectedModeKey === "daily";
}

function isTimedMode() {
  return selectedModeKey === "timed";
}

function isBlindRevealMode() {
  return selectedModeKey === "blind";
}

function isLearnMode() {
  return selectedModeKey === "learn";
}

function isReverseLearnMode() {
  return selectedModeKey === "reverse";
}

function isStudyMode() {
  return isLearnMode() || isReverseLearnMode();
}

function isModeEnabled(modeKey) {
  return isFeatureEnabled(`modes.${modeKey}`);
}

function hasRoundCountdown() {
  return isTimedMode() || isBlindRevealMode();
}

function hasLeaderboardMode() {
  return isFeatureEnabled("leaderboard.autoSave") && !isDailyMode() && !isStudyMode();
}

function hasLearnPackSelection() {
  return isFeatureEnabled("gameplay.learnPackSelection");
}

function getActiveModeConfig() {
  return gameModes[selectedModeKey];
}

function updateHintUI() {
  hintRow.classList.toggle("hidden", isDailyMode() || isStudyMode() || !isFeatureEnabled("gameplay.hints"));

  if (isDailyMode() || isStudyMode() || !isFeatureEnabled("gameplay.hints")) {
    return;
  }

  hintButton.disabled = hasAnswered || usedHintThisRound || hintsLeft <= 0;
  hintCount.textContent = String(hintsLeft);

  if (usedHintThisRound) {
    hintButton.classList.add("used");
    return;
  }

  if (hintsLeft <= 0) {
    hintButton.classList.add("used");
    return;
  }

  hintButton.classList.remove("used");
}

function updateTimerUI() {
  if (!hasRoundCountdown()) {
    timerLabel.classList.add("hidden");
    return;
  }

  timerLabel.classList.remove("hidden");
  timerLabel.textContent = String(timeLeft);
  timerLabel.setAttribute("aria-label", `${timeLeft} seconds remaining`);
  timerLabel.classList.toggle("danger", timeLeft <= 5);
}

function stopRoundTimer() {
  clearInterval(roundTimer);
}

function startRoundTimer() {
  if (!hasRoundCountdown()) {
    updateTimerUI();
    return;
  }

  stopRoundTimer();
  timeLeft = getActiveModeConfig().seconds;
  updateTimerUI();

  roundTimer = setInterval(() => {
    timeLeft -= 1;
    updateTimerUI();

    if (timeLeft <= 0) {
      stopRoundTimer();
      handleAnswer(null, "__timeout__");
    }
  }, 1000);
}

function stopBlindRevealTimer() {
  window.clearInterval(blindRevealTimer);
  blindRevealTimer = null;
}

function getBlindRevealPoints() {
  const safeIndex = Math.min(blindRevealStepIndex, BLIND_REVEAL_POINTS.length - 1);
  return BLIND_REVEAL_POINTS[safeIndex];
}

function getStreakBonus(streakValue) {
  return Math.max(0, streakValue - 1) * STREAK_BONUS_STEP;
}

function getPointsForCorrectGuess(streakValue) {
  const basePoints = isBlindRevealMode() ? getBlindRevealPoints() : isStudyMode() ? 35 : 50;
  const streakBonus = getStreakBonus(streakValue);

  return {
    basePoints,
    streakBonus,
    totalPoints: basePoints + streakBonus
  };
}

function getLearningNote(question) {
  const answer = question.correctAnswer;
  const lowerAnswer = answer.toLowerCase();

  if (["mars", "mercury", "the moon", "ceres", "pluto"].includes(lowerAnswer)) {
    return `${answer} often shows rocky terrain, craters, dust, plains, or sharp surface features. Look for texture before guessing from color alone.`;
  }

  if (["jupiter", "saturn", "uranus", "neptune"].includes(lowerAnswer)) {
    return `${answer} is a planet clue. Try reading the atmosphere first: bands, rings, storms, haze, or a smooth blue-green disk can narrow it down fast.`;
  }

  if (["titan", "europa", "callisto", "dione", "ariel", "miranda", "phobos", "hydra"].includes(lowerAnswer)) {
    return `${answer} is a moon, so surface texture matters more than dramatic color. Icy cracks, crater density, and odd shapes are useful tells.`;
  }

  if (lowerAnswer.includes("nebula")) {
    return `${answer} is a nebula. Nebula images usually show glowing gas clouds, star-forming regions, shells, or wispy structures rather than a solid surface.`;
  }

  if (lowerAnswer.includes("galaxy")) {
    return `${answer} is a galaxy. Look for a bright core, spiral/dust structure, or a wide star-filled shape instead of a close planetary surface.`;
  }

  return `For ${answer}, focus on shape, texture, color, and whether the image looks like a surface, planet disk, nebula, or galaxy.`;
}

function updatePromptContent(question = null) {
  if (!promptLabel || !promptCopy || !reversePromptOverlay || !reversePromptLabel || !reversePromptCopy) {
    return;
  }

  if (isReverseLearnMode() && question) {
    promptLabel.textContent = "Pick the right object";
    promptCopy.textContent = "Read the clue in the center before you answer.";
    promptCopy.classList.remove("hidden");
    promptCopy.setAttribute("aria-hidden", "false");
    reversePromptLabel.textContent = "Which object fits this clue?";
    reversePromptCopy.textContent = question.fact;
    reversePromptOverlay.classList.remove("hidden", "is-exiting");
    reversePromptOverlay.setAttribute("aria-hidden", "false");
    return;
  }

  promptLabel.textContent = "Where are you?";
  promptCopy.textContent = "";
  promptCopy.classList.add("hidden");
  promptCopy.setAttribute("aria-hidden", "true");
  reversePromptCopy.textContent = "";
  reversePromptOverlay.classList.add("hidden");
  reversePromptOverlay.classList.remove("is-exiting");
  reversePromptOverlay.setAttribute("aria-hidden", "true");
}

function setHelpPanelOpen(isOpen) {
  if (!helpWidget || !helpToggleButton || !helpPanel) {
    return;
  }

  helpWidget.classList.toggle("open", isOpen);
  helpPanel.classList.toggle("open", isOpen);
  helpPanel.setAttribute("aria-hidden", String(!isOpen));
  helpToggleButton.setAttribute("aria-expanded", String(isOpen));
}

function getDefaultLocalStats() {
  return {
    gamesPlayed: 0,
    bestScore: 0,
    bestStreak: 0,
    totalCorrect: 0,
    totalWrong: 0,
    totalRoundsPlayed: 0,
    modePlays: {}
  };
}

function getLocalStats() {
  const savedStats = localStorage.getItem(localStatsStorageKey);

  if (!savedStats) {
    return getDefaultLocalStats();
  }

  try {
    const parsedStats = JSON.parse(savedStats);
    return {
      ...getDefaultLocalStats(),
      ...parsedStats,
      modePlays: {
        ...getDefaultLocalStats().modePlays,
        ...(parsedStats.modePlays || {})
      }
    };
  } catch {
    return getDefaultLocalStats();
  }
}

function getFavoriteModeLabel(stats = getLocalStats()) {
  const entries = Object.entries(stats.modePlays || {})
    .sort((a, b) => b[1] - a[1]);

  if (!entries.length || entries[0][1] <= 0) {
    return "None yet";
  }

  const [modeKey] = entries[0];
  return gameModes[modeKey]?.label || "None yet";
}

function renderLocalStats() {
  if (
    !statsGamesPlayed
    || !statsBestScore
    || !statsBestStreak
    || !statsCorrectTotal
    || !statsFavoriteMode
    || !statsAccuracy
  ) {
    return;
  }

  const stats = getLocalStats();
  const totalGuesses = stats.totalCorrect + stats.totalWrong;
  const accuracyValue = totalGuesses > 0
    ? Math.round((stats.totalCorrect / totalGuesses) * 100)
    : 0;

  statsGamesPlayed.textContent = String(stats.gamesPlayed);
  statsBestScore.textContent = `${stats.bestScore} pts`;
  statsBestStreak.textContent = `${stats.bestStreak}x`;
  statsCorrectTotal.textContent = String(stats.totalCorrect);
  statsFavoriteMode.textContent = getFavoriteModeLabel(stats);
  statsAccuracy.textContent = `${accuracyValue}%`;
}

function saveLocalStats(stats) {
  localStorage.setItem(localStatsStorageKey, JSON.stringify(stats));
  renderLocalStats();
}

function setStatsPanelOpen(isOpen) {
  if (!statsWidget || !statsToggleButton || !statsPanel) {
    return;
  }

  isStatsPanelOpen = isOpen;
  statsWidget.classList.toggle("open", isOpen);
  statsPanel.classList.toggle("open", isOpen);
  statsPanel.setAttribute("aria-hidden", String(!isOpen));
  statsToggleButton.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    renderLocalStats();
  }
}

function recordLocalRunStats() {
  const stats = getLocalStats();

  stats.gamesPlayed += 1;
  stats.bestScore = Math.max(stats.bestScore, score);
  stats.bestStreak = Math.max(stats.bestStreak, bestStreak);
  stats.totalCorrect += correctGuessCount;
  stats.totalWrong += wrongAnswerCount;
  stats.totalRoundsPlayed += totalRounds;
  stats.modePlays[selectedModeKey] = (stats.modePlays[selectedModeKey] || 0) + 1;

  saveLocalStats(stats);
}

function setBlindRevealProgress(progress) {
  const normalizedProgress = Math.max(0, Math.min(1, progress));
  const revealPercent = `${(normalizedProgress * 100).toFixed(2)}%`;
  const blurPixels = `${(10 - (normalizedProgress * 10)).toFixed(2)}px`;

  spaceImage.style.setProperty("--blind-reveal-progress", revealPercent);
  spaceImage.style.setProperty("--blind-reveal-blur", blurPixels);
}

function applyBlindRevealState() {
  const imageFrame = spaceImage.parentElement;

  if (!imageFrame) {
    return;
  }

  imageFrame.classList.toggle("blind-reveal-mode", isBlindRevealMode() && isFeatureEnabled("gameplay.blindRevealEffect"));

  if (!isBlindRevealMode() || !isFeatureEnabled("gameplay.blindRevealEffect")) {
    setBlindRevealProgress(1);
    stopBlindRevealTimer();
  }
}

function startBlindRevealTimer() {
  if (!isBlindRevealMode() || !isFeatureEnabled("gameplay.blindRevealEffect")) {
    applyBlindRevealState();
    return;
  }

  stopBlindRevealTimer();
  applyBlindRevealState();
  blindRevealStepIndex = 0;
  setBlindRevealProgress(BLIND_REVEAL_STEPS[blindRevealStepIndex]);

  blindRevealTimer = window.setInterval(() => {
    blindRevealStepIndex += 1;
    const nextProgress = BLIND_REVEAL_STEPS[Math.min(blindRevealStepIndex, BLIND_REVEAL_STEPS.length - 1)];
    setBlindRevealProgress(nextProgress);

    if (blindRevealStepIndex >= BLIND_REVEAL_STEPS.length - 1) {
      stopBlindRevealTimer();
    }
  }, BLIND_REVEAL_INTERVAL);
}

async function swapRoundImage(currentQuestion) {
  const isBlindMode = isBlindRevealMode();

  imageFrame?.classList.add("image-loading");

  if (isBlindMode) {
    stopBlindRevealTimer();
    imageFrame.classList.add("blind-reveal-resetting");
    setBlindRevealProgress(BLIND_REVEAL_HIDDEN_PROGRESS);
    await waitForNextFrame();
    await wait(BLIND_REVEAL_SETTLE_DELAY);
  }

  const readyImageUrl = await preloadImageOnce(currentQuestion.imageUrl)
    .catch(() => currentQuestion.imageUrl);

  await new Promise((resolve) => {
    let resolved = false;

    const finishImageSwap = () => {
      if (resolved) {
        return;
      }

      resolved = true;
      spaceImage.classList.add("loaded");
      imageFrame?.classList.remove("image-loading");

      if (isBlindMode) {
        requestAnimationFrame(() => {
          imageFrame.classList.remove("blind-reveal-resetting");
          resolve();
        });
        return;
      }

      resolve();
    };

    spaceImage.onload = finishImageSwap;
    spaceImage.onerror = finishImageSwap;
    spaceImage.classList.remove("loaded");
    spaceImage.alt = `Space image for ${currentQuestion.correctAnswer}`;
    spaceImage.src = readyImageUrl;

    if (spaceImage.complete) {
      finishImageSwap();
    }
  });
}

function waitForNextFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

async function animateHintRemoval(buttonsToRemove) {
  const visibleButtons = Array.from(answersContainer.querySelectorAll(".answer-button"))
    .filter((button) => !button.hidden);
  const firstRects = new Map(
    visibleButtons.map((button) => [button, button.getBoundingClientRect()])
  );

  buttonsToRemove.forEach((button) => {
    button.disabled = true;
    button.setAttribute("aria-hidden", "true");
    button.classList.add("hint-removing");
  });

  await waitForNextFrame();
  await new Promise((resolve) => {
    setTimeout(resolve, 260);
  });

  buttonsToRemove.forEach((button) => {
    button.classList.remove("hint-removing");
    button.classList.add("hint-hidden");
    button.hidden = true;
  });

  await waitForNextFrame();

  visibleButtons
    .filter((button) => !buttonsToRemove.includes(button) && !button.hidden)
    .forEach((button) => {
      const firstRect = firstRects.get(button);
      const lastRect = button.getBoundingClientRect();
      const deltaX = firstRect.left - lastRect.left;
      const deltaY = firstRect.top - lastRect.top;

      if (deltaX === 0 && deltaY === 0) {
        return;
      }

      button.animate(
        [
          {
            transform: `translate(${deltaX}px, ${deltaY}px) scale(0.985)`,
            boxShadow: "0 18px 38px rgba(15, 23, 42, 0.14)"
          },
          {
            transform: "translate(0, 0) scale(1)",
            boxShadow: ""
          }
        ],
        {
          duration: 340,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)"
        }
      );
    });
}

async function useHint() {
  if (isDailyMode() || isStudyMode()) {
    return;
  }

  if (hasAnswered || usedHintThisRound || hintsLeft <= 0) {
    return;
  }

  const currentQuestion = gameDeck[currentRound];
  const answerButtons = Array.from(answersContainer.querySelectorAll(".answer-button"));
  const wrongButtons = shuffleArray(
    answerButtons.filter((button) => button.textContent !== currentQuestion.correctAnswer)
  ).slice(0, 2);

  hintsLeft -= 1;
  usedHintThisRound = true;
  playSoundEffect("hint");
  updateHintUI();
  await animateHintRemoval(wrongButtons);
}

function getDailyKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function getDailyQuestion() {
  const dailyKey = getDailyKey();
  const seed = [...dailyKey].reduce((total, character) => total + character.charCodeAt(0), 0);
  return spaceLocations[seed % spaceLocations.length];
}

function hasPlayedDailyToday() {
  return localStorage.getItem(dailyPlayedStorageKey) === getDailyKey();
}

function markDailyAsPlayed() {
  localStorage.setItem(dailyPlayedStorageKey, getDailyKey());
}

function updateDailyAvailability() {
  if (dailyButton && !isModeEnabled("daily")) {
    dailyButton.hidden = true;
    dailyButton.setAttribute("aria-hidden", "true");
    return;
  }

  const isLocked = hasPlayedDailyToday();

  if (dailyButton) {
    dailyButton.hidden = false;
    dailyButton.setAttribute("aria-hidden", "false");
    dailyButton.disabled = isLocked;
    dailyButton.classList.toggle("locked", isLocked);
    dailyButton.setAttribute(
      "aria-label",
      isLocked ? "Daily challenge already played today" : "Start daily challenge"
    );
  }
}

function updateStats() {
  const totalGuesses = correctGuessCount + wrongAnswerCount;
  const accuracy = totalGuesses === 0
    ? 0
    : Math.round((correctGuessCount / totalGuesses) * 100);

  endStatCorrect.textContent = String(correctGuessCount);
  endStatWrong.textContent = String(wrongAnswerCount);
  endStatAccuracy.textContent = `${accuracy}%`;
}

function renderLearnReview() {
  if (!learnReviewList || !learnReviewCount || !openLearnReviewButton) {
    return;
  }

  const missedCount = learnMissedQuestions.length;
  const shouldShowReviewToggle = isStudyMode();

  openLearnReviewButton.classList.toggle("hidden", !shouldShowReviewToggle);
  openLearnReviewButton.setAttribute("aria-hidden", String(!shouldShowReviewToggle));
  openLearnReviewButton.textContent = missedCount > 0
    ? `Review missed images (${missedCount})`
    : "Review lesson";
  learnReviewCount.textContent = missedCount === 1 ? "1 missed" : `${missedCount} missed`;
  learnReviewList.innerHTML = "";

  if (!isStudyMode()) {
    toggleLearnReviewModal(false);
    return;
  }

  if (missedCount === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "learn-review-empty";
    emptyState.textContent = "No missed images this time.";
    learnReviewList.appendChild(emptyState);
    return;
  }

  learnMissedQuestions.forEach((item) => {
    const card = document.createElement("article");
    card.className = "learn-review-card";

    const image = document.createElement("img");
    image.className = "learn-review-image";
    image.src = item.imageUrl;
    image.alt = `Review image for ${item.correctAnswer}`;
    image.loading = "lazy";

    const body = document.createElement("div");
    body.className = "learn-review-body";

    const title = document.createElement("h4");
    title.textContent = item.correctAnswer;

    const guess = document.createElement("p");
    guess.className = "learn-review-guess";
    guess.textContent = item.selectedAnswer === "__timeout__"
      ? "Your answer: time ran out"
      : `Your answer: ${item.selectedAnswer}`;

    const note = document.createElement("p");
    note.className = "learn-review-note";
    note.textContent = item.learningNote;

    body.append(title, guess, note);
    card.append(image, body);
    learnReviewList.appendChild(card);
  });
}

function toggleLearnReviewModal(forceOpen) {
  if (!learnReviewModal || !openLearnReviewButton) {
    return;
  }

  const shouldOpen = typeof forceOpen === "boolean"
    ? forceOpen
    : learnReviewModal.classList.contains("hidden");

  isLearnReviewModalOpen = shouldOpen;
  learnReviewModal.classList.toggle("hidden", !shouldOpen);
  learnReviewModal.classList.toggle("open", shouldOpen);
  learnReviewModal.setAttribute("aria-hidden", String(!shouldOpen));
  openLearnReviewButton.setAttribute("aria-expanded", String(shouldOpen));
}

function getAccuracyValue() {
  const totalGuesses = correctGuessCount + wrongAnswerCount;

  if (totalGuesses === 0) {
    return 0;
  }

  return Math.round((correctGuessCount / totalGuesses) * 100);
}

function getFinishedRounds() {
  return totalRounds;
}

function getRankInfo(scoreValue) {
  let currentRank = rankTiers[0];

  for (let i = 0; i < rankTiers.length; i += 1) {
    if (scoreValue >= rankTiers[i].min) {
      currentRank = rankTiers[i];
    }
  }

  return currentRank;
}

function getShareText() {
  const modeLabel = gameModes[selectedModeKey].label;
  const roundsText = `${getFinishedRounds()} round${getFinishedRounds() === 1 ? "" : "s"}`;
  const accuracyText = `${getAccuracyValue()}% accuracy`;
  const streakText = bestStreak > 1 ? ` | best streak ${bestStreak}` : "";

  if (isDailyMode()) {
    const dailyResult = score > 0 ? "Success" : "Failed";
    return `I played today's SpaceGuessr Daily: ${dailyResult} | ${accuracyText}${streakText} https://blizz606.github.io/SpaceGuessr`;
  }

  return `I finished a ${modeLabel} run in SpaceGuessr with ${score} points | ${roundsText} | ${accuracyText}${streakText} https://blizz606.github.io/SpaceGuessr`;
}

function updateShareCard() {
  const shareText = getShareText();

  sharePreviewText.textContent = shareText;
  nativeShareButton.classList.toggle(
    "hidden",
    typeof navigator.share !== "function" || !isFeatureEnabled("sharing.resultShare")
  );
}

function toggleShareModal(forceOpen) {
  if (!isFeatureEnabled("sharing.resultShare") && forceOpen !== false) {
    return;
  }

  const shouldOpen = typeof forceOpen === "boolean"
    ? forceOpen
    : shareModal.classList.contains("hidden");

  shareModal.classList.toggle("hidden", !shouldOpen);
  shareModal.classList.toggle("open", shouldOpen);
  shareModal.setAttribute("aria-hidden", String(!shouldOpen));

  if (shouldOpen) {
    updateShareCard();
  }
}

async function copyShareText() {
  const shareText = getShareText();

  try {
    await navigator.clipboard.writeText(shareText);
    clearTimeout(copyButtonResetTimer);
    copyShareButton.classList.add("copied");
    copyButtonResetTimer = setTimeout(() => {
      copyShareButton.classList.remove("copied");
    }, 1200);
  } catch {}
}

async function shareRun() {
  if (typeof navigator.share !== "function") {
    return;
  }

  try {
    await navigator.share({
      title: "SpaceGuessr",
      text: getShareText(),
      url: "https://blizz606.github.io/SpaceGuessr"
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      return;
    }
  }
}

function updateStreakLabel() {
  streakLabel.textContent = `Streak: ${currentStreak}`;
  streakLabel.classList.toggle("active", currentStreak >= 2);
}

function showStreakFeedback() {
  clearTimeout(streakFeedbackTimer);
  streakLabel.classList.remove("boost");
  void streakLabel.offsetWidth;
  streakLabel.classList.add("boost");
  streakFeedbackTimer = setTimeout(() => {
    streakLabel.classList.remove("boost");
  }, 760);
}

function clearConfetti() {
  clearTimeout(confettiCleanupTimer);

  if (!confettiLayer) {
    return;
  }

  confettiLayer.innerHTML = "";
  confettiLayer.classList.remove("is-active");
}

function showConfetti() {
  if (!isFeatureEnabled("gameplay.confetti")) {
    return;
  }

  if (!confettiLayer) {
    return;
  }

  clearConfetti();
  confettiLayer.classList.add("is-active");

  for (let index = 0; index < CONFETTI_COUNT; index += 1) {
    const piece = document.createElement("span");
    const color = CONFETTI_COLORS[index % CONFETTI_COLORS.length];
    const left = 4 + Math.random() * 92;
    const delay = Math.random() * 0.35;
    const duration = 3.4 + Math.random() * 1.4;
    const drift = Math.random() * 24 - 12;
    const rotate = 720 + Math.random() * 900;
    const size = 8 + Math.random() * 9;

    piece.className = "confetti";
    piece.style.setProperty("--confetti-color", color);
    piece.style.setProperty("--confetti-left", `${left.toFixed(2)}%`);
    piece.style.setProperty("--confetti-delay", `${delay.toFixed(2)}s`);
    piece.style.setProperty("--confetti-duration", `${duration.toFixed(2)}s`);
    piece.style.setProperty("--confetti-drift", `${drift.toFixed(2)}vw`);
    piece.style.setProperty("--confetti-drift-a", `${(drift * -0.45).toFixed(2)}vw`);
    piece.style.setProperty("--confetti-drift-b", `${(drift * 0.55).toFixed(2)}vw`);
    piece.style.setProperty("--confetti-drift-c", `${(drift * -0.85).toFixed(2)}vw`);
    piece.style.setProperty("--confetti-rotate", `${rotate.toFixed(0)}deg`);
    piece.style.setProperty("--confetti-size", `${size.toFixed(0)}px`);
    piece.style.setProperty("--confetti-radius", index % 3 === 0 ? "999px" : "3px");
    confettiLayer.appendChild(piece);
  }

  confettiCleanupTimer = setTimeout(clearConfetti, 4600);
}

function updateMistakesLabel() {
  mistakesLabel.classList.add("hidden");
  mistakesLabel.innerHTML = "";
}

function updateRoundDisplay() {
  const currentRoundNumber = currentRound + 1;
  roundValue.textContent = `${currentRoundNumber} / ${totalRounds}`;

  roundLabel.classList.remove("show-progress");
  roundLabel.classList.remove("round-status-good", "round-status-bad");
  roundProgressBar.style.transform = `scaleX(${Math.min(currentRoundNumber / totalRounds, 1)})`;
  roundLabel.setAttribute(
    "aria-label",
    `Round ${currentRoundNumber} of ${totalRounds}`
  );
}

function showRoundStatus(message, isGood) {
  clearTimeout(roundStatusTimer);
  roundValue.textContent = message;
  roundLabel.classList.toggle("round-status-good", isGood);
  roundLabel.classList.toggle("round-status-bad", !isGood);
  roundStatusTimer = setTimeout(() => {
    updateRoundDisplay();
  }, 1150);
}

async function playRoundProgressTransition(fromRound = currentRound) {
  if (fromRound >= totalRounds - 1) {
    return;
  }

  clearTimeout(roundStatusTimer);

  const currentProgress = Math.min((fromRound + 1) / totalRounds, 1);
  const nextProgress = Math.min((fromRound + 2) / totalRounds, 1);

  roundLabel.classList.remove("round-status-good", "round-status-bad");
  roundLabel.classList.add("show-progress");
  roundProgressBar.style.transform = `scaleX(${currentProgress})`;
  void roundProgressBar.offsetWidth;
  roundProgressBar.style.transform = `scaleX(${nextProgress})`;

  await wait(ROUND_PROGRESS_VISIBLE_DURATION);
  updateRoundDisplay();
}

function updateLeaderboardVisibility() {
  leaderboardOnlyElements.forEach((element) => {
    element.classList.toggle("hidden", !hasLeaderboardMode());
  });

  menuScoreboardToggle?.classList.toggle(
    "hidden",
    !isFeatureEnabled("menu.menuLeaderboard") || !hasLeaderboardMode()
  );

  updateMistakesLabel();
  updateEndLeaderboardVisibility();
}

function updateEndLeaderboardVisibility() {
  if (!endLeaderboardPanel || !endLeaderboardToggle) {
    return;
  }

  const shouldShowLeaderboardUi = hasLeaderboardMode();
  const shouldShowPanel = shouldShowLeaderboardUi && isEndLeaderboardOpen;

  endLeaderboardToggle.classList.toggle("hidden", !shouldShowLeaderboardUi);
  endLeaderboardToggle.setAttribute("aria-hidden", String(!shouldShowLeaderboardUi));
  endLeaderboardToggle.setAttribute("aria-expanded", String(shouldShowPanel));
  endLeaderboardToggle.textContent = shouldShowPanel ? "Hide leaderboard" : "Show leaderboard";

  endLeaderboardPanel.classList.toggle("hidden", !shouldShowPanel);
  endLeaderboardPanel.setAttribute("aria-hidden", String(!shouldShowPanel));
}

function applyFeatureVisibility() {
  helpWidget?.classList.toggle("hidden", !isFeatureEnabled("menu.helpWidget"));
  openShareButton?.classList.toggle("hidden", !isFeatureEnabled("sharing.resultShare"));
  menuScoreboardToggle?.classList.toggle("hidden", !isFeatureEnabled("menu.menuLeaderboard"));

  if (!isFeatureEnabled("menu.helpWidget")) {
    setHelpPanelOpen(false);
  }

  if (!isFeatureEnabled("sharing.resultShare")) {
    toggleShareModal(false);
  }

  if (!hasLearnPackSelection()) {
    setLearnPackPickerOpen(false);
  }
}

function syncGameHeaderLayout() {
  gameHeader.classList.toggle("timed-layout", hasRoundCountdown());
}

function getModeGroupForMode(modeKey) {
  return Object.keys(modeGroups).find((groupKey) => modeGroups[groupKey].includes(modeKey)) || "casual";
}

function updateMenuBackgroundMode() {
  const backgroundClasses = [
    "menu-bg-quick",
    "menu-bg-timed",
    "menu-bg-blind",
    "menu-bg-special"
  ];

  document.body.classList.remove(...backgroundClasses);

  if (selectedModeKey === "quick") {
    document.body.classList.add("menu-bg-quick");
    return;
  }

  if (selectedModeKey === "timed") {
    document.body.classList.add("menu-bg-timed");
    return;
  }

  if (selectedModeKey === "blind") {
    document.body.classList.add("menu-bg-blind");
    return;
  }

  if (selectedModeGroup === "special" && isFeatureEnabled("menu.specialBackground")) {
    document.body.classList.add("menu-bg-special");
  }
}

function updateModeGroupUI() {
  const groupingEnabled = isFeatureEnabled("menu.casualSpecialGroups");
  const modeGroupSwitch = document.querySelector(".mode-group-switch");
  const baseModes = groupingEnabled
    ? modeGroups[selectedModeGroup] || modeGroups.casual
    : Object.values(modeGroups).flat();
  const activeModes = baseModes
    .filter((modeKey) => isModeEnabled(modeKey));
  const selectedIndex = Math.max(activeModes.indexOf(selectedModeKey), 0);
  const groupKeys = Object.keys(modeGroups);
  const groupIndex = Math.max(groupKeys.indexOf(selectedModeGroup), 0);

  updateMenuBackgroundMode();
  document.body.classList.toggle("learn-pack-menu", isStudyMode());
  modeGroupSwitch?.classList.toggle("hidden", !groupingEnabled);

  if (!isStudyMode()) {
    setLearnPackPickerOpen(false);
  }

  modeGroupButtons.forEach((button) => {
    const isSelected = button.dataset.modeGroup === selectedModeGroup;
    button.classList.toggle("selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  modeButtons.forEach((button) => {
    const isInActiveGroup = activeModes.includes(button.dataset.mode);
    const visibleIndex = Math.max(activeModes.indexOf(button.dataset.mode), 0);
    button.style.setProperty("--visible-mode-index", String(visibleIndex));
    button.classList.toggle("hidden", !isInActiveGroup);
    button.hidden = !isInActiveGroup;
  });

  if (modeGrid) {
    modeGrid.style.setProperty("--mode-count", String(activeModes.length));
    modeGrid.style.setProperty("--selected-mode-index", String(selectedIndex));
  }

  modeGroupSwitch?.style.setProperty("--mode-group-index", String(groupIndex));

  if (mobileModeSelect) {
    Array.from(mobileModeSelect.options).forEach((option) => {
      const isInActiveGroup = (option.dataset.modeGroup === selectedModeGroup || !groupingEnabled)
        && isModeEnabled(option.value);
      option.hidden = !isInActiveGroup;
      option.disabled = !isInActiveGroup;
    });
  }
}

async function switchModeGroup(nextGroup) {
  if (nextGroup === selectedModeGroup || !modeGroups[nextGroup]?.length) {
    return;
  }

  clearTimeout(modeGroupTransitionTimer);
  modeGroupButtons.forEach((button) => {
    button.disabled = true;
  });

  modeGrid?.classList.remove("mode-group-enter");
  modeGrid?.classList.add("mode-group-exit");

  await wait(MODE_GROUP_EXIT_DURATION);

  selectMode(modeGroups[nextGroup][0]);

  modeGrid?.classList.remove("mode-group-exit");
  modeGrid?.classList.add("mode-group-enter");

  modeGroupTransitionTimer = setTimeout(() => {
    modeGrid?.classList.remove("mode-group-enter");
    modeGroupButtons.forEach((button) => {
      button.disabled = false;
    });
  }, MODE_GROUP_ENTER_DURATION);
}

function selectMode(modeKey) {
  selectedModeKey = modeKey;
  const activeMode = getActiveModeConfig();
  selectedModeGroup = getModeGroupForMode(modeKey);

  document.body.classList.toggle("learn-mode", isStudyMode());
  document.body.classList.toggle("reverse-learn-mode", isReverseLearnMode());

  modeButtons.forEach((button) => {
    const isSelected = button.dataset.mode === selectedModeKey;
    button.classList.toggle("selected", isSelected);
  });

  updateModeGroupUI();
  updateDailyAvailability();

  modeDescription.textContent = activeMode.description;
  updateModeBestScore();
  startButton.textContent = `Start ${activeMode.label}`;
  syncGameHeaderLayout();
  updateLeaderboardVisibility();
  if (mobileModeSelect) {
    mobileModeSelect.value = modeKey;
  }

  if (menuScoreboardPanel && menuScoreboardPanel.classList.contains("open")) {
    renderLeaderboard(menuLeaderboardList, menuLeaderboardMode, null);
  }

  menuLeaderboardCache = null;
  void preloadMenuLeaderboard(true);
}

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("active");
  });

  screens[screenName].classList.add("active");
  if (themeToggle) {
    themeToggle.hidden = screenName !== "start";
    themeToggle.setAttribute("aria-hidden", String(screenName !== "start"));
  }
  setUiState("resultsView", screenName === "end");

  if (screenName === "end") {
    isEndLeaderboardOpen = false;
    updateEndLeaderboardVisibility();
  }

  if (screenName !== "game") {
    setUiState("answering", false);
    setUiState("feedbackOpen", false);
    setUiState("roundComplete", false);
  }
}

function isScreenActive(screenName) {
  return screens[screenName].classList.contains("active");
}

function isTypingTarget(target) {
  return target instanceof HTMLElement
    && (
      target.tagName === "INPUT"
      || target.tagName === "TEXTAREA"
      || target.isContentEditable
    );
}

function setTransitionState(isVisible, label = "Loading mission...") {
  transitionText.textContent = label;
  transitionOverlay.classList.toggle("visible", isVisible);
  transitionOverlay.setAttribute("aria-hidden", String(!isVisible));
  setUiState("transitioning", isVisible);
}

function getRoundTransitionLabel() {
  if (isReverseLearnMode()) {
    return "Preparing reverse lesson...";
  }

  return isLearnMode() ? "Starting lesson..." : "Preparing mission...";
}

function setUiState(stateKey, isActive) {
  const stateClassName = uiStateClassMap[stateKey];

  if (!stateClassName) {
    return;
  }

  uiStateTargets.forEach((element) => {
    element.classList.toggle(stateClassName, isActive);
  });
}

function replayClass(element, className, duration = 520) {
  if (!element) {
    return;
  }

  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => {
    element.classList.remove(className);
  }, duration);
}

function showToast(message, type = "error") {
  if (!toastMessage || !message) {
    return;
  }

  clearTimeout(toastTimer);
  toastMessage.textContent = message;
  toastMessage.classList.remove("hidden", "error", "info");
  toastMessage.classList.add(type);

  toastTimer = window.setTimeout(() => {
    toastMessage.classList.add("hidden");
  }, 4200);
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();

    image.onload = () => resolve(src);
    image.onerror = () => resolve(src);
    image.src = src;
  });
}

function preloadImageOnce(src) {
  if (!src || preloadedImageUrls.has(src)) {
    return Promise.resolve(src);
  }

  return preloadImage(src).then((loadedSrc) => {
    preloadedImageUrls.add(loadedSrc);
    return loadedSrc;
  });
}

function getQuestionPool() {
  if (isStudyMode() && hasLearnPackSelection()) {
    return getLearnPackQuestions();
  }

  return spaceLocations;
}

async function preloadImagesInBackground(imageUrls) {
  for (const imageUrl of imageUrls) {
    await preloadImageOnce(imageUrl);
    await wait(0);
  }
}

function preloadNextRoundImage() {
  const nextQuestion = gameDeck[currentRound + 1];

  if (nextQuestion?.imageUrl) {
    void preloadImageOnce(nextQuestion.imageUrl);
  }
}

function buildInitialGameDeck() {
  if (isDailyMode()) {
    return [getDailyQuestion()];
  }

  const selectedQuestionIds = new Set();

  return Array.from({ length: totalRounds }, () => {
    const nextQuestion = drawRandomQuestion(selectedQuestionIds);
    selectedQuestionIds.add(nextQuestion.nasaId);
    return nextQuestion;
  });
}

function goHome() {
  clearTimeout(gameOverTimer);
  clearTimeout(streakFeedbackTimer);
  stopRoundTimer();
  hasAnswered = false;
  feedbackPanel.classList.remove("open");
  feedbackPanel.classList.remove("feedback-good", "feedback-bad");
  feedbackPanel.setAttribute("aria-hidden", "true");
  gamePanel.classList.remove("round-feedback-good", "round-feedback-bad");
  feedbackText.textContent = "";
  factText.textContent = "";
  sourceText.textContent = "";
  nextButton.disabled = false;
  nextButton.classList.remove("hidden", "staged", "ready-pulse");
  clearTimeout(roundStatusTimer);
  stopBlindRevealTimer();
  clearConfetti();
  applyBlindRevealState();
  toggleLearnReviewModal(false);
  setStatsPanelOpen(false);
  setUiState("answering", false);
  setUiState("feedbackOpen", false);
  setUiState("roundComplete", false);
  setUiState("resultsView", false);
  setTransitionState(false);
  toggleShareModal(false);
  updateDailyAvailability();
  showScreen("start");
}

function getAnswerButtons() {
  return Array.from(answersContainer.querySelectorAll(".answer-button"));
}

function handleKeyboardAnswer(answerIndex) {
  if (!isScreenActive("game") || hasAnswered) {
    return;
  }

  const answerButtons = getAnswerButtons();
  const selectedButton = answerButtons[answerIndex];

  if (!selectedButton || selectedButton.disabled) {
    return;
  }

  void handleAnswer(selectedButton, selectedButton.textContent);
}

function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

function drawRandomQuestion(excludedIds = new Set()) {
  if (isDailyMode()) {
    return getDailyQuestion();
  }

  const availableQuestions = randomBag.filter((question) => !excludedIds.has(question.nasaId));

  if (availableQuestions.length > 0) {
    const nextQuestion = availableQuestions[availableQuestions.length - 1];
    const nextQuestionIndex = randomBag.findIndex((question) => question.nasaId === nextQuestion.nasaId);

    if (nextQuestionIndex >= 0) {
      randomBag.splice(nextQuestionIndex, 1);
    }

    return nextQuestion;
  }

  const freshPool = getQuestionPool().filter((question) => !excludedIds.has(question.nasaId));

  if (freshPool.length === 0) {
    return getQuestionPool()[Math.floor(Math.random() * getQuestionPool().length)];
  }

  randomBag = shuffleArray(freshPool);
  return randomBag.pop();
}

// Reset the whole game state and then jump into the first round.
async function startGame(modeKey = selectedModeKey) {
  if (!isModeEnabled(modeKey)) {
    showToast("This mode is currently disabled.");
    return;
  }

  if (modeKey === "daily" && hasPlayedDailyToday()) {
    updateDailyAvailability();
    showScreen("start");
    return;
  }

  selectedModeKey = modeKey;
  document.body.classList.toggle("learn-mode", isStudyMode());
  document.body.classList.toggle("reverse-learn-mode", isReverseLearnMode());
  totalRounds = getActiveModeConfig().rounds;
  randomBag = shuffleArray(getQuestionPool());
  gameDeck = [];
  currentRound = 0;
  score = 0;
  hasAnswered = false;
  hasSavedCurrentScore = false;
  wrongAnswerCount = 0;
  correctGuessCount = 0;
  currentStreak = 0;
  bestStreak = 0;
  learnMissedQuestions = [];
  hintsLeft = getActiveModeConfig().hints;
  usedHintThisRound = false;
  blindRevealStepIndex = 0;
  timeLeft = getActiveModeConfig().seconds || 0;
  saveMessage.textContent = "";
  toggleAutoNameForm(false);
  if (playerNameInput) {
    playerNameInput.value = localStorage.getItem(playerNameStorageKey) || "";
  }
  clearTimeout(scoreFeedbackTimer);
  clearTimeout(rewardFeedbackTimer);
  clearTimeout(streakFeedbackTimer);
  clearTimeout(gameOverTimer);
  clearTimeout(roundStatusTimer);
  clearConfetti();
  stopBlindRevealTimer();
  scoreLabel.classList.remove("penalty");
  scoreLabel.classList.remove("reward");
  setUiState("answering", false);
  setUiState("feedbackOpen", false);
  setUiState("roundComplete", false);
  setUiState("resultsView", false);
  updateScoreFormState();
  updateLeaderboardVisibility();
  updateStats();
  renderLearnReview();
  updatePromptContent();
  updateStreakLabel();
  updateHintUI();
  updateTimerUI();
  applyBlindRevealState();

  if (isDailyMode()) {
    markDailyAsPlayed();
    updateDailyAvailability();
  }

  // Build the round list first so the opening preload knows what to load.
  gameDeck = buildInitialGameDeck();
  updateScore();
  showScreen("game");
  replayClass(gamePanel, "mission-launch", GAME_LAUNCH_ANIMATION_DURATION);
  await renderRound(true);
}

function updateScore() {
  if (isStudyMode()) {
    scoreLabel.textContent = isReverseLearnMode() ? "Reverse" : "Learn";
    scoreLabel.classList.add("zero-score");
    return;
  }

  scoreLabel.textContent = `Score: ${score}`;
  scoreLabel.classList.toggle("zero-score", score === 0);
}

function setScore(nextScore) {
  // Penalties should feel clear, but the visible score never goes below zero.
  score = Math.max(0, nextScore);
  updateScore();
}

function showScorePenaltyFeedback() {
  clearTimeout(scoreFeedbackTimer);
  scoreLabel.classList.add("penalty");
  scoreFeedbackTimer = setTimeout(() => {
    scoreLabel.classList.remove("penalty");
  }, 650);
}

function showCorrectAnswerReward() {
  clearTimeout(rewardFeedbackTimer);
  scoreLabel.classList.add("reward");
  rewardFeedbackTimer = setTimeout(() => {
    scoreLabel.classList.remove("reward");
  }, 760);
}

function endGame() {
  clearTimeout(gameOverTimer);
  stopRoundTimer();
  setUiState("answering", false);
  setUiState("feedbackOpen", false);
  setUiState("roundComplete", false);
  const finalScoreValue = score;
  const finalAccuracyValue = getAccuracyValue();
  const finalBestStreakValue = bestStreak;
  recordLocalRunStats();
  finalHeading.textContent = isDailyMode()
    ? "Daily result"
    : isStudyMode()
      ? isReverseLearnMode()
        ? "Reverse lesson review"
        : "Lesson review"
      : "Your final score";
  saveMessage.textContent = "";
  updateLeaderboardVisibility();
  ratingText.textContent = isDailyMode()
    ? getDailyResultText(finalScoreValue)
    : isStudyMode()
      ? "Space Student"
      : getRating(finalScoreValue);
  rankBadge.classList.toggle("daily-badge", isDailyMode());
  const runSummary = getRunSummary(finalScoreValue, finalAccuracyValue, finalBestStreakValue);
  runSummaryTitle.textContent = runSummary.title;
  runSummaryText.textContent = runSummary.text;
  renderLearnReview();
  updateShareCard();

  renderLeaderboard();

  showScreen("end");
  if (isDailyMode()) {
    playSoundEffect(finalScoreValue > 0 ? "finish-good" : "finish-bad");
    showDailyResult();
    return;
  }

  if (isStudyMode()) {
    finalScore.classList.remove("daily-result", "success", "failed", "zero-score");
    finalScore.textContent = isReverseLearnMode() ? `${totalRounds} decoded` : `${totalRounds} studied`;
    playSoundEffect(finalAccuracyValue >= 70 ? "finish-good" : "finish-bad");
    return;
  }

  playSoundEffect(finalScoreValue >= 120 || finalAccuracyValue >= 70 ? "finish-good" : "finish-bad");
  animateFinalScore(finalScoreValue);
  void autoSaveCurrentScore();
}

// This fills the UI with the current question and fresh answer buttons.
async function renderRound(showTransition = false) {
  clearConfetti();
  const isLaunchRound = gamePanel.classList.contains("mission-launch");
  if (imageFrame) {
    imageFrame.classList.remove("round-resolve-good", "round-resolve-bad", "round-final-reveal", "blind-reveal-resetting");
  }

  if (!gameDeck[currentRound]) {
    gameDeck[currentRound] = drawRandomQuestion();
  }

  const currentQuestion = gameDeck[currentRound];
  const answerOptions = shuffleArray([
    currentQuestion.correctAnswer,
    ...currentQuestion.wrongAnswers
  ]);
  const currentImageReady = Promise.all([
    preloadImageOnce(currentQuestion.imageUrl).catch(() => currentQuestion.imageUrl),
    wait(TRANSITION_MIN_DURATION)
  ]);

  updateRoundDisplay();
  updateMistakesLabel();
  updatePromptContent(currentQuestion);
  applyBlindRevealState();

  if (showTransition) {
    setTransitionState(true, getRoundTransitionLabel());
    const allUpcomingImageUrls = gameDeck
      .slice(currentRound + 1)
      .map((question) => question.imageUrl);

    // Start loading the rest quietly in the background.
    void preloadImagesInBackground(allUpcomingImageUrls);

    await Promise.race([
      currentImageReady,
      wait(TRANSITION_MAX_DURATION)
    ]);
  }

  await swapRoundImage(currentQuestion);
  preloadNextRoundImage();
  replayClass(imageFrame, "round-intro", 1200);

  answersContainer.innerHTML = "";
  feedbackPanel.classList.remove("open");
  feedbackPanel.classList.remove("feedback-good", "feedback-bad");
  feedbackPanel.setAttribute("aria-hidden", "true");
  gamePanel.classList.remove("round-feedback-good", "round-feedback-bad");
  feedbackText.textContent = "";
  factText.textContent = "";
  sourceText.textContent = "";
  nextButton.disabled = false;
  nextButton.classList.remove("hidden", "ready-pulse");
  nextButton.classList.add("staged");
  hasAnswered = false;
  usedHintThisRound = false;
  setUiState("answering", false);
  setUiState("feedbackOpen", false);
  setUiState("roundComplete", false);
  updateHintUI();
  startRoundTimer();
  startBlindRevealTimer();

  if (showTransition) {
    setTransitionState(false);
  }

  imageFrame?.classList.toggle("reverse-learn-pending", isReverseLearnMode());
  reversePromptOverlay?.classList.remove("is-exiting");

  answerOptions.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    if (!isLaunchRound) {
      button.classList.add("answer-enter");
    }
    button.style.setProperty("--answer-index", index);
    button.textContent = answer;
    button.addEventListener("click", () => {
      void handleAnswer(button, answer);
    });
    answersContainer.appendChild(button);
  });
}

// Main answer logic: score, feedback, highlights and reveal timing all happen here.
async function handleAnswer(selectedButton, selectedAnswer) {
  if (hasAnswered) {
    return;
  }

  hasAnswered = true;
  setUiState("answering", true);
  stopRoundTimer();
  timerLabel.classList.add("hidden");
  stopBlindRevealTimer();
  if (isBlindRevealMode()) {
    setBlindRevealProgress(1);
  }

  const currentQuestion = gameDeck[currentRound];
  const answerButtons = answersContainer.querySelectorAll(".answer-button");
  const isTimeOut = selectedAnswer === "__timeout__";
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const panelFeedbackClass = isCorrect ? "round-feedback-good" : "round-feedback-bad";
  const feedbackAnimationClass = isCorrect ? "feedback-good" : "feedback-bad";
  let earnedPoints = 0;
  let streakBonus = 0;

  if (isCorrect) {
    correctGuessCount += 1;
    currentStreak += 1;
    bestStreak = Math.max(bestStreak, currentStreak);
    const pointBreakdown = getPointsForCorrectGuess(currentStreak);
    earnedPoints = pointBreakdown.totalPoints;
    streakBonus = pointBreakdown.streakBonus;
    if (!isStudyMode()) {
      setScore(score + earnedPoints);
      showCorrectAnswerReward();
      showConfetti();
    }
    playSoundEffect("correct");
    if (currentStreak >= 2 && !isStudyMode()) {
      showStreakFeedback();
      playSoundEffect("streak");
    }
  } else {
    if (!isStudyMode()) {
      setScore(score - 25);
      showScorePenaltyFeedback();
    }
    wrongAnswerCount += 1;
    currentStreak = 0;
    playSoundEffect("wrong");

    if (isStudyMode()) {
      learnMissedQuestions.push({
        correctAnswer: currentQuestion.correctAnswer,
        selectedAnswer,
        imageUrl: currentQuestion.imageUrl,
        learningNote: getLearningNote(currentQuestion)
      });
    }
  }

  replayClass(gamePanel, panelFeedbackClass, 1800);
  reversePromptOverlay?.classList.add("is-exiting");
  imageFrame?.classList.remove("reverse-learn-pending");
  replayClass(imageFrame, isCorrect ? "round-resolve-good" : "round-resolve-bad", 1200);
  replayClass(imageFrame, "round-final-reveal", 950);
  showRoundStatus(isCorrect ? "Locked in" : "Try again", isCorrect);

  updateMistakesLabel();
  updateStats();
  updateStreakLabel();
  updateHintUI();

  answerButtons.forEach((button) => {
    const isMatchingCorrectAnswer = button.textContent === currentQuestion.correctAnswer;
    button.disabled = true;
    button.classList.add("locked");
    button.classList.toggle("correct", isMatchingCorrectAnswer);
    button.classList.toggle("dimmed", button !== selectedButton && !isMatchingCorrectAnswer);

    if (button === selectedButton && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (selectedButton) {
    selectedButton.classList.add("answered");
  }

  feedbackText.textContent = isCorrect
    ? isReverseLearnMode()
      ? "Nice clue read. You matched the fact to the right object."
      : isLearnMode()
        ? "Nice read. You spotted the right object."
      : streakBonus > 0
      ? `+${earnedPoints} points. +${streakBonus} streak bonus. ${currentStreak}x streak.`
      : `+${earnedPoints} points. Clean guess.`
    : isTimeOut
      ? `Time is up. The correct answer was ${currentQuestion.correctAnswer}.`
      : isStudyMode()
        ? `Not quite, but no penalty here. The correct answer was ${currentQuestion.correctAnswer}.`
        : `Not quite. The correct answer was ${currentQuestion.correctAnswer}.`;

  factText.textContent = isStudyMode()
    ? isReverseLearnMode()
      ? `Image reveal: ${currentQuestion.fact} ${getLearningNote(currentQuestion)}`
      : `${currentQuestion.fact} ${getLearningNote(currentQuestion)}`
    : currentQuestion.fact;
  sourceText.textContent = `Source: ${currentQuestion.source} (${currentQuestion.nasaId})`;
  await wait(FEEDBACK_OPEN_DELAY);
  feedbackPanel.classList.add("open");
  feedbackPanel.setAttribute("aria-hidden", "false");
  replayClass(feedbackPanel, feedbackAnimationClass, 1400);
  setUiState("feedbackOpen", true);
  setUiState("roundComplete", true);
  setUiState("answering", false);

  await wait(Math.max(0, NEXT_BUTTON_DELAY - FEEDBACK_OPEN_DELAY));
  nextButton.classList.remove("staged");
  replayClass(nextButton, "ready-pulse", 1100);
}

function getRating(scoreValue) {
  return getRankInfo(scoreValue).title;
}

function getDailyResultText(scoreValue = score) {
  return scoreValue > 0
    ? "You nailed today's image."
    : "Not today. Come back for the next one.";
}

function getRunSummary(scoreValue = score, accuracy = getAccuracyValue(), streakValue = bestStreak) {
  const modeLabel = getActiveModeConfig().label;

  if (isDailyMode()) {
    return scoreValue > 0
      ? {
          title: "Daily mission cleared",
          text: `You solved today's shared ${modeLabel.toLowerCase()} challenge with ${accuracy}% accuracy.`
        }
      : {
          title: "Daily mission missed",
          text: "Today's shared challenge got away, but the next daily image is another shot at it."
        };
  }

  if (isStudyMode()) {
    return {
      title: isReverseLearnMode() ? "Clue reading complete" : "Learning orbit complete",
      text: isReverseLearnMode()
        ? `You decoded ${totalRounds} clues with ${accuracy}% accuracy. The real win is linking facts to objects faster each run.`
        : `You studied ${totalRounds} images with ${accuracy}% accuracy. The real win is recognizing the clues faster next run.`
    };
  }

  if (accuracy >= 90 && streakValue >= 4) {
    return {
      title: "Near flawless orbit",
      text: `Clinical answers, a ${streakValue}x streak, and almost no wasted motion.`
    };
  }

  if (scoreValue >= 220 && streakValue >= 3) {
    return {
      title: "Momentum run",
      text: `You built real pressure with a ${streakValue}x streak and kept the score climbing.`
    };
  }

  if (isBlindRevealMode() && scoreValue >= 180) {
    return {
      title: "Reveal sniper",
      text: "You were reading the image early and cashing in before the easy clues appeared."
    };
  }

  if (isTimedMode() && accuracy >= 70) {
    return {
      title: "Fast hands",
      text: `Strong reads under the clock. ${accuracy}% accuracy in timed play is the real deal.`
    };
  }

  if (accuracy >= 70) {
    return {
      title: "Sharp navigation",
      text: `You kept the run tidy and landed ${accuracy}% of your guesses.`
    };
  }

  if (streakValue >= 3) {
    return {
      title: "Flash of brilliance",
      text: `That ${streakValue}x streak showed you had the read, even if the run swung around later.`
    };
  }

  if (scoreValue === 0) {
    return {
      title: "Rough landing",
      text: "This one never really ignited, but one clean streak changes the whole board."
    };
  }

  return {
    title: "Steady flight",
    text: "A balanced run with room to push your streak higher on the next launch."
  };
}

function showDailyResult() {
  const isSuccess = score > 0;
  finalScore.classList.remove("zero-score");
  finalScore.classList.toggle("daily-result", true);
  finalScore.classList.toggle("success", isSuccess);
  finalScore.classList.toggle("failed", !isSuccess);
  finalScore.textContent = isSuccess ? "Success" : "Failed";
}

function animateFinalScore(targetScore) {
  const duration = 900;
  const startTime = performance.now();
  finalScore.classList.remove("daily-result", "success", "failed");
  finalScore.classList.toggle("zero-score", targetScore === 0);

  function updateScoreCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    finalScore.textContent = `${Math.round(targetScore * easedProgress)} pts`;

    if (progress < 1) {
      requestAnimationFrame(updateScoreCounter);
    }
  }

  finalScore.textContent = "0 pts";
  requestAnimationFrame(updateScoreCounter);
}

function updateScoreFormState() {
  const storedName = localStorage.getItem(playerNameStorageKey);

  if (scoreForm) {
    scoreForm.classList.toggle("has-saved-name", Boolean(storedName));
  }

  if (savedPlayerName) {
    savedPlayerName.textContent = storedName ? `Saving as ${storedName}` : "";
  }
}

function getLeaderboard() {
  const savedScores = localStorage.getItem(leaderboardStorageKey);

  if (!savedScores) {
    return [];
  }

  try {
    return JSON.parse(savedScores);
  } catch {
    return [];
  }
}

function getBestLocalScoreForMode(modeKey = selectedModeKey) {
  return getLeaderboard()
    .filter((entry) => entry.mode === modeKey)
    .sort((a, b) => b.score - a.score || b.rounds - a.rounds)[0] || null;
}

function updateModeBestScore() {
  if (!modeBestScore) {
    return;
  }

  if (selectedModeKey === "daily") {
    modeBestScore.textContent = "Daily mode uses shared runs, so no personal best is shown here.";
    modeBestScore.classList.add("is-muted");
    return;
  }

  if (isStudyMode()) {
    modeBestScore.textContent = "Practice mode, so scores are not saved.";
    modeBestScore.classList.add("is-muted");
    return;
  }

  const bestEntry = getBestLocalScoreForMode(selectedModeKey);

  if (!bestEntry) {
    modeBestScore.textContent = "Best local score: none yet";
    modeBestScore.classList.add("is-muted");
    return;
  }

  modeBestScore.textContent = `Best local score: ${bestEntry.score} pts`;
  modeBestScore.classList.remove("is-muted");
}

function saveLeaderboard(scores) {
  localStorage.setItem(leaderboardStorageKey, JSON.stringify(scores));
  updateModeBestScore();
}

function getCurrentModeEntries() {
  return getLeaderboard()
    .filter((entry) => (
      entry.mode === selectedModeKey
      && (!isDailyMode() || entry.dailyKey === getDailyKey())
    ))
    .sort((a, b) => b.score - a.score || b.rounds - a.rounds)
    .slice(0, 5);
}

function normalizeName(name) {
  return name.trim().toLowerCase();
}

function upsertLocalScore(scoreEntry) {
  const scores = getLeaderboard();
  const normalizedName = normalizeName(scoreEntry.name);
  const existingIndex = scores.findIndex((entry) => (
    normalizeName(entry.name) === normalizedName && entry.mode === scoreEntry.mode
    && (!scoreEntry.dailyKey || entry.dailyKey === scoreEntry.dailyKey)
  ));

  if (existingIndex === -1) {
    scores.push(scoreEntry);
    saveLeaderboard(scores);
    return "saved";
  }

  const existingEntry = scores[existingIndex];
  const isBetterScore = scoreEntry.score > existingEntry.score;
  const isTieWithMoreRounds = scoreEntry.score === existingEntry.score && scoreEntry.rounds > existingEntry.rounds;

  if (isBetterScore || isTieWithMoreRounds) {
    scores[existingIndex] = {
      ...existingEntry,
      ...scoreEntry
    };
    saveLeaderboard(scores);
    return "improved";
  }

  return "kept";
}

function renderLeaderboardEntries(entries, listElement = leaderboardList, modeElement = leaderboardMode) {
  modeElement.textContent = isDailyMode()
      ? `Daily ${getDailyKey()}`
      : getActiveModeConfig().label;
  listElement.innerHTML = "";

  if (entries.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "leaderboard-empty";
    emptyItem.textContent = "No scores yet.";
    listElement.appendChild(emptyItem);
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("li");
    const name = document.createElement("span");
    const points = document.createElement("span");
    const rounds = document.createElement("span");

    name.className = "leaderboard-name";
    points.className = "leaderboard-score";
    rounds.className = "leaderboard-meta";
    name.textContent = entry.name;
    points.textContent = `${entry.score} pts`;
    rounds.textContent = isDailyMode()
      ? "Today"
      : `${entry.rounds} rounds`;

    item.append(name, points, rounds);
    listElement.appendChild(item);
  });
}

async function fetchLeaderboardEntries(renderMenuInfiniteBoard = false) {
  if (!supabaseClient) {
    return {
      entries: getCurrentModeEntries(),
      usedFallback: true
    };
  }

  let query = supabaseClient
    .from(leaderboardTable)
    .select("name, score, mode, rounds, created_at")
    .eq("mode", selectedModeKey);

  if (!renderMenuInfiniteBoard && isDailyMode()) {
    const dailyStart = `${getDailyKey()}T00:00:00.000Z`;
    const dailyEnd = `${getDailyKey()}T23:59:59.999Z`;
    query = query.gte("created_at", dailyStart).lte("created_at", dailyEnd);
  }

  const { data, error } = await query
    .order("score", { ascending: false })
    .order("rounds", { ascending: false })
    .limit(5);

  if (error) {
    return {
      entries: getCurrentModeEntries(),
      usedFallback: true
    };
  }

  return {
    entries: data,
    usedFallback: false
  };
}

async function preloadMenuLeaderboard(forceRefresh = false) {
  if (!menuLeaderboardList || !menuLeaderboardMode) {
    return [];
  }

  if (menuLeaderboardCache && !forceRefresh) {
    return menuLeaderboardCache;
  }

  if (menuLeaderboardPrefetchPromise && !forceRefresh) {
    return menuLeaderboardPrefetchPromise;
  }

  menuLeaderboardPrefetchPromise = fetchLeaderboardEntries(true)
    .then(({ entries }) => {
      menuLeaderboardCache = entries;
      return entries;
    })
    .finally(() => {
      menuLeaderboardPrefetchPromise = null;
    });

  return menuLeaderboardPrefetchPromise;
}

async function renderLeaderboard(
  listElement = leaderboardList,
  modeElement = leaderboardMode,
  messageElement = saveMessage
) {
  const renderMenuInfiniteBoard = listElement === menuLeaderboardList;

  modeElement.textContent = isDailyMode()
      ? `Daily ${getDailyKey()}`
      : getActiveModeConfig().label;
  listElement.innerHTML = "";

  const loadingItem = document.createElement("li");
  loadingItem.className = "leaderboard-empty";
  loadingItem.textContent = "Loading scores...";
  listElement.appendChild(loadingItem);

  if (renderMenuInfiniteBoard && menuLeaderboardCache) {
    renderLeaderboardEntries(menuLeaderboardCache, listElement, modeElement);
    return;
  }

  const { entries, usedFallback } = await fetchLeaderboardEntries(renderMenuInfiniteBoard);

  if (renderMenuInfiniteBoard && !usedFallback) {
    menuLeaderboardCache = entries;
  }

  if (usedFallback) {
    renderLeaderboardEntries(entries, listElement, modeElement);
    if (messageElement) {
      messageElement.textContent = "";
      showToast("Global leaderboard unavailable. Showing local scores.");
    }

    return;
  }

  renderLeaderboardEntries(entries, listElement, modeElement);
}

function toggleAutoNameForm(isVisible) {
  if (!autoNameForm) {
    return;
  }

  autoNameForm.classList.toggle("hidden", !isVisible);
  autoNameForm.setAttribute("aria-hidden", String(!isVisible));

  if (isVisible) {
    autoPlayerNameInput?.focus();
  }
}

async function autoSaveCurrentScore() {
  if (!hasLeaderboardMode() || hasSavedCurrentScore) {
    return;
  }

  if (score <= 0) {
    toggleAutoNameForm(false);
    saveMessage.textContent = "";
    return;
  }

  let playerName = localStorage.getItem(playerNameStorageKey) || "";

  if (!playerName) {
    toggleAutoNameForm(true);
    saveMessage.textContent = "Choose a leaderboard name to save this run.";
    return;
  }

  toggleAutoNameForm(false);
  saveMessage.textContent = "";
  await saveCurrentScore(null, playerName);
}

async function saveCurrentScore(event, providedName = "") {
  event?.preventDefault();

  if (!hasLeaderboardMode()) {
    showToast("Scores are not saved for this mode.");
    return;
  }

  if (score <= 0) {
    toggleAutoNameForm(false);
    saveMessage.textContent = "";
    showToast("Only runs above 0 points can be saved.");
    return;
  }

  const storedName = localStorage.getItem(playerNameStorageKey);
  const inputName = playerNameInput ? playerNameInput.value : "";
  const playerName = (providedName || storedName || inputName).trim().slice(0, 18);

  if (!playerName) {
    showToast("Enter a name first.");
    (autoPlayerNameInput || playerNameInput)?.focus();
    return;
  }

  if (hasSavedCurrentScore) {
    return;
  }

  const scoreEntry = {
    name: playerName,
    score,
    mode: selectedModeKey,
    rounds: totalRounds,
    date: new Date().toISOString(),
    dailyKey: isDailyMode() ? getDailyKey() : null
  };

  localStorage.setItem(playerNameStorageKey, playerName);
  toggleAutoNameForm(false);
  updateScoreFormState();
  upsertLocalScore(scoreEntry);

  // Save local first, then try the online leaderboard when the mode supports it.
  if (supabaseClient) {
    let existingQuery = supabaseClient
      .from(leaderboardTable)
      .select("id, score, rounds")
      .eq("mode", scoreEntry.mode)
      .ilike("name", scoreEntry.name);

    if (isDailyMode()) {
      existingQuery = existingQuery
        .gte("created_at", `${getDailyKey()}T00:00:00.000Z`)
        .lte("created_at", `${getDailyKey()}T23:59:59.999Z`);
    }

    const { data: existingEntries, error: selectError } = await existingQuery.limit(1);

    if (selectError) {
      showToast(getSupabaseErrorMessage(selectError, "Saved locally, but global save failed."));
      hasSavedCurrentScore = true;
      renderLeaderboardEntries(getCurrentModeEntries());
      return;
    }

    const existingEntry = existingEntries[0];

    if (existingEntry) {
      const isBetterScore = scoreEntry.score > existingEntry.score;
      const isTieWithMoreRounds = scoreEntry.score === existingEntry.score && scoreEntry.rounds > existingEntry.rounds;

      if (!isBetterScore && !isTieWithMoreRounds) {
        hasSavedCurrentScore = true;
        saveMessage.textContent = "";
        await renderLeaderboard();
        await preloadMenuLeaderboard(true);
        return;
      }

      const { error: updateError } = await supabaseClient
        .from(leaderboardTable)
        .update({
          name: scoreEntry.name,
          score: scoreEntry.score,
          rounds: scoreEntry.rounds,
          created_at: scoreEntry.date
        })
        .eq("id", existingEntry.id);

      if (updateError) {
        showToast(getSupabaseErrorMessage(updateError, "Saved locally, but global update failed."));
        hasSavedCurrentScore = true;
        renderLeaderboardEntries(getCurrentModeEntries());
        await preloadMenuLeaderboard(true);
        return;
      }
    } else {
      const { error: insertError } = await supabaseClient.from(leaderboardTable).insert({
        name: scoreEntry.name,
        score: scoreEntry.score,
        mode: scoreEntry.mode,
        rounds: scoreEntry.rounds,
        created_at: scoreEntry.date
      });

      if (insertError) {
        showToast(getSupabaseErrorMessage(insertError, "Saved locally, but global save failed."));
        hasSavedCurrentScore = true;
        renderLeaderboardEntries(getCurrentModeEntries());
        await preloadMenuLeaderboard(true);
        return;
      }
    }
  }

  hasSavedCurrentScore = true;
  saveMessage.textContent = "";
  await renderLeaderboard();
  await preloadMenuLeaderboard(true);
}

// Move forward one step. Either next round... or game over if the mode says so.
async function goToNextStep() {
  const previousRound = currentRound;

  currentRound += 1;

  if (currentRound < totalRounds) {
    await renderRound();
    void playRoundProgressTransition(previousRound);
    return;
  }

  endGame();
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectMode(button.dataset.mode);
  });
});

modeGroupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextGroup = button.dataset.modeGroup;

    void switchModeGroup(nextGroup);
  });
});

if (mobileModeSelect) {
  mobileModeSelect.addEventListener("change", (event) => {
    selectMode(event.target.value);
  });
}

learnPackClose?.addEventListener("click", () => {
  setLearnPackPickerOpen(false);
});
learnPackStart?.addEventListener("click", () => {
  setLearnPackPickerOpen(false);
  startGame("learn");
});

endLeaderboardToggle?.addEventListener("click", () => {
  isEndLeaderboardOpen = !isEndLeaderboardOpen;
  updateEndLeaderboardVisibility();
});

themeToggle?.addEventListener("click", () => {
  applyGameTheme("light");
});

mobileThemeLock.addEventListener("change", syncThemeForViewport);

startButton.addEventListener("click", () => {
  if (isStudyMode() && hasLearnPackSelection()) {
    renderLearnPackPicker();
    setLearnPackPickerOpen(true);
    return;
  }

  startGame(selectedModeKey);
});
dailyButton?.addEventListener("click", () => {
  startGame("daily");
});
helpToggleButton?.addEventListener("click", () => {
  const isOpen = helpWidget?.classList.contains("open") || false;
  setHelpPanelOpen(!isOpen);
});
helpCloseButton?.addEventListener("click", () => {
  setHelpPanelOpen(false);
});
homeButtons.forEach((button) => {
  button.addEventListener("click", goHome);
});
scoreForm?.addEventListener("submit", saveCurrentScore);
autoNameForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  void saveCurrentScore(null, autoPlayerNameInput?.value || "");
});
if (menuScoreboardToggle && menuScoreboardPanel) {
  menuScoreboardToggle.addEventListener("click", async () => {
    const shouldOpen = !menuScoreboardPanel.classList.contains("open");

    if (shouldOpen) {
      await preloadMenuLeaderboard();
    }

    const isOpen = menuScoreboardPanel.classList.toggle("open");
    menuScoreboardToggle.setAttribute("aria-expanded", String(isOpen));
    menuScoreboardPanel.setAttribute("aria-hidden", String(!isOpen));

    if (isOpen) {
      if (menuLeaderboardCache) {
        renderLeaderboardEntries(menuLeaderboardCache, menuLeaderboardList, menuLeaderboardMode);
      } else {
        void renderLeaderboard(menuLeaderboardList, menuLeaderboardMode, null);
      }
    }
  });
}
document.addEventListener("click", (event) => {
  if (!menuScoreboardToggle || !menuScoreboardPanel || !menuLeaderboardPanelCard) {
    return;
  }

  const target = event.target;

  if (!(target instanceof Node)) {
    return;
  }

  const clickedInsideLeaderboard = menuLeaderboardPanelCard.contains(target);
  const clickedToggle = menuScoreboardToggle.contains(target);

  if (!clickedInsideLeaderboard && !clickedToggle) {
    menuScoreboardPanel.classList.remove("open");
    menuScoreboardToggle.setAttribute("aria-expanded", "false");
    menuScoreboardPanel.setAttribute("aria-hidden", "true");
  }
});
document.addEventListener("click", (event) => {
  if (!helpWidget || !helpWidget.classList.contains("open")) {
    return;
  }

  const target = event.target;

  if (target instanceof Node && !helpWidget.contains(target)) {
    setHelpPanelOpen(false);
  }
});
document.addEventListener("click", (event) => {
  if (!statsWidget || !isStatsPanelOpen) {
    return;
  }

  const target = event.target;

  if (target instanceof Node && !statsWidget.contains(target)) {
    setStatsPanelOpen(false);
  }
});
selectMode(selectedModeKey);
void loadContentPacks();
loadGameTheme();
applyFeatureVisibility();
renderLocalStats();
updateLeaderboardVisibility();
updateDailyAvailability();
updateStreakLabel();
void preloadMenuLeaderboard();
if (menuScoreboardPanel && menuScoreboardPanel.classList.contains("open")) {
  void renderLeaderboard(menuLeaderboardList, menuLeaderboardMode, null);
}
playAgainButton.addEventListener("click", () => {
  startGame(selectedModeKey);
});
nextButton.addEventListener("click", () => {
  goToNextStep();
});
hintButton.addEventListener("click", useHint);
openShareButton.addEventListener("click", () => {
  toggleShareModal(true);
});
openLearnReviewButton?.addEventListener("click", () => {
  toggleLearnReviewModal(true);
});
closeLearnReviewButton?.addEventListener("click", () => {
  toggleLearnReviewModal(false);
});
statsToggleButton?.addEventListener("click", () => {
  setStatsPanelOpen(!isStatsPanelOpen);
});
statsCloseButton?.addEventListener("click", () => {
  setStatsPanelOpen(false);
});
resetLocalStatsButton?.addEventListener("click", () => {
  saveLocalStats(getDefaultLocalStats());
  setStatsPanelOpen(false);
  showToast("Local stats reset.", "success");
});
closeShareButton.addEventListener("click", () => {
  toggleShareModal(false);
});
copyShareButton.addEventListener("click", () => {
  copyShareText();
});
nativeShareButton.addEventListener("click", () => {
  shareRun();
});

document.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeLearnReview === "true") {
    toggleLearnReviewModal(false);
  }
});
document.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeShare === "true") {
    toggleShareModal(false);
  }
});
document.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeLearnPack === "true") {
    setLearnPackPickerOpen(false);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && helpWidget?.classList.contains("open")) {
    setHelpPanelOpen(false);
    return;
  }

  if (event.key === "Escape" && isStatsPanelOpen) {
    setStatsPanelOpen(false);
    return;
  }

  if (event.key === "Escape" && isLearnReviewModalOpen) {
    toggleLearnReviewModal(false);
    return;
  }

  if (event.key === "Escape" && learnPackModal?.classList.contains("open")) {
    setLearnPackPickerOpen(false);
    return;
  }

  if (event.key === "Escape" && shareModal.classList.contains("open")) {
    toggleShareModal(false);
    return;
  }

  if (isTypingTarget(event.target)) {
    return;
  }

  if (event.key >= "1" && event.key <= "4") {
    event.preventDefault();
    handleKeyboardAnswer(Number(event.key) - 1);
    return;
  }

  if (event.key === "Enter" && isScreenActive("game") && hasAnswered && !nextButton.disabled) {
    event.preventDefault();
    nextButton.click();
  }
});
