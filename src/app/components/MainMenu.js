import createVisualImage from './VisualImage';
import createLogo from './Logo';
import createButtonRed from './ButtonRed';
import createWhiteButtonWithIcon from './ButtonWhiteWithIcon';
import createGameModeName from './GameModeName';
import createModeMenu from './ModeMenu';

function MainMenu() {
  const quiz = document.querySelector('#swquiz-app');
  const header = document.createElement('header');
  const section = document.createElement('section');
  const gameWrapper = document.createElement('div');
  const buttonsWrapper = document.createElement('div');
  const gameLogo = createLogo();
  const modeMenu = createModeMenu();
  const visualImage = createVisualImage(
    '../../../static/assets/img/modes/people/1.jpg',
  );
  const buttonPlay = createButtonRed('play the game');
  const buttonHallOfFame = createWhiteButtonWithIcon(
    'Hall of fame',
    'fa',
    'fa-graduation-cap',
  );
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  const gameModeInfo = createGameModeName('Who is this character?');
  header.classList.add('header');
  section.classList.add('section');
  gameWrapper.classList.add('section_wrapper');
  buttonsWrapper.classList.add('section_wrapper_buttons');
  quiz.append(header, section);
  header.append(gameLogo, modeMenu);
  section.append(visualImage, gameWrapper);
  gameWrapper.append(gameModeInfo, buttonsWrapper);
  buttonsWrapper.append(buttonHallOfFame, buttonPlay);

  let rules = false;
  function handleChangeOfView() {
    if (!rules) {
      rules = true;
      buttonHallOfFame.remove();
      buttonsWrapper.insertBefore(buttonRules, buttonPlay);
    } else if (rules) {
      rules = false;
      buttonRules.remove();
      buttonsWrapper.insertBefore(buttonHallOfFame, buttonPlay);
    }
    console.log(rules);
  }
  const buttonChangeOfView = document.querySelector('.fa').parentNode;
  buttonChangeOfView.addEventListener('click', handleChangeOfView);
}

export default MainMenu;
