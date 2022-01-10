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
alert(`Отже, на флешку розмыром ${memoryDrive} Гб поміститься ${amountFiles} файлів розмиром 820 Мб`)








