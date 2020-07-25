export const generateRandomNumber = (level) => Math.floor(Math.random() * 100 * level) + 1;
export const getInitialState = (level) => ({
    actual: generateRandomNumber(level),
    guess: undefined,
    allGuesses: [],
    attempt: 0,
    feedbackMessage: 'Level ' + level,
    block: false,
});
export const getFeedback = (absDiff) => {
    let feedbackMessage;
    let feedbackColor;
    if (absDiff === 0) {
        feedbackColor = '#7BFC1E';
        feedbackMessage = 'Perfect!';
    } else if (absDiff <= 4 && absDiff >= 1) {
        feedbackColor = '#F50727';
        feedbackMessage = 'Hot!!';
    } else if (absDiff >= 5 && absDiff <= 15) {
        feedbackColor = '#F5E527';
        feedbackMessage = 'Warm';
    } else {
        feedbackColor = '#5bc0de';
        feedbackMessage = 'Cold';
    }
    return {
        feedbackMessage,
        feedbackColor,
    };
};