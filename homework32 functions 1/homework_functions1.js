// function declaration
function firstFunc(a = "Vlad") {
  console.log("My name is", a);
}

firstFunc();

// function Expression (в тоже время является анонимной)
const secondFunction = function (b = "Vladyslav") {
  console.log("My name is", b);
};

secondFunction();

// arrow function
const thirdFunction = (c = "Владислав") => {
  console.log("My name is", c);
};

thirdFunction();

//Створи функцію, яка буде виводити кількість переданих їй аргументів.

const countArguments = function () {
  console.log("аргументы:", arguments);
};

countArguments(1, 2, "три", 4);

/*
    Напиши функцію, яка приймає 2 числа і повертає :
    -1, якщо перше число менше, ніж друге; 
    1 - якщо перше число більше, ніж друге; 
    0 - якщо числа рівні.
*/

const twoNumbers = (a, b) => {
  if (a > b) {
    console.log(-1);
  }
  if (b > a) {
    console.log(1);
  }
  if (a === b) {
    console.log(0);
  }
};
twoNumbers(10, 30);

// Напиши функцію, яка обчислює факторіал переданого їй числа.

const countFactorial = (a) => {
  let sum = 1;
  for (let i = 1; i <= a; i++) {
    sum = sum * i;
  }

  console.log(sum);
};
countFactorial(3);


// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

const myFunc = (q, w, e) => {
    let a = String(q);
    let b = String(w);
    let c = String(e);
    let d = String(a + b + c)

    console.log(d);
}
myFunc(153, 999, 744);

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function area (a, b = a) {
    console.log(a * b);
}
area(5, 6);