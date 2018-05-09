import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import { main } from '../index';

const rule = 'Balance the given number.';

const getBalance = (value) => {
  const maxDivisor = Math.floor(Math.min(a, b) / 2);
  for (let i = maxDivisor; i > 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return null;
};

const makeQuestion = () => {
  const question = getRandomInt(1, 100);
  const answer = getBalance(question);
  return cons(answer, question);
};

export default () => main(makeQuestion, rule);
