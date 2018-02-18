import { cons } from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from '../getRandomInt';

const rules = `Answer "yes" if number even otherwise answer "no".`;
const isPrime = (num, acc) => {

  if (num == 1 || num == 2 ) {
    return true;
  }
    if (acc == num) {
      return true;
    }
    if(num%acc == 0) {
      return false;
    }
    return isPrime(num, acc + 1);
  };

const generatePairPrime = () => {
  const getpair = (num) => {
      return cons(num, isPrime(num, 2) ? 'yes' : 'no');
    };
    return getpair(getRandomInt(1,30));
};

const prime = () => {
  return braingame(rules, generatePairPrime);
};

export default prime;
