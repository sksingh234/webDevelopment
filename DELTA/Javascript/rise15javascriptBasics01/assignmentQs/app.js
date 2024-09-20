// Qs 01

// let num = 10;

// if(num % 2 === 0){
//     console.log(`good`);
// }
// else{
//     console.log(`bad`);
// }

// QS 02

// let name = prompt("enter the name of user.");
// let age = prompt("enter the age of user.");
// alert(`${name} is ${age} years old.`);

// QS 03

// let quarter = 1;

// switch (quarter){
//     case 1:
//         console.log(`january, february, march`);
//         break;
//     case 2:
//         console.log(`april, may, june`);
//         break;
//     case 3:
//         console.log(`july, august, september`);
//         break;    
//     case 4:
//         console.log(`october, november, december`);
//         break; 
//     default:
//         console.log(`no such quarter exists.`);       
// }

// Qs 04

// let str = "ahub,,";

// if((str[0] === 'a' || str[0] === "A") && str.length > 5){
//     console.log("golden string");
// }
// else{
//     console.log("not a golden string.");
// }

// largest of three numbers

// let num1 = prompt("enter the first number.");
// let num2 = prompt("enter the second number.");
// let num3 = prompt("enter the third number.");

// if(num1>num2){
//     if(num1>num3){
//         console.log(`the largest number is ${num1}.`);
//     }
//     else{
//         console.log(`the largest number is ${num3}.`);
//     }
// }
// else {
//     if(num2>num3){
//         console.log(`the largest number is ${num2}.`);
//     }
//     else{
//         console.log(`the largest number is ${num3}.`);
//     }
// }

// QS 06 bonus

let num1 = prompt("enter the first number.");
let num2 = prompt("enter the second number.");

if(num1[num1.length-1] === num2[num2.length-1]){
    console.log(`both have same last digit.`);
}
else{
    console.log(`both have diff last digit.`);
}