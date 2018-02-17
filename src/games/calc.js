import {cons} from 'hexlet-pairs';
import braingame from '..';
import getRandomInt from './getRandomInt';

const rules = `What is the result of the expression?`;

const generatePairCalc = () => {

  const getpair = (oper,a,b) => {
      const question = oper ==1 ? `${a} + ${b}`: oper == 2 ? `${a} * ${b}` : `${a} - ${b}`;
      const rightansw = oper ==1 ? a + b : oper == 2 ? a * b : a - b;
      return cons(question,rightansw);
  };
  const generate = () => getpair(getRandomInt(1, 3), getRandomInt(1, 100), getRandomInt(1, 100));
  return generate;
};

const answ_qst = generatePairCalc();

const calc = () => {
  return braingame(rules,answ_qst);
};
export default calc;
