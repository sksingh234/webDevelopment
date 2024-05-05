// function countVowels(str)
const countVowels = (str) =>
 {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    } else {
      continue;
    }
  }
  console.log(`toatal number of vowels in ${str }is ${count}.`);
  return ;
}

countVowels("shubhamkumar");
