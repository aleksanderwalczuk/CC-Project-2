import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import createMenuOptions from './Components/MenuOptions';
const App = ({ options }) => {
  const quiz = document.querySelector('#swquiz-app');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  quiz.append(buttonRules);

  const mainMenu = createMenuOptions();
  quiz.append(mainMenu);
};

export default App;
