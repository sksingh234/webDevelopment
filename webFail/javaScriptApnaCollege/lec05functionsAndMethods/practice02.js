let numbers = [1,2,3,4,5];

 /*   numbers.forEach((val) =>{
    console.log(`the square of ${val} is ${val*val}`);
});   */

// or 

let calSquare = (val) => {
    console.log(`the square of ${val} is ${val*val}`);
};

numbers.forEach(calSquare);