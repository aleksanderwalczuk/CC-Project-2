function MenuOptions() {
  const menu = document.createElement('nav');
  menu.classList.add('menu');
  document.querySelector('#swquiz-app').append(menu);
  const options = ['People', 'Starships', 'Vehicles'];
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
      btnOption.classList.remove('option--selected');
      btnOption.nextElementSibling.style.display = 'none';
    });
    this.classList.add('option--selected');
    this.nextElementSibling.style.display = 'block';
  }
  menuElements.forEach((optionBtn) =>
    optionBtn.addEventListener('click', handleSelectOption),
  );
}
export default MenuOptions;
