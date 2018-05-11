import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import main from '..';

const rule = 'What number is missing in this progression?';

const length = 10;

const makeQuestion = () => {
  const start = getRandomInt(0, 100);
  const step = getRandomInt(1, 10);
  const hidden = getRandomInt(1, length);

  let answer;
  let current = start;
  let question = '';

  for (let i = 1; i <= length; i += 1) {
    if (i === hidden) {
      question += '.. ';
      answer = current;
    } else {
      question += `${current} `;
    }
    current += step;
  }
  return cons(String(answer), question.trim());
};

export default () => main(makeQuestion, rule);
