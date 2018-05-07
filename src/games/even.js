import readlineSync from 'readline-sync';
import welcome, { getUsername } from '../utils';

const getRandomInt = (min, max) => Math.floor((Math.random() * (max - (min + 1))) + min);

const evenInt = num => num % 2 === 0;

const isCorrectAnswer = (answer, value) => {
  if (answer !== 'no' && answer !== 'yes') {
    return false;
  }
  const isEven = evenInt(value);
  return (isEven && answer === 'yes') || (!isEven && answer === 'no');
};

export default () => {
  welcome('Answer "yes" if number even otherwise answer "no".');
  const name = getUsername();
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    const value = getRandomInt(1, 100);
    console.log(`Question: ${value}`);
    const answer = readlineSync.question('Your answer: ').trim();
    if (!isCorrectAnswer(answer, value)) {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
