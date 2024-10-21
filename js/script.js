const guessedLettersElement = document.querySelector(".guessed-letters");
const guessedLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//Display symbols as placeholders
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessedLetterButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Empty message paragraph
    message.innerText = "";

    //Grab what was intered in the input
    const guess = letterInput.value;

    //Make sure it's a single letter
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
        letterInput.value = "";

});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        //Is the input empty?
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter";
    } else if (input.match(acceptedLetter)) {
        //If they enter a number, a special character or something else
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        //Single letter entered
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "That letter was already guessed - try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};