import { cons } from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from '../getRandomInt';

const rules = `Answer "yes" if number even otherwise answer "no".`;

const generatePairEven = () => {

  const num = getRandomInt(1, 100);
    return cons(num, num%2===0 ? 'yes':'no');
};

const even = () => {
  return braingame(rules, generatePairEven);
};
export default even;
