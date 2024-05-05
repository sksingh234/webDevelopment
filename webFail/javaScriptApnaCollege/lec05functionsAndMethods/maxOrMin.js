let arr = [1,2,3,4,5,6,10123];

// let maximumvalue =  arr.reduce((prev ,curr) => {
//     return prev > curr ? prev : curr ;
// });

// console .log (maximumvalue);


let minimumvalue =  arr.reduce((prev ,curr) => {
    return prev < curr ? prev : curr ;
});

console .log (minimumvalue);