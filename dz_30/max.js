let amountMoney = +prompt("Введіть кількість грошей, які хотіли б поставити на депозит")
const YEAR_PERCENT = 5;
const MONTH_PERSENT = YEAR_PERCENT / 12;
const DURATION_MONTH = 2;
const receivedMoney = amountMoney * MONTH_PERSENT * DURATION_MONTH / 100;
console.log(`При депозиті на два місяці Ви отримаєте ${(amountMoney+recievedMoney).toFixed(1)} грн`);

