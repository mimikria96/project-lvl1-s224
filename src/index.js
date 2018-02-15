import readlineSync from 'readline-sync';

export const userName = () => {
    const answer = (user) => {
        return `Hi ${user} !`;
    };
        const userAnswer = readlineSync.question('May I have your name? ');
        return answer(userAnswer);
};
export const braingame = (gamewelc, gamenum, gamecheck, correct) => {
  console.log(`${gamewelc} \n`);
  const user = readlineSync.question('May I have your name? ');
    console.log(`Hi ${user} !\n`)
  const step = (n) => {
    const stepcounter = n;
    if (stepcounter > 3) {
      return `Congratulations, ${user}!`;
    }
    const getQuestion = (num) => `Question: ${num}`;
    const actualnum = gamenum();
    console.log(getQuestion(actualnum));
      const getAnswer = readlineSync.question('Your answer:');
      if (gamecheck(actualnum, getAnswer)) {
        console.log('Correct!');
        return step(stepcounter+1);
      }
      else {
        return `'${getAnswer}' is wrong answer ;(. Correct answer was '${correct(actualnum)}'. \n Lets try again ${user}`;
      }
    };
    return step(1);
};
