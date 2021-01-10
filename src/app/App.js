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
  /* ------------ Examples of usage: -------------*/

  const firstChildOfTestElement = elemFactory(
    'div',
    { id: 'firstChild' },
    'Pierwsze dziecko',
  );

  const thirdChildOfTestElement = elemFactory(
    'ul',
    {},
    'Trzecie dziecko - lista elementów:',
    elemFactory('li', { style: 'color: red' }, 'pierwszy punkt'),
    elemFactory('li', {}),
    elemFactory('li', {}, 'trzeci punkt'),
  );

  const testElement = elemFactory(
    'div',
    { className: 'button button--success', id: 'test' },
    firstChildOfTestElement,
    'To jest drugie dziecko',
    thirdChildOfTestElement,
  );

  const childOfFirstChildOfTestElement = elemFactory(
    'p',
    {},
    'Dziecko pierwszego dziecka',
  );

  render(
    '#swquiz-app',
    gameModeInfo,
    buttonRules,
    buttonPlay,
    testElement,
  );

  render('#firstChild', childOfFirstChildOfTestElement);
};

export default App;
