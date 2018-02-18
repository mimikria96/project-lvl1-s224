import {cons} from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from '../getRandomInt';

const rules = `What is the result of the expression?`;

const generatePairCalc = () => {
 const oper = getRandomInt(1, 3);
 const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  
      const question = oper ==1 ? `${a} + ${b}`: oper == 2 ? `${a} * ${b}` : `${a} - ${b}`;
      const rightansw = oper ==1 ? a + b : oper == 2 ? a * b : a - b;
      return cons(question,rightansw);

};

const calc = () => {
  return braingame(rules,generatePairCalc);
};
export default calc;
