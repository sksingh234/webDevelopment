/*let name = "shubham";
console.log("name=",name);
console.log("str.length=",str.length)*/

//templates

/*let obj = {
  item: "book",
  price: 100,
};
// console.log("the price of ", obj.item, "is", obj.price, "rupees.");
let template = `the price of ${obj.item} is ${obj.price} rupees.`;*/

/*escape characters

\t for a tab space .
\n for a line change .

let str ="shubham\tkumar";
console.log("str length=",str.length);
console.log("str name=",str);   */

//special functions

/*let str ="shubhamkumar";
console.log("str =",str);
let struppercase = str.toUpperCase();
console.log("struppercase =",struppercase);
let strlowercase = str.toLowerCase();
console.log("strlowercase = ",strlowercase);  */

/*let str = "     my name is shubham     ";
let strtrim = str.trim();
console.log("strtrim =", strtrim);
console.log("str = ", str);
console.log("str.length=", str.length);
console.log("str.slice =",str.slice(6,8));*/


let str1 =  "apna";
let str2 =  "college";
let result = str1.concat(str2);
console.log("concat =",result);
console.log( "concat =",str2.concat(str1));
console.log("replace =",result.replace("a","s"));
console.log("replace =",result.replaceAll("a","s"));
console.log(str1.charAt(0));
