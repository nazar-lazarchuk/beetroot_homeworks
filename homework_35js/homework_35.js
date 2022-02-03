// Мінімум
//1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// 1.Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// 2.Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// 3.Створення списку (не) придбаних продуктів.


const listOfshopping = [
    { name: "milk", quantity: 2, isBought: true, price: 25, sume: 0 },
    { name: "salad", quantity: 2, isBought: false, price: 50, sume: 0 },
    { name: "fish", quantity: 3, isBought: true, price: 32, sume: 0 },
    { name: "piza", quantity: 1, isBought: true, price: 105, sume: 0 },
    { name: "beetroot", quantity: 5, isBought: true, price: 15, sume: 0 },
    { name: "books", quantity: 2, isBought: false, price: 150, sume: 0 },
    { name: "t-shirt", quantity: 2, isBought: false, price: 150, sume: 0 },
];
console.log([listOfshopping]);

// 1.Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

const sortListBought = (a, b) => (a.isBought > b.isBought ? 1 : -1);
const finishList = [...listOfshopping].sort(sortListBought);
console.log(finishList);

// 2.Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
const purchaseProducts = function (someName) {
    for (i = 0; i < listOfshopping.length; i++) {
        if (listOfshopping[i].name === someName) {
            listOfshopping[i].isBought = true;
            return listOfshopping[i]
        }
    }
};
const productBought = purchaseProducts("fish");
console.log(listOfshopping);
if (productBought) {
    console.log(`${productBought.name} was bought for ${productBought.price} grn `);
    }

// 3.Створення списку (не) придбаних продуктів.
const productNotBought = listOfshopping.filter (
    (list) => !list.isBought
);
console.log(productNotBought);
