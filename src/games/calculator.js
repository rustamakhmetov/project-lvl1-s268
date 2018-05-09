import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import main from '..';

const rule = 'What is the result of the expression?';

const makeQuestion = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  let operator = '';
  let answer;
  switch (getRandomInt(1, 5)) {
    case 1:
      operator = '+';
      answer = a + b;
      break;
    case 2:
      operator = '-';
      answer = a - b;
      break;
    default:
      operator = '*';
      answer = a * b;
  }
  const question = `${a} ${operator} ${b}`;
  return cons(String(answer), question);
};

export default () => main(makeQuestion, rule);
