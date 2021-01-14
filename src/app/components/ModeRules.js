const rulesTexts = {
  People:
    'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
  Vehicles:
    'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select which vehicle from Star Wars is showed on the left.',
  Starships:
    'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select which starship from Star Wars is showed on the left.',
};

const ModeRules = (mode) => {
  const rulesElement = document.createElement('div');
  const rulesHeader = document.createElement('header');
  const rulesIcon = document.createElement('span');
  const rulesTextElement = document.createElement('div');
  rulesElement.classList.add('rules');
  rulesHeader.classList.add('rules-header');
  rulesIcon.classList.add('rules-icon', 'fa', 'fa-graduation-cap');
  rulesTextElement.classList.add('rules-text');
  rulesElement.append(rulesHeader, rulesTextElement);
  rulesHeader.append(rulesIcon, 'Mode Rules');
  rulesTextElement.append(rulesTexts[mode] ?? rulesTexts.people);

  return rulesElement;
};

export default ModeRules;
