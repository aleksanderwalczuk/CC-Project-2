function Lightsaber() {
  const root = document.querySelector(".remaining-time");
  
  const divElement = document.createElement("div");
  divElement.classList.add("remaining-time__lightsaber");
  divElement.classList.add("lightsaber");

  const handle = document.createElement("div");
  handle.classList.add("lightsaber__handle");

  const blade = document.createElement("div");
  blade.classList.add("lightsaber__blade");

  const redBlade = document.createElement("div");
  redBlade.classList.add("lightsaber__red-blade");

  divElement.appendChild(handle);
  divElement.appendChild(blade);

  blade.appendChild(redBlade);

  root.appendChild(divElement);
}

function handleBladeSizeChange(percent) {
 const redBlade = document.querySelector('.lightsaber__red-blade');
 redBlade.style.width = `${percent}%`
};

export { Lightsaber, handleBladeSizeChange };
