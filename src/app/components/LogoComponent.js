import elementFactory from '../utils/elementFactory';
import { cancelGame } from '../logic/processGame';
import PageContent from './PageContent';
import { PEOPLE } from '../constants';

const generateLogo = () => {
  const image = elementFactory('img', {
    className: 'starwars__logo__image',
    alt: 'Star Wars logo',
    src: '../../static/assets/ui/StarWarsLogo.png',
  });
  image.addEventListener('click', () => {
    cancelGame();
    PageContent(PEOPLE);
  });

  return image;
};

export default generateLogo;
