import readlineSync from 'readline-sync';

const info = message => console.log(message);

export const welcome = (description) => {
  info('Welcome to the Brain Games!');
  if (description !== undefined) {
    info(description);
  }
};

export const getUsername = () => readlineSync.question('May I have your name?: ');

export default info;
