import { cons } from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from '../getRandomInt';

const rules = `Balance the given number.`;

const generatePairBalance = () => {
  const getMax = (numArray) => {
    return Math.max.apply(null, numArray);
  };
  const getMin = (numArray) =>{
    return Math.min.apply(null, numArray);
  };
  const getBalanced = (num) => {
      num.sort();
      if(getMax(num) - getMin(num) <= 1 ) {
        return num;
      }
      num[0]++;
      num[num.length-1]--;
      return getBalanced(num);
    };
  const getUnbalanced = () => {
    const num = getRandomInt(100,5000).toString();
    if( num != getBalanced(num.split('')).join('') ) {
      return num.split('');
    }
    return getUnbalanced();
  };
  const getpair = (qwst) => {
    return cons(qwst.join(''), getBalanced(qwst).join(''));
};
 return getpair(getUnbalanced());

};

const balance = () => {
  return braingame(rules,generatePairBalance);
};
export default balance;
