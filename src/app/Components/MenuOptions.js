function MenuOptions() {
  const menu = document.createElement('nav');
  menu.classList.add('menu');
  document.querySelector('#swquiz-app').append(menu);
  const options = ['People', 'Vehicles', 'Starships'];
  options.forEach((option) => {
    const container = document.createElement('div');
    const btn = document.createElement('button');
    const div = document.createElement('div');
    container.classList.add('option');
    btn.setAttribute('data-option', option);
    btn.classList.add('option_button');
    btn.textContent = option;
    div.classList.add('option_underline');
    menu.append(container);
    container.append(btn, div);
  });
  const menuOption = {
    selectOption: '',
  };
  const menuElements = document.querySelectorAll('.option_button');
  function handleSelectOption() {
    menuOption.selectOption = this.dataset.option;
    menuElements.forEach((optionBtn) => {
      const btnOption = optionBtn;
      btnOption.style.color = 'rgba(0, 0, 0, 0.4)';
      btnOption.nextElementSibling.style.display = 'none';
    });
    this.style.color = 'rgba(0,0,0)';
    this.nextElementSibling.style.display = 'block';
  }
  menuElements.forEach((optionBtn) =>
    optionBtn.addEventListener('click', handleSelectOption),
  );
}
export default MenuOptions;
