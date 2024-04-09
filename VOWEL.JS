function checkVowelOrConsonant(character) {
    // Convert the character to lowercase to handle both uppercase and lowercase input
    character = character.toLowerCase();

    // Check if the character is a letter
    if (/[a-z]/.test(character)) {
        // Check if the character is a vowel
        if (/[aeiou]/.test(character)) {
            console.log(character + " is a vowel.");
        } else {
            console.log(character + " is a consonant.");
        }
    } else {
        console.log("Invalid input. Please enter a valid letter of the alphabet.");
    }
}

// Example usage
checkVowelOrConsonant('a'); // Output: a is a vowel.
checkVowelOrConsonant('B'); // Output: b is a consonant.
checkVowelOrConsonant('3'); // Output: Invalid input. Please enter a valid letter of the alphabet.
