function readInput() {
var inputElement = document.querySelector('#input');
var inputValue = inputElement.value;
return inputValue;
}

function writeOutput(outputValue) {
var outputElement = document.querySelector('#output');
outputElement.innerHTML = outputValue;
}

function updateOutput() {
skpAlgorithm();
}

function skpAlgorithm(inputValue) {
    //read Input value
    var inputValue = readInput();

    //Check if the input value is not empty
    if (inputValue.trim() === "") {
        alert ("Please enter a message to encrypt.");
        return;
    }

    //Initialize the empty string to store the encrypted result
    var encryptedResult = "";

    //Iterate through each of character in the input value
    for (var i=0; i<inputValue.length; i++) {
        var currentChar = inputValue[i];

        //Check if the current character is a letter
        if (currentChar.match(/[a-zA-Z]/)) {
            //Determine the case of the letter (uppercase or lowercase)
            var isUpperCase = currentChar === currentChar.toUpperCase();

            //Convert the letter to its ASCII code
            var charCode = currentChar.charCodeAt(0);

            //apply the shift (10 positions to the right)
            charCode = isUpperCase ? ((charCode - 65 + 10) % 26) + 65 : ((charCode - 97 + 10) % 26) + 97;
            
            //Convert the ASCII code back to a character
            var encryptedChar = String.fromCharCode(charCode);

            //Append the encrypted character to the result string
            encryptedResult += isUpperCase ? encryptedChar.toUpperCase() : encryptedChar.toLowerCase();
        } else {
            //If the character is not a letter, keep it unchanged
            encryptedResult += currentChar;
        }
    }

    //Write the encrypted result to the output
    writeOutput(encryptedResult);
}
