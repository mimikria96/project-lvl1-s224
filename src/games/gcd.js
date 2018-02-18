import { cons } from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from '../getRandomInt';

const rules = `Find the greatest common divisor of given numbers.`;
const generatePairGcd = () => {

    const getgcd = (a, b) => {
      if (b === 0) {
        return a;
      }
      return getgcd(b, a % b);
    };
    const a = getRandomInt(1, 100);
    const b = getRandomInt(1, 100);
    const question = `${a} ${b}`;
    const rightansw = getgcd(a, b);
    return cons(question,rightansw);
};

const gcd = () => {
  return braingame(rules,generatePairGcd);
}
export default gcd;
