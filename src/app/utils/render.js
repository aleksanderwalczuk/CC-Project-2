export const childrenInjector = (parentElem, children) =>
  children.forEach((child) => {
    if (typeof child === 'string') {
      parentElem.appendChild(document.createTextNode(child));
    } else {
      parentElem.appendChild(child);
    }
  });

const render = (query, ...children) => {
  if (children.length === 0 || !query) {
    throw new Error(
      'Required query and at least one child in arguments',
    );
  }
  const parentElem = document.querySelector(query);

  if (!parentElem) {
    throw new Error(`Not found element by query ${query}`);
  }

  childrenInjector(parentElem, children);
};

export default render;
