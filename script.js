// Curated official NASA image assets.
// Keep nasaId/source with each item so the image and answer stay traceable.
const spaceLocations = [
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA15691/PIA15691~medium.jpg",
    nasaId: "PIA15691",
    source: "NASA Image and Video Library",
    correctAnswer: "Mars",
    wrongAnswers: ["The Moon", "Earth", "Mercury"],
    fact: "This is Curiosity's first color landscape image from Mars, taken after landing in Gale Crater."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/as11-37-5545/as11-37-5545~large.jpg",
    nasaId: "as11-37-5545",
    source: "NASA Image and Video Library",
    correctAnswer: "The Moon",
    wrongAnswers: ["Mars", "Mercury", "Europa"],
    fact: "This Apollo 11 photo shows the U.S. flag deployed on the lunar surface in July 1969."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01262/PIA01262~small.jpg",
    nasaId: "PIA01262",
    source: "NASA Image and Video Library",
    correctAnswer: "Jupiter",
    wrongAnswers: ["Saturn", "Neptune", "Uranus"],
    fact: "This Hubble view tracks storms in Jupiter's atmosphere, including its famous bands and turbulent cloud systems."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA12513/PIA12513~small.jpg",
    nasaId: "PIA12513",
    source: "NASA Image and Video Library",
    correctAnswer: "Saturn",
    wrongAnswers: ["Jupiter", "Uranus", "Neptune"],
    fact: "This Cassini image shows Saturn and its ring system, one of the most recognizable sights in the solar system."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/iss045e013851/iss045e013851~large.jpg",
    nasaId: "iss045e013851",
    source: "NASA Image and Video Library",
    correctAnswer: "Earth",
    wrongAnswers: ["Mars", "Venus", "Titan"],
    fact: "This Earth observation was photographed from the International Space Station."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01322/PIA01322~large.jpg",
    nasaId: "PIA01322",
    source: "NASA Image and Video Library",
    correctAnswer: "Orion Nebula",
    wrongAnswers: ["Jupiter", "The Moon", "Saturn"],
    fact: "The Orion Nebula is a nearby star-forming region where young stars are shaping clouds of gas and dust."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01391/PIA01391~orig.jpg",
    nasaId: "PIA01391",
    source: "NASA Image and Video Library",
    correctAnswer: "Uranus",
    wrongAnswers: ["Neptune", "Saturn", "Earth"],
    fact: "Voyager 2 captured this view of Uranus, an ice giant that rotates on its side compared with most planets."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01539/PIA01539~orig.jpg",
    nasaId: "PIA01539",
    source: "NASA Image and Video Library",
    correctAnswer: "Neptune",
    wrongAnswers: ["Uranus", "Jupiter", "Venus"],
    fact: "Voyager 2 is still the only spacecraft to visit Neptune, flying past the planet in 1989."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA04921/PIA04921~orig.jpg",
    nasaId: "PIA04921",
    source: "NASA Image and Video Library",
    correctAnswer: "Andromeda Galaxy",
    wrongAnswers: ["Orion Nebula", "Saturn", "Mars"],
    fact: "The Andromeda Galaxy is the nearest large spiral galaxy to the Milky Way."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA09109/PIA09109~orig.jpg",
    nasaId: "PIA09109",
    source: "NASA Image and Video Library",
    correctAnswer: "Eagle Nebula",
    wrongAnswers: ["Andromeda Galaxy", "The Moon", "Jupiter"],
    fact: "The Eagle Nebula contains the famous Pillars of Creation, towering columns of gas and dust."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA12778/PIA12778~orig.jpg",
    nasaId: "PIA12778",
    source: "NASA Image and Video Library",
    correctAnswer: "Titan",
    wrongAnswers: ["Europa", "Mars", "Venus"],
    fact: "Titan is Saturn's largest moon and has a thick atmosphere plus lakes and seas of liquid methane."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA17658/PIA17658~orig.jpg",
    nasaId: "PIA17658",
    source: "NASA Image and Video Library",
    correctAnswer: "Europa",
    wrongAnswers: ["Titan", "The Moon", "Mercury"],
    fact: "Europa is one of Jupiter's icy moons and may hide a global ocean beneath its frozen crust."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001625/GSFC_20171208_Archive_e001625~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001625",
    source: "NASA Image and Video Library",
    correctAnswer: "Mercury",
    wrongAnswers: ["The Moon", "Mars", "Ceres"],
    fact: "Mercury is covered in impact craters because it has almost no atmosphere to burn up incoming objects."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA19693/PIA19693~orig.jpg",
    nasaId: "PIA19693",
    source: "NASA Image and Video Library",
    correctAnswer: "Pluto",
    wrongAnswers: ["Neptune", "Titan", "Europa"],
    fact: "New Horizons revealed Pluto as a surprisingly complex world with mountains, plains, and hazy layers."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA14443/PIA14443~orig.jpg",
    nasaId: "PIA14443",
    source: "NASA Image and Video Library",
    correctAnswer: "Ring Nebula",
    wrongAnswers: ["Orion Nebula", "Andromeda Galaxy", "Eagle Nebula"],
    fact: "The Ring Nebula is a glowing shell of gas shed by a dying star."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA03606/PIA03606~orig.jpg",
    nasaId: "PIA03606",
    source: "NASA Image and Video Library",
    correctAnswer: "Crab Nebula",
    wrongAnswers: ["Ring Nebula", "Jupiter", "Sombrero Galaxy"],
    fact: "The Crab Nebula is the expanding remnant of a supernova observed by skywatchers in 1054."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA15226/PIA15226~orig.jpg",
    nasaId: "PIA15226",
    source: "NASA Image and Video Library",
    correctAnswer: "Sombrero Galaxy",
    wrongAnswers: ["Andromeda Galaxy", "Crab Nebula", "Saturn"],
    fact: "The Sombrero Galaxy gets its nickname from its bright core and broad dust lane."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA10957/PIA10957~orig.jpg",
    nasaId: "PIA10957",
    source: "NASA Image and Video Library",
    correctAnswer: "Tarantula Nebula",
    wrongAnswers: ["Eagle Nebula", "Ring Nebula", "Europa"],
    fact: "The Tarantula Nebula is one of the most active star-forming regions in our cosmic neighborhood."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA20309/PIA20309~orig.jpg",
    nasaId: "PIA20309",
    source: "NASA Image and Video Library",
    correctAnswer: "Ceres",
    wrongAnswers: ["Mercury", "The Moon", "Phobos"],
    fact: "Ceres is the largest object in the asteroid belt and is classified as a dwarf planet."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA17211/PIA17211~orig.jpg",
    nasaId: "PIA17211",
    source: "NASA Image and Video Library",
    correctAnswer: "Enceladus",
    wrongAnswers: ["Europa", "Titan", "The Moon"],
    fact: "Enceladus sprays icy plumes into space from an ocean hidden beneath its crust."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA22056/PIA22056~orig.jpg",
    nasaId: "PIA22056",
    source: "NASA Image and Video Library",
    correctAnswer: "Phobos",
    wrongAnswers: ["Deimos", "Ceres", "Mercury"],
    fact: "Phobos is the larger of Mars' two moons and orbits very close to the planet."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001925/GSFC_20171208_Archive_e001925~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001925",
    source: "NASA Image and Video Library",
    correctAnswer: "Whirlpool Galaxy",
    wrongAnswers: ["Sombrero Galaxy", "Andromeda Galaxy", "Crab Nebula"],
    fact: "The Whirlpool Galaxy is a spiral galaxy interacting with a smaller companion galaxy."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA04215/PIA04215~orig.jpg",
    nasaId: "PIA04215",
    source: "NASA Image and Video Library",
    correctAnswer: "Horsehead Nebula",
    wrongAnswers: ["Orion Nebula", "Ring Nebula", "Tarantula Nebula"],
    fact: "The Horsehead Nebula is a dark cloud of dust silhouetted against glowing gas in Orion."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001955/GSFC_20171208_Archive_e001955~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001955",
    source: "NASA Image and Video Library",
    correctAnswer: "Lagoon Nebula",
    wrongAnswers: ["Orion Nebula", "Eagle Nebula", "Crab Nebula"],
    fact: "The Lagoon Nebula is a vast star-forming region in the constellation Sagittarius."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA09268/PIA09268~orig.jpg",
    nasaId: "PIA09268",
    source: "NASA Image and Video Library",
    correctAnswer: "Rosette Nebula",
    wrongAnswers: ["Ring Nebula", "Lagoon Nebula", "Horsehead Nebula"],
    fact: "The Rosette Nebula is a flower-shaped cloud of gas and dust surrounding a young star cluster."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002155/GSFC_20171208_Archive_e002155~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e002155",
    source: "NASA Image and Video Library",
    correctAnswer: "Cat's Eye Nebula",
    wrongAnswers: ["Ring Nebula", "Crab Nebula", "Tarantula Nebula"],
    fact: "The Cat's Eye Nebula is a planetary nebula with layered shells around a dying star."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002058/GSFC_20171208_Archive_e002058~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e002058",
    source: "NASA Image and Video Library",
    correctAnswer: "Veil Nebula",
    wrongAnswers: ["Crab Nebula", "Ring Nebula", "Orion Nebula"],
    fact: "The Veil Nebula is the expanding remnant of a massive star that exploded thousands of years ago."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA09262/PIA09262~orig.jpg",
    nasaId: "PIA09262",
    source: "NASA Image and Video Library",
    correctAnswer: "Pleiades",
    wrongAnswers: ["Andromeda Galaxy", "Lagoon Nebula", "Whirlpool Galaxy"],
    fact: "The Pleiades is a bright open star cluster also known as the Seven Sisters."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001642/GSFC_20171208_Archive_e001642~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001642",
    source: "NASA Image and Video Library",
    correctAnswer: "Large Magellanic Cloud",
    wrongAnswers: ["Small Magellanic Cloud", "Andromeda Galaxy", "Sombrero Galaxy"],
    fact: "The Large Magellanic Cloud is a nearby dwarf galaxy orbiting the Milky Way."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002039/GSFC_20171208_Archive_e002039~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e002039",
    source: "NASA Image and Video Library",
    correctAnswer: "Small Magellanic Cloud",
    wrongAnswers: ["Large Magellanic Cloud", "Whirlpool Galaxy", "Eagle Nebula"],
    fact: "The Small Magellanic Cloud is a neighboring dwarf galaxy visible from the Southern Hemisphere."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA23122/PIA23122~orig.jpg",
    nasaId: "PIA23122",
    source: "NASA Image and Video Library",
    correctAnswer: "Messier 87",
    wrongAnswers: ["Andromeda Galaxy", "Sombrero Galaxy", "Whirlpool Galaxy"],
    fact: "Messier 87 is a giant elliptical galaxy famous for the supermassive black hole at its center."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA21770/PIA21770~orig.jpg",
    nasaId: "PIA21770",
    source: "NASA Image and Video Library",
    correctAnswer: "Jupiter's Great Red Spot",
    wrongAnswers: ["Saturn's Hexagon", "Neptune's Dark Spot", "Mars"],
    fact: "Jupiter's Great Red Spot is a long-lived storm larger than Earth."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00521/PIA00521~orig.jpg",
    nasaId: "PIA00521",
    source: "NASA Image and Video Library",
    correctAnswer: "Ganymede",
    wrongAnswers: ["Callisto", "Europa", "Titan"],
    fact: "Ganymede is Jupiter's largest moon and the largest moon in the solar system."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA03456/PIA03456~orig.jpg",
    nasaId: "PIA03456",
    source: "NASA Image and Video Library",
    correctAnswer: "Callisto",
    wrongAnswers: ["Ganymede", "Europa", "The Moon"],
    fact: "Callisto is one of Jupiter's four large Galilean moons and has an ancient cratered surface."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA17195/PIA17195~orig.jpg",
    nasaId: "PIA17195",
    source: "NASA Image and Video Library",
    correctAnswer: "Dione",
    wrongAnswers: ["Rhea", "Tethys", "Enceladus"],
    fact: "Dione is an icy moon of Saturn with bright fractured terrain across its surface."
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
    fact: "Iapetus is known for its dramatic two-tone surface, with one hemisphere much darker than the other."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00037/PIA00037~orig.jpg",
    nasaId: "PIA00037",
    source: "NASA Image and Video Library",
    correctAnswer: "Ariel",
    wrongAnswers: ["Miranda", "Triton", "Europa"],
    fact: "Ariel is one of Uranus' moons and was photographed up close by Voyager 2."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01490/PIA01490~orig.jpg",
    nasaId: "PIA01490",
    source: "NASA Image and Video Library",
    correctAnswer: "Miranda",
    wrongAnswers: ["Ariel", "Dione", "Callisto"],
    fact: "Miranda, a moon of Uranus, has one of the strangest patchwork surfaces seen by Voyager 2."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01994/PIA01994~orig.jpg",
    nasaId: "PIA01994",
    source: "NASA Image and Video Library",
    correctAnswer: "Triton",
    wrongAnswers: ["Titan", "Europa", "Ganymede"],
    fact: "Triton is Neptune's largest moon and orbits in the opposite direction of Neptune's rotation."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA13693/PIA13693~orig.jpg",
    nasaId: "PIA13693",
    source: "NASA Image and Video Library",
    correctAnswer: "Valles Marineris",
    wrongAnswers: ["Olympus Mons", "Gale Crater", "Phobos"],
    fact: "Valles Marineris is a vast canyon system on Mars that stretches thousands of kilometers."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00452/PIA00452~orig.jpg",
    nasaId: "PIA00452",
    source: "NASA Image and Video Library",
    correctAnswer: "Pale Blue Dot",
    wrongAnswers: ["Earthrise", "Blue Marble", "Andromeda Galaxy"],
    fact: "The Pale Blue Dot image shows Earth from billions of kilometers away, captured by Voyager 1."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001651/GSFC_20171208_Archive_e001651~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001651",
    source: "NASA Image and Video Library",
    correctAnswer: "Hubble Ultra Deep Field",
    wrongAnswers: ["Andromeda Galaxy", "Whirlpool Galaxy", "Pleiades"],
    fact: "The Hubble Ultra Deep Field reveals thousands of distant galaxies in a tiny patch of sky."
  }
];

