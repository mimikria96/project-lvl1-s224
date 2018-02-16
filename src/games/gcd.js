import { cons, car, cdr } from 'hexlet-pairs';

export const welcomeGcd = `Find the greatest common divisor of given numbers.`;
export  const getNumGcd = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const pair = (num) => {
    return `${car(num)} ${cdr(num)}`;
  }
  const getnum = () => pair(cons(getRandomInt(1, 100), getRandomInt(1, 100)));
  return getnum;
};
export const correctGcd =() =>  {
  const getgcd = (a, b) => {
    if (b == 0) {
      return a;
    }
    return getgcd(b, a % b);
  };
  const answer = (num) =>  {
    const arr = num.split(' ', 2);
    return getgcd(arr[0], arr[1]);
  }
  return answer;
};
