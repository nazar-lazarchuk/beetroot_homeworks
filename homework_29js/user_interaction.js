'use strict';

alert('Hello, dear User!');

let name = prompt('What is your name?','Type your name'); //Запитуємo ім'я користувача

alert('Hello' + ' ' + name); //виводимо ім'я на екран

let yearBirth = prompt('What is your year of birth', 'Type here'); //Запитуємo рік народження користувача

alert('You born in' + ' ' + yearBirth); //виводимо рік народження на екран

const currentYear = '2021'; //Встановлюємо константу поточний рік

const userAge = currentYear - yearBirth; //Визначаємо вік користувача

alert('Your age is' + ' ' + userAge); //Виводимо вік користувача

let lengthSquare = prompt('What is length of square?','Type here');

alert('lenght of square is so long? OK' + ' ' + lengthSquare);

const perSquare = lengthSquare * 4;

alert('Perimeter of your square is' + ' ' + perSquare); //Виводимо периметр квадрата
