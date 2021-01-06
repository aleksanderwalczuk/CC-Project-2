function Logo() {
  // Creating elements
  const elementA = document.createElement('a');
  const elementDiv = document.createElement('div');

  // Setting atribute and class
  elementA.setAttribute('href', './');
  elementDiv.classList.add('starwars__logo');

  // Adding to html structure
  elementA.appendChild(elementDiv);
  document.querySelector('#swquiz-app').appendChild(elementA);
}

export default Logo;
