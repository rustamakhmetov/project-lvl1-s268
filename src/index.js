import readlineSync from 'readline-sync';
import even from './games/even';
import calc from './games/calculator';

export default () => {
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
