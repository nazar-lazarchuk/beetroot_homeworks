//Min

let listOfProducts = [
  { name: 'tomato', number: 3, price: 3, },
  { name: 'cocumber', number: 2, price: 2, },
  { name: 'gabbage', number: 1,  price: 5, },
  { name: 'carrot', number: 2, price: 2, },
  { name: 'pepper', number: 3, price: 4, },
];

//1
function showBill(arr) {
  const bill = (item) =>
    console.log(
      `Товар: ${item.name}, кількість: ${item.number}, ціна: ${item.price}`
    );
    arr.forEach(bill);
}
showBill(listOfProducts);

//2
function showSum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i].price;
  }
  return res;
}
console.log(showSum(listOfProducts));

//3
const maxPrice = listOfProducts.reduce(function (a, b) {
  return b.price > a.price ? b : a;
});
console.log(maxPrice);

//4
const midCost = (arr) => {
  return showSum(listOfProducts) / arr.length;
};
console.log(midCost(listOfProducts));