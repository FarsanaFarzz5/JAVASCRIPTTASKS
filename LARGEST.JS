const readline = require('readline');

// Creating interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to find the largest number among three
function findLargestNumber(num1, num2, num3) {
    let largest;

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }

    return largest;
}

// Taking input from the user
rl.question("Enter the first number: ", (number1) => {
    rl.question("Enter the second number: ", (number2) => {
        rl.question("Enter the third number: ", (number3) => {
            // Converting input strings to numbers
            number1 = parseFloat(number1);
            number2 = parseFloat(number2);
            number3 = parseFloat(number3);

            // Finding the largest number
            const largestNumber = findLargestNumber(number1, number2, number3);

            // Displaying the result
            console.log("The largest number is:", largestNumber);

            // Close the readline interface
            rl.close();
        });
    });
});
