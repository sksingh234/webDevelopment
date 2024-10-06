//                          rest method
// combine multiple values in to a single array.

//        example 01

// function sum(...args){
//     return args.reduce((add,el) => (add + el));
// }
    
// let result = sum(1,2,3,4);
// console.log(result);

//       example 02

// function min(...args){
//     return args.reduce((min,el) => {
//         if(el < min){
//             return el;
//         }else {
//             return min;
//         }
//     });
// }

// let result = min(1,2,5,4,78,96,3654,-124,-6569)
// console.log(result);


//                          Destructuring method in array

// let names = ["shubham", "karan", "ayush", "ajay", "vishwas"];

// let [winner, runnerup, secondrunnerup, ...others] = names;

// console.log(winner);
// console.log(runnerup);
// console.log(secondrunnerup);
// console.log(others);

//                          Destructuring method in object


//          example 01
// const student = {
//     name:"shubham",
//     age: 20,
//     clas: 13,
//     subject: ["math","english","hindi","science"],
//     username: "shubham@123",
//     password: "shubham@12345667",
// };

// let {username, password, age} = student;
// console.log(username);
// console.log(password);
// console.log(age);



//     example 02
const student = {
    name:"shubham",
    age: 20,
    clas: 13,
    subject: ["math","english","hindi","science"],
    username: "shubham@123",
    password: "shubham@12345667",
};

// in this example we store our key value in diff variables and print it on our console 

let {username:user, password:secret, age: birthday} = student;
console.log(user);
console.log(secret);
console.log(birthday);