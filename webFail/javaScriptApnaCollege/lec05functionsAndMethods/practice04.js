let n =  20;
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((pre, curr) => {
  return pre + curr;
});

console.log(sum);

let product = arr.reduce((pre, curr) => {
    return pre * curr;
  });
  
  console.log(product);
