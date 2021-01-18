import ModeMenu from './components/ModeMenu';
import render from './utils/render';
import elementFactory from './utils/elementFactory';
import PageContent from './components/PageContent';
import { PEOPLE } from './constants';

const App = ({ options }) => {
  const header = elementFactory(
    'header',
    { className: 'header' },
    elementFactory('div', { className: 'starwars__logo' }),
    ModeMenu(),
  );
  const section = elementFactory('section', { className: 'section' });
  render('#swquiz-app', header, section);
  PageContent(PEOPLE, 'rules', section);
};

export default App;
