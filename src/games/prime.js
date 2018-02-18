import { cons } from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from '../getRandomInt';

const rules = `Answer "yes" if number even otherwise answer "no".`;
const isPrime = (num) => {
 const check = (num, acc) => {
  if (num === 1 || num === 2 ) {
    return true;
  }
    if (acc === num) {
      return true;
    }
    if(num%acc === 0) {
      return false;
    }
    return check(num, acc + 1);
  };
    return check(num, 2);
  };

const generatePairPrime = () => {
  const num = getRandomInt(1,30);
      return cons(num, isPrime(num) ? 'yes' : 'no');
};


const prime = () => {
  return braingame(rules, generatePairPrime);
};

export default prime;
