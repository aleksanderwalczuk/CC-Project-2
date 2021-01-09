const render = (parentId, ...children) => {
  if (!children || !parentId) {
    throw new Error(
      'In params must have been added parentId and at least one child to render in it',
    );
  }

  const parentElem = document.getElementById(parentId);
  if (!parentElem) {
    throw new Error(`Not found element with id ${parentId}`);
  }

  children.forEach((child) => {
    parentElem.appendChild(child);
  });
};

export default render;
