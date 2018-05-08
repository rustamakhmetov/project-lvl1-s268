import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const getEvenInt = num => num % 2 === 0;

const getCorrectAnswer = (value) => {
  const isEven = getEvenInt(value);
  return isEven ? 'yes' : 'no';
};

export default () => {
  const question = getRandomInt(1, 100);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ').trim();
  const expected = getCorrectAnswer(question);
  return cons(answer, expected);
};
