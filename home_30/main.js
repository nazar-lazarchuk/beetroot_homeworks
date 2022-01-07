//мінімум 

let sum = 0.1+0.2;
alert(sum.toFixed(1));

let a = "1";
let b = 2;
alert(+a+b);

let fleshDrive = +prompt("Вкажіть розмір флешки в Гб?");
let fileSize = 820;
let file = Math.floor(fleshDrive*1024/fileSize)
alert(`на флешку можна завантажити ${file} файлів`);

//норма

let cashSum = +prompt("Вкажіть суму грошей в гаманці?");
let price = +prompt("Яка ціна однієї шоколадки?");
let number = Math.floor(cashSum/price);
let surplus = cashSum % price;
alert(`Ви можете придбати  ${number} шт шоколадок, а решта складатиме ${surplus}`);
//.toFixed(0)

let ask = +prompt("Вкажіть трьохнайне число?");
let first = ask % 10;
let second = Math.floor((ask % 100)/10);
let third = Math.floor(ask / 100);
let reverse = first * 100 + second * 10 + third
alert(reverse);

//Максимум

let deposit = +prompt("Вкажіть сумму вкладу в банк на 2 місяці?");
let days = 61;
let persent = deposit / 100 * 5 / 365 * 61;
alert(`За два місяці вам буде нараховано ${persent.toFixed(2)} грн відсотків`);