import elementFactory from '../../utils/elementFactory';
import ModalDetails from './ModalDetails';
import ModalForm from './ModalForm';

function ModalWindow(
  game,
  humanPlayerGame,
  computerPlayerGame,
  callbackToCloseModal,
) {
  // CREATE MAIN ELEMENTS
  const modalHeader = elementFactory(
    'h2',
    { className: 'mode-info__heading modal__heading' },
    'Game Over',
  );
  const modalText = elementFactory(
    'p',
    { className: 'modal__text' },
    `The force is strong in you young Padawan! During 2 minutes you have answered ${humanPlayerGame.questionsGuessed} / ${humanPlayerGame.questionsAnswered} questions. And Computer quessed ${computerPlayerGame.questionsGuessed} / ${computerPlayerGame.questionsAnswered}.`,
  );

  // DETAILS SECTION
  const detailsContainer = ModalDetails(
    game,
    humanPlayerGame,
    computerPlayerGame,
  );

  // FORM
  const playerForm = ModalForm(callbackToCloseModal);
  const formButton = elementFactory(
    'button',
    {
      className: 'player-form__button button button--red',
      type: 'submit',
      form: 'player-data',
    },
    'May the force be with you!',
  );

  // JOIN TOGETHER IN MAIN CONTAINER

  const modalContainer = elementFactory(
    'div',
    {
      className: 'modal__container',
    },
    modalHeader,
    modalText,
    detailsContainer,
    playerForm,
    formButton,
  );
  const modal = elementFactory(
    'div',
    { className: 'modal' },
    modalContainer,
  );

  return modal;
}

export default ModalWindow;
