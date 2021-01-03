export default function MenuOptions() {
  const mainMenu = document.createElement('div');
  mainMenu.classList.add('container');
  document.body.append(mainMenu);
  const btnPeople = document.createElement('button');
  btnPeople.setAttribute('data-option', 'people');
  btnPeople.classList.add('option');
  btnPeople.textContent = 'People';
  const btnVehicles = document.createElement('button');
  btnVehicles.setAttribute('data-option', 'vehicles');
  btnVehicles.classList.add('option');
  btnVehicles.textContent = 'Vehicles';
  const btnStarships = document.createElement('button');
  btnStarships.setAttribute('data-option', 'starships');
  btnStarships.classList.add('option');
  btnStarships.textContent = 'Starships';
  divMenu.append(btnPeople, btnVehicles, btnStarships);

  const menuOption = {
    selectOption: '',
  };
  const options = [...document.querySelectorAll('.option')];
  function handleSelectOption() {
    menuOption.selectOption = this.dataset.option;
    console.log(menuOption);
    options.forEach((option) => {
      option.classList.remove('select_option');
    });
    this.classList.add('select_option');
  }
  options.forEach((option) =>
    option.addEventListener('click', handleSelectOption),
  );
}
