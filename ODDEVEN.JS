// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage
const num = 14; // Change this number to test different inputs
const result = checkEvenOrOdd(num);
console.log(`${num} is ${result}.`);
