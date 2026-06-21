// Curated official NASA image assets.
// Keep nasaId/source with each item so the image and answer stay traceable.
const spaceLocations = [
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA15691/PIA15691~medium.jpg",
    nasaId: "PIA15691",
    source: "NASA Image and Video Library",
    correctAnswer: "Mars",
    wrongAnswers: ["The Moon", "Earth", "Mercury"],
    fact: "Curiosity captured this early color landscape after landing in Gale Crater."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/as11-37-5545/as11-37-5545~large.jpg",
    nasaId: "as11-37-5545",
    source: "NASA Image and Video Library",
    correctAnswer: "The Moon",
    wrongAnswers: ["Mars", "Mercury", "Europa"],
    fact: "This Apollo 11 photo shows the U.S. flag standing on the Moon."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01262/PIA01262~small.jpg",
    nasaId: "PIA01262",
    source: "NASA Image and Video Library",
    correctAnswer: "Jupiter",
    wrongAnswers: ["Saturn", "Neptune", "Uranus"],
    fact: "This Hubble view shows Jupiter's bands and major storm systems."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA12513/PIA12513~small.jpg",
    nasaId: "PIA12513",
    source: "NASA Image and Video Library",
    correctAnswer: "Saturn",
    wrongAnswers: ["Jupiter", "Uranus", "Neptune"],
    fact: "Cassini captured Saturn and its famous ring system in this view."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/iss045e013851/iss045e013851~large.jpg",
    nasaId: "iss045e013851",
    source: "NASA Image and Video Library",
    correctAnswer: "Earth",
    wrongAnswers: ["Mars", "Venus", "Titan"],
    fact: "This view of Earth was photographed from the ISS in orbit."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01322/PIA01322~large.jpg",
    nasaId: "PIA01322",
    source: "NASA Image and Video Library",
    correctAnswer: "Orion Nebula",
    wrongAnswers: ["Jupiter", "The Moon", "Saturn"],
    fact: "The Orion Nebula is a nearby region where new stars are forming."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01391/PIA01391~orig.jpg",
    nasaId: "PIA01391",
    source: "NASA Image and Video Library",
    correctAnswer: "Uranus",
    wrongAnswers: ["Neptune", "Saturn", "Earth"],
    fact: "Voyager 2 captured Uranus, the ice giant that spins on its side."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01539/PIA01539~orig.jpg",
    nasaId: "PIA01539",
    source: "NASA Image and Video Library",
    correctAnswer: "Neptune",
    wrongAnswers: ["Uranus", "Jupiter", "Venus"],
    fact: "Voyager 2 is still the only spacecraft ever to visit Neptune."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA04921/PIA04921~orig.jpg",
    nasaId: "PIA04921",
    source: "NASA Image and Video Library",
    correctAnswer: "Andromeda Galaxy",
    wrongAnswers: ["Orion Nebula", "Saturn", "Mars"],
    fact: "Andromeda is the nearest large spiral galaxy to the Milky Way."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA09109/PIA09109~orig.jpg",
    nasaId: "PIA09109",
    source: "NASA Image and Video Library",
    correctAnswer: "Eagle Nebula",
    wrongAnswers: ["Andromeda Galaxy", "The Moon", "Jupiter"],
    fact: "The Eagle Nebula contains the famous Pillars of Creation."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA12778/PIA12778~orig.jpg",
    nasaId: "PIA12778",
    source: "NASA Image and Video Library",
    correctAnswer: "Titan",
    wrongAnswers: ["Europa", "Mars", "Venus"],
    fact: "Titan is Saturn's largest moon and has lakes of liquid methane."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA17658/PIA17658~orig.jpg",
    nasaId: "PIA17658",
    source: "NASA Image and Video Library",
    correctAnswer: "Europa",
    wrongAnswers: ["Titan", "The Moon", "Mercury"],
    fact: "Europa may hide a global ocean beneath its icy outer crust."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001625/GSFC_20171208_Archive_e001625~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001625",
    source: "NASA Image and Video Library",
    correctAnswer: "Mercury",
    wrongAnswers: ["The Moon", "Mars", "Ceres"],
    fact: "Mercury is heavily cratered because it has almost no atmosphere."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA19693/PIA19693~orig.jpg",
    nasaId: "PIA19693",
    source: "NASA Image and Video Library",
    correctAnswer: "Pluto",
    wrongAnswers: ["Neptune", "Titan", "Europa"],
    fact: "New Horizons showed Pluto as a world of plains, mountains, and haze."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA14443/PIA14443~orig.jpg",
    nasaId: "PIA14443",
    source: "NASA Image and Video Library",
    correctAnswer: "Ring Nebula",
    wrongAnswers: ["Orion Nebula", "Andromeda Galaxy", "Eagle Nebula"],
    fact: "The Ring Nebula is a glowing shell of gas from a dying star."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA03606/PIA03606~orig.jpg",
    nasaId: "PIA03606",
    source: "NASA Image and Video Library",
    correctAnswer: "Crab Nebula",
    wrongAnswers: ["Ring Nebula", "Jupiter", "Sombrero Galaxy"],
    fact: "The Crab Nebula is the expanding remnant of a supernova."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA15226/PIA15226~orig.jpg",
    nasaId: "PIA15226",
    source: "NASA Image and Video Library",
    correctAnswer: "Sombrero Galaxy",
    wrongAnswers: ["Andromeda Galaxy", "Crab Nebula", "Saturn"],
    fact: "The Sombrero Galaxy is named for its bright core and dust lane."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA10957/PIA10957~orig.jpg",
    nasaId: "PIA10957",
    source: "NASA Image and Video Library",
    correctAnswer: "Tarantula Nebula",
    wrongAnswers: ["Eagle Nebula", "Ring Nebula", "Europa"],
    fact: "The Tarantula Nebula is one of our nearest major star nurseries."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA20309/PIA20309~orig.jpg",
    nasaId: "PIA20309",
    source: "NASA Image and Video Library",
    correctAnswer: "Ceres",
    wrongAnswers: ["Mercury", "The Moon", "Phobos"],
    fact: "Ceres is the largest object in the asteroid belt and a dwarf planet."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA17211/PIA17211~orig.jpg",
    nasaId: "PIA17211",
    source: "NASA Image and Video Library",
    correctAnswer: "Enceladus",
    wrongAnswers: ["Europa", "Titan", "The Moon"],
    fact: "Enceladus sends icy plumes into space from below its crust."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA22056/PIA22056~orig.jpg",
    nasaId: "PIA22056",
    source: "NASA Image and Video Library",
    correctAnswer: "Phobos",
    wrongAnswers: ["Deimos", "Ceres", "Mercury"],
    fact: "Phobos is the larger of Mars' two moons and orbits very close in."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001925/GSFC_20171208_Archive_e001925~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001925",
    source: "NASA Image and Video Library",
    correctAnswer: "Whirlpool Galaxy",
    wrongAnswers: ["Sombrero Galaxy", "Andromeda Galaxy", "Crab Nebula"],
    fact: "The Whirlpool Galaxy is a spiral galaxy with a close companion."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA04215/PIA04215~orig.jpg",
    nasaId: "PIA04215",
    source: "NASA Image and Video Library",
    correctAnswer: "Horsehead Nebula",
    wrongAnswers: ["Orion Nebula", "Ring Nebula", "Tarantula Nebula"],
    fact: "The Horsehead Nebula is a dark dust cloud set against glowing gas."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001955/GSFC_20171208_Archive_e001955~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001955",
    source: "NASA Image and Video Library",
    correctAnswer: "Lagoon Nebula",
    wrongAnswers: ["Orion Nebula", "Eagle Nebula", "Crab Nebula"],
    fact: "The Lagoon Nebula is a huge star-forming region in Sagittarius."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA09268/PIA09268~orig.jpg",
    nasaId: "PIA09268",
    source: "NASA Image and Video Library",
    correctAnswer: "Rosette Nebula",
    wrongAnswers: ["Ring Nebula", "Lagoon Nebula", "Horsehead Nebula"],
    fact: "The Rosette Nebula surrounds a young star cluster with glowing gas."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002155/GSFC_20171208_Archive_e002155~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e002155",
    source: "NASA Image and Video Library",
    correctAnswer: "Cat's Eye Nebula",
    wrongAnswers: ["Ring Nebula", "Crab Nebula", "Tarantula Nebula"],
    fact: "The Cat's Eye Nebula has layered shells around a dying star."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002058/GSFC_20171208_Archive_e002058~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e002058",
    source: "NASA Image and Video Library",
    correctAnswer: "Veil Nebula",
    wrongAnswers: ["Crab Nebula", "Ring Nebula", "Orion Nebula"],
    fact: "The Veil Nebula is the expanding remnant of an exploded star."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA09262/PIA09262~orig.jpg",
    nasaId: "PIA09262",
    source: "NASA Image and Video Library",
    correctAnswer: "Pleiades",
    wrongAnswers: ["Andromeda Galaxy", "Lagoon Nebula", "Whirlpool Galaxy"],
    fact: "The Pleiades is a bright star cluster also called the Seven Sisters."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001642/GSFC_20171208_Archive_e001642~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001642",
    source: "NASA Image and Video Library",
    correctAnswer: "Large Magellanic Cloud",
    wrongAnswers: ["Small Magellanic Cloud", "Andromeda Galaxy", "Sombrero Galaxy"],
    fact: "The Large Magellanic Cloud is a nearby dwarf galaxy by the Milky Way."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002039/GSFC_20171208_Archive_e002039~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e002039",
    source: "NASA Image and Video Library",
    correctAnswer: "Small Magellanic Cloud",
    wrongAnswers: ["Large Magellanic Cloud", "Whirlpool Galaxy", "Eagle Nebula"],
    fact: "The Small Magellanic Cloud is a nearby dwarf galaxy in southern skies."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA23122/PIA23122~orig.jpg",
    nasaId: "PIA23122",
    source: "NASA Image and Video Library",
    correctAnswer: "Messier 87",
    wrongAnswers: ["Andromeda Galaxy", "Sombrero Galaxy", "Whirlpool Galaxy"],
    fact: "Messier 87 is a giant galaxy famous for its central black hole."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA21770/PIA21770~orig.jpg",
    nasaId: "PIA21770",
    source: "NASA Image and Video Library",
    correctAnswer: "Jupiter's Great Red Spot",
    wrongAnswers: ["Saturn's Hexagon", "Neptune's Dark Spot", "Mars"],
    fact: "Jupiter's Great Red Spot is a storm larger than Earth."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00521/PIA00521~orig.jpg",
    nasaId: "PIA00521",
    source: "NASA Image and Video Library",
    correctAnswer: "Ganymede",
    wrongAnswers: ["Callisto", "Europa", "Titan"],
    fact: "Ganymede is Jupiter's largest moon and the biggest moon of all."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA03456/PIA03456~orig.jpg",
    nasaId: "PIA03456",
    source: "NASA Image and Video Library",
    correctAnswer: "Callisto",
    wrongAnswers: ["Ganymede", "Europa", "The Moon"],
    fact: "Callisto is a Galilean moon with an old, heavily cratered surface."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA17195/PIA17195~orig.jpg",
    nasaId: "PIA17195",
    source: "NASA Image and Video Library",
    correctAnswer: "Dione",
    wrongAnswers: ["Rhea", "Tethys", "Enceladus"],
    fact: "Dione is an icy moon of Saturn with bright fractured terrain."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA12546/PIA12546~orig.jpg",
    nasaId: "PIA12546",
    source: "NASA Image and Video Library",
    correctAnswer: "Rhea",
    wrongAnswers: ["Dione", "Mimas", "Iapetus"],
    fact: "Rhea is Saturn's second-largest moon and is heavily cratered."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA12521/PIA12521~orig.jpg",
    nasaId: "PIA12521",
    source: "NASA Image and Video Library",
    correctAnswer: "Iapetus",
    wrongAnswers: ["Rhea", "Tethys", "Titan"],
    fact: "Iapetus is famous for its dramatic two-tone surface colors."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00037/PIA00037~orig.jpg",
    nasaId: "PIA00037",
    source: "NASA Image and Video Library",
    correctAnswer: "Ariel",
    wrongAnswers: ["Miranda", "Triton", "Europa"],
    fact: "Ariel is a moon of Uranus photographed up close by Voyager 2."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01490/PIA01490~orig.jpg",
    nasaId: "PIA01490",
    source: "NASA Image and Video Library",
    correctAnswer: "Miranda",
    wrongAnswers: ["Ariel", "Dione", "Callisto"],
    fact: "Miranda has one of the strangest patchwork surfaces Voyager 2 saw."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01994/PIA01994~orig.jpg",
    nasaId: "PIA01994",
    source: "NASA Image and Video Library",
    correctAnswer: "Triton",
    wrongAnswers: ["Titan", "Europa", "Ganymede"],
    fact: "Triton is Neptune's largest moon and orbits in reverse direction."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA13693/PIA13693~orig.jpg",
    nasaId: "PIA13693",
    source: "NASA Image and Video Library",
    correctAnswer: "Valles Marineris",
    wrongAnswers: ["Olympus Mons", "Gale Crater", "Phobos"],
    fact: "Valles Marineris is a vast canyon system stretching across Mars."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00452/PIA00452~orig.jpg",
    nasaId: "PIA00452",
    source: "NASA Image and Video Library",
    correctAnswer: "Pale Blue Dot",
    wrongAnswers: ["Earthrise", "Blue Marble", "Andromeda Galaxy"],
    fact: "Pale Blue Dot shows Earth from billions of kilometers away."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001651/GSFC_20171208_Archive_e001651~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001651",
    source: "NASA Image and Video Library",
    correctAnswer: "Hubble Ultra Deep Field",
    wrongAnswers: ["Andromeda Galaxy", "Whirlpool Galaxy", "Pleiades"],
    fact: "The Hubble Ultra Deep Field reveals thousands of distant galaxies."
  }
];

