// Write the function inside the object and then use the provided test files to check if your code works.

const _ = {

    clamp(number, lower, upper){
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    inRange(number, start, end){
        if(end == null){
            end = start;
            start = 0;
        }
        if(start > end){
            const temp = end;
            end = start;
            start = temp;
        }
        let isInRange;
        if(number >= start && number < end){
            isInRange = true;
        } else if (start > number || number >= end){ 
            isInRange = false;}
        return isInRange;
    },

    words(string){
        const words = string.split(' ');
        return words;
    },

    pad(string, len){
        if (string.length >= len){
            return string;
        }
       
        let frontPad = Math.floor((len - string.length) / 2);
        let endPad = len - string.length - frontPad;

        const paddedString = `${' '.repeat(frontPad)}${string}${' '.repeat(endPad)}`;
        return paddedString;
    },

    has(obj, key){
        let hasValue;
        if (obj[key]){
            hasValue = true;
        } else if (obj[key] == undefined){
            hasValue = false;
        } return hasValue;
    },

    invert(obj){
        let invertedObject = {};
        for(let key in obj){
            const originalValue = obj[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },

    findKey(obj, predicate){
        for (let key in obj){
           const value = obj[key]; 
           const predicateReturnValue = predicate(value);
           if(predicateReturnValue){
               return key;
           }
        } return undefined;
    },

    drop(array, number){
        if(number  == null){
            number = 1;
        }
       return array.slice(number);
    },

    dropWhile(array, predicate){
        const dropNumber = array.findIndex((element,index) => {
            return !predicate(element, index, array);
        });
        const dropArray = this.drop(array, dropNumber);
        return dropArray;
    },

    chunk(array, size){
        if(size == null){
            size = 1;
        }
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size){
            const arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
};



// Do not write or modify code below this line.
module.exports = _;