import { handleBladeSizeChange, Lightsaber } from './Lightsaber';

function handleTimeChange(element) {
  const initialTime = process.env.QUIZ_MAX_TIME_SECONDS;
  let timer = initialTime;

  const idInterval = setInterval(() => {
    timer--;
    const percentOfTime = ((100 * timer) / initialTime).toFixed(2);
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

    handleBladeSizeChange(percentOfTime);
  }, 1000);
}

function RemainingTime() {
  const parentElement = document.createElement('div');
  const counter = document.createElement('div');

  parentElement.classList.add('remaining-time');
  counter.classList.add('remaining-time__counter');
  counter.textContent = 'Time Left : 02 m 00 s';

  parentElement.appendChild(counter);
  parentElement.appendChild(Lightsaber());
  handleTimeChange(counter);

  return parentElement;
}

export default RemainingTime;