const gameModes = {
  quick: {
    label: "Quick",
    rounds: 3,
    index: 0,
    hints: 1
  },
  classic: {
    label: "Classic",
    rounds: 5,
    index: 1,
    hints: 2
  },
  full: {
    label: "Full Tour",
    rounds: 6,
    index: 2,
    hints: 3
  },
  daily: {
    label: "Daily",
    rounds: 1,
    index: null,
    hints: 1
  },
  infinite: {
    label: "Infinite",
    rounds: Infinity,
    index: 3,
    hints: 3
  }
};

const screens = {
  start: document.getElementById("start-screen"),
  game: document.getElementById("game-screen"),
  end: document.getElementById("end-screen")
};

const modeButtons = document.querySelectorAll(".mode-card");
const modeGrid = document.getElementById("mode-grid");
const startButton = document.getElementById("start-button");
const dailyButton = document.getElementById("daily-button");
const dailyStatus = document.getElementById("daily-status");
const helpToggle = document.getElementById("help-toggle");
const helpPanel = document.getElementById("help-panel");
const homeButtons = document.querySelectorAll(".home-button, .end-home-button");
const playAgainButton = document.getElementById("play-again-button");
const nextButton = document.getElementById("next-button");
const roundLabel = document.getElementById("round-label");
const mistakesLabel = document.getElementById("mistakes-label");
const streakLabel = document.getElementById("streak-label");
const scoreLabel = document.getElementById("score-label");
const spaceImage = document.getElementById("space-image");
const answersContainer = document.getElementById("answers-container");
const feedbackPanel = document.getElementById("feedback-panel");
const feedbackText = document.getElementById("feedback-text");
const factText = document.getElementById("fact-text");
const sourceText = document.getElementById("source-text");
const hintButton = document.getElementById("hint-button");
const hintStatus = document.getElementById("hint-status");
const finalHeading = document.getElementById("final-heading");
const finalScore = document.getElementById("final-score");
const ratingText = document.getElementById("rating-text");
const endStatCorrect = document.getElementById("end-stat-correct");
const endStatWrong = document.getElementById("end-stat-wrong");
const endStatAccuracy = document.getElementById("end-stat-accuracy");
const transitionOverlay = document.getElementById("transition-overlay");
const transitionText = document.getElementById("transition-text");
const scoreForm = document.getElementById("score-form");
const savedPlayerName = document.getElementById("saved-player-name");
const playerNameInput = document.getElementById("player-name");
const saveMessage = document.getElementById("save-message");
const leaderboardList = document.getElementById("leaderboard-list");
const leaderboardMode = document.getElementById("leaderboard-mode");
const menuScoreboardToggle = document.getElementById("menu-scoreboard-toggle");
const menuScoreboardPanel = document.getElementById("menu-scoreboard-panel");
const menuLeaderboardList = document.getElementById("menu-leaderboard-list");
const menuLeaderboardMode = document.getElementById("menu-leaderboard-mode");
const leaderboardOnlyElements = document.querySelectorAll(".leaderboard-only");

