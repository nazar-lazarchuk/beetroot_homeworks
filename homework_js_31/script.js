// Мінімум
/* #1 Запитай у користувача його вік і визначи, ким він є: 
дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
передбач можливість введення невірних даних.*/
const age = +prompt(`Вкажіть скільки вам років`);

if (age > 0 && age <= 11) {
   alert(`Ви дитина`);
} else if (age >= 12 && age <= 17) {
   alert(`Ви підліток`);
} else if (age >= 18 && age <= 59) {
   alert(`Ви дорослий`);
} else if (age >= 60 && age <= 100) {
   alert(`Ви пенсіонер`);
} else {
   alert(`невірні дані, спробуйте ще раз`)
}


/*#2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який 
розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/

let n = +prompt(`Введи число від 0 до 9`);

if (n == 0) {
   alert(`)`)
} else if (n == 1) {
   alert(`!`)
} else if (n == 2) {
   alert(`@`)
} else if (n == 3) {
   alert(`#`)
} else if (n == 4) {
   alert(`$`)
} else if (n == 5) {
   alert(`%`)
} else if (n == 6) {
   alert(`^`)
} else if (n == 7) {
   alert(`&`)
} else if (n == 8) {
   alert(`*`)
} else if (n == 9) {
   alert(`(`)
} else {
   alert(`error, введи число від 0 до 9`)
}

/*#3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.*/

let minNumber = +prompt(`Вкажи найменше число, яке спаде тобі на думку`);
let maxNumber = +prompt(`А тепер найбільше`);
let sum = 0;
for (let i = minNumber; i <= maxNumber; i++) {
   sum += i;
}
alert(`Дивись, я підрахував суму всіх чисел в заданому тобою діапазоні ${sum}`);

/* #4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.*/
let firstNumber = +prompt(` Введи перше число`);
let secondNumber = +prompt(`Введи друге число`);

while (firstNumber != secondNumber) {
   if (firstNumber > secondNumber) firstNumber -= secondNumber;
   else secondNumber -= firstNumber;
}
alert(`Отже, найбільший спільний дільник двох чисел це ${firstNumber}.`);

/* #5 Запитай у користувача число і виведи всі дільники цього числа*/
let userNumber = +prompt(` Введи число`);
alert(`Дільники веденого тобою числа:`);
for (let i = 1; i <= userNumber; i++) {
   if (userNumber % i === 0) {
      alert(i);
   }
}
