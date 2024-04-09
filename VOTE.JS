// Import the readline module
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter their age
rl.question("Please enter your age: ", function(ageInput) {
    // Convert the input to a number
    const age = parseInt(ageInput);
    
    // Check if the entered age is greater than or equal to 18
    if (age >= 18) {
        console.log("You are eligible to vote!");
    } else {
        console.log("You are not eligible to vote yet.");
    }

    // Close the readline interface
    rl.close();
});