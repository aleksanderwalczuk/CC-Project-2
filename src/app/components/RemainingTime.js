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
    };

    if (min < 10) {
      minToDisplay = '0' + minToDisplay;
    };

    if (sec < 10) {
      secToDisplay = '0' + secToDisplay;
    };

    element.textContent = `Time Left: ${minToDisplay}m ${secToDisplay}s`;
  }, 1000);
};

function RemainingTime() {
  const root = document.querySelector('#swquiz-app');

  const parentElement = document.createElement('div');
  parentElement.classList.add('remaining-time');

  const counter = document.createElement('div');
  counter.textContent = 'Time Left : 02 m 00 s';
  counter.classList.add('remaining-time__counter');

  parentElement.appendChild(counter);
  root.appendChild(parentElement);

  handleTimeChange(counter);
};

export default RemainingTime;
