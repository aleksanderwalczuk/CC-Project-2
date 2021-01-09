import htmlElementCreator from '../../utils/htmlElementCreator';

function ModalForm(callbackToCloseModal) {
  const playerForm = htmlElementCreator('form', {
    class: 'player-form',
    id: 'player-data',
  });

  const playerFormItem = htmlElementCreator('div', {
    class: 'player-form__item',
  });
  const playerFormInput = htmlElementCreator('input', {
    class: 'player-form__input',
    type: 'text',
    name: 'name',
    id: 'name',
    required: null,
  });
  const playerFormImage = htmlElementCreator('img', {
    class: 'player-form__image',
    src: './static/assets/ui/MasterYodaLeft.png',
  });

  const playerFormLabel = htmlElementCreator(
    'label',
    {
      class: 'player-form__label',
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
