import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import { getAnswerForQuestion, main } from '../index';

const getEvenInt = num => num % 2 === 0;

const getCorrectAnswer = (value) => {
  const isEven = getEvenInt(value);
  return isEven ? 'yes' : 'no';
};

export const run = () => {
  const question = getRandomInt(1, 100);
  const answer = getAnswerForQuestion(question);
  const expected = getCorrectAnswer(question);
  return cons(answer, expected);
};

export default () => main(run, 'Answer "yes" if number even otherwise answer "no".');
