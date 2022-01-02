// First Challenge: Write a function factorial() that takes a number as an argument and returns the factorial of the number.

function factorial(number){
    let sum = 1;
    for (let i = number; i > 0; i--){
      sum *= i;
    }
    return sum;
  }

  console.log(factorial(6));



//  Second Challenge: Write a function subLength() that takes 2 parameters, a string and a single character. 
// The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. 
// If there are less than 2 or more than 2 occurrences of the character the function should return 0.

function subLength(word, character){
    const firstChar = word.indexOf(character);
    const secondChar = word.lastIndexOf(character);
   
   //  console.log(firstChar, secondChar);
   
   let charCount = 0;
   
   for(let i = 0; i < word.length; i++){
   
     if(word[i] === character){
       charCount++;
     }
   }
    if(charCount != 2){
      return 0;
    }
   return (secondChar - firstChar) + 1;
   }

   console.log(subLength('Saturday', 'a'));
   console.log(subLength('summer', 'm'));
   console.log(subLength('digitize', 'i'));
   console.log(subLength('cheesecake', 'k'));


   
// Third Challenge: Write a function groceries() that takes an array of object literals of grocery items. 
// The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. 
// Make sure spaces (' ') are inserted where they are appropriate.   

const foodList = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}];

function groceries(array) { 
  let names = array.map(x => {
    return x.item;
    });

    if(names.length === 1){
        return names[0];
    }

    else if(names.length === 2){
        return names.join(' and ');
    }
    else {
        return names.slice(0,names.length -1).join(', ') + ' and ' + names[names.length-1];
    }
}
console.log(groceries(foodList));