const gameModes = {
  quick: {
    label: "Quick",
    rounds: 3,
    index: 0
  },
  classic: {
    label: "Classic",
    rounds: 5,
    index: 1
  },
  full: {
    label: "Full Tour",
    rounds: 6,
    index: 2
  },
  infinite: {
    label: "Infinite",
    rounds: Infinity,
    index: 3
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
const homeButtons = document.querySelectorAll(".home-button, .end-home-button");
const playAgainButton = document.getElementById("play-again-button");
const nextButton = document.getElementById("next-button");
const roundLabel = document.getElementById("round-label");
const scoreLabel = document.getElementById("score-label");
const spaceImage = document.getElementById("space-image");
const answersContainer = document.getElementById("answers-container");
const feedbackPanel = document.getElementById("feedback-panel");
const feedbackText = document.getElementById("feedback-text");
const factText = document.getElementById("fact-text");
const sourceText = document.getElementById("source-text");
const finalScore = document.getElementById("final-score");
const ratingText = document.getElementById("rating-text");
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

function isInfiniteMode() {
  return selectedModeKey === "infinite";
}

function updateLeaderboardVisibility() {
  leaderboardOnlyElements.forEach((element) => {
    element.classList.toggle("hidden", !isInfiniteMode());
  });

  if (!isInfiniteMode()) {
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

  modeGrid.style.setProperty("--selected-mode-index", selectedIndex);
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

function goHome() {
  hasAnswered = false;
  feedbackPanel.classList.remove("open");
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
  if (randomBag.length === 0) {
    randomBag = shuffleArray(spaceLocations);
  }

  return randomBag.pop();
}

function startGame(modeKey = selectedModeKey) {
  selectedModeKey = modeKey;
  totalRounds = gameModes[selectedModeKey].rounds;
  randomBag = shuffleArray(spaceLocations);
  gameDeck = [];
  currentRound = 0;
  score = 0;
  hasAnswered = false;
  hasSavedCurrentScore = false;
  saveMessage.textContent = "";
  playerNameInput.value = localStorage.getItem(playerNameStorageKey) || "";
  updateScoreFormState();
  updateLeaderboardVisibility();

  updateScore();
  showScreen("game");
  renderRound();
}

function updateScore() {
  scoreLabel.textContent = `Score: ${score}`;
}

function renderRound() {
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
  spaceImage.src = currentQuestion.imageUrl;
  spaceImage.alt = `Space image for ${currentQuestion.correctAnswer}`;
  answersContainer.innerHTML = "";
  feedbackPanel.classList.remove("open");
  hasAnswered = false;

  answerOptions.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.style.setProperty("--answer-index", index);
    button.textContent = answer;
    button.addEventListener("click", () => handleAnswer(button, answer));
    answersContainer.appendChild(button);
  });
}

function handleAnswer(selectedButton, selectedAnswer) {
  if (hasAnswered) {
    return;
  }

  hasAnswered = true;

  const currentQuestion = gameDeck[currentRound];
  const answerButtons = answersContainer.querySelectorAll(".answer-button");
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  if (isCorrect) {
    score += 50;
  } else {
    score -= 25;
  }
  updateScore();

  answerButtons.forEach((button) => {
    const isMatchingCorrectAnswer = button.textContent === currentQuestion.correctAnswer;
    button.disabled = true;
    button.classList.toggle("correct", isMatchingCorrectAnswer);

    if (button === selectedButton && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  feedbackText.textContent = isCorrect
    ? "Correct! Nice navigation."
    : `Not quite. The correct answer was ${currentQuestion.correctAnswer}.`;

  factText.textContent = currentQuestion.fact;
  sourceText.textContent = `Source: ${currentQuestion.source} (${currentQuestion.nasaId})`;
  feedbackPanel.classList.add("open");
}

function getRating(scoreValue) {
  if (scoreValue >= 400) {
    return "Cosmic Genius";
  }

  if (scoreValue >= 200) {
    return "Moon Explorer";
  }

  return "Space Rookie";
}

function animateFinalScore(targetScore) {
  const duration = 900;
  const startTime = performance.now();

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
    .filter((entry) => entry.mode === selectedModeKey)
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
  modeElement.textContent = gameModes[selectedModeKey].label;
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
    rounds.textContent = `${entry.rounds} rounds`;

    item.append(name, points, rounds);
    listElement.appendChild(item);
  });
}

async function renderLeaderboard(
  listElement = leaderboardList,
  modeElement = leaderboardMode,
  messageElement = saveMessage
) {
  modeElement.textContent = gameModes[selectedModeKey].label;
  listElement.innerHTML = "";

  const loadingItem = document.createElement("li");
  loadingItem.className = "leaderboard-empty";
  loadingItem.textContent = "Loading scores...";
  listElement.appendChild(loadingItem);

  if (!supabaseClient) {
    renderLeaderboardEntries(getCurrentModeEntries(), listElement, modeElement);
    return;
  }

  const { data, error } = await supabaseClient
    .from(leaderboardTable)
    .select("name, score, mode, rounds, created_at")
    .eq("mode", selectedModeKey)
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

  if (!isInfiniteMode()) {
    saveMessage.textContent = "Scores are only saved in Infinite mode.";
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
    date: new Date().toISOString()
  };

  localStorage.setItem(playerNameStorageKey, playerName);
  updateScoreFormState();
  const localSaveResult = upsertLocalScore(scoreEntry);

  if (supabaseClient) {
    const { data: existingEntries, error: selectError } = await supabaseClient
      .from(leaderboardTable)
      .select("id, score, rounds")
      .eq("mode", scoreEntry.mode)
      .ilike("name", scoreEntry.name)
      .limit(1);

    if (selectError) {
      saveMessage.textContent = "Saved locally, but global save failed.";
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
        saveMessage.textContent = "Saved locally, but global update failed.";
        hasSavedCurrentScore = true;
        renderLeaderboardEntries(getCurrentModeEntries());
        return;
      }
    } else {
      const { error: insertError } = await supabaseClient.from(leaderboardTable).insert({
        name: scoreEntry.name,
        score: scoreEntry.score,
        mode: scoreEntry.mode,
        rounds: scoreEntry.rounds
      });

      if (insertError) {
        saveMessage.textContent = "Saved locally, but global save failed.";
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

function goToNextStep() {
  currentRound += 1;

  if (selectedModeKey === "infinite") {
    renderRound();
    return;
  }

  if (currentRound < totalRounds) {
    renderRound();
    return;
  }

  ratingText.textContent = getRating(score);
  saveMessage.textContent = "";
  updateLeaderboardVisibility();

  if (isInfiniteMode()) {
    renderLeaderboard();
  }

  showScreen("end");
  animateFinalScore(score);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => selectMode(button.dataset.mode));
});

startButton.addEventListener("click", () => startGame(selectedModeKey));
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
playAgainButton.addEventListener("click", () => startGame(selectedModeKey));
nextButton.addEventListener("click", goToNextStep);
