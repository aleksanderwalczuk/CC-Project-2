import { childrenInjector } from './render';

const elementFactory = (tag, attributes={}, ...children) => {
  const newElement = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      newElement.classList.add(...value.split(' '));
    } else {
      newElement.setAttribute(key, value);
    }
  });

  childrenInjector(newElement, children);

  return newElement;
};

export default elementFactory;