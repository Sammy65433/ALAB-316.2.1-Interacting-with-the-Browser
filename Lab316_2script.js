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

// Prompt to open guessing a number
let userinput = window.prompt("guess a number between 1 and 100");

// Pick a number between 1 to 100
// let secretnumber = Math.floor(Math.random() * 100) + 1;

let secretnumber = 25
// let guessleft = 10
// while (guessleft > 0) {
//     let userinput = window.prompt(`Attempts Left: ${guessleft}`);
//
for (let i = 3; i >= 0; i--) {
    window.prompt(`Attempts Left: ${i}`);
    userinput = Number(userinput);

    if (userinput === secretnumber) {
        window.alert("Correct, You Guess the Number");
        break;
    } else if (userinput < secretnumber) {
        window.alert("Too Low!!!!");
    } else if (userinput > secretnumber){
        window.alert("Too High!!!!");
    }
}
// guessleft --

// if less than secret number