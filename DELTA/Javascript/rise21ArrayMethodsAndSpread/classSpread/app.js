//                                    spread
// spread prints individual items of an array without doing anything else


//     example 01
// let arr = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(...arr);


//     example 02
// console.log(..."shubham");
// console.log("shubham");


//                      spread with array literals

// example 01

// let arr = [1, 2, 3, 4, 5];

// let newArr = [...arr];

// newArr.push(25);

// console.log(arr);
// console.log(newArr);

// console.log(...arr);
// console.log(...newArr);

// let bool = (arr == newArr);
// console.log(bool);


//         example 02

// let even = [2, 4, 6, 8, 10];
// let odd = [23, 41, 65, 87, 109];

// let mixedNum = even + " " + odd ; 
// console.log(mixedNum);

// let newArr = [...even, ...odd];
// console.log(newArr);


//                      spread with object literals


// example 01

// const data = {
//     emailid : "shubhamkumar95817@gmail.com",
//     name: "shubham",
//     phoneno: 993654,
// };

// const dataCopy = {...data, id: 123};
// console.log(dataCopy);
// console.log(data);

// let bool = (data == dataCopy);
// console.log(bool);

//         example 02

// let arr = [1, 2, 3, 4, 5];

// let obj1 = {...arr};
// console.log(obj1);

//         example 03

let str = "shubham";

let obj2 = {...str};
console.log(obj2);