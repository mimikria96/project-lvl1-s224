import { cons } from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from './getRandomInt';

const rules = `Answer "yes" if number even otherwise answer "no".`;

const generatePairEven = () => {

  const getpair = (num) => {
    return cons(num, num%2==0 ? 'yes':'no');
};
const generate = () => getpair(getRandomInt(1, 100));
  return generate;
};

const answ_qst = generatePairEven();

const even = () => {
  return braingame(rules, answ_qst);
};
export default even;
