import {cons} from 'hexlet-pairs';
import braingame from '..';

const rules = `What is the result of the expression?`;

const checkNumCalc = () => {
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };
  const check = (oper,a,b) => {

      const question = oper ==1 ? `${a} + ${b}`: oper == 2 ? `${a} * ${b}` : `${a} - ${b}`;
      const rightansw = oper ==1 ? a + b : oper == 2 ? a * b : a - b;
      return cons(question,rightansw);

  };
  const getnum = () => check(getRandomInt(1, 3), getRandomInt(1, 100), getRandomInt(1, 100));
  return getnum;
};
const calc = () => {
  return braingame(rules,checkNumCalc());
};
export default calc;
