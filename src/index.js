import readlineSync from 'readline-sync';

const info = message => console.log(message);

const welcome = (description) => {
  info('Welcome to the Brain Games!');
  if (description !== undefined) {
    info(description);
  }
};

const getUsername = () => readlineSync.question('May I have your name?: ');

const start = () => {
  welcome();
  const name = getUsername();
  info(`Hello, ${name}!`);
};

const getRandomInt = (min, max) => Math.floor((Math.random() * (max - (min + 1))) + min);

const evenInt = num => num % 2 === 0;

const isCorrectAnswer = (answer, value) => {
  if (answer !== 'no' && answer !== 'yes') {
    return false;
  }
  const isEven = evenInt(value);
  return (isEven && answer === 'yes') || (!isEven && answer === 'no');
};

export const even = () => {
  welcome('Answer "yes" if number even otherwise answer "no".');
  const name = getUsername();
  info(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    const value = getRandomInt(1, 100);
    info(`Question: ${value}`);
    const answer = readlineSync.question('Your answer: ').trim();
    if (!isCorrectAnswer(answer, value)) {
      info('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      info(`Let's try again, ${name}!`);
      return false;
    }
    info('Correct!');
  }
  info(`Congratulations, ${name}!`);
  return true;
};

export default start;
