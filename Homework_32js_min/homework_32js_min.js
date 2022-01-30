// Мінімум
// 1. Напиши всі можливі варіанти створення функцій.
// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
// 3. Напиши функцію, яка приймає 2 числа і повертає :
//    1.-1, якщо перше число менше, ніж друге;
//    2. 1 - якщо перше число більше, ніж друге;
//    3. 0 - якщо числа рівні.
// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// 1.1 Function Declaration
function sayHi() {
    alert("Hello");
}

//1.2. Function Expression 
let sayHi = function () {
    alert("Hello");
};

//1.3. «функції-стрілки» (arrow functions)
let func = (arg1, arg2, ...argN) => expression;

//1.4. Стрелочная функция и expression одновременно
let welcome = age < 18 ? () => alert("Hi") : () => alert("Hello!");

// 1.5 Анонімна функція буде викликана при кліку
button.addEventListener('click', function (event) {
}, false);

//1.6. Підняття функції hoisting
console.log(square(5));
/* ... */
function square(n) {
    return n * n;
}

//1.6.Рекурсивна функція
function loop(x) {
    if (x >= 10)
        // "x >= 10" — это условие для конца выполнения (тоже самое, что "!(x < 10)")
        return;
    // делать что-то
    loop(x + 1); // рекурсионный вызов
}
loop(0);


//2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

function showArguments () {
    console.log(arguments.length);
}
showArguments(4, 7, 0, 8, 7, 6)

// 3. Напиши функцію, яка приймає 2 числа і повертає :
//    1.-1, якщо перше число менше, ніж друге;
//    2. 1 - якщо перше число більше, ніж друге;
//    3. 0 - якщо числа рівні.

function getMinNumber (x1, x2) {
    let a = -1;
    let b = 1;
    let c = 0;
    if (x1 < x2) {
        return a;
    }
    if (x1 > x2) {
        return b;
    }
    else {
        return c;
    }
}
console.log(getMinNumber(5, 19))

//4. Функция рекурсивного визначення факторіала:
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    else return n * factorial(n - 1);
}


// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function threeNumber (a, b, c) {
    let showNumber = a + '' + b + '' + c;
    console.log(showNumber);
}
threeNumber(2, 4, 5);


// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
const area = (a, b = a) => {
    if (typeof b === 'undefined') {
        return a * a;
    }
    return (a * b).toFixed(3);
    }
    
    console.log(area(0.7, 0.8));