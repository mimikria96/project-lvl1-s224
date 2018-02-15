import readlineSync from 'readline-sync';

export const userName = () => {
    const answer = (user) => {
        return user;
    };
        const userAnswer = readlineSync.question('May I have your name? ');
        return answer(userAnswer);
};
export const brainEven = () => {
  const userEven = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userEven} !\n`)
  const step = (n) => {
    const stepcounter = n;
    if (stepcounter > 3) {                     //счетчик шагов
      return `Congratulations, ${userEven}!`;
    }
    const getNumEven = () => {                 //возвращает рандомное число
      const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      };
      const num = getRandomInt(1, 100);
      return num;
    };
    const getqst = (num) => `Question: ${num}`;
    const actualnum = getNumEven();             // назначаем актуальное рандомное число для текущего вызова
    const getQuestionEven = getqst(actualnum);
      console.log(getQuestionEven);               //  выводим в консоль вопрос с актуальным числом
      const answer = readlineSync.question('Your answer:', {   //далее запрашиваем ответ и проверяем
        trueValue: ['yes'],
        falseValue: ['no']
      });
      if (answer === true && actualnum%2 == 0) {
        console.log('Correct!');
        return step(stepcounter+1);
      } else if (answer === false && actualnum%2 !== 0) {
        console.log('Correct!');
        return step(stepcounter+1);
      } else {
        return `'${answer}' is wrong answer ;(. Correct answer was '${actualnum%2 == 0 ? 'yes' : 'no'}'. \n Lets try again ${userEven}`;
      }
    };
    return step(1);
};
