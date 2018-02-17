import { cons } from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from './getRandomInt';

const rules = `Find the greatest common divisor of given numbers.`;
const generatePairGcd = () => {

  const getpair = (a, b) => {
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
  const generate = () => getpair(getRandomInt(1, 100), getRandomInt(1, 100));
  return generate;
};

const answ_qst = generatePairGcd();

const gcd = () => {
  return braingame(rules,answ_qst);
}
export default gcd;
