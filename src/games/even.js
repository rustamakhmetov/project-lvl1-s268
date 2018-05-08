import readlineSync from 'readline-sync';
import getRandomInt from '../utils';

const evenInt = num => num % 2 === 0;

const getCorrectAnswer = (value) => {
  const isEven = evenInt(value);
  return isEven ? 'yes' : 'no';
};

export default (_name) => {
  let name;
  if (_name === undefined) {
    console.log('Welcome to the Brain Games!');
  } else {
    name = _name;
  }
  console.log('Answer "yes" if number even otherwise answer "no".');
  if (name === undefined) {
    name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
  }
  for (let i = 0; i < 3; i += 1) {
    const questionValue = getRandomInt(1, 100);
    console.log(`Question: ${questionValue}`);
    const answer = readlineSync.question('Your answer: ').trim();
    const expectedAnswer = getCorrectAnswer(questionValue);
    if ((answer !== 'no' && answer !== 'yes') || (answer !== expectedAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
