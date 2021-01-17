import elementFactory from '../utils/elementFactory';

function Lightsaber() {
  const redBlade2 = elementFactory(
    'div',
    { className: 'lightsaber__red-blade' }
  );

  const blade2 = elementFactory(
    'div',
    { className: 'lightsaber__blade' },
    redBlade2
  );
  
  const handle2 = elementFactory(
    'div',
    { className: 'lightsaber__handle' }
  );
  
  const container = elementFactory(
    'div',
    { className: 'remaining-time__lightsaber lightsaber' },
    handle2,
    blade2
  );
  return container;
}

function handleBladeSizeChange(percent) {
  const redBlade = document.querySelector('.lightsaber__red-blade');
  redBlade.style.width = `${percent}%`;
}

export { Lightsaber, handleBladeSizeChange };
