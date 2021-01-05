export default function MenuOptions() {
  const divMenu = document.createElement('div');
  divMenu.classList.add('container');
  document.body.append(divMenu);
  const options = ['People', 'Starships', 'Vehicles'];
  options.forEach((option) => {
    let btn = document.createElement('button');
    btn.setAttribute('data-option', option);
    btn.classList.add('option');
    btn.textContent = option;
    divMenu.append(btn);
  });
  const menuOption = {
    selectOption: '',
  };
  const menuElements = document.querySelectorAll('.option');
  function handleSelectOption() {
    menuOption.selectOption = this.dataset.option;
    menuElements.forEach((element) => {
      element.classList.remove('select_option');
    });
    this.classList.add('select_option');
  }
  menuElements.forEach((option) =>
    option.addEventListener('click', handleSelectOption),
  );
}
