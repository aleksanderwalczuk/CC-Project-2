function htmlElementCreator(tagName, attributes, text) {
  const newElement = document.createElement(tagName);

  if (attributes) {
    const attributesToAdd = Object.keys(attributes);
    attributesToAdd.forEach((key) => {
      newElement.setAttribute(key, attributes[key]);
    });
  }
  if (text) {
    newElement.innerText = text;
  }
  return newElement;
}
// USAGE:

// const newDiv = htmlElementCreator(
//   'div',
//   { class: 'class class0', id: 'idic', src: './frfr' },
//   'abrakadacra',
// );

export default htmlElementCreator;
