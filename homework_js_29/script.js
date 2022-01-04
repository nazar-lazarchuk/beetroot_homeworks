// Ім'я користувача
let userName = prompt(`Please write your name`);
alert(`Hello, ${userName}!`);

// Вік користувача
let userBirthdayDate = prompt(`Dear, ${userName} enter your date of birth`);
const CURRENT_YEAR = `2022`;
let userAge = CURRENT_YEAR - userBirthdayDate;
alert(`Wow, you are already or will be ${userAge} years old.`);

//Периметр квадрату
let lengthSideSquare = prompt(`Let me calculate the perimeter of a square. Just tell me the length of one side`);
let perimeter = 4 * lengthSideSquare;
alert(`The perimeter of a square is ${perimeter} centimeters`);

// Площа кола
let radiusCircle = prompt(`${userName}, enter the radius of the circle.`);
const PI = 3.14;
let circleArea = PI * radiusCircle * radiusCircle;
alert(`The area of the circle is ${circleArea} square centimeters.`);

// Швидкість руху
let distance = prompt(`${userName}, indicate the distance between the two cities in kilometers.`);
let time = prompt(`Indicate the time for which you plan to get to another city and I will calculate how fast you need to move.`);
let speed = distance / time;
alert(`You need to move ${speed} kilometers an hour.`);






