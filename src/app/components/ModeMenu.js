import PageContent from './MainMenu';

function ModeMenu() {
  const newModeMenu = document.createElement('nav');
  const options = ['People', 'Vehicles', 'Starships'];
  options.forEach((option) => {
    const btn = document.createElement('button');
    btn.classList.add('menu__button');
    btn.textContent = option;
    newModeMenu.appendChild(btn);
  });
  newModeMenu.classList.add('menu');
  newModeMenu.firstElementChild.classList.add('menu__button--select');
  const menuOption = {
    selectOption: '',
  };
  function handleSelectOption(event) {
    const menuElements = document.querySelectorAll('.menu__button');
    menuOption.selectOption = event.target.textContent;
    menuElements.forEach((menuBtn) => {
      menuBtn.classList.remove('menu__button--select');
    });
    event.target.classList.add('menu__button--select');
    PageContent(menuOption);
  }
  newModeMenu.addEventListener('click', handleSelectOption);
  return newModeMenu;
}

export default ModeMenu;
