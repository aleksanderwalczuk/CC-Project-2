import elementFactory from '../../utils/elementFactory';

function ModalForm(dataToSendToLS) {
  const playerFormInput = elementFactory('input', {
    className: 'player-form__input',
    type: 'text',
    name: 'name',
    id: 'name',
    required: null,
  });
  const playerFormImage = elementFactory('img', {
    className: 'player-form__image',
    src: './static/assets/ui/MasterYodaLeft.png',
  });

  const playerFormLabel = elementFactory(
    'label',
    {
      className: 'player-form__label',
      for: 'name',
    },
    'Please fill your name in order to receive eternal glory in whole Galaxy!',
  );

  const playerFormItem = elementFactory(
    'div',
    {
      className: 'player-form__item',
    },
    playerFormInput,
    playerFormImage,
  );

  const playerForm = elementFactory(
    'form',
    {
      className: 'player-form',
      id: 'player-data',
    },
    playerFormItem,
    playerFormLabel,
  );

  // ADD EVENT TO SUBMIT EVENT
  playerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const swquiz = document.querySelector('#swquiz-app');
    const playersName = document.querySelector('.player-form__input')
      .value;
    const dataToPass = { ...dataToSendToLS, nickname: playersName };
    swquiz.removeChild(document.querySelector('.modal'));
    console.log(dataToPass);
    console.log(`close the modal ${playersName}`);
  });

  return playerForm;
}

export default ModalForm;
