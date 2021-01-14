import htmlElementCreator from '../utils/elementFactory';
import ModalDetails from './ModalComponents/ModalDetails';
import ModalForm from './ModalComponents/ModalForm';

function ModalWindow(
  game,
  humanPlayerGame,
  computerPlayerGame,
  callbackToCloseModal,
) {
  // console.log('adding modal');
  // CREATE MAIN ELEMENTS
  const modal = htmlElementCreator('div', { className: 'modal' });
  // console.log(modal)
  const modalContainer = htmlElementCreator('div', {
    className: 'modal__container',
  });
  const modalHeader = htmlElementCreator(
    'h2',
    { className: 'mode-info__heading modal__heading' },
    'Game Over',
  );
  const modalText = htmlElementCreator(
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
  const formButton = htmlElementCreator(
    'button',
    {
      className: 'player-form__button button button--red',
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
  // console.log(modal);
  return modal;
}

export default ModalWindow;
