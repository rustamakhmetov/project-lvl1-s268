import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import { main } from '../index';

const RULES = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
  const maxDivisor = Math.floor(Math.min(a, b) / 2);
  for (let i = maxDivisor; i > 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return null;
};

const makeQuestion = () => {
  for (;;) {
    const value1 = getRandomInt(1, 100);
    const value2 = getRandomInt(1, 100);
    const nd = nod(value1, value2);
    if (nd !== null) {
      return cons(nd, `${value1} ${value2} [${nd}]`);
    }
  }
};

export default () => main(makeQuestion, RULES);
