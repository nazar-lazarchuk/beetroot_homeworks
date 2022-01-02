//1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

'use strict';

alert('Hello, dear User! First task');

alert('We just want to get summ 0.1 + 0.2!');

let sum = 0.1 + 0.2; //операція додавання

alert(sum); //виводимо суму яка не правильна через втрату точності

alert('But this is not right');

alert( +sum.toFixed(2) ); //виводимо округлену суму та із переведенням стрічки через + у число

alert('Last result is that we need');


//2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

alert('Hello, dear User! Second task');

let firstNumber = '1';
let secondNumber = 2;
let sumNumbers = +(firstNumber) + secondNumber; // не забуваємо перевести рядок у число

alert('We plused srike 1 and number 2 and the result is:' + ' ' + sumNumbers);


///3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

alert('Hello, dear User! Third task');

let capacityMemory = +prompt('Please type what is capacity of your memory stick, Gb' , 'Type here, Gb');

alert('your file is 820mb')

const capacityFile = 820 / 1024; //переводимо мегабайти у байти

let quantityFiles = capacityMemory / capacityFile;

let quantityFiles_00 = Math.trunc(quantityFiles); //Округлюємо до цілого

alert('You can save here only' + ' ' + quantityFiles_00 + ' ' + 'files'); //Виводимо результат

