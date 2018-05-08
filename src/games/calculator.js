import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from '../utils';

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const getRandomOperation = () => {
  switch (getRandomInt(1, 5)) {
    case 1:
      return cons(add, '+');
    case 2:
      return cons(sub, '-');
    default:
      return cons(mul, '*');
  }
};

const makeExpression = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  return cons(getRandomOperation(), cons(a, b));
};

const value1 = exp => car(cdr(exp));

const value2 = exp => cdr(cdr(exp));

const operation = exp => car(exp);

const operationFunc = exp => car(operation(exp));

const toStringOperation = exp => cdr(operation(exp));

const toString = exp => `${value1(exp)} ${toStringOperation(exp)} ${value2(exp)}`;

const calc = exp => operationFunc(exp)(value1(exp), value2(exp));

export default () => {
  const exp = makeExpression();
  console.log(`Question: ${toString(exp)}`);
  const answer = Number(readlineSync.question('Your answer: '));
  const expected = calc(exp);
  return cons(answer, expected);
};
