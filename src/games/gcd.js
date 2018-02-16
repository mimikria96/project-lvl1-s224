import { cons } from 'hexlet-pairs';
import braingame from '..';

export const rules = `Find the greatest common divisor of given numbers.`;
export  const getNumGcd = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const check = (a, b) => {
    const getgcd = (a, b) => {
      if (b == 0) {
        return a;
      }
      return getgcd(b, a % b);
    };
    const question = `${a} ${b}`;
    const rightansw = getgcd(a, b);
    return cons(question,rightansw);
  }
  return check(getRandomInt(1, 100), getRandomInt(1, 100));
};

const gcd = () => {
  return braingame(rules,getNumGcd);
}
export default gcd;
