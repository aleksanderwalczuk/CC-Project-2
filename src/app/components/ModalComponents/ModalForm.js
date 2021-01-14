import htmlElementCreator from '../../utils/elementFactory';

function ModalForm(callbackToCloseModal) {
  const playerForm = htmlElementCreator('form', {
    className: 'player-form',
    id: 'player-data',
  });

  const playerFormItem = htmlElementCreator('div', {
    className: 'player-form__item',
  });
  const playerFormInput = htmlElementCreator('input', {
    className: 'player-form__input',
    type: 'text',
    name: 'name',
    id: 'name',
    required: null,
  });
  const playerFormImage = htmlElementCreator('img', {
    className: 'player-form__image',
    src: './static/assets/ui/MasterYodaLeft.png',
  });

  const playerFormLabel = htmlElementCreator(
    'label',
    {
      className: 'player-form__label',
      for: 'name',
    },
    'Please fill your name in order to receive eternal glory in whole Galaxy!',
  );

  playerForm.append(playerFormItem, playerFormLabel);
  playerFormItem.append(playerFormInput, playerFormImage);

  // ADD EVENT TO SUBMIT EVENT
  playerForm.addEventListener('submit', callbackToCloseModal);

  return playerForm;
}

export default ModalForm;