const supabaseUrl = "https://dqevbyrtagkmgesrixrf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxZXZieXJ0YWdrbWdlc3JpeHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MjA1NTUsImV4cCI6MjA5NzE5NjU1NX0.-OITqkgJLIGi1KPHQcxxdPsccUk6UYwr6kKo5wUVjUc";
const leaderboardTable = "leaderboard";
const leaderboardStorageKey = "spaceguessr-leaderboard";
const playerNameStorageKey = "spaceguessr-player-name";
const dailyPlayedStorageKey = "spaceguessr-daily-played";
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
let hintsLeft = 0;
let usedHintThisRound = false;
let scoreFeedbackTimer;
let rewardFeedbackTimer;
let streakFeedbackTimer;
let gameOverTimer;
const MAX_WRONG_ANSWERS_INFINITE = 10;
const TRANSITION_MIN_DURATION = 420;
const TRANSITION_MAX_DURATION = 2000;
const FEEDBACK_OPEN_DELAY = 220;
const NEXT_BUTTON_DELAY = 380;
const preloadedImageUrls = new Set();

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

function isInfiniteMode() {
  return selectedModeKey === "infinite";
}

function isDailyMode() {
  return selectedModeKey === "daily";
}

function hasLeaderboardMode() {
  return isInfiniteMode() || isDailyMode();
}

