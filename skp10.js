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
    if (document.getElementById("skp") == "1") {
        skpAlgorithm();
    } else {
        decodeAlgorithm();
    }
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

function decodeAlgorithm(inputValue) {
    //read Input Value
    var inputValue = readInput();

    //empty result string
    var decryptedResult = "";

    //first loop sets a number from 1-25
    for (var i=1; i<26; i++) {
        //second loop functions the same as the other one, reading the input and going through each character
        for (var j=0; j<inputValue.length; j++) {
            //set a current character
            var currentChar = inputValue[j];

            //check for letters
            if (currentChar.match(/[a-zA-Z]/)) {
                //get the casing
                var isUpperCase = currentChar === currentChar.toUpperCase();
                //convert to the char code
                var charCode = currentChar.charCodeAt(0);
                //shift the letter based on the current outside loop number
                charCode = isUpperCase ? ((charCode - 65 + i) % 26) + 65 : ((charCode - 97 + i) % 26) + 97;
                //bring it back to a character
                var decryptedChar = String.fromCharCode(charCode);
                //add the result to the end of the string
                decryptedResult += isUpperCase ? decryptedChar.toUpperCase() : decryptedChar.toLowerCase();
            } else {
                //checks for spaces or punctuation and just leaves it
                decryptedResult += currentChar;
            }
        }
        //at the end of the outer loop it makes a two line space between iterations
        decryptedResult += "\n\n";
    }
    //write the output
    writeOutput(decryptedResult);
}
            


/*In the ASCII standard:

Each character is represented by a unique numeric code.
The codes are integers in the range 0 to 127.
The codes 0 to 31 are control characters 
(non-printable characters), and codes 32 to 127 represent 
printable characters, which include the standard English 
alphabet, numerals, punctuation marks, and some special 
characters.
For example:

The ASCII code for the uppercase letter 'A' is 65.
The ASCII code for the lowercase letter 'a' is 97.
The ASCII code for the digit '0' is 48.
The ASCII code for the space character is 32.*/
