export const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const getInitialState = () => ({
    actual: generateRandomNumber(),
    guess: undefined,
    allGuesses: [],
    attempt: 0,
    feedbackMessage: 'Dare to guess...',

    block: false,
});

export const getFeedback = (absDiff) => {
    let feedbackMessage;
    let feedbackColor;

    if (absDiff === 0) {
        feedbackColor = '#7BFC1E';
        feedbackMessage = 'Correct!';

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
