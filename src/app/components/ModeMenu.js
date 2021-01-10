function ModeMenu() {
  const newHeader = document.querySelector('.header');
  const newModeMenu = document.createElement('nav');
  const options = ['People', 'Vehicles', 'Starships'];
  newHeader.appendChild(newModeMenu);
  options.forEach((option) => {
    const btn = document.createElement('button');
    btn.classList.add('menu__button');
    btn.textContent = option;
    newModeMenu.appendChild(btn);
  });
  newModeMenu.classList.add('menu');
  const menuOption = {
    selectOption: '',
  };
  const menuElements = document.querySelectorAll('.menu__button');
  function handleSelectOption() {
    menuOption.selectOption = this.textContent;
    menuElements.forEach((menuBtn) => {
      menuBtn.classList.remove('menu__button--select');
    });
    this.classList.add('menu__button--select');
    // console.log(menuOption);
  }
  menuElements.forEach((optionBtn) =>
    optionBtn.addEventListener('click', handleSelectOption),
  );
  return newModeMenu;
}
export default ModeMenu;
