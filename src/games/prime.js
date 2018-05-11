import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import main from '..';

const rule = 'Answer "yes" if number prime otherwise answer "no"';

const isPrime = (value) => {
  for (let i = 2, s = Math.sqrt(value); i <= s; i += 1) {
    if (value % i === 0) return false;
  }
  return value !== 1;
};

const getAnswer = value => (isPrime(value) ? 'yes' : 'no');

export const makeQuestion = () => {
  const question = getRandomInt(1, 100);
  const answer = getAnswer(question);
  return cons(answer, `${question} [${answer}]`);
};

export default () => main(makeQuestion, rule);
