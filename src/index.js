import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import even from './games/even';
import calc from './games/calculator';

export const main = (game, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  const countSteps = 3;
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

export default () => { // TODO: main menu
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  let isExit = false;
  while (!isExit) {
    console.log('List of games:');
    console.log('1. Parity check');
    console.log('2. Calculator');
    console.log('3. exit');
    const numberGame = Number(readlineSync.question('Select game: '));
    switch (numberGame) {
      case 1:
        even(name);
        break;
      case 2:
        calc(name);
        break;
      case 3:
        isExit = true;
        break;
      default:
        console.log('Invalid select');
    }
  }
};
