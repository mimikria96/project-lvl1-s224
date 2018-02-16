import { cons } from 'hexlet-pairs';
import braingame from '..';

const rules = `Answer "yes" if number even otherwise answer "no".`;

const checkNumEven = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const check = (num) => {
    return cons(num, num%2==0 ? 'yes':'no');
};
const getnum = () => check(getRandomInt(1, 100));
return getnum;

};
const even = () => {
  return braingame(rules,checkNumEven());
};
export default even;
