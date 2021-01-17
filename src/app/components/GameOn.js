import Answers from './Answers';
import RemainingTime from './RemainingTime';
import GameModeName from './GameModeName';
import elementFactory from '../utils/elementFactory';
import PageContent from './PageContent';
import ModalWindow from './Modal/ModalWindow';

const startGame = (choosenMode) => {
  const section = document.querySelector('.section');
  const sectionWrapper = document.querySelector('.section__wrapper');
  const placeholder = elementFactory('div', {
    className: 'placeholder',
  });

  sectionWrapper.innerHTML = '';
  sectionWrapper.appendChild(GameModeName(choosenMode));
  sectionWrapper.appendChild(placeholder);

  section.appendChild(RemainingTime());
};

const displayAnswer = (
  answers,
  correctAnswer,
  onAnsweredQuestion,
  callback,
) => {
  const placeholder = document.querySelector('.placeholder');

  placeholder.innerHTML = Answers(
    answers,
    correctAnswer,
    onAnsweredQuestion,
    callback,
  );
};

const displayModal = (game, humanPlayer, computerPlayer) => {
  PageContent(game.mode);
  const modal = ModalWindow(game, humanPlayer, computerPlayer);
  // const container = document.querySelector('#swquiz-app');
  // container.appendChild(modal);
  document.body.appendChild(modal);
};

export { startGame, displayAnswer, displayModal };
