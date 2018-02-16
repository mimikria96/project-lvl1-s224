import readlineSync from 'readline-sync';

const braingame = (gamewelc, gamenum, correct) => {
  console.log('Welcome to the Brain Games!');
  if(gamewelc) {
  console.log(`${gamewelc} \n`);
  }
  else {
    console.log('\n');
  }
  const user = readlineSync.question('May I have your name? ');
    console.log(`Hi ${user} !\n`)
  if (gamenum) {
  const step = (n) => {
    const stepcounter = n;
    if (stepcounter > 3) {
      return `Congratulations, ${user}!`;
    }
    const getQuestion = (num) => `Question: ${num}`;
    const actualnum = gamenum();
    console.log(getQuestion(actualnum));
      const getAnswer = readlineSync.question('Your answer:');
      if (getAnswer == correct(actualnum)) {
        console.log('Correct!');
        return step(stepcounter+1);
      }
      else {
        return `'${getAnswer}' is wrong answer ;(. Correct answer was '${correct(actualnum)}'. \n Lets try again ${user}`;
      }
    };
    return step(1);
  }
};
export default braingame;
