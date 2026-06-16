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

let gameDeck = [];
let randomBag = [];
let currentRound = 0;
let totalRounds = gameModes.classic.rounds;
let score = 0;
let hasAnswered = false;
let selectedModeKey = "classic";

function selectMode(modeKey) {
  selectedModeKey = modeKey;
  const selectedIndex = gameModes[selectedModeKey].index;

  modeButtons.forEach((button) => {
    const isSelected = button.dataset.mode === selectedModeKey;
    button.classList.toggle("selected", isSelected);
  });

  modeGrid.style.setProperty("--selected-mode-index", selectedIndex);
  startButton.textContent = `Start ${gameModes[selectedModeKey].label}`;
}

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("active");
  });

  screens[screenName].classList.add("active");
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
    score += 100;
    updateScore();
  }

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

  finalScore.textContent = score;
  ratingText.textContent = getRating(score);
  showScreen("end");
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => selectMode(button.dataset.mode));
});

startButton.addEventListener("click", () => startGame(selectedModeKey));
playAgainButton.addEventListener("click", () => startGame(selectedModeKey));
nextButton.addEventListener("click", goToNextStep);
