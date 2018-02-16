import { cons, car, cdr } from 'hexlet-pairs';

export const welcomeCalc = `What is the result of the expression?`;
export  const getNumCalc = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const getoper = () =>{
    const possible ="*+-";
    return possible[getRandomInt(0,2)];
  }
  const expression = (num, oper) => {
    if (car(num) < cdr(num) && oper == '-') {
      return `${cdr(num)} ${oper} ${car(num)}`
    }
    return `${car(num)} ${oper} ${cdr(num)}`;
  }
  const getnum = () => expression(cons(getRandomInt(1, 100), getRandomInt(1, 100)), getoper());
  return getnum;
};
export const checkNumCalc = () => {
  const check = (num, useranswer) => {
  if (useranswer == eval(num)) {
    return true;
  }
  else return false;
  };
  return check;
};
export const correcCalc =() => {
  const answer = (num) =>  eval(num);
  return answer;
};
