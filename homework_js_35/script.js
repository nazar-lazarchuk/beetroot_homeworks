// Мінімум
/* Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту,
кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:*/

let shoppingList = [
   { name: 'milk', quantity: 3, status: 'not bought', price: 25, sum: 75 },

   { name: 'bread', quantity: 2, status: 'bought', price: 12, sum: 24 },

   { name: 'tea', quantity: 3, status: 'bought', price: 26, sum: 78 },

   { name: 'cereal box', quantity: 2, status: 'not bought', price: 59, sum: 118 },

]

// 1)Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
shoppingList.sort((a, b) => (b.status > a.status) ? 1 : -1);
console.log(`Весь список продуктов которые нужно купить и те, что уже купили`);
console.log(shoppingList);


// 2)Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function purchaseProducts(nameProduct) {
   for (let i = 0; i < shoppingList.length; i++) {
      let someProduct = shoppingList[i].name;
      if (someProduct === nameProduct) {
         shoppingList[i].status = 'bought';
         return shoppingList[i]
      }
   }
}
console.log(`Изменение статуса продукта на "куплен"`)
console.log(purchaseProducts('cereal box'));

// 3)Створення списку (не) придбаних продуктів.
let statusNotBought = 'not bought';

for (let i = 0; i < shoppingList.length; i++) {
   if (shoppingList[i].status == statusNotBought) {
      console.log(`Вот список продуктов, которые нужно купить: ${shoppingList[i].name}`);
   }
}

