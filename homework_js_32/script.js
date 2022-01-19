//Мінімум
//#1 Напиши всі можливі варіанти створення функцій.

/*1)Function Declaration - Объявление Функции
function functionDeclaration(parameters) {
   function body
}
functionDeclaration(argument);

2)Function Expression -Функциональное Выражение
let functionExpression = function (parameters) {
   function body
}
functionExpression(argument);

3)Arrow Function - Стрелочная функция
let arrowFunction = (parameters) => {
   function body
}
arrowFunction(argument);

4)Безымянная функция
function(){
function body
}

5)Higher-Order Function - Функция высшего порядка

6)immediately-invoked function expressions - Функция немедленного  вызова
function(){
function body
}()
*/

//#2 Створи функцію, яка буде виводити кількість переданих їй аргументів.
function showNumberOfArguments() {
   console.log(arguments.length)
}
showNumberOfArguments(4, 2, 3, 4);


/*#3 Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.
*/
function getValue(a, b) {
   if (a < b) console.log(-1);
   else if (a > b) console.log(1);
   else if (a = b) console.log(1);
}
getValue(5, 9);

//#4 Напиши функцію, яка обчислює факторіал переданого їй числа. 
function calcFactorial(c) {
   let factorial = 1;
   for (let i = 1; i <= c; i++) {
      factorial = factorial * i;
   }
   console.log(factorial)
}
calcFactorial(4);


/*#5 
Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
Наприклад: цифри 1, 4, 9 перетворяться в число 149.
*/
function getNumberString(a, b, c) {
   let NumberString = a + '' + b + '' + c;
   console.log(NumberString)
}
getNumberString(1, 4, 9)

/*#6 
Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
*/
function calcArea(a, b = a) {
   let area = a * b;
   console.log(area);
}
calcArea(5, 6)
