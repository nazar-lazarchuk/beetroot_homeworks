// //Min
// //1
let listOfProducts = [
  { name: 'tomato', number: 3, buy: true, price: 3, value: 9, },
  { name: 'cocumber', number: 2, buy: true, price: 2, value: 4, },
  { name: 'gabbage', number: 1, buy: false, price: 5, value: 5, },
  { name: 'carrot', number: 2, buy: false, price: 2, value: 4, },
  { name: 'pepper', number: 3, buy: true, price: 4, value: 12, },
];

//2
const sortListBuy = (a, b) => (a.buy > b.buy ? 1 : -1);
let sortList = [...listOfProducts].sort(sortListBuy);
console.log(sortList);

//3
const productBuy = function (inputProductName) {
    for (let i = 0; i < listOfProducts.length; i++) {
      if (listOfProducts[i].name === inputProductName) {
        listOfProducts[i].buy = true;
        return listOfProducts[i];
        }
    }
};
productBuy('carrot');
console.log(listOfProducts);

//4
const notBuyList = listOfProducts.filter(
    (list) => !list.buy
  );
  console.log(notBuyList);