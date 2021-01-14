function handleTimeChange(element) {
  let timer = process.env.QUIZ_MAX_TIME_SECONDS;

  const idInterval = setInterval(() => {
    timer--;

    const min = Math.floor(timer / 60);
    const sec = timer % 60;
    let minToDisplay = min;
    let secToDisplay = sec;

    if (timer === 0) {
      clearInterval(idInterval);
    }

    if (min < 10) {
      minToDisplay = '0' + minToDisplay;
    }

    if (sec < 10) {
      secToDisplay = '0' + secToDisplay;
    }

    element.textContent = `Time Left: ${minToDisplay}m ${secToDisplay}s`;
  }, 1000);
}

function RemainingTime() {
  const parentElement = document.createElement('div');
  const counter = document.createElement('div');

  parentElement.classList.add('remaining-time');
  counter.textContent = 'Time Left : 02 m 00 s';
  counter.classList.add('remaining-time__counter');

  parentElement.appendChild(counter);

  handleTimeChange(counter);

  return parentElement;
}

export default RemainingTime;
