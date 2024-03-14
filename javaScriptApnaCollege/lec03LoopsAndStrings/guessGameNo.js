let gamenum = 25;
let usernum = prompt("guess the game number:");

while (usernum != gamenum) {
  usernum = prompt(" your guess is wrong.guess again:");
}
console.log("you are winner because you guess the right number.");
