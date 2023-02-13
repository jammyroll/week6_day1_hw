function square(number){
    return number * number
}

console.log(square(5));

// const square = function(number){
//     return number * number
// }

const totalNumbers = function(numbers){
    let total = 0;
        for (const number of numbers){
            total += number;
        }
    return total;
}

const myNumbers = [1,2,3,5,6]

console.log(totalNumbers(myNumbers));

// Declare a function that takes input of a number and an array and returns true if the array contains that number and false if it doesn't

const numChecker = function(number,array){
    for (const item of array){
        if (item === number) {
            return true
        }
    } return false
}



// Define a function expression that takes two arguments:

// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for example, 'name'

// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. 

const person = { name: 'Wojtek', age: 30 }
strings = 'name'
const checker = function(str,object){
    for (const pair in object){
        if(pair ===str){
            return true;
        }
    } return false;
}

console.log(checker(strings,person));

