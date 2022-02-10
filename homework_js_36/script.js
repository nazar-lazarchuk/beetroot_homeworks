// Створи масив, що описує чек в магазині. 
// Кожен елемент масиву складається з назви товару, кількості і ціни за одиницю товару.
let storeReceipt = [
   { name: 'ice cream', number: 5, unitPrice: 20 },
   { name: 'bottle of water', number: 3, unitPrice: 14 },
   { name: 'bread', number: 2, unitPrice: 9 },
   { name: 'butter', number: 1, unitPrice: 25 }
]


//1) Роздруківка чека на екран.
//2) Підрахунок загальної суми покупки.
//3) Отримання найдорожчої покупки в чеку.
//4) Підрахунок середньої вартості одного товару в чеку.
let receipt = (product) => {
   let totalSum = 0;
   let mostExpensiveProducts = 0;
   let nameMostExpensiveProducts = "";
   let numberProducts = 0;

   for (let i = 0; i < product.length; i++) {
      let priceCertainQuantity = product[i].number * product[i].unitPrice;
      totalSum = totalSum + priceCertainQuantity;
      numberProducts = numberProducts + product[i].number;

      if (mostExpensiveProducts < storeReceipt[i].unitPrice) {
         mostExpensiveProducts = priceCertainQuantity;
         nameMostExpensiveProducts = product[i].name
      }

      console.log(`Название продукта:${product[i].name}
      ${product[i].number} шт. * ${product[i].unitPrice} грн = ${priceCertainQuantity} грн`);
   }
   let averageCostPerProduct = Math.floor(totalSum / numberProducts);

   console.log(`СУММА: ${totalSum} грн`);
   console.log(`Самый дорогой товар в чеке это ${nameMostExpensiveProducts}. Его цена ${mostExpensiveProducts} грн`);
   console.log(`Средняя стоимость 1-го товара в чеке ${averageCostPerProduct} грн`)
}
receipt(storeReceipt);

