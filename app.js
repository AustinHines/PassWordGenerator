// GENERATOR FUNCTIONS

//Function thst returns a random index number of a string value that is returned as a argument
function randomIndex(str) {
    return Math.floor(Math.random() * str.length);
}
console.log(randomIndex(`example`));

function  randomLetter() {
const letters = `abcdefghijklmnopqrstuvwxyz`;
letters[randomIndex(letters)];
return letters[randomIndex(letters)];
}
console.log(randomLetter());

function getRandomUpper() {
const letter = randomLetter();
return letter.toUpperCase();
}
console.log(getRandomUpper());

function getRandomLower() {
    return randomLetter();
}
console.log(getRandomLower());

function getRandomNumber() {
    const numbers = `1234567890`;
    return numbers[randomIndex(numbers)];

}
console.log(getRandomNumber());

function getRandomSymbol() {
    const symbols = `!@#$%^&*(){}[]=<>/,.`
   return symbols[randomIndex(symbols)];
}
console.log(getRandomSymbol());

