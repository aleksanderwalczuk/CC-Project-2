import VisualImage from './components/VisualImage';
import Logo from './components/Logo';
import createButtonRed from './components/ButtonRed';
import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import createGameModeName from './components/GameModeName';
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

  render('#swquiz-app', gameModeInfo, buttonRules, buttonPlay);
};

export default App;
