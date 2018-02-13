import readlineSync from 'readline-sync';

const userName = () => {
    const answer = (user) => {
        return `Hi ${user}!`;
    };
        return answer(readlineSync.question('May I have your name? '));
};
export default userName();
