import readlineSync from 'readline-sync';
export const userName = () => {
    const answer = (user) => {
        return 'Hi ' + user + '!';
    };
        return answer(readlineSync.question('May I have your name? '));
}; 
