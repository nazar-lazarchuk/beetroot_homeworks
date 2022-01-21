console.log((0.1 + 0.2).toFixed(1)); 

let a= +"1";
let b= 2;
console.log(a+b);

const file = 820;
let memory = +prompt("Вкажіть об`єм флешки в GB");
let numberOfFiles = Math.floor(memory *1024 / file);
alert(numberOfFiles);

//norma
let money = +prompt('Введіть суму в гаманці');
let priceOfChokolate = +prompt('Введіть ціну шоколадки');
let numberOfChokolate = Math.floor(money/priceOfChokolate);
let change = money%priceOfChokolate;

if (money<priceOfChokolate) {
    alert(`Нічого не вийде, друже. Візьми щось дешевше`);
} else if (change===0.25) {
    alert(`Ти отримаєш ${numberOfChokolate} шт шоколадок і 20 коп здачі`);
} else if (change===0.15) {
    alert(`Ти отримаєш ${numberOfChokolate} шт шоколадок і 10 коп здачі`);  //отут не спрацьовує 
} else if (change<0.1) {
    alert(`Ти отримаєш ${numberOfChokolate} шоколадок без здачі`);
} else alert(`Ти отримаєш ${numberOfChokolate} шоколадок і ${change} грн здачі`);

let yourNumber = +prompt("Введіть трьохзначне число");
let firstNumber= yourNumber%10;
let secondNumber = Math.floor(yourNumber%100/10);
let thirdNumber =  Math.floor(yourNumber/100);

alert(`Ваше число ${firstNumber}${secondNumber}${thirdNumber}`);