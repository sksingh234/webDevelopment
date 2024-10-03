// this keyword

// const student = {
//     name:"shubham",
//     age: 20,
//     eng: 65,
//     hin : 96,
//     math: 85,
//     getAvg(){
//         let avg = (this.eng + this.math + this.hin) / 3;
//         console.log(avg);
//     }
// };




// try and catch statement 

// console.log("hello");
// try {
//     console.log(a);
// }
// catch(err){
//     console.log("caught an error..... a is not defined");
//     console.log(err);
// }
// console.log("hello2");




// arrow function

// const sum = (a,b) =>{
//     console.log(a+b);
// };

// const square = (a) => {
//     console.log(a*a);
// };

// const cube = (a) => {
//     console.log(a*a*a);
// };

// const pow = (a,b) => (a**b);

// const hello = () => ("hello! how are you.");




// setTimeout function

// console.log("Hi there!");

// let loc = () => {
//     console.log("Apna college");
// };

// setTimeout(loc);

// console.log("welcome to");



// setinterval function

// console.log("hello");

// let id = setInterval(() => {
//     console.log("shubham here");
// }, 4000);

// console.log("all is good");
// to stop setInterval we use clearInterval(id);



// this keyword with normal and arrow functions

// const student = {
//     name:"shubham",
//     age: 20,
//     marks:69,
//     getName:function (){
//         console.log(this);
//         console.log(this.name);
//     },
//     getMarks: ()  => {
//         console.log(this);
//         console.log(this.marks);
//     },
// };

// normal function --> this  --> jo object call karta hai uska this
// arrow function  --> this  --> jo object iske parent ko call karta hai uska this 
