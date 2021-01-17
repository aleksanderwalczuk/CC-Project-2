import elementFactory from '../utils/elementFactory';

function Lightsaber() {
  const activeBlade = elementFactory('div', {
    className: 'lightsaber__blade--active',
  });

  const blade = elementFactory(
    'div',
    { className: 'lightsaber__blade' },
    activeBlade,
  );

  const handle = elementFactory('div', {
    className: 'lightsaber__handle',
  });

  const container = elementFactory(
    'div',
    { className: 'remaining-time__lightsaber lightsaber' },
    handle,
    blade,
  );
  return container;
}

function handleBladeSizeChange(percent) {
  const activeBlade = document.querySelector(
    '.lightsaber__blade--active',
  );
  activeBlade.style.width = `${percent}%`;
}

export { Lightsaber, handleBladeSizeChange };
