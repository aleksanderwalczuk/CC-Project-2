import { Lightsaber } from "./Lightsaber";
import { handleBladeSizeChange } from "./Lightsaber";

function handleTimeChange(element){
  const initialTime = 120;
  let timer = initialTime;

  const idInterval = setInterval(() => {
    timer--;

    let percentOfTime = (100 * timer / initialTime).toFixed(2);

    if(timer === 0){
      clearInterval(idInterval);
    }

    let min = Math.floor(timer / 60);
    let sec = timer % 60;

    element.textContent = `Time Left: ${min}m ${sec}s`;
    
    handleBladeSizeChange(percentOfTime);
  }, 1000);
};

function RemainingTime() {
  const root = document.querySelector("#swquiz-app");

  const parentElement = document.createElement("div");
  parentElement.classList.add("remaining-time");

  const counter = document.createElement("div");
  counter.textContent = "Time Left : 2 m 00 s";
  counter.classList.add("remaining-time__counter");

  parentElement.appendChild(counter);
  root.appendChild(parentElement);

  Lightsaber();
  handleTimeChange(counter);
};

export default RemainingTime;
