import readlineSync from 'readline-sync';

export const welcome = (description) => {
  console.log('Welcome to the Brain Games!');
  if (description !== undefined) {
    console.log(description);
  }
};

export const getUsername = () => readlineSync.question('May I have your name?: ');

export default welcome;