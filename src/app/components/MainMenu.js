import createVisualImage from './VisualImage';
import createLogo from './Logo';
import createButtonRed from './ButtonRed';
import createWhiteButtonWithIcon from './ButtonWhiteWithIcon';
import createGameModeName from './GameModeName';
import ModeMenu from './ModeMenu';
import createModeRules from './ModeRules';
import { PEOPLE } from '../constants';

// Creating page content
function PageContent(optionMode = PEOPLE) {
  const section = document.querySelector('.section');
  section.textContent = '';
  const gameWrapper = document.createElement('div');
  const buttonsWrapper = document.createElement('div');
  const visualImage = createVisualImage(
    '../../../static/assets/img/modes/people/1.jpg',
  );
  const modeRules = createModeRules(optionMode);
  // Insert score table for player #18;
  const buttonPlay = createButtonRed('play the game');
  const buttonRulesRanking = createWhiteButtonWithIcon(
    'Hall of fame',
    'fa',
    'fa-id-badge',
  );
  const gameModeInfo = createGameModeName(optionMode);

  gameWrapper.classList.add('section__wrapper');
  buttonsWrapper.classList.add('section__wrapper__buttons');
  section.append(visualImage, gameWrapper);
  gameWrapper.append(gameModeInfo, modeRules, buttonsWrapper);
  buttonsWrapper.append(buttonRulesRanking, buttonPlay);

  // Changing the rules and ranking view by pressing the button
  let rules = false;
  function handleChangeOfView() {
    if (!rules) {
      modeRules.remove();
      // Insert score table for player #18;
      rules = true;
      buttonRulesRanking.innerHTML = `<span></span> Rules`;
      buttonRulesRanking.firstElementChild.classList.add(
        'button__icon',
        'fa',
        'fa-graduation-cap',
      );
    } else {
      rules = false;
      gameWrapper.insertBefore(modeRules, buttonsWrapper);
      // Delete score table for player #18;
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
  const quiz = document.querySelector('#swquiz-app');
  const header = document.createElement('header');
  const section = document.createElement('section');
  const newNav = ModeMenu();
  const gameLogo = createLogo();
  header.classList.add('header');
  section.classList.add('section');
  quiz.append(header, section);
  header.append(gameLogo, newNav);
  PageContent();
};
export default PageContent;
