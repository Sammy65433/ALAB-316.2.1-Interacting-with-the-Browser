const gridCntainer = document.querySelector("#grid-container");

// Write a loop that executes exactly 100 times (iterating from 1 to 100).
for (let i = 1; i <= 100; i++) {
    // Make a box each time
    const box = document.createElement("div");
    // document.createElement.appendChild()
    box.classList.add("box");
    box.textContent = i;
    gridCntainer.appendChild(box);
    if (i % 2 === 0) {
        box.style.backgroundColor = "lightcoral";
    } else {
        // box.style.backgroundColor = "lightblue" // being more specific
    }
}

// Create a simple guessing game that pushes users toward the correct answer
// in some iterative way. The game does not need to be practical or
// complicated.

// Use window object methods to gather input from the user and display
// information to the user.
// Use DOM manipulation to give a visual indication of the game's
// progress in some way.

const secretnumber = Math.floor(Math.random() * 100) + 1;
// console.log(secretnumber);

let numOfGuesses = 10;


// Prompt to open guessing a number
const guess = Number(prompt("guess a number between 1 and 100"));

if (guess === secretnumber) {
    alert(`The number is ${guess}. You win!`)
} else if (guess < secretnumber) {
    alert(`The number is ${guess} is too low! Guess again!`)

} else {
    alert(`The number is ${guess} is too High! Guess again!`)
}


// Create the game loop
while(numOfGuesses >= 0) {
// console.log(numOfGuesses)
const guess = Number(prompt("guess a number between 1 and 100"));

if (guess === secretnumber) {
    alert(`The number is ${guess}. You win!`)
    break;

} else if (guess < secretnumber) {
    alert(`The number is ${guess} is too low! Guess again! \n ${numOfGuesses} guesses remaining`)

} else {
    alert(`The number is ${guess} is too High! Guess again! \n ${numOfGuesses} guesses remaining`)
}
// check if their at zero guesses 
if (numOfGuesses === 0) {
    alert('No More Guesses. You Lose!')
}

    // decrement number of guess to break the loop
    numOfGuesses--
}

    // if (guess < secretnumber)


// Pick a number between 1 to 100


// let secretnumber = 25
// // let guessleft = 10
// // while (guessleft > 0) {
// //     let userinput = window.prompt(`Attempts Left: ${guessleft}`);
// //
// for (let i = 3; i >= 0; i--) {
//     window.prompt(`Attempts Left: ${i}`);
//     userinput = Number(userinput);

//     if (userinput === secretnumber) {
//         window.alert("Correct, You Guess the Number");
//         break;
//     } else if (userinput < secretnumber) {
//         window.alert("Too Low!!!!");
//     } else if (userinput > secretnumber){
//         window.alert("Too High!!!!");
//     }
// }
// guessleft --

// if less than secret number