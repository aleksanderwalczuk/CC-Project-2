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
  const buttonRulesRanking = createWhiteButtonWithIcon(
    'Hall of fame',
    'fa',
    'fa-id-badge',
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
  const buttonChangeOfView = document.querySelector('.button__icon')
    .parentNode;
  buttonChangeOfView.addEventListener('click', handleChangeOfView);
}

export default MainMenu;
