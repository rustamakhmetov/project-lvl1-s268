import welcome, { getUsername } from './utils';

const start = () => {
  welcome();
  const name = getUsername();
  console.log(`Hello, ${name}!`);
};

export default start;
