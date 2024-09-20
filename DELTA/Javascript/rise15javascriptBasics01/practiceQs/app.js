// back tick and how to use it in our code
// let princeage = 23;
// let ramage = 24;
// console.log(`the father's age of prince and ram is double of their combined age i.e ${princeage + ramage}.`);

// arithemaetic operator
// let a = 12;
// let b = 6;
// console.log(`The addition of a and b is ${a + b}.`);
// console.log(`The subtraction of a and b is ${a - b}.`);
// console.log(`The dividion of a and b is ${a / b}.`);
// console.log(`The multiplication of a and b is ${a * b}.`);
// console.log(`The power of a to the b is ${a ** b}.`);
// console.log(`the modulus of a and b is ${a % b}.`);

// practice question 01

// let color = "yellow";
// if(color == "yellow"){
//     console.log("you must be ready to go.");
// }
// if(color == "red"){
//     console.log("you are not allowed to go.");
// }
// if(color == "green"){
//     console.log("you can go.");
// }

// practice question 02

// let popcornSize = "xl";

// if(popcornSize === "s"){
//     console.log(`the popcorn price for ${popcornSize} is 50 rupees.`);
// }
// else if(popcornSize === "m"){
//     console.log(`the popcorn price for ${popcornSize} is 100 rupees.`);
// }
// else if(popcornSize === "l"){
//     console.log(`the popcorn price for ${popcornSize} is 150 rupees.`);
// }
// else if(popcornSize === "xl"){
//     console.log(`the popcorn price for ${popcornSize} is 200 rupees.`);
// }
// else{
//     console.log(`the popcorn price for ${popcornSize} is 50 rupees.`);
// }


// practice questions 03

// let str  = "ahuk";

// if(str.length > 3){
//     if(str[0] === "a"){
//         console.log(`${str} is a good string.`); 
//     }
//     else{
//         console.log(`${str} is not a good string.`);
//     }
// }
// else{
//     console.log(`${str} is not a good string.`);
// }

// switch case

// let color = "blue";

// switch (color){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("ready to go");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default:  
//         console.log("broken light");        
// }

// practice qs 04

// let num = 2;

// switch (num){
//     case 1:
//         console.log(`today is monday.`);
//         break;
//     case 2:
//         console.log(`today is tuesday.`);
//         break;   
//     case 3:
//         console.log(`today is wednesday.`);
//         break; 
//     case 4:
//         console.log(`today is thursday.`);
//         break;
//     case 5:
//         console.log(`today is friday.`);
//         break;
//     case 6:
//         console.log(`today is saturday.`);
//         break;
//     case 7:
//         console.log(`today is sunday.`);
//         break;
//     default:
//         console.log(`wrong day.`);
// }


// alert("this is a alert message.");
// console.error("this is a error message.");
// console.warn("this is a warning message.");

let firstName = prompt("enter your first name:");
let lastName = prompt("enter your last name.");
console.log(`welcome ${firstName} ${ lastName}.`);