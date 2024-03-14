// for-of loop

// let str = "shubham";
// let size = 0;
// for (let i of str) {
//   console.log("i=", i);
//   size++;
// }
// console.log("string size = ",size);

// for in loop

let student = {
    name : "shubham kumar",
    age : 20,
    cgpa: 9.7,
    ispass :true,
};

for (let key in student) {
    console.log("key=",key,"value=",student[key]);
}