function getHintType(answer) {
  const planets = ["Mars", "Earth", "Jupiter", "Saturn", "Uranus", "Neptune", "Mercury", "Venus", "Pluto", "Ceres"];
  const moons = ["The Moon", "Titan", "Europa", "Enceladus", "Phobos", "Ganymede", "Callisto", "Dione", "Rhea", "Iapetus", "Ariel", "Miranda", "Triton"];
  const galaxies = ["Andromeda Galaxy", "Sombrero Galaxy", "Whirlpool Galaxy", "Large Magellanic Cloud", "Small Magellanic Cloud", "Messier 87"];
  const nebulae = ["Orion Nebula", "Eagle Nebula", "Ring Nebula", "Crab Nebula", "Tarantula Nebula", "Horsehead Nebula", "Lagoon Nebula", "Rosette Nebula", "Cat's Eye Nebula", "Veil Nebula"];

  if (planets.includes(answer)) {
    return "planet";
  }

  if (moons.includes(answer)) {
    return "moon";
  }

  if (galaxies.includes(answer)) {
    return "galaxy";
  }

  if (nebulae.includes(answer)) {
    return "nebula";
  }

  if (answer.includes("Field")) {
    return "deep space image";
  }

  if (answer.includes("Spot")) {
    return "storm";
  }

  if (answer.includes("Dot")) {
    return "famous photo";
  }

  if (answer.includes("Marineris")) {
    return "canyon system";
  }

  return "space object";
}

