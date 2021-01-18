import createVisualImage from './VisualImage';
import createButtonRed from './ButtonRed';
import createWhiteButtonWithIcon from './ButtonWhiteWithIcon';
import createGameModeName from './GameModeName';
import createModeRules from './ModeRules';
import createScoreTable from './ScoreTable';
import { PEOPLE, STARSHIPS, VEHICLES } from '../constants';
import elementFactory from '../utils/elementFactory';
import { processGame } from '../logic/processGame';

const section = {};
const RULES = '<span></span> Rules';
const RANK = '<span></span> Hall of fame';

const insertDefaultImage = (optionMode) => {
  switch (optionMode) {
    case PEOPLE:
      return 36;
    case VEHICLES:
      return 42;
    case STARSHIPS:
      return 13;
    default:
      return 0;
  }
};

const replaceContent = (
  modeRules,
  gameWrapper,
  scoreTable,
  buttonsWrapper,
  buttonRulesRanking,
  icon,
) => {
  modeRules.remove();
  gameWrapper.insertBefore(scoreTable, buttonsWrapper);
  buttonRulesRanking.innerHTML = section.buttonDisplay;
  buttonRulesRanking.firstElementChild.classList.add(
    'button__icon',
    'fa',
    `fa-${icon}`,
  );
};

// Creating page content
function PageContent(
  optionMode = PEOPLE,
  view = 'rules',
  sectionRef,
) {
  if (!section.ref && sectionRef) {
    section.ref = sectionRef;
  }
  section.ref.textContent = '';
  section.buttonDisplay = view === 'rules' ? RANK : RULES;
  const visualImage = createVisualImage(
    `../../../static/assets/img/modes/${optionMode}/${insertDefaultImage(
      optionMode,
    )}.jpg`,
  );
  const modeRules = createModeRules(optionMode);
  const scoreTable = createScoreTable(optionMode);
  const buttonPlay = createButtonRed('play the game');
  buttonPlay.addEventListener('click', () =>
    processGame(optionMode, PageContent),
  );
  const buttonRulesRanking = createWhiteButtonWithIcon(
    `${section.buttonDisplay === RANK ? 'Hall of fame' : 'Rules'}`,
    'fa',
    `fa-${
      section.buttonDisplay === RANK ? 'id-badge' : 'graduation-cap'
    }`,
  );
  const gameModeInfo = createGameModeName(optionMode);

  const buttonsWrapper = elementFactory(
    'div',
    { className: 'section__wrapper__buttons' },
    buttonRulesRanking,
    buttonPlay,
  );
  const gameWrapper = elementFactory(
    'div',
    { className: 'section__wrapper' },
    gameModeInfo,
    section.buttonDisplay === RANK ? modeRules : scoreTable,
    buttonsWrapper,
  );
  section.ref.append(visualImage, gameWrapper);

  // Changing the rules and ranking view by pressing the button
  function handleChangeOfView() {
    if (section.buttonDisplay === RULES) {
      section.buttonDisplay = RANK;
      replaceContent(
        scoreTable,
        gameWrapper,
        modeRules,
        buttonsWrapper,
        buttonRulesRanking,
        'id-badge',
      );
    } else {
      section.buttonDisplay = RULES;
      replaceContent(
        modeRules,
        gameWrapper,
        scoreTable,
        buttonsWrapper,
        buttonRulesRanking,
        'graduation-cap',
      );
    }
  }
  buttonRulesRanking.addEventListener('click', handleChangeOfView);
  return section.ref;
}

export default PageContent;
