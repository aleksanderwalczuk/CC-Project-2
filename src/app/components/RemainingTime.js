import { handleBladeSizeChange, Lightsaber } from './Lightsaber';

function handleTimeChange(element) {
  const initialTime = process.env.QUIZ_MAX_TIME_SECONDS;
  let timer = initialTime;
  const parameter = element;
  const idInterval = setInterval(() => {
    timer -= 1;
    const percentOfTime = ((100 * timer) / initialTime).toFixed(2);
    let min = Math.floor(timer / 60);
    let sec = timer % 60;

    if (timer === 0) {
      clearInterval(idInterval);
    }

    if (min < 10) {
      min = `0${min}`;
    }

    if (sec < 10) {
      sec = `0${sec}`;
    }

    parameter.textContent = `Time Left: ${min}m ${sec}s`;

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
