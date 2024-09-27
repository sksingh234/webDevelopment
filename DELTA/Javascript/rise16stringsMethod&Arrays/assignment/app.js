/* Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
 positive number].
 For example: for array [7, 9, 0,-2] and n=3
 Print, [7, 9, 0]     */

let num = [7,9,0,-2];
console.log(num.slice(0,3));
let size = num.length;
console.log( num.size);
console.log(num.slice(size-3));

// Write a JavaScript program to check whether a string is blank or not.

// let str = "";
// if(str === false){
//     console.log("It is a blank string.");
// }
// else{
//     console.log("It is not a blank string.");
// }