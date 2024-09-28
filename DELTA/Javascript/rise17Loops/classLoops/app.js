// print odd numbers from 1 to 15.

// for(let i = 1; i <= 15; i += 2){
//     console.log(i);
// }

// print even numbers from 2 to 20.

// for(let i = 2; i <= 10; i += 2){
//     console.log(i);
// }

// print multiplication table of 5(for vs code).
// for(let i = 5; i <= 5*10; i += 5){
//     console.log(i);
// }

//  print multiplication table of 5(for console window).

// let n = prompt("enter the number of which you want its table.");
// n = parseInt(n);
// for(let i = n; i <= n*10; i += 5){
//     console.log(i);
// }

// guess my favourite movie name (run this code on)

// let guessMovie = prompt("Guess my favourite movie name.");
// const favMovie = "avatar";

// while(guessMovie != favMovie){
//     if(guessMovie == "quit"){
//         console.log("you quit. play again.");
//         break;
//     }
//     guessMovie = prompt("wrong guess. please try again");
// }

// if(favMovie == guessMovie){
//     console.log("congratulations!! you won.");
// }


// LOOPS WITH arrays and nested arrays

// let arr = ["aam", "amrudh", "kela", "papita", "santara"];

// for(let i = 0; i <= arr.length - 1; i++){
//     console.log(arr[i]);
// }

// let jalpan = [["aam", "amrudh", "kela"], ["aalu", "soyabeen", "gongra", "bhantha"]];

// for(let i = 0; i <= jalpan.length - 1; i++){
//     for(let j = 0; j <= jalpan[i].length - 1; j++){
//         console.log(i, j, jalpan[i] [j]);
//     }
// }

// for of loops 

// let fruits = ["aam", "kela", "sev", "santara"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for (char of "shubham kumar"){
//     console.log(char);
// }

// nested loops

let heroes = [["ironman", "thor", "batman",], ["amitabh", "srk", "salman"]];

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}