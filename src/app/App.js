import VisualImage from './components/VisualImage';
import Logo from './components/Logo';
import createButtonRed from './components/ButtonRed';
import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import createGameModeName from './components/GameModeName';
import elemFactory from './utils/elementFactory';
import render from './utils/render';

const App = ({ options }) => {
  Logo();

  VisualImage('../../static/assets/img/modes/people/1.jpg');

  const buttonPlay = createButtonRed('play the game');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  const gameModeInfo = createGameModeName('Who is this character?');

  //TODO: to remove after accept

  const childOfTestElement = elemFactory(
    'p',
    { id: 'childOfTest' },
    'Example of element',
  );

  const testElement = elemFactory(
    'div',
    { class: 'button button--success', id: 'test' },
    childOfTestElement,
  );

  render(
    'swquiz-app',
    gameModeInfo,
    buttonRules,
    buttonPlay,
    testElement,
  );
};

export default App;