function updateHintUI() {
  hintStatus.textContent = `Hints left: ${hintsLeft}`;
  hintButton.disabled = hasAnswered || usedHintThisRound || hintsLeft <= 0;

  if (usedHintThisRound) {
    hintButton.textContent = "Hint Used";
    return;
  }

  if (hintsLeft <= 0) {
    hintButton.textContent = "No Hints";
    return;
  }

  hintButton.textContent = "Use Hint";
}

function useHint() {
  if (hasAnswered || usedHintThisRound || hintsLeft <= 0) {
    return;
  }

  const currentQuestion = gameDeck[currentRound];
  const hintType = getHintType(currentQuestion.correctAnswer);

  hintsLeft -= 1;
  usedHintThisRound = true;
  hintStatus.textContent = `Hint: This is a ${hintType}.`;
  updateHintUI();
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
  const isLocked = hasPlayedDailyToday();

  dailyButton.disabled = isLocked;
  dailyButton.classList.toggle("locked", isLocked);
  dailyButton.setAttribute(
    "aria-label",
    isLocked ? "Daily challenge already played today" : "Start daily challenge"
  );

  dailyStatus.textContent = isLocked
    ? "Daily challenge already completed today. A new one unlocks tomorrow."
    : "";
  dailyStatus.classList.toggle("hidden", !isLocked);
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
  }, 620);
}

function updateMistakesLabel() {
  const missesLeft = Math.max(0, MAX_WRONG_ANSWERS_INFINITE - wrongAnswerCount);
  const dots = Array.from({ length: MAX_WRONG_ANSWERS_INFINITE }, (_, index) => {
    const isLost = index < wrongAnswerCount;
    return `<span class="miss-dot${isLost ? " lost" : ""}" aria-hidden="true"></span>`;
  }).join("");

  mistakesLabel.innerHTML = `
    <span class="miss-track-label">${missesLeft} left</span>
    <span class="miss-dots" aria-hidden="true">${dots}</span>
  `;
  mistakesLabel.setAttribute("aria-label", `${missesLeft} misses left before game over`);
  mistakesLabel.classList.toggle("hidden", !isInfiniteMode());
  mistakesLabel.classList.toggle("danger", isInfiniteMode() && missesLeft <= 3);
}

function updateLeaderboardVisibility() {
  leaderboardOnlyElements.forEach((element) => {
    element.classList.toggle("hidden", !hasLeaderboardMode());
  });

  updateMistakesLabel();

  if (!hasLeaderboardMode()) {
    menuScoreboardPanel.classList.remove("open");
    menuScoreboardToggle.setAttribute("aria-expanded", "false");
  }
}

function selectMode(modeKey) {
  selectedModeKey = modeKey;
  const selectedIndex = gameModes[selectedModeKey].index;

  modeButtons.forEach((button) => {
    const isSelected = button.dataset.mode === selectedModeKey;
    button.classList.toggle("selected", isSelected);
  });

  if (selectedIndex !== null) {
    modeGrid.style.setProperty("--selected-mode-index", selectedIndex);
  }
  startButton.textContent = `Start ${gameModes[selectedModeKey].label}`;
  updateLeaderboardVisibility();

  if (menuScoreboardPanel.classList.contains("open")) {
    renderLeaderboard(menuLeaderboardList, menuLeaderboardMode, null);
  }
}

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("active");
  });

  screens[screenName].classList.add("active");
}

