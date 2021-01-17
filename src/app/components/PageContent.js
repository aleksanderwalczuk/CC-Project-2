import createVisualImage from './VisualImage';
import createButtonRed from './ButtonRed';
import createWhiteButtonWithIcon from './ButtonWhiteWithIcon';
import createGameModeName from './GameModeName';
import createModeRules from './ModeRules';
import createScoreTable from './ScoreTable';
import { PEOPLE, STARSHIPS, VEHICLES } from '../constants';
import elementFactory from '../utils/elementFactory';

const section = {};

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

// Creating page content
function PageContent(optionMode = PEOPLE, sectionRef) {
  if (!section.ref && sectionRef) {
    section.ref = sectionRef;
  }
  section.ref.textContent = '';
  const visualImage = createVisualImage(
    `../../../static/assets/img/modes/${optionMode}/${insertDefaultImage(
      optionMode,
    )}.jpg`,
  );
  const modeRules = createModeRules(optionMode);
  const scoreTable = createScoreTable(optionMode);
  const buttonPlay = createButtonRed('play the game');
  const buttonRulesRanking = createWhiteButtonWithIcon(
    'Hall of fame',
    'fa',
    'fa-id-badge',
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
    modeRules,
    buttonsWrapper,
  );
  section.ref.append(visualImage, gameWrapper);

  // Changing the rules and ranking view by pressing the button
  let rules = false;
  function handleChangeOfView() {
    if (!rules) {
      modeRules.remove();
      gameWrapper.insertBefore(scoreTable, buttonsWrapper);
      rules = true;
      buttonRulesRanking.innerHTML = `<span></span> Rules`;
      buttonRulesRanking.firstElementChild.classList.add(
        'button__icon',
        'fa',
        'fa-graduation-cap',
      );
    } else {
      rules = false;
      scoreTable.remove();
      gameWrapper.insertBefore(modeRules, buttonsWrapper);
      buttonRulesRanking.innerHTML = `<span></span> Hall of fame`;
      buttonRulesRanking.firstElementChild.classList.add(
        'button__icon',
        'fa',
        'fa-id-badge',
      );
    }
  }
  buttonRulesRanking.addEventListener('click', handleChangeOfView);
  return section.ref;
}

export default PageContent;
