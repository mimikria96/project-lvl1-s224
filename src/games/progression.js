import { cons } from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from '../getRandomInt';

const rules = `What number is missing in this progression?`;

const generatePairProg = () => {


    const a = getRandomInt(1, 100);
    const b = getRandomInt(1, 100);
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
};

const progression = () => {
  return braingame(rules,generatePairProg);
}
export default progression;
