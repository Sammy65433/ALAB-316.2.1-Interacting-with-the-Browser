// select the div with id grid
const grid = document.getElementById('grid');

// create the game grid
for (let i = 1; i <= 100; i++) {
    // create a div in memory
    const div = document.createElement('div');
    div.classList.add('box');
    div.textContent = i;
    // add the div to the page
    grid.appendChild(div);
}


// generate a number from 1-100
const randomNumber = 55

// number of guesses
let numOfGuesses = 3;

// delay the game for half a second (500ms)
setTimeout(playGameRound, 10)

// create the game loop which runs as long as the user has a guess remaining
function playGameRound () {
    // First Round of Game
    
    // ask the user for a number (turn the string input into an actual number)
    const guess = Number(prompt('Guess a number from 1-100'))
    
    // check if the guess is correct
    if (guess === randomNumber) {
        alert(`The number is ${guess}. You win!`)

        // selecting all boxes by class "box"
        const boxes = document.querySelectorAll('.box')

        // loop over the boxes array and give us one box at a time
        for (let box of boxes) {

            // grab the number from the box (and convert it into a number data type)
            let boxNum = Number(box.textContent)
            
            // check if the box number is less than or equal the guessed number
            if (boxNum === randomNumber) {
                // change the box background color to red
                box.style.backgroundColor = 'green';
            }
        }

        // we want the game loop to end so we break
        return;

    // either the guessed number is too low
    } else if (guess < randomNumber) {
        alert(`The number ${guess} is too low! Guess again. \n ${numOfGuesses} guesses remain.`)

        // selecting all boxes by class "box"
        const boxes = document.querySelectorAll('.box')
        
        // loop over the boxes array and give us one box at a time
        for (let box of boxes) {

            // grab the number from the box (and convert it into a number data type)
            let boxNum = Number(box.textContent)
            
            // check if the box number is less than or equal the guessed number
            if (boxNum <= guess) {
                // change the box background color to red
                box.style.backgroundColor = 'red';
            }
        }

     // or the guessed number is too high
    } else {
        alert(`The number ${guess} is too high! Guess again \n ${numOfGuesses} guesses remain.`)
         // turn all boxes that represent numbers greater than the guessed number (or equal to) red

         // selecting all boxes by class "box"
        const boxes = document.querySelectorAll('.box')
        
        // loop over the boxes array and give us one box at a time
        for (let box of boxes) {

            // grab the number from the box (and convert it into a number data type)
            let boxNum = Number(box.textContent)
            
            // check if the box number is more than or equal the guessed number
            if (boxNum >= guess) {
                // change the box background color to red
                box.style.backgroundColor = 'red';
            }
        }
    }

    // check if their at zero guesses
    if (numOfGuesses === 0) {
        alert('No more guesses. You lose!')
        return; // working like a break statement to end the function (so it doesn't call itself)
    }

    // decrement number of guesses so we eventually break the loop
    numOfGuesses--

    // call the function again (recursion) and start the next round
    setTimeout(playGameRound, 10)
}