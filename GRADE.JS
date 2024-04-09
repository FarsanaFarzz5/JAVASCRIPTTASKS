const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateLetterGrade(grade) {
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function getUserGrade() {
    rl.question("Enter your MARK: ", function(grade) {
        grade = parseFloat(grade);
        if (isNaN(grade)) {
            console.log("Please enter a valid number for your MARK.");
            getUserGrade(); // If input is not a number, prompt again
        } else {
            const letterGrade = calculateLetterGrade(grade);
            console.log("Your letter grade is: " + letterGrade);
            rl.close();
        }
    });
}

getUserGrade();
