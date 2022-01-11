//Мінімум
let sumFirstTask = 0.1 + 0.2;
alert(`Сума 0,1 і 0,2 дорівнює ${sumFirstTask}`);

let x = '1';
let y = 2;
let sumSecondTask = Number(x) + y;
alert(`Сума рядка '1' і цифри 2 дорівнюватиме ${sumSecondTask}, якщо мы перетворимо рядок в число`);

let memoryDrive = prompt('Будьласка, вкажи об\'єм пам\'яті на флешці в Гб, а я розрахую скільки файлів розміром в 820 Мб поміщається на флешку');
let fileSize = 820;
let amountFiles = Math.floor(memoryDrive * 1024 / fileSize);
alert(`Отже, на флешку розміром ${memoryDrive} Гб поміститься ${amountFiles} файлів розміром 820 Мб`)



//Норма
let amountWallet = prompt(`Будьласка, вкажи суму грошей в гаманці в гривнях`);
let priceChocolate = prompt(`Будьласка, вкажи ціну однієї шоколадки в гривнях`);
let numberPurchasedChocolates = Math.round(amountWallet / priceChocolate);
let remainderMoney = Math.round(amountWallet - numberPurchasedChocolates * priceChocolate);
alert(`Отже, ти можеш купити ${numberPurchasedChocolates} шоколадок, але при цьому в тебе залишиться ${remainderMoney} грн в гаманці`);

let threeDigitNumber = prompt(`Будьласка, введи тризначне число `); //abc - тризначне число
let c = threeDigitNumber % 10;
let b = ((threeDigitNumber - c) / 10) % 10;
let a = Math.floor(threeDigitNumber / 100);
alert(`Ось тобі тризначне число задом наперед ${c}${b}${a}`)

