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

  children.forEach((child) => {
    parentElem.appendChild(child);
  });
};

export default render;
