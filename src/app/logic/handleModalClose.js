// FUNCTION TO BE PASSED TO MODAL - EXAMPLE - TO BE REMOVED FROM APP PROBABLY
function handleModalClose(event) {
  event.preventDefault();
  const swquiz = document.querySelector('#swquiz-app');
  const playersName = document.querySelector('.player-form__input')
    .value;
  
  swquiz.removeChild(document.querySelector('.modal'));
  console.log(`close the modal ${playersName}`);
  return playersName;
}

export default handleModalClose;
