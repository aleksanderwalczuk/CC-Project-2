import Answers from './Answers';
import RemainingTime from './RemainingTime';
import GameModeName from './GameModeName';
import elementFactory from '../utils/elementFactory';
import PageContent from './PageContent';
import ModalWindow from './Modal/ModalWindow';

const executeGame = (choosenMode) => {
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

const displayAnswer = (answers, correctAnswer, humanPlayer) => {
  const placeholder = document.querySelector('.placeholder');

  placeholder.childNodes.forEach((item) => item.remove());
  placeholder.appendChild(
    Answers(answers, correctAnswer, humanPlayer),
  );
};

const displayModal = (game, humanPlayer, computerPlayer) => {
  const modal = ModalWindow(game, humanPlayer, computerPlayer);
  document.querySelector('#swquiz-app').appendChild(modal);
};

export { executeGame, displayAnswer, displayModal };
