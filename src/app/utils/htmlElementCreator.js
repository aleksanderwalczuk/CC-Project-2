function htmlElementCreator(
  tagName,
  parent,
  childrenArr,
  id,
  classNames,
  inHTML,
) {
  const newElement = document.createElement(tagName);

  if (parent) {
    parent.append(newElement);
  }

  if (childrenArr) {
    childrenArr.forEach((element) => {
      newElement.append(element);
    });
  }

  if (id) {
    newElement.id = id;
  }

  if (classNames) {
    newElement.classList.add(classNames);
  }

  if (inHTML) {
    newElement.innerHTML = inHTML;
  }

  return newElement;
}

export default htmlElementCreator;
