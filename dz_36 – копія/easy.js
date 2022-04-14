const shoppingList = [
  { nameProduct: "milk", amountProducts: 2, priceProduct: 32 },
  { nameProduct: "spagetti", amountProducts: 1, priceProduct: 34 },
  { nameProduct: "nuts", amountProducts: 3, priceProduct: 49 },
];

//Загальна ціна
function theFinalPrice(array) {
  let result = 0;
  for (item of array) {
    result += item.amountProducts * item.priceProduct;
  }
  return result;
}

//Найдорожча покупка
function theMostExpensiveProduct(array) {
  let highestPrice = 0;
  for (item of array) {
    let priceProducts = item.amountProducts * item.priceProduct;
    if (highestPrice <= priceProducts) {
      highestPrice = priceProducts;
    }
  }
  return highestPrice;
}

//Середня вартість
function theAveragePrice(array) {
  let averagePrice = 0;
  for (item of array) {
    averagePrice += Math.floor(
      (item.amountProducts * item.priceProduct) / array.length
    );
  }
  return averagePrice;
}

//Роздруківка на екран
function finalCheck(array) {
  for (item of shoppingList) {
    console.log(`
    Product name of product is - ${item.nameProduct} 
    in quantity - ${item.amountProducts} 
    and price - ${item.priceProduct} 
    total price of item - ${item.priceProduct * item.amountProducts}`);
  }
  console.log(`
    YOU NEED TO PAID - ${theFinalPrice(shoppingList)}
    THE MOST EXPENSIVE - ${theMostExpensiveProduct(shoppingList)}
    THE AVERAGE PRICE - ${theAveragePrice(shoppingList)}`);
}
finalCheck(shoppingList);
