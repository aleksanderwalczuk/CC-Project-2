import Answers from './Answers';
import RemainingTime from './RemainingTime';
import GameModeName from './GameModeName';
import elementFactory from '../utils/elementFactory';
import render from '../utils/render';
import ModalWindow from './Modal/ModalWindow';

const handleGame = (chosenMode, callback) => {
  const section = document.querySelector('.section');
  const sectionWrapper = document.querySelector('.section__wrapper');
  const answersWrapper = elementFactory('div', {
    className: 'answers-wrapper',
  });

  sectionWrapper.innerHTML = '';
  sectionWrapper.appendChild(GameModeName(chosenMode));
  sectionWrapper.appendChild(answersWrapper);

  section.appendChild(RemainingTime(callback));
};

const displayAnswers = (
  answers,
  correctAnswer,
  humanPlayer,
  callback,
) => {
  const answersWrapper = document.querySelector('.answers-wrapper');
  answersWrapper.innerHTML = '';
  answersWrapper.appendChild(
    Answers(answers, correctAnswer, humanPlayer, callback),
  );
};

const displayModal = (
  game,
  humanPlayer,
  computerPlayer,
  callback,
) => {
  render(
    '#swquiz-app',
    ModalWindow(game, humanPlayer, computerPlayer, callback),
  );
};

export { handleGame, displayAnswers, displayModal };
