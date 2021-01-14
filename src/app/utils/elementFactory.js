import { childrenInjector } from './render';

const elementFactory = (tag, attributes, ...children) => {
  const newElement = document.createElement(tag);
  if(!attributes) {return newElement}
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      const classesToAdd = value.split(' ')
      // console.log(classesToAdd)
      if ( classesToAdd.length === 1) {newElement.className = value}
      else {
      newElement.classList.add(...value.split(' '));
      }
    } else {
      newElement.setAttribute(key, value);
    }
  });
  
  if(!children) {return newElement}
  childrenInjector(newElement, children);

  return newElement;
};

export default elementFactory;
