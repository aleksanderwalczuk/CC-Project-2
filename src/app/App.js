import ModeMenu from './components/ModeMenu';
import render from './utils/render';
import elementFactory from './utils/elementFactory';
import PageContent from './components/PageContent';
import { PEOPLE } from './constants';
import generateLogo from './components/LogoComponent';

const App = ({ options }) => {
  const image = generateLogo();
  const header = elementFactory(
    'header',
    { className: 'header' },
    elementFactory('div', {}),
    elementFactory('div', { className: 'starwars__logo' }, image),
    ModeMenu(),
  );
  const section = elementFactory('section', { className: 'section' });
  render('#swquiz-app', header, section);
  PageContent(PEOPLE, 'rules', section);
};

export default App;
