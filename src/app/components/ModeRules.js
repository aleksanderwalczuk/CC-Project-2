import elementFactory from '../utils/elementFactory';
import { PEOPLE, VEHICLES, STARSHIPS } from '../constants';

const repeatableText =
  'You have two minutes (2m) to answer as many questions as possible. During the game on each question you need to select';

const rulesTexts = {
  [PEOPLE]:
    'who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
  [VEHICLES]:
    'which vehicle from Star Wars is showed on the left (Sith Speeder right now).',
  [STARSHIPS]:
    'which starship from Star Wars is showed on the left (TIE Advanced x1 right now).',
};

const ModeRules = (mode) => {
  const rulesTextElement = elementFactory(
    'div',
    { className: 'rules-text' },
    `${repeatableText} ${rulesTexts[mode] ?? rulesTexts.people}`,
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
