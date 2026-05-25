// Guessing Game Lab 316.2.1

// select the div with id grid
const grid = document.getElementById("#grid");

// create the game grid
for (let i = 1; i <= 100; i++) {
    // create a div in memory
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = i;
    // add the div to the page
    grid.appendChild(div);
}

// generate a number from 1-100
const randomNumber = Math.floor(Math.random() * 100 + 1);
// number of guesses
let numOfGuesses = -1;

setTimeout(playGameRound, 500);

function playGameRound() {
    // create the game loop which runs as long as the user has a guess remaining
    // while (numOfGuesses >= 0) {
    // First Round of Game

    // ask the user for a number (turn the string input into an actual number)
    const guess = Number(prompt("Guess a number from 1-100"));

    if (guess === randomNumber) {
        alert(`The number is ${guess}. You win!`);
        // we want the game loop to end so we break
        const boxes = document.querySelectorAll(".box");
        for (let box of boxes) {
            let boxNum = Number(box.textContent);

            if (boxNum <= guess) {
                box.style.backgroundColor = "green";
            }
        }

        return;

        // either the guessed number is too low
    } else if (guess < randomNumber) {
        alert(
            `The number ${guess} is too low! Guess again. \n ${numOfGuesses} guesses remain.`,
        );
        // turn all boxes that represent numbers less than the guessed number
        const boxes = document.querySelectorAll(".box");
        // console.log(boxes)

        for (let box of boxes) {
            let boxNum = Number(box.textContent);

            if (boxNum <= guess) {
                box.style.backgroundColor = "red";
            }
            // console.log(box);
        }
        // or the guessed number is too high
    } else {
        alert(
            `The number ${guess} is too high! Guess again \n ${numOfGuesses} guesses remain.`,
        );
    }

    // check if their at zero guesses
    if (numOfGuesses === 0) {
        alert("No more guesses. You lose!");
        const boxes = document.querySelectorAll(".box");
        // console.log(boxes)

        for (let box of boxes) {
            let boxNum = Number(box.textContent);

            if (boxNum <= guess) {
                box.style.backgroundColor = "red";
            }
        }
        return; //working like a break statement to end function
    }

    // decrement number of guesses so we eventually break the loop
    numOfGuesses--;

    setTimeout(playGameRound, 500);
}