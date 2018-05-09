import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import main from '..';

const rule = 'Balance the given number.';

const getSumNumbers = number => String(number).split('').reduce((a, b) => Number(a) + Number(b), 0);

const getBalance = (number) => {
  const countNumbers = String(number).length;

  const sumNumbers = getSumNumbers(number);

  const balance = (sum, count, result) => {
    if (count === 0) {
      return result;
    }
    const newNumber = Math.floor(sum / count);
    return balance(sum - newNumber, count - 1, result + String(newNumber));
  };

  return balance(sumNumbers, countNumbers, '');
};

const makeQuestion = () => {
  const question = getRandomInt(1, 9999);
  const answer = getBalance(question);
  return cons(answer, `${question} [${answer}]`);
};

export default () => main(makeQuestion, rule);
