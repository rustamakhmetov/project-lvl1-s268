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
    const gameData = game();
    const answer = String(car(gameData));
    const question = cdr(gameData);
    const userAnswer = getAnswerForQuestion(question);
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default () => console.log('Welcome to the Brain Games!');
