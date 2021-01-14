import elementFactory from '../utils/elementFactory';

function Logo() {
  // Creating element
  return elementFactory('div', { className: 'starwars__logo' });
}

export default Logo;
