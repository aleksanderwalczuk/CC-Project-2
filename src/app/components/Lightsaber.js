function Lightsaber() {
  const divElement = document.createElement('div');
  const handle = document.createElement('div');
  const blade = document.createElement('div');
  const redBlade = document.createElement('div');

  divElement.classList.add(
    'remaining-time__lightsaber',
    'lightsaber',
  );
  handle.classList.add('lightsaber__handle');
  blade.classList.add('lightsaber__blade');
  redBlade.classList.add('lightsaber__red-blade');

  divElement.appendChild(handle);
  divElement.appendChild(blade);
  blade.appendChild(redBlade);
  return divElement;
}

function handleBladeSizeChange(percent) {
  const redBlade = document.querySelector('.lightsaber__red-blade');
  redBlade.style.width = `${percent}%`;
}

export { Lightsaber, handleBladeSizeChange };
