//Easy Feature Toggle System

const featureToggles = {
  modes: {
    quick: true,
    classic: true,
    timed: true,
    blind: true,
    learn: true,
    daily: true
  },
  menu: {
    casualSpecialGroups: true,
    specialBackground: true,
    helpWidget: true,
    menuLeaderboard: true
  },
  gameplay: {
    hints: true,
    audioFeedback: true,
    confetti: true,
    blindRevealEffect: true,
    learnPackSelection: false
  },
  sharing: {
    resultShare: true
  },
  leaderboard: {
    onlineLeaderboard: true,
    localFallback: true,
    autoSave: true
  },
  content: {
    jsonPacks: true
  }
};

function isFeatureEnabled(path) {
  return path
    .split(".")
    .reduce((currentValue, key) => currentValue?.[key], featureToggles) === true;
}

export { featureToggles, isFeatureEnabled };
