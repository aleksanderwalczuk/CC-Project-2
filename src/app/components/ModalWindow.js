import htmlElementCreator from '../utils/htmlElementCreator';
import ModalDetails from './ModalComponents/ModalDetails';
import ModalForm from './ModalComponents/ModalForm';

function ModalWindow(
  game,
  humanPlayerGame,
  computerPlayerGame,
  callbackToCloseModal,
) {
  // CREATE MAIN ELEMENTS
  const modal = htmlElementCreator('div', { class: 'modal' });
  const modalContainer = htmlElementCreator('div', {
    class: 'modal__container',
  });
  const modalHeader = htmlElementCreator(
    'h2',
    { class: 'mode-info__heading modal__heading' },
    'Game Over',
  );
  const modalText = htmlElementCreator(
    'p',
    { class: 'modal__text' },
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
  const formButton = htmlElementCreator(
    'button',
    {
      class: 'player-form__button button button--red',
      type: 'submit',
      form: 'player-data',
    },
    'May the force be with you!',
  );

  // JOIN TOGETHER
  modal.appendChild(modalContainer);
  modalContainer.append(
    modalHeader,
    modalText,
    detailsContainer,
    playerForm,
    formButton,
  );

  return modal;
}

export default ModalWindow;
