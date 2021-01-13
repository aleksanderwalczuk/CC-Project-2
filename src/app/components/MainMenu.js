import createVisualImage from './VisualImage';
import createLogo from './Logo';
import createButtonRed from './ButtonRed';
import createWhiteButtonWithIcon from './ButtonWhiteWithIcon';
import createGameModeName from './GameModeName';
import ModeMenu, { menuOption } from './ModeMenu';
import createModeRules from './ModeRules';

function PageContent(optionMode = { selectOption: 'people' }) {
  console.log(optionMode);
  const section = document.createElement('section');
  section.innerHTML = '';
  const gameWrapper = document.createElement('div');
  const buttonsWrapper = document.createElement('div');
  const visualImage = createVisualImage(
    '../../../static/assets/img/modes/people/1.jpg',
  );
  const modeRules = createModeRules();
  const buttonPlay = createButtonRed('play the game');
  const buttonRulesRanking = createWhiteButtonWithIcon(
    'Hall of fame',
    'fa',
    'fa-id-badge',
  );
  const gameModeInfo = createGameModeName(
    `Who is this ${optionMode.selectOption}?`,
  );
  gameWrapper.classList.add('section__wrapper');
  buttonsWrapper.classList.add('section__wrapper__buttons');
  section.append(visualImage, gameWrapper);
  gameWrapper.append(gameModeInfo, modeRules, buttonsWrapper);
  buttonsWrapper.append(buttonRulesRanking, buttonPlay);

  let rules = true;
  function handleChangeOfView() {
    if (rules) {
      rules = false;
      buttonRulesRanking.innerHTML = `<i></i> Rules`;
      buttonRulesRanking.firstElementChild.classList.add(
        'button__icon',
        'fa',
        'fa-graduation-cap',
      );
    } else {
      rules = true;
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
  const newNav = ModeMenu();
  const section = PageContent();
  const gameLogo = createLogo();
  header.classList.add('header');
  section.classList.add('section');
  quiz.append(header, section);
  header.append(gameLogo, newNav);
  PageContent();
};
export default PageContent;
