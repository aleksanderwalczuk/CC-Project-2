import ModeMenu from './ModeMenu';
import render from '../utils/render';
import elementFactory from '../utils/elementFactory';
import PageContent from './PageContent';
import { PEOPLE } from '../constants';

// Creating header and rendering of the page.
export const LoadPage = () => {
  const header = elementFactory(
    'header',
    { className: 'header' },
    elementFactory('div', { className: 'starwars__logo' }),
    ModeMenu(),
  );
  const section = elementFactory('section', { className: 'section' });

  render('#swquiz-app', header, section);
  PageContent(PEOPLE, section);
};
export default PageContent;
