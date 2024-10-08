/*  Qs 01
check all the elements in array is multiple of 10 or not.
*/

// let nums = [10, 20, 30, 40, 50];
// let result = nums.every((el) => (el % 10 == 0));
// console.log(result);

/*  Qs 02
create a function to find minimum number in an array.
*/

// let nums = [10, 20, -30, 40, 50];
// let ans = nums.reduce((min , el) => {
//     if(el < min){
//         return el;
//     } else{
//         return min;
//     }
// });
// console.log(ans);


/*  Qs 03
Square and sum the array elements using the arrow function and then find the average of the array.
*/

// let arr = [1,2,3,4,5,6,7,8,9];
// const square = arr.map((el) => el *el);
// console.log(square);
// let sum = square.reduce((add,el) => add + el);
// let avg = sum / arr.length;
// console.log(avg);


/*  Qs 04
Create a new array using the map function whose each element is equal to the
original element plus 5.
*/

// let arr = [1,2,3,4,5,6,7,8,9];
// const newArr = arr.map((el) => el + 5);
// console.log(newArr);


/*  Qs 05
Create a new array whose elements are in uppercase of words present in the
original array.
*/

//                   using map method
// let names = ["shubham", "aayush", "karan", "rahul giri"];
// const newNames = names.map((el) => el.toUpperCase());
// console.log(newNames);

//                   using foreach method
// let names = ["shubham", "aayush", "karan", "rahul giri"];
// names.forEach((el) => {
//     console.log(el.toUpperCase());
// });


/*  Qs 06
Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled
*/


//              tarika 01

// function doubleAndReturnArgs(arr,...args){
//     let double = args.map((el) => el * 2);
//     let result = [...arr,...double];
//     return result;
// }
// let arr = [1,2,3,4,0];
// console.log(doubleAndReturnArgs(arr,1,6,9));


//              tariks 02

// const doubleAndReturnArgs = (arr,...args) => ([
//     ...arr,
//     ...args.map((el) => el * 2),
// ]);

// let arr = [1,2,3,4,0];
// console.log(doubleAndReturnArgs(arr,1,6,9));


/*  Qs 07
Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object nd second object.
*/

const obj1 = {
    a:1,
    b:2,
};

const obj2 = {
    c:3,
    d:4,
};

const mergeObjects = (obj1,obj2) => ({...obj1 , ...obj2});
let result = mergeObjects(obj1,obj2);
console.log(result);
