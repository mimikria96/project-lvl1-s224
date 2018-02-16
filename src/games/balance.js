import { cons } from 'hexlet-pairs';
import braingame from '..';

const rules = `Balance the given number.`;

const checkNumBalance = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
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
  const check = (qwst) => {
    return cons(qwst.join(''), getBalanced(qwst).join(''));
};
const getnum = () => check(getUnbalanced());
return getnum;
};
const balance = () => {
  return braingame(rules,checkNumBalance());
};


export default balance;
