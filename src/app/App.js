import createButtonRed from './components/ButtonRed';
import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import createMenuOptions from './Components/MenuOptions';
const App = ({ options }) => {
  const quiz = document.querySelector('#swquiz-app');
  const buttonPlay = createButtonRed('play the game');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  const mainMenu = createMenuOptions();
  quiz.append(buttonRules, buttonPlay, mainMenu);
};

export default App;
