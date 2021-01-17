import elementFactory from '../utils/elementFactory';

const rulesTexts = {
  People:
    'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
  Vehicles:
    'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select which vehicle from Star Wars is showed on the left.',
  Starships:
    'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select which starship from Star Wars is showed on the left.',
};

const ModeRules = (mode) => {
  const rulesTextElement = elementFactory(
    'div',
    { className: 'rules-text' },
    rulesTexts[mode] ?? rulesTexts.people,
  );
  const rulesIcon = elementFactory('span', {
    className: 'rules-icon fa fa-graduation-cap',
  });

  const rulesHeader = elementFactory(
    'header',
    { className: 'rules-header' },
    rulesIcon,
    'Mode Rules',
  );

  const rulesElement = elementFactory(
    'div',
    { className: 'rules' },
    rulesHeader,
    rulesTextElement,
  );

  return rulesElement;
};

export default ModeRules;