function setTransitionState(isVisible, label = "Loading mission...") {
  transitionText.textContent = label;
  transitionOverlay.classList.toggle("visible", isVisible);
  transitionOverlay.setAttribute("aria-hidden", String(!isVisible));
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

async function preloadImagesInBackground(imageUrls) {
  for (const imageUrl of imageUrls) {
    await preloadImageOnce(imageUrl);
    await wait(0);
  }
}

function buildInitialGameDeck() {
  if (isDailyMode()) {
    return [getDailyQuestion()];
  }

  if (isInfiniteMode()) {
    return Array.from({ length: Math.min(8, spaceLocations.length) }, () => drawRandomQuestion());
  }

  return Array.from({ length: totalRounds }, () => drawRandomQuestion());
}

function toggleHelpPanel(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean"
    ? forceOpen
    : !helpPanel.classList.contains("open");

  helpPanel.classList.toggle("open", shouldOpen);
  helpPanel.setAttribute("aria-hidden", String(!shouldOpen));
  helpToggle.setAttribute("aria-expanded", String(shouldOpen));
}

function goHome() {
  clearTimeout(gameOverTimer);
  clearTimeout(streakFeedbackTimer);
  hasAnswered = false;
  feedbackPanel.classList.remove("open");
  nextButton.disabled = false;
  nextButton.classList.remove("hidden", "staged");
  setTransitionState(false);
  toggleHelpPanel(false);
  updateDailyAvailability();
  showScreen("start");
}

function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

function drawRandomQuestion() {
  if (isDailyMode()) {
    return getDailyQuestion();
  }

  if (randomBag.length === 0) {
    randomBag = shuffleArray(spaceLocations);
  }

  return randomBag.pop();
}

async function startGame(modeKey = selectedModeKey) {
  if (modeKey === "daily" && hasPlayedDailyToday()) {
    updateDailyAvailability();
    showScreen("start");
    return;
  }

  selectedModeKey = modeKey;
  totalRounds = gameModes[selectedModeKey].rounds;
  randomBag = shuffleArray(spaceLocations);
  gameDeck = [];
  currentRound = 0;
  score = 0;
  hasAnswered = false;
  hasSavedCurrentScore = false;
  wrongAnswerCount = 0;
  correctGuessCount = 0;
  currentStreak = 0;
  bestStreak = 0;
  hintsLeft = gameModes[selectedModeKey].hints;
  usedHintThisRound = false;
  saveMessage.textContent = "";
  playerNameInput.value = localStorage.getItem(playerNameStorageKey) || "";
  clearTimeout(scoreFeedbackTimer);
  clearTimeout(rewardFeedbackTimer);
  clearTimeout(streakFeedbackTimer);
  clearTimeout(gameOverTimer);
  scoreLabel.classList.remove("penalty");
  scoreLabel.classList.remove("reward");
  updateScoreFormState();
  updateLeaderboardVisibility();
  updateStats();
  updateStreakLabel();
  updateHintUI();

  if (isDailyMode()) {
    markDailyAsPlayed();
    updateDailyAvailability();
  }

  gameDeck = buildInitialGameDeck();
  updateScore();
  showScreen("game");
  await renderRound(true);
}

function updateScore() {
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
  finalHeading.textContent = isDailyMode() ? "Daily result" : "Your final score";
  ratingText.textContent = isDailyMode()
    ? getDailyResultText()
    : getRating(score);
  saveMessage.textContent = "";
  updateLeaderboardVisibility();

  if (isInfiniteMode()) {
    renderLeaderboard();
  }

  showScreen("end");
  if (isDailyMode()) {
    showDailyResult();
    return;
  }

  animateFinalScore(score);
}

async function renderRound(showTransition = false) {
  if (!gameDeck[currentRound]) {
    gameDeck[currentRound] = drawRandomQuestion();
  }

  const currentQuestion = gameDeck[currentRound];
  const answerOptions = shuffleArray([
    currentQuestion.correctAnswer,
    ...currentQuestion.wrongAnswers
  ]);

  roundLabel.textContent = selectedModeKey === "infinite"
    ? `Round ${currentRound + 1}`
    : `Round ${currentRound + 1} / ${totalRounds}`;
  updateMistakesLabel();
  spaceImage.classList.remove("loaded");
  spaceImage.onload = () => {
    spaceImage.classList.add("loaded");
  };
  spaceImage.src = currentQuestion.imageUrl;
  if (spaceImage.complete) {
    spaceImage.classList.add("loaded");
  }
  spaceImage.alt = `Space image for ${currentQuestion.correctAnswer}`;

  if (showTransition) {
    setTransitionState(true, "Preparing mission...");
    const currentImageReady = Promise.all([
      preloadImageOnce(currentQuestion.imageUrl),
      wait(TRANSITION_MIN_DURATION)
    ]);
    const allUpcomingImageUrls = gameDeck
      .slice(currentRound + 1)
      .map((question) => question.imageUrl);

    void preloadImagesInBackground(allUpcomingImageUrls);

    await Promise.race([
      currentImageReady,
      wait(TRANSITION_MAX_DURATION)
    ]);
  }
  answersContainer.innerHTML = "";
  feedbackPanel.classList.remove("open");
  nextButton.disabled = false;
  nextButton.classList.remove("hidden");
  nextButton.classList.add("staged");
  hasAnswered = false;
  usedHintThisRound = false;
  hintStatus.textContent = `Hints left: ${hintsLeft}`;
  updateHintUI();

  if (showTransition) {
    setTransitionState(false);
  }

  answerOptions.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.style.setProperty("--answer-index", index);
    button.textContent = answer;
    button.addEventListener("click", () => {
      void handleAnswer(button, answer);
    });
    answersContainer.appendChild(button);
  });
}

