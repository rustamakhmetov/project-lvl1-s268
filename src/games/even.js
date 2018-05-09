import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import main from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = value => value % 2 === 0;

const getAnswer = value => (isEven(value) ? 'yes' : 'no');

export const makeQuestion = () => {
  const question = getRandomInt(1, 100);
  const answer = getAnswer(question);
  return cons(answer, question);
};

export default () => main(makeQuestion, rule);
