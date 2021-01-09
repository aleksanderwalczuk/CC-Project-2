const elementFactory = (tag, attributes, ...children) => {
  const newElement = document.createElement(tag);

  Object.entries(attributes).map(([key, value]) =>
    newElement.setAttribute(key, value),
  );

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
