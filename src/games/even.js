import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import { main } from '../index';

const RULES = 'Answer "yes" if number even otherwise answer "no".';

const getCorrectAnswer = (value) => {
  const isEven = value % 2 === 0;
  return isEven ? 'yes' : 'no';
};

export const makeQuestion = () => {
  const question = getRandomInt(1, 100);
  const answer = getCorrectAnswer(question);
  return cons(answer, question);
};

export default () => main(makeQuestion, RULES);
