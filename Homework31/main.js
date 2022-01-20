
//1
const user_Age = +prompt("Введіть свій вік");
const child_Age = 11;
const teenager_Age = 17;
const adult_Age = 18;
const penseoneer_Age = 60;
const longliever_Age =101;
if (user_Age <=child_Age && user_Age > 0) {
    alert('Ви дитина');
}else if (user_Age > child_Age && user_Age<= teenager_Age){
    alert('Ви підліток');
}else if (user_Age > teenager_Age && user_Age < penseoneer_Age){
    alert('Ви дорослий');
}else if (user_Age >= penseoneer_Age && user_Age <=100 ){
    alert('Ви пенсіонер');
}else if (user_Age >= longliever_Age && user_Age <=122 ){
    alert('Ого, вітаємо, ви - довгожитель');
}else if (user_Age ===123 || user_Age ===124 ){
    alert('Зверніться до книги рекордів Гіннеса');
}
else{
    alert('Невірне число. Перезавантажте сторінку й почніть заново');
}


//2

let userNumber = +prompt("Введіть число");
if (userNumber === 1){
    alert ('!');
}else if (userNumber === 2){
    alert ('@');
}else if (userNumber === 3){
    alert ('#');
}else if (userNumber === 4){
    alert ('$');
}else if (userNumber === 5){
    alert ('%');
}else if (userNumber === 6){
    alert ('^');
}else if (userNumber === 7){
    alert ('&');
}else if (userNumber === 8){
    alert ('*');
}else if (userNumber === 9){
    alert ('(');
}else{
    alert ("Невірний діапазон, перезавантажте сторінку й почніть заново");
} 

//3

 function getSum(firstNumber, secondNumber) {
    let sumOfAllNumbers = 0;
    for(let i = firstNumber; i <= secondNumber; i++){
        sumOfAllNumbers += i;
    }
    return sumOfAllNumbers;
}
console.log(getSum(1, 3));




//4
let userFirstNumber = +prompt("Введіть перше число");
let userSecondNumber = +prompt("Введіть друге число");
let divisor  = 0;

while (userFirstNumber != userSecondNumber) {
    if (userFirstNumber > userSecondNumber) {
        userFirstNumber = userFirstNumber - userSecondNumber;
    } else{
        userSecondNumber = userSecondNumber - userFirstNumber;
    }
}

divisor = userFirstNumber;
alert(divisor);




//4
const userNumber = +prompt("Введіть число");
for (let i = 1; i <= userNumber; i++){
    if (userNumber % i === 0){
        console.log(i);
    }
}
