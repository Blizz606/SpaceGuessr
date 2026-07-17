const gameModes = {
  quick: {
    label: "Quick",
    rounds: 3,
    index: 0,
    hints: 1,
    description: "A fast 3-round run for a quick challenge."
  },
  classic: {
    label: "Classic",
    rounds: 5,
    index: 1,
    hints: 2,
    description: "The standard experience with 5 rounds."
  },
  timed: {
    label: "Timed",
    rounds: 5,
    index: 2,
    hints: 1,
    seconds: 10,
    description: "Race against the clock and answer before time runs out."
  },
  blind: {
    label: "Blind Reveal",
    rounds: 5,
    index: 3,
    hints: 1,
    seconds: 15,
    description: "The image slowly reveals itself, and each reveal lowers the reward."
  },
  learn: {
    label: "Learn",
    rounds: 4,
    index: 4,
    hints: 3,
    description: "A guided mode for learning the clues without leaderboard pressure."
  },
  reverse: {
    label: "Reverse Learn",
    rounds: 4,
    index: 5,
    hints: 0,
    description: "Read the clue first, then guess the object before the image is revealed."
  },
  daily: {
    label: "Daily",
    rounds: 1,
    index: null,
    hints: 0,
    description: "One shared image per day, same challenge for everyone."
  }
};

const rankTiers = [
  { min: 0, title: "Space Noob" },
  { min: 50, title: "Asteroid Intern" },
  { min: 100, title: "Space Rookie" },
  { min: 200, title: "Moon Explorer" },
  { min: 300, title: "Star Navigator" },
  { min: 400, title: "Galaxy Brain" },
  { min: 500, title: "Cosmic Genius" },
  { min: 600, title: "Universe Legend" }
];

export { gameModes, rankTiers };
