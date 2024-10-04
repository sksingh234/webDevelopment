/*    Qs 01
write a javascript function that returns the square of number n;
*/

// let n = prompt("Enter the number of which you want the square value.");
// const square = (n) => (n * n);
// let result = square(n);
// console.log(result);

/*    Qs 02
write a javascript function that print "hello world" at a interval of 2s each;
*/


// way 01
// for(let i = 1; i <= 5; i++){
//     setTimeout(() => {
//         console.log("hello world.");
//     },2000);
// }


// way 02
// let id = setInterval(() => {
//   console.log("Hello World.");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval ran");
// }, 10000);


/*    Qs 03
write a arrow function named arrayAverage that accepts an array of numbers and return the average of those numbers;
*/


// const arrayAverage = (arr) => {
//     let sum = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }

// let num = [1,25,24,85,63];
// console.log(arrayAverage(num));


/*    Qs 04
write a arrow function named isEven() that accepts an single number as argument and return if it is even or not;
*/

// const isEven = (n) => {
//     let result = "not even";
//     if(n % 2 == 0){
//         result = "even";
//         return result;
//     }
//     return result;
// }

// console.log(isEven(12));


/* Qs 05
guess output
*/

const obj = {
    message: "hello there",

    logMessage(){
        console.log(this.message);
    },
};

setTimeout(obj.logMessage,1000);