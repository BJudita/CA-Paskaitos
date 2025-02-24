document.addEventListener('DOMContentLoaded', function () {
const wordsArray = ["belzibubas", "kartingas", "spinta", "keltuvas", "apinys", "persimonas", "skrandis"];
let randomWord = "";
let leftGuesses = 6;
let guessedLettersSet = new Set();

const letterInput = document.querySelector("#letterInput");
const leftGuessesElement = document.querySelector("#leftGuesses");
const guessedLetters = document.querySelector("#guessedLetters");
const wordToGuess = document.querySelector("#wordToGuess");
const result = document.getElementById('result');
const guessForm = document.querySelector("#guessForm");

setupNewWord(); // inicijuoja varda, zaidimo pradejimui
guessForm.addEventListener("submit", handleGuess); // pradek zaidima kai vartotojas speja raide
document.getElementById('newWordB').addEventListener('click', setupNewWord);

function setupNewWord() {
    // sugeneruos random zodi
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    leftGuesses = 6; // atstatys spejimus
    guessedLettersSet.clear(); // isvalys ankstesnius spejimus
    updateDisplay();
}

function handleGuess(event) {
    event.preventDefault();
    const guess = letterInput.value.toUpperCase();

    if (guess.length === 1 && /^[A-Z]$/i.test(guess)) {
        result.textContent = ""; 
        if (!guessedLettersSet.has(guess)) { // jeigu guessedletters neturi guess
            guessedLettersSet.add(guess); // prid4k guess raide prie saraso
            updateGame(guess);
        } else {
            result.textContent = "Ši raidė jau buvo spėta.";
          }
        } else {
          result.textContent = "Įveskite vieną raidę.";
        }
    
        letterInput.value = '';
        letterInput.focus();
      }


function updateDisplay() {
    wordToGuess.textContent = randomWord.split('').map(letter => guessedLettersSet.has(letter.toUpperCase()) ? letter : '_').join(' ');
    guessedLetters.textContent = Array.from(guessedLettersSet).join(', ');
    leftGuessesElement.textContent = leftGuesses;
}

function updateGame(guess) {
 let correctGuess = false;

 for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i].toUpperCase() === guess) {
        correctGuess = true;
        break;
    }
 }

 if (correctGuess) {
    updateDisplay();
    if (!wordToGuess.textContent.includes('_')) {
        result.textContent = "Sveikiname, atspėjote žodį!";
        guessForm.removeEventListener('submit', handleGuess);
    }
 } else {
    leftGuesses--;
    updateDisplay();
    if (leftGuesses === 0) {
        result.textContent += " Žaidimas baigtas. Žodis buvo: " + randomWord;
        guessForm.removeEventListener('submit', handleGuess);
    } else {
        result.textContent = "Neteisingas spėjimas.";
    }
 }
}
});