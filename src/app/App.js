import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import mainMenu from './Components/MenuOptions';
const App = ({ options }) => {
  const quiz = document.querySelector('#swquiz-app');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  quiz.append(buttonRules);
};

export default App;