async function handleAnswer(selectedButton, selectedAnswer) {
  if (hasAnswered) {
    return;
  }

  hasAnswered = true;

  const currentQuestion = gameDeck[currentRound];
  const answerButtons = answersContainer.querySelectorAll(".answer-button");
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  if (isCorrect) {
    correctGuessCount += 1;
    currentStreak += 1;
    bestStreak = Math.max(bestStreak, currentStreak);
    setScore(score + 50);
    showCorrectAnswerReward();
    if (currentStreak >= 2) {
      showStreakFeedback();
    }
  } else {
    setScore(score - 25);
    showScorePenaltyFeedback();
    wrongAnswerCount += 1;
    currentStreak = 0;
  }

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

  selectedButton.classList.add("answered");

  // Check if game over in infinite mode
  const isGameOver = isInfiniteMode() && wrongAnswerCount >= MAX_WRONG_ANSWERS_INFINITE;

  feedbackText.textContent = isCorrect
    ? currentStreak >= 2
      ? `+50 points. Clean guess. ${currentStreak}x streak.`
      : "+50 points. Clean guess."
    : `Not quite. The correct answer was ${currentQuestion.correctAnswer}.`;

  const errorCountText = isInfiniteMode() 
    ? `\nErrors: ${wrongAnswerCount}/${MAX_WRONG_ANSWERS_INFINITE}` 
    : "";

  if (isGameOver) {
    feedbackText.textContent += "\n\nGame over. You reached 10 wrong answers.";
    nextButton.disabled = true;
    nextButton.classList.add("hidden");
    gameOverTimer = setTimeout(endGame, 1400);
  }

  factText.textContent = currentQuestion.fact;
  sourceText.textContent = `Source: ${currentQuestion.source} (${currentQuestion.nasaId})${errorCountText}`;
  await wait(FEEDBACK_OPEN_DELAY);
  feedbackPanel.classList.add("open");

  if (!isGameOver) {
    await wait(Math.max(0, NEXT_BUTTON_DELAY - FEEDBACK_OPEN_DELAY));
    nextButton.classList.remove("staged");
  }
}

function getRating(scoreValue) {
  if (scoreValue >= 600) {
    return "Universe Legend";
  }

  if (scoreValue >= 500) {
    return "Cosmic Genius";
  }

  if (scoreValue >= 400) {
    return "Galaxy Brain";
  }

  if (scoreValue >= 300) {
    return "Star Navigator";
  }

  if (scoreValue >= 200) {
    return "Moon Explorer";
  }

  if (scoreValue >= 100) {
    return "Space Rookie";
  }

  if (scoreValue >= 50) {
    return "Asteroid Intern";
  }

  return "Space Noob";
}

function getDailyResultText() {
  return score > 0
    ? "You nailed today's image."
    : "Not today. Come back for the next one.";
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

    finalScore.textContent = Math.round(targetScore * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(updateScoreCounter);
    }
  }

  finalScore.textContent = "0";
  requestAnimationFrame(updateScoreCounter);
}

