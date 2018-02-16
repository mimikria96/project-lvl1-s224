
export const welcomeEven = `Answer "yes" if number even otherwise answer "no".`;
export  const getNumEven = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const getnum = () => getRandomInt(1, 200);
  return getnum;
};
export const checkNumEven = () => {
  const check = (num, useranswer) => {
  if (num%2 === 0 && useranswer == 'yes') {
    return true;
  }
  else if(num%2 !== 0 && useranswer == 'no') {
    return true;
  }
  else return false;
  };
  return check;
};
export const correcEven =() => {
  const answer = (num) => num%2 === 0? 'yes' : 'no';
  return answer;
};
