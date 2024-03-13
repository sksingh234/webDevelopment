// let num;
//   num = prompt("enter a number:");
// if (num % 5 === 0) {
//   console.log( num,"is a multiple of 5");
// } else {
//     console.log(num,"is not a multiple of 5");
// }

let marks = prompt("enter the marks of student:");
if (marks >= 90 && marks <= 100) {
  console.log("grade A");
} else if (marks >= 70 && marks <= 89) {
    console.log("grade B");
} else if (marks >= 60&& marks <= 69) {
    console.log("grade C");
} else if (marks >= 50 && marks <= 59) {
    console.log("grade D");
} else{
    console.log(" fail");
}