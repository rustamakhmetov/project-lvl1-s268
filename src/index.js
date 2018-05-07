import info, { welcome, getUsername } from './utils';

const start = () => {
  welcome();
  const name = getUsername();
  info(`Hello, ${name}!`);
};

export default start;
