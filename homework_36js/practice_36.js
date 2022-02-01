// /Мінімум
// 1.Створи масив, що описує чек в магазині. Кожен елемент масиву складається з назви товару, кількості і ціни за одиницю товару. Написати наступні функції.
// 1.1.Роздруківка чека на екран.
// 1.2.Підрахунок загальної суми покупки.
// 1.3.Отримання найдорожчої покупки в чеку.
// 1.4.Підрахунок середньої вартості одного товару в чеку.

const checkOfshopping = [
    {name:'beetroot', quantity: 5, price: 150},
    {name:'carrot', quantity: 7, price: 170},
    {name:'potatos', quantity: 10, price: 100},
    {name:'onion', quantity: 6, price: 160},
    {name:'garlic', quantity: 8, price: 1180},
    ]
    console.log(checkOfshopping);

//1.1.Роздруківка чека на екран.
    const printCheck = (checkArray) => {
        const displayCheck = (item) => 
        console.log(`name of product: ${item.name}, quantity: ${item.quantity},kg price: ${item.price} grn`);
        checkArray.forEach(displayCheck);
    }

    printCheck(checkOfshopping);

//1.2.Підрахунок загальної суми покупки.
    const totalPrice = (checkArray) => {
        let result = 0;
        for (i = 0; i < checkArray.length; i++) {
            result = result + checkArray[i].price;
        }
        return result;
    }
    console.log(totalPrice(checkOfshopping));

// 1.3.Отримання найдорожчої покупки в чеку.
const mostExpensivePrice = checkOfshopping.reduce (function (min, max){
    return min.price > max.price ? min : max;
});
console.log(mostExpensivePrice);

// 1.4.Підрахунок середньої вартості одного товару в чеку.
const averageCost = (checkArray) => {
    return totalPrice(checkOfshopping) / checkArray.length;
};
console.log(averageCost(checkOfshopping));
