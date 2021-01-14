import createVisualImage from './VisualImage';
import createLogo from './Logo';
import createButtonRed from './ButtonRed';
import createWhiteButtonWithIcon from './ButtonWhiteWithIcon';
import createGameModeName from './GameModeName';
import ModeMenu, { menuOption } from './ModeMenu';
import createModeRules from './ModeRules';

function PageContent(optionMode = { selectOption: 'People' }) {
  console.log(optionMode);
  const section = document.querySelector('.section');
  section.textContent = '';
  const gameWrapper = document.createElement('div');
  const buttonsWrapper = document.createElement('div');
  const visualImage = createVisualImage(
    '../../../static/assets/img/modes/people/1.jpg',
  );
  const modeRules = createModeRules(optionMode.selectOption);
  console.log(modeRules);
  const buttonPlay = createButtonRed('play the game');
  const buttonRulesRanking = createWhiteButtonWithIcon(
    'Hall of fame',
    'fa',
    'fa-id-badge',
  );
  console.log(optionMode.selectOption);
  const gameModeInfo = createGameModeName(
    `Who is this ${optionMode.selectOption}?`,
  );
  console.log(gameModeInfo);
  gameWrapper.classList.add('section__wrapper');
  buttonsWrapper.classList.add('section__wrapper__buttons');
  section.append(visualImage, gameWrapper);
  gameWrapper.append(gameModeInfo, modeRules, buttonsWrapper);
  buttonsWrapper.append(buttonRulesRanking, buttonPlay);

  let rules = false;
  function handleChangeOfView() {
    if (!rules) {
      modeRules.remove();
      rules = true;
      buttonRulesRanking.innerHTML = `<i></i> Rules`;
      buttonRulesRanking.firstElementChild.classList.add(
        'button__icon',
        'fa',
        'fa-graduation-cap',
      );
    } else {
      rules = false;
      gameWrapper.insertBefore(modeRules, buttonsWrapper);
      buttonRulesRanking.innerHTML = `<i></i> Hall of fame`;
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