function updateScoreFormState() {
  const storedName = localStorage.getItem(playerNameStorageKey);
  scoreForm.classList.toggle("has-saved-name", Boolean(storedName));
  savedPlayerName.textContent = storedName ? `Saving as ${storedName}` : "";
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

function saveLeaderboard(scores) {
  localStorage.setItem(leaderboardStorageKey, JSON.stringify(scores));
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
    : gameModes[selectedModeKey].label;
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

async function renderLeaderboard(
  listElement = leaderboardList,
  modeElement = leaderboardMode,
  messageElement = saveMessage
) {
  modeElement.textContent = isDailyMode()
    ? `Daily ${getDailyKey()}`
    : gameModes[selectedModeKey].label;
  listElement.innerHTML = "";

  const loadingItem = document.createElement("li");
  loadingItem.className = "leaderboard-empty";
  loadingItem.textContent = "Loading scores...";
  listElement.appendChild(loadingItem);

  if (!supabaseClient) {
    renderLeaderboardEntries(getCurrentModeEntries(), listElement, modeElement);
    return;
  }

  let query = supabaseClient
    .from(leaderboardTable)
    .select("name, score, mode, rounds, created_at")
    .eq("mode", selectedModeKey);

  if (isDailyMode()) {
    const dailyStart = `${getDailyKey()}T00:00:00.000Z`;
    const dailyEnd = `${getDailyKey()}T23:59:59.999Z`;
    query = query.gte("created_at", dailyStart).lte("created_at", dailyEnd);
  }

  const { data, error } = await query
    .order("score", { ascending: false })
    .order("rounds", { ascending: false })
    .limit(5);

  if (error) {
    renderLeaderboardEntries(getCurrentModeEntries(), listElement, modeElement);

    if (messageElement) {
      messageElement.textContent = "Global leaderboard unavailable. Showing local scores.";
    }

    return;
  }

  renderLeaderboardEntries(data, listElement, modeElement);
}

async function saveCurrentScore(event) {
  event.preventDefault();

  if (!hasLeaderboardMode()) {
    saveMessage.textContent = "Scores are only saved in Daily or Infinite mode.";
    return;
  }

  const storedName = localStorage.getItem(playerNameStorageKey);
  const playerName = (storedName || playerNameInput.value).trim();

  if (!playerName) {
    saveMessage.textContent = "Enter a name first.";
    playerNameInput.focus();
    return;
  }

  if (hasSavedCurrentScore) {
    saveMessage.textContent = "This score is already saved.";
    return;
  }

  const scoreEntry = {
    name: playerName,
    score,
    mode: selectedModeKey,
    rounds: selectedModeKey === "infinite" ? currentRound + 1 : totalRounds,
    date: new Date().toISOString(),
    dailyKey: isDailyMode() ? getDailyKey() : null
  };

  localStorage.setItem(playerNameStorageKey, playerName);
  updateScoreFormState();
  const localSaveResult = upsertLocalScore(scoreEntry);

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
      saveMessage.textContent = getSupabaseErrorMessage(
        selectError,
        "Saved locally, but global save failed."
      );
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
        saveMessage.textContent = "Score saved, but your old score is still better.";
        await renderLeaderboard();
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
        saveMessage.textContent = getSupabaseErrorMessage(
          updateError,
          "Saved locally, but global update failed."
        );
        hasSavedCurrentScore = true;
        renderLeaderboardEntries(getCurrentModeEntries());
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
        saveMessage.textContent = getSupabaseErrorMessage(
          insertError,
          "Saved locally, but global save failed."
        );
        hasSavedCurrentScore = true;
        renderLeaderboardEntries(getCurrentModeEntries());
        return;
      }
    }
  }

  hasSavedCurrentScore = true;
  saveMessage.textContent = localSaveResult === "improved"
    ? "New best score saved."
    : "Score saved.";
  await renderLeaderboard();
}

async function goToNextStep() {
  // Check game over in infinite mode
  if (isInfiniteMode() && wrongAnswerCount >= MAX_WRONG_ANSWERS_INFINITE) {
    endGame();
    return;
  }

  currentRound += 1;

  if (selectedModeKey === "infinite") {
    await renderRound();
    return;
  }

  if (currentRound < totalRounds) {
    await renderRound();
    return;
  }

  endGame();
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => selectMode(button.dataset.mode));
});

startButton.addEventListener("click", () => {
  startGame(selectedModeKey);
});
dailyButton.addEventListener("click", () => {
  startGame("daily");
});
helpToggle.addEventListener("click", () => toggleHelpPanel());
homeButtons.forEach((button) => {
  button.addEventListener("click", goHome);
});
scoreForm.addEventListener("submit", saveCurrentScore);
menuScoreboardToggle.addEventListener("click", () => {
  if (!isInfiniteMode()) {
    return;
  }

  const isOpen = menuScoreboardPanel.classList.toggle("open");
  menuScoreboardToggle.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    renderLeaderboard(menuLeaderboardList, menuLeaderboardMode, null);
  }
});
updateLeaderboardVisibility();
updateDailyAvailability();
updateStreakLabel();
playAgainButton.addEventListener("click", () => {
  startGame(selectedModeKey);
});
nextButton.addEventListener("click", () => {
  goToNextStep();
});
hintButton.addEventListener("click", useHint);

document.addEventListener("click", (event) => {
  if (!screens.start.classList.contains("active")) {
    return;
  }

  if (!helpPanel.classList.contains("open")) {
    return;
  }

  if (helpPanel.contains(event.target) || helpToggle.contains(event.target)) {
    return;
  }

  toggleHelpPanel(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && helpPanel.classList.contains("open")) {
    toggleHelpPanel(false);
  }
});
