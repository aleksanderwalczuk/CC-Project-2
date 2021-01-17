import createVisualImage from './VisualImage';
import createLogo from './Logo';
import createButtonRed from './ButtonRed';
import createWhiteButtonWithIcon from './ButtonWhiteWithIcon';
import createGameModeName from './GameModeName';
import ModeMenu from './ModeMenu';
import createModeRules from './ModeRules';
import createScoreTable from './ScoreTable';
import { PEOPLE } from '../constants';
import render from '../utils/render';
import elementFactory from '../utils/elementFactory';

// Creating page content
function PageContent(optionMode = PEOPLE) {
  const section = document.querySelector('.section');
  section.textContent = '';
  const visualImage = createVisualImage(
    '../../../static/assets/img/modes/people/1.jpg',
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
  section.append(visualImage, gameWrapper);

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
  return section;
}

// Creating header and rendering of the page.
export const LoadPage = () => {
  const header = elementFactory(
    'header',
    { className: 'header' },
    createLogo(),
    ModeMenu(),
  );
  const section = elementFactory('section', { className: 'section' });

  render('#swquiz-app', header, section);
  PageContent();
};
export default PageContent;
