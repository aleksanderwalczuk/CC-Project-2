import VisualImage from "./components/VisualImage";
import Logo from "./components/Logo";
import createButtonRed from './components/ButtonRed';
import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';

const App = ({ options }) => {
  Logo();
  
  VisualImage("../../static/assets/img/modes/people/1.jpg");

  const quiz = document.querySelector('#swquiz-app');
  const buttonPlay = createButtonRed('play the game');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  quiz.append(buttonRules, buttonPlay);
};

export default App;
