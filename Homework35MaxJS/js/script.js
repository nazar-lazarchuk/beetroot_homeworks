const shopList = [
  { name: "bread", quantity: 1, isBought: true, price: 20, sum: 0 },

  { name: "tomato", quantity: 1, isBought: true, price: 50, sum: 0 },

  { name: "milk", quantity: 2, isBought: false, price: 19, sum: 0 },

  { name: "banana", quantity: 10, isBought: false, price: 1, sum: 0 },

  { name: "apple", quantity: 8, isBought: false, price: 3, sum: 0 },
];


const sortListByBought = (a, b) => (a.isBought > b.isBought ? 1 : -1);

const sortedList = [...shopList].sort(sortListByBought);

console.log(sortedList);


const purchaseProducts = function (someName) {
  for (i = 0; i < shopList.length; i++) {
    if (shopList[i].name === someName) {
      shopList[i].isBought = true;
      return shopList[i]
    }
  }
};

const productBought = purchaseProducts("milk");
console.log(shopList);

if (productBought) {
    console.log(`Був куплений продукт ${productBought.name} за ${productBought.price} грн`);
} else {
    console.log('Продукту з такою назвою не існує');
}


const sortNotPurcaseList = shopList.filter(
  (list) => !list.isBought
);
console.log(sortNotPurcaseList);


const deliteListItem = function (itemName) {
  for (let j = 0; j < shopList.length; j++) {
    if (shopList[j].name === itemName) {
      return [...shopList].splice(j, 1);
    }
  }
};


console.log(deliteListItem('milk'));


shopList.push(
  { name: "banana", quantity: 2, isBought: true, price: 69, sum: 0 },
  { name: "apple", quantity: 8, isBought: true, price: 83, sum: 0 }
);

console.log(shopList);