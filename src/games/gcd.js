import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import { main } from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const nod = (_a, _b) => {
  let a = _a;
  let b = _b;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const makeQuestion = () => {
  for (;;) {
    const value1 = getRandomInt(1, 100);
    const value2 = getRandomInt(1, 100);
    const answer = nod(value1, value2);
    if (answer !== 0) {
      const question = `${value1} ${value2} [${answer}]`;
      return cons(String(answer), question);
    }
  }
};

export default () => main(makeQuestion, rule);
