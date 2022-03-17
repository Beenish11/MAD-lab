//Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "You WIN" otherwise display a message "Not matched".
let RandNum = Math.floor(Math.random() * 10) + 1;
let GuessNum =prompt("Please Guess any Number between 1 to 10");

if (RandNum == GuessNum) {
    console.log("You WIN")
}
else {
    console.log("Not Matched")   
}