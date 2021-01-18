import { getTimeLeft } from '../logic/processGame';
import { handleBladeSizeChange, Lightsaber } from './Lightsaber';

function handleTimeChange(domNode) {
  const initialTime = process.env.QUIZ_MAX_TIME_SECONDS;
  const element = domNode;
  const idInterval = setInterval(() => {
    const timer = getTimeLeft();
    if (!timer.isRunning) {
      clearInterval(idInterval);
    }
    const percentOfTime = (
      (100 * timer.timeLeft) /
      initialTime
    ).toFixed(2);
    const min = Math.floor(Math.round(timer.timeLeft) / 60);
    const sec = Math.round(timer.timeLeft) % 60;
    const minute = `${min < 10 ? `0${min}` : min}m`;
    const second = `${sec < 10 ? `0${sec}` : sec}s`;

    element.textContent = `Time Left: ${minute} ${second}`;
    try {
      handleBladeSizeChange(percentOfTime);
    } catch (error) {}
  }, 50);
}

function RemainingTime() {
  const parentElement = document.createElement('div');
  const counter = document.createElement('div');

  parentElement.classList.add('remaining-time');
  counter.classList.add('remaining-time__counter');
  counter.textContent = 'Time Left : 02 m 00 s';

  parentElement.appendChild(counter);
  parentElement.appendChild(Lightsaber());
  const initInterval = setInterval(() => {
    const isRunning = getTimeLeft();
    if (isRunning.isRunning) {
      clearInterval(initInterval);
      handleTimeChange(counter);
    }
  }, 50);

  return parentElement;
}

export default RemainingTime;
