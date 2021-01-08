import ButtonRed from './ButtonRed';
//! !pseudocode!!

function ModalWindow(
  humanPlayerGame,
  computerPlayerGame,
  callbackToCloseModal,
) {
  const modal = document.querySelector('.modal__container');
  const formButton = ButtonRed('May the force be with you!');
  modal.appendChild(formButton);
  formButton.setAttribute('type', 'submit');
  formButton.setAttribute('form', 'player-data');
  formButton.classList.add('player-form__button');
//   formButton.addEventListener('submit', callbackToCloseModal(this modal));
}

// formButton.setAttribute('value', 'player-data');

export default ModalWindow;
