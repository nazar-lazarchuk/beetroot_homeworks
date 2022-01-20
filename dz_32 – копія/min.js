/* 
Напиши всі можливі варіанти створення функцій.

function nameFunction () {}
const name = function nameFunction() {}
const nameFunction = () =>{} */




/*
Створи функцію, яка буде виводити кількість переданих їй аргументів


function howMany() {
    console.log(arguments.length);
}
howMany(1, 3, 5)
*/

/* 
Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.

function comparing (a, b) {
    let result
    if(a > b) {
        result = 1
    }else if(a < b){
        result = -1
    }else if(a === b){
        result = 0
    }else{
        console.log("Correct you numbers")
    }
    return result;
}
console.log(comparing(-21, 6)); */



/* 
Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(a){
    let factorialNum = 1;
    for(i = 0; i < a; i++){
        factorialNum = factorialNum * (a - i)
    }
    return factorialNum
}

console.log(factorial(4)); */



/* 
Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function toNumber(){
    let userNumbers = prompt("Введіть три цифри, без проблів, які відділені між собою комами").split(',', 3);
    let answer = userNumbers[0] + userNumbers[1] + userNumbers[2];
    return answer;
    
}
console.log(toNumber()) */

/*
Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function getRectArea(a, b = a){
    return a * b
}
console.log(getRectArea(2)) */




