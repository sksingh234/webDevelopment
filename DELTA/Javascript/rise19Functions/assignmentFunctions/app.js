/*
Qs1. Write a JavaScript function that returns array elements larger than a number. 
*/

// function larArr(arr,n){
//     let newArr = [];
//      for(let i = 0; i < arr.length; i++){
//         if(arr[i] > n ){
//             newArr.push(arr[i]);
//         }
//      }
//      return newArr;
// }

// let arr = [2,52,47,63,12,64];

// let updArr = larArr(arr,12);
// console.log(updArr);



/*
Qs2. Write a JavaScript function to extract unique characters from a string. 
Example: str = “abcdabcdefgggh” ans = “abcdefgh”
*/ 

// function uniqueStr(str,a,b){
//     let result = str.slice(a,b);
//     return  result;
// }
// let str = "abcdefghijklmn";
// let resultStr = uniqueStr(str,0,8);
// console.log(resultStr);


/*
Qs3. Write a JavaScript function that accepts a list of country names as input and 
returns the longest country name as output. 
Example : country = ["Australia", "Germany", "United States of America"] output : 
"United States of America" 
*/

// function largestName(arr){
//     let result = "Australia";
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i].length > result.length){
//             result = arr[i];
//         }
//     }
//     return result;
// }
// let country = ["Australia", "Germany", "United States of America"];
// let resultStr = largestName(country);
// console.log(resultStr);



/*
Qs4. Write a JavaScript function to count the number of vowels in a String 
argument. 
*/

// function countVowel(str){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//             count++;
//         }
//     }
//     return count;
// }

// let str = "aeiouaeiou";
// let result = countVowel(str);
// console.log(result);



/*
Qs5. Write a JavaScript function to generate a random number within a range 
(start, end).
*/

// function randomNum(a,b){
//     let ans = Math.floor(Math.random() * (b - (a - 1))) + a;
//     return ans;
// }
// let resultNum = randomNum(21,25);
// console.log(resultNum);