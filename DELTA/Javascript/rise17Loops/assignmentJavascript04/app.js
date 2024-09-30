/*        Qs1.Write a JS program to delete all occurrences of element ‘num’ in a given array.
 Example: ifarr=[1,2,3,4,5,6,2,3]&num=2
 Resultshouldbearr=[1,3,4,5,6,3]     
 use console to see the result            */

// let arr = [1,2,3,4,5,6,2,3];
// let num = prompt("Enter the number you want to delete from your array.");

// for(element of arr){
//     if(arr[element] == num){
//         arr.splice(element,1);
//     }
// }

// console.log(arr);



/*     Qs2.Write a JS program to find the no of digits in a number.
Example: ifnumber=287152,count=6          
use console to see the result             */

//  let num = 248;
//  let count = 0;
//  while(num > 0){
//     count++;
//     num  = Math.floor(num / 10);
//  }
//  console.log(count);

/*    Qs3.Write a JS program to find the sum of digits in a number.
 Example: ifnumber=287152,sum=25  
 use console to find answer    */

// let num = 287152;
// let sum = 0;
// let rem = 0;

// while(num > 0){
//    rem = num % 10;
//    sum = sum + rem;
//    num = Math.floor(num / 10);
// }
// console.log(sum);

/*
 Qs4.Printthefactorialofanumbern.
 [Factorial of a number nis the product of all positive integers less than or equal to a
 given positive integer and denoted by that integer.]
 Example:
 7!(factorialof7) = 1x2x3x4x5x6x7 = 5040
 5!(factorialof5) = 1x2x3x4x5 = 120
 3!(factorialof3)=1x2x3=6
 0!Isalways 1
 */

// let num = 12;
// let fac = 1;
// while(num > 0){
//    fac *= num;
//    num--;
// }
// console.log(fac);

/*
Qs5.Find the largest number in an array with only positive numbers.
*/

let arr = [12,15,69,0,1,47,20,3];
let largest = arr[0];

for(let i = 1; i < arr.length; i++){
   if(arr[i] > largest){
      largest = arr[i];
   }
}
console.log(largest);
