const elementFactory = (tag, attributes, ...children) => {
  const newElement = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      newElement.classList.add(...value.split(' '));
    } else {
      newElement.setAttribute(key, value);
    }
  });

  children.forEach((child) => {
    if (typeof child === 'string') {
      newElement.appendChild(document.createTextNode(child));
    } else {
      newElement.appendChild(child);
    }
  });

  return newElement;
};

export default elementFactory;
