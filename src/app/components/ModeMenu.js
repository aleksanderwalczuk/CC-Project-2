import elementFactory from '../utils/elementFactory';
import { PEOPLE, VEHICLES, STARSHIPS } from '../constants';
import PageContent from './PageContent';
import { cancelGame } from '../logic/processGame';

export const clearSelection = (selectedOption) => {
  const menuElements = document.querySelectorAll('.menu__button');
  menuElements.forEach((menuBtn) => {
    menuBtn.classList.remove('menu__button--select');
    if (
      selectedOption &&
      menuBtn.textContent.toUpperCase() ===
        selectedOption.toUpperCase()
    ) {
      menuBtn.classList.add('menu__button--select');
    }
  });
};

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
    menuOption = event.target.textContent;
    clearSelection(menuOption);
    cancelGame();
    PageContent(menuOption);
  }
  const menuElements = [...newModeMenu.children];
  menuElements.forEach((optionBtn) =>
    optionBtn.addEventListener('click', handleSelectOption),
  );
  return newModeMenu;
}

export default ModeMenu;
