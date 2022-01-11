//Set up for converting to dog years
const myAge = 25;

//First 2 dog years account for 10.5 human years
let earlyYears = 2;
earlyYears *= 10.5;

//This is the remainder of your age to calculate total dog years with
let laterYears = myAge - 2;

//The rest of your age accounts for 4 dog years for each human year
laterYears *= 4;

//Adding earlyYears and laterYears together will give you the total of your age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Returns and saves my name in lowercase
const myName = 'Michelle Curfs'.toLowerCase();

//Logs the calculated values into a readable string to read in the console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);