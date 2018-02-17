import { cons } from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from './getRandomInt';

const rules = `Find the greatest common divisor of given numbers.`;

const generatePairProg = () => {

  const getpair = (a, b) => {

    const generateArr = (acc, num) => {
      if(num == 9) {
        return acc;
      }
      acc.push(acc[num] + 2);
      return generateArr(acc, num+1);
    };
    const numArr = generateArr([a], 0);
    const rightansw = numArr[b];
    numArr[numArr.indexOf(rightansw)] = '..';
    const question = `${numArr.join(' ')}`;
    return cons(question,rightansw);
  }
  const generate = () => getpair(getRandomInt(1, 100), getRandomInt(0, 10));
  return generate;
};
const answ_qst = generatePairProg();
const progression = () => {
  return braingame(rules,answ_qst);
}
export default progression;
