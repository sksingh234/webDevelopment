let marks = [85,97,44,37,76,60];
console.log(marks);
let sum = 0;
// for(let idx = 0; idx<marks.length;idx++){
//     sum = sum + marks[idx];
// }

for(let idx of marks){
    sum = sum + idx;
}
let averageMarks = sum / marks.length;
console.log("averageMarks = ",averageMarks);
