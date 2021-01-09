import MainMenu from './components/MainMenu';
// import VisualImage from './components/VisualImage';
// import createButtonRed from './components/ButtonRed';
// import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
// import createGameModeName from './components/GameModeName';

const App = ({ options }) => {
  MainMenu();
  // VisualImage('../../static/assets/img/modes/people/1.jpg');

  /* const quiz = document.querySelector('#swquiz-app');
  const header = document.createElement('header');
  const buttonPlay = createButtonRed('play the game');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  const gameModeInfo = createGameModeName('Who is this character?');
  quiz.appendChild(header);
  header.append(gameModeInfo, buttonRules, buttonPlay);
  quiz.append(gameModeInfo, buttonRules, buttonPlay);*/
};

export default App;
