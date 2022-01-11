// This is the forecast for today in kelvin
const kelvin = 293;

// This is the forecast for today converted to celsius from kelvin
const celsius = kelvin - 273;

// This is the forecast for today converted to fahrenheit from celsius
let fahrenheit = celsius * (9/5) + 32;

// This rounds down the fahrenheit to a round number
fahrenheit = Math.floor(fahrenheit);

// This is the forecast for today converted to newton from celsius
let newton = celsius * (33/100);

// This rounds down the fahrenheit to a round number
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);