import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import createGameModeName from './components/GameModeName';

const App = ({ options }) => {
  const quiz = document.querySelector('#swquiz-app');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  const gameModeInfo = createGameModeName('Who is this character?');
  quiz.append(buttonRules, gameModeInfo);
};

export default App;
