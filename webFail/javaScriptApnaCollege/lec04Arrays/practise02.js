let price = [250, 645, 300, 900, 50];

// for (let i = 0; i < price.length; i++) {
//   price[i] = price[i] -  ((price[i] * 10) / 100);
// }

let i =0;
for(let val of price){
    let offer = val /10;
    price[i] = price[i]- offer;
    console.log(`the price of items after offer is = ${price[i]}`);
    i++;
}
console.log(price);
