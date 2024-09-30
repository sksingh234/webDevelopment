 // learning object literals


// let student = {
//     name: "shubham kumar",
//     age: 20,
//     marks: "7.77 cgpa",
//     university: "mmdu",
// };


// nested objects

// let classInfo = {
//     shubham :{
//         grade:"a+",
//         age:20,
//     },
//     khushi :{
//         grade:"a",
//         age:15,
//     },
// };

// array of objects
// let classInfo = [
//     {
//         name : "shubham",
//         grade : "a+",
//     },
//     {
//         name : "khushi",
//         grade : "a",
//     }
// ];

// generate random number from 1 to 100.

// let num = Math.ceil(Math.random() * 100);
// console.log(num);
 
// generate random number from 1 to 5.

// let num2 = Math.ceil(Math.random() * 5);
// console.log(num2);
 

// generate random number from 21 to 25.

// let num3 = Math.floor(Math.random() * 5) + 21;
// console.log(num3);


// Guessing Right Number.

let maxNum = prompt("Enter the maximum value.");

const random = Math.floor(Math.random() * maxNum) + 1;

let guessValue = prompt("Want to win the game. Guess your number.");

while(true){
    if(guessValue == "quit"){
        console.log("You quit.");
        break;
    }

    if(guessValue == random){
        console.log("Congratulations!!! You won the game.");
        break;
    }
    else{
        if(guessValue > random){
            guessValue = prompt("You are forward. Please guess again.");
        }
        else{
            guessValue = prompt("You are backward. Please guess again.");
        }
    }
}
