import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import main from '..';

const rule = 'Answer "yes" if number prime otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const maxDivisor = Math.sqrt(number);
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getAnswer = value => (isPrime(value) ? 'yes' : 'no');

export const makeQuestion = () => {
  const question = getRandomInt(1, 100);
  const answer = getAnswer(question);
  return cons(answer, `${question}`);
};

export default () => main(makeQuestion, rule);
