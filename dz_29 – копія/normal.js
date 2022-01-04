const firstName = prompt("Як тебе звати");
alert(`Привіт, ${firstName}`);

let dateBirth = prompt (`${firstName}, вкажіть свій рік народження`);
const presentYear = 2022;
let presentAge = presentYear - dateBirth;
alert(`Вітаю, ${firstName}, тобі ${presentAge} років`) 

alert(`${firstName} давай наостанок порахую тобі периметр квадрату`);
let lengthSide = prompt("Введи сторону квадрату");
let squerePerimetr = lengthSide*4;
alert(`Периметр твого квадрату = ${squerePerimetr}`)