import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countSteps = 3;

export const getAnswerForQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ').trim();
};

export const main = (game, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  for (let step = 0; step < countSteps; step += 1) {
    const result = game();
    const answer = car(result);
    const expected = cdr(result);
    if (expected !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default () => console.log('Welcome to the Brain Games!');
