import validateString from '../utils/validateString';

export default function ButtonWhiteWithIcon(text, ...iconClass) {
  const isAValidString = validateString(text);
  if (!isAValidString) {
    throw new Error('Not a valid string');
  }
  // Use html element creator after it is written
  const newButtonWhiteWithIcon = document.createElement('button');
  newButtonWhiteWithIcon.classList.add('button');
  const newIcon = document.createElement('i');
  newIcon.classList.add('button__icon', ...iconClass);
  newButtonWhiteWithIcon.append(newIcon, text);
  return newButtonWhiteWithIcon;
}
