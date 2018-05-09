import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from '../utils';
import { getAnswerForQuestion, main } from '../index';

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

const questionText = question => cdr(question);

const expected = question => car(question);

export const run = () => {
  const question = makeQuestion();
  const answer = Number(getAnswerForQuestion(questionText(question)));
  return cons(answer, expected(question));
};

export default () => main(run, 'Find the greatest common divisor of given numbers.');
