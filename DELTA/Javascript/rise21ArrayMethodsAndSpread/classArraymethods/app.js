//                                    Array Methods

//                                   for each method

// let arr = [1, 2, 3, 4, 5];

// tarika 01
// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);


// tarika 02
// arr.forEach(function(el){
//     console.log(el);
// });

// tarika 03

// arr.forEach((el) => {
//     console.log(el);
// });

// tarika 04

// let arr = [{
//     name:"shubham",
//     age:20,
// }, 
// {
//     name:"pratipal",
//     age:213,
// },
//  {
//     name:"satyam",
//     age:24,
//  }];

// arr.forEach((student) => {
//     console.log(student.name);
// });


//                                   map method

// let num = [1, 2, 3, 4, 5];

// let double = num.map((el) => {
//     return el*2;
// });

// console.log(double);


//                                   filter method


// let num = [1, 2, 3, 4, 5];

// let even = num.filter((el) => (el % 2 == 0));

// console.log(even);



//                                   every method

// let num = [12, 2, 36, 4];
// let result = num.every((el) => (el % 2 == 0));
// console.log(result);



//                                   some method

// let num = [12, 29, 3, 47];
// let result = num.some((el) => (el % 2 == 0));
// console.log(result);



//                                   reduce method

// let num = [12, 29, 3, 47];
// let result = num.reduce((res,el) => (res + el));
// console.log(result);


//                                   finding maximum value in an array.

let num = [12, 294646456, 3, 47, 1223566];
let result = num.reduce((max,el) => {
    if(max < el){
        return el;
    } else{
        return max;
    }
});
console.log(result);