'use strict';

// First task

alert('Привіт, шкіряний мішок! Пограємо у гру?');

let first_name = prompt('Як тебе звати, нещасний?');

alert(`Привіт, ${first_name}! Їдемо далі пробивати дно!`);

// Second task

let birth_year = prompt('Наскільки ти старий? В якому році ти народився?');
let today = new Date();
const current_year = today.getFullYear();
let age = current_year - birth_year;

alert(`${first_name}, тобі в свої ${age} вже пора на пенсію!`);

// Third task

let side_length = prompt('Уяви, якби ти був квадратний. Якою довжиною в сантиметрах була б твоя сторона?');
let square_area = side_length * 4;

alert(`${first_name}, твій периметр складає ${square_area} см. Практично як вагон метро в Києві`);