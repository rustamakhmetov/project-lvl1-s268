import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import { main } from '../index';

const RULES = 'What is the result of the expression?';

const makeQuestion = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  let operator = '';
  let result;
  switch (getRandomInt(1, 5)) {
    case 1:
      operator = '+';
      result = a + b;
      break;
    case 2:
      operator = '-';
      result = a - b;
      break;
    default:
      operator = '*';
      result = a * b;
  }
  return cons(result, `${a} ${operator} ${b}`);
};

export default () => main(makeQuestion, RULES);
