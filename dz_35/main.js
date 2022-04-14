const shoppingList = [
  {
    nameProduct: "sugar",
    quantity: 2,
    isBought: true,
    priceForOne: 33,
    total: 1,
  },
  {
    nameProduct: "apple",
    quantity: 20,
    isBought: true,
    priceForOne: 14,
    total: 1,
  },
  {
    nameProduct: "crisps",
    quantity: 1,
    isBought: false,
    priceForOne: 29,
    total: 1,
  },
  {
    nameProduct: "potato",
    quantity: 50,
    isBought: true,
    priceForOne: 12,
    total: 1,
  },
  {
    nameProduct: "candies",
    quantity: 10,
    isBought: false,
    priceForOne: 130,
    total: 1,
  },
  {
    nameProduct: "water",
    quantity: 5,
    isBought: false,
    priceForOne: 12,
    total: 1,
  },
];

for (let product of shoppingList) {
  product.total = product.priceForOne * product.quantity;
}

//Спочатку йдуть не придбані продукти а потім придбані
function sortFunction(a, b) {
  if (a.isBought > b.isBought) {
    return 1;
  }
  return -1;
}
const sortedArray = shoppingList.sort(sortFunction);
console.log(sortedArray);

//Покупка продукту
function buyTheProduct(nameProduct, array) {
  for (let product of array) {
    if (product.nameProduct === nameProduct) {
      product.isBought = true;
      return `You have just bought the ${product.nameProduct} 
which is costed for one ${product.priceForOne} 
in sum you paid ${product.quantity * product.priceForOne}
            `;
    }
  }
  return `Don't have such product as ${nameProduct}`;
}
console.log(buyTheProduct("crisps", shoppingList));

//Створення списку (не) придбаних продуктів
function productsToBuy(array) {
  let productsToBuy = [];
  let productsBought = [];
  for (let product of array) {
    if (product.isBought === false) {
      productsToBuy.push(product.nameProduct);
    } else {
      productsBought.push(product.nameProduct);
    }
  }
  return `You need to buy such products: 
    ${productsToBuy}
You bought before: 
    ${productsBought}
    `;
}
console.log(productsToBuy(shoppingList));

//Видалення продукту зі списку
function deleteTheProduct(product, array) {
  const productToDelete = array.findIndex(
    ({ nameProduct }) => nameProduct === product
  );
  return [...array].splice(productToDelete, 1);
}
console.log(deleteTheProduct("crisps", shoppingList));

//Додавання покупки в список
const newProduct = {
  nameProduct: "tea",
  quantity: 2,
  isBought: false,
  priceForOne: 43,
  total: 1,
};
function addProduct(product, array) {
  array.push(product);
  return array;
}
console.log(addProduct(newProduct, shoppingList));

//Підрахунок всіх продуктів
function getSumProducts(array) {
  let sum = 0;
  for (let product of array) {
    sum += product.total;
  }
  return `You need to pay ${sum} UAN`;
}
console.log(getSumProducts(shoppingList));

//Підрахунок суми всіх (не) придбаних продуктів
function getSumNotBoughtProducts(array) {
  let sum = 0;
  for (let product of array) {
    if (product.isBought === false) {
      sum += product.total;
    }
  }
  return `You need to pay ${sum} UAN to buy unbought products`;
}
console.log(getSumNotBoughtProducts(shoppingList));

//Показання продуктів в залежності від суми
function sortArrayWithPrice(howToSort, array) {
  if (howToSort === "FromHigherToLower") {
    array.sort(function (a, b) {
      if (a.total > b.total) {
        return -1;
      }
      if (a.total < b.total) {
        return 1;
      }
    });
  }
  if (howToSort === "FromLowerToHigher") {
    array.sort(function (a, b) {
      if (a.total > b.total) {
        return 1;
      }
      if (a.total < b.total) {
        return -1;
      }
    });
  }
  return array;
}
console.log(sortArrayWithPrice("FromLowerToHigher", shoppingList));
