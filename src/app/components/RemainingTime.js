function handleTimeChange(element){
  let timer = 120;

  const idInterval = setInterval(() => {
    timer--;

    if(timer === 0){
      clearInterval(idInterval);
    }

    let min = Math.floor(timer / 60);
    let sec = timer % 60;

    element.textContent = `Time Left: ${min}m ${sec}s`;
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

  handleTimeChange(counter);
};

export default RemainingTime;
