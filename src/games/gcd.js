import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import { main } from '..';

const rule = 'Find the greatest common divisor of given numbers.';

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
    const answer = nod(value1, value2);
    if (answer !== null) {
      const question = `${value1} ${value2} [${answer}]`;
      return cons(String(answer), question);
    }
  }
};

export default () => main(makeQuestion, rule);
