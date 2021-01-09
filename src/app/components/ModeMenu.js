function ModeMenu() {
  const newModeMenu = document.createElement('nav');
  const options = ['People', 'Vehicles', 'Starships'];
  options.forEach((option) => {
    const btn = document.createElement('button');
    btn.classList.add('menu_button');
    btn.textContent = option;
    newModeMenu.appendChild(btn);
  });
  newModeMenu.classList.add('menu');
  const menuOption = {
    selectOption: '',
  };
  const menuElements = document.querySelectorAll('.menu_button');
  function handleSelectOption() {
    menuOption.selectOption = this.textContent;
    menuElements.forEach((menuBtn) => {
      menuBtn.classList.remove('menu_button--select');
    });
    this.classList.add('menu_button--select');
  }
  menuElements.forEach((optionBtn) =>
    optionBtn.addEventListener('click', handleSelectOption),
  );
  return newModeMenu;
}
export default ModeMenu;
