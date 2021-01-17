import PageContent from './MainMenu';
import elementFactory from '../utils/elementFactory';
import { PEOPLE, VEHICLES, STARSHIPS } from '../constants';

function ModeMenu() {
  // Creating nav's elements.
  const options = [PEOPLE, VEHICLES, STARSHIPS];
  const optionsButtons = options.reduce((acc, option) => {
    acc.push(
      elementFactory('button', { className: 'menu__button' }, option),
    );
    return acc;
  }, []);

  optionsButtons[0].classList.add('menu__button--select');
  const newModeMenu = elementFactory(
    'nav',
    { className: 'menu' },
    ...optionsButtons,
  );

  let menuOption;

  // Function that checks which button was clicked and passes a variable with this information.
  function handleSelectOption(event) {
    const menuElements = document.querySelectorAll('.menu__button');
    menuOption = event.target.textContent;
    menuElements.forEach((menuBtn) => {
      menuBtn.classList.remove('menu__button--select');
    });
    event.target.classList.add('menu__button--select');
    PageContent(menuOption);
  }
  const menuElements = [...newModeMenu.children];
  menuElements.forEach((optionBtn) =>
    optionBtn.addEventListener('click', handleSelectOption),
  );
  return newModeMenu;
}

export default ModeMenu;
