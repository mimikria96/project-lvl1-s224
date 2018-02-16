import readlineSync from 'readline-sync';
import {car, cdr } from 'hexlet-pairs';

const braingame = (gamewelc, correct) => {
  console.log('Welcome to the Brain Games!');
  if(gamewelc) {
  console.log(`${gamewelc} \n`);
  }
  else {
    console.log('\n');
  }
  const user = readlineSync.question('May I have your name? ');
    console.log(`Hi ${user} !\n`)
  if (correct) {
  const step = (n) => {
    const stepcounter = n;
    if (stepcounter > 3) {
      return console.log(`Congratulations, ${user}!`);

    }
    const getQuestion = (num) => `Question: ${num}`;
    const actualnum = correct();
    console.log(getQuestion(car(actualnum)));
      const getAnswer = readlineSync.question('Your answer:');
      if (getAnswer == cdr(actualnum)) {
        console.log('Correct!');
        return step(stepcounter+1);
      }
      else {
        return console.log( `'${getAnswer}' is wrong answer ;(. Correct answer was '${cdr(actualnum)}'. \n Lets try again ${user}`);
      }
    };
    return step(1);
  }
};
export default braingame;
