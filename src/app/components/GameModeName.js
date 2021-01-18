import ef from '../utils/elementFactory';
import { PEOPLE, VEHICLES, STARSHIPS } from '../constants';

function GameModeName(mode) {
  const questions = {
    [PEOPLE]: 'Who is this character?',
    [VEHICLES]: 'Do you recognize this vehicle?',
    [STARSHIPS]: 'Do you recognize this starship?',
  };

  const question = ef(
    'span',
    { className: 'mode-info__question' },
    questions[mode],
  );

  const modeText = ef('span', {}, 'Question: ');

  const heading = ef(
    'h2',
    { className: 'mode-info__heading' },
    modeText,
    question,
  );

  const modeInfo = ef('div', { className: 'mode-info' }, heading);

  return modeInfo;
}

export default GameModeName;
