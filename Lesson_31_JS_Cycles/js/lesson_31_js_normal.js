// Point 1. A palindrome

let input = +prompt(`Please, enter 5-digit integer.`);

let palindromeNumber = function palindrome(x) {
    if (x < 0) return false;
    if (x % 10 === 0) return false;
    if (x < 10) return true;

    let rev = 0;

    while (x > rev) {
        console.log(x, rev);
        rev *= 10;
        rev += x % 10;
        x = Math.trunc(x / 10);
    }
    console.log(x, rev);
    return x === rev || x === Math.trunc(rev / 10);
}

console.log(palindromeNumber(input));
if (palindromeNumber(input) == true) {
    alert(`This number is a palindrome.`);
}
if (palindromeNumber(input) == false) {
    alert(`This number is not a palindrome.`);
}

// Point 2. Discount

let paySum = prompt(`Please, enter the payment ammount.`);

let discountRate = 0;
let discountSum = 0;
let finalSum = 0;

if (paySum <= 0) {
    alert(`Wrong number. Try again.`);
} 
if (paySum > 0 && paySum < 200) {
    alert(`The sum of your check is ${paySum} $. There is no any discount.`);
}
if (paySum >= 200 && paySum < 300) {
    discountRate = 0.03;
}
if (paySum >= 300 && paySum < 500) {
    discountRate = 0.05;
}
if (paySum >= 500) {
    discountRate = 0.07;
}

discountSum = Math.round(paySum * discountRate * 100) / 100;
finalSum = paySum - discountSum;
console.log(discountSum);
console.log(finalSum);
alert(`The total sum of your check is ${finalSum} $. Your discount is ${discountSum} $.`);

// Point 3. Ten numbers

let arrNumbers = [];
let arrayWindow = '';
for (let i = 0; i < 10; i++) {
    arrayWindow = prompt("Enter a number. Press cancel or leave empty to finish and press OK.");
    if (arrayWindow === null || arrayWindow === "") break;
    else {
        arrNumbers.push(arrayWindow);
    }
}

console.log(arrNumbers);
console.log(arrNumbers.length);

let countZero = 0;
let countPlus = 0;
let countMinus = 0;

for (i = 0; i < arrNumbers.length; i++ ) {
    if (arrNumbers[i] == 0)
    countZero++;
    if (arrNumbers[i] > 0)
    countPlus++;
    if (arrNumbers[i] < 0)
    countMinus++;
}

console.log(countZero, countPlus, countMinus);
alert(`Total sum of: zeros - ${countZero}, positive numbers - ${countPlus}, negative numbers - ${countMinus}.`);

// Point 4. Days of the week

let nowDate = new Date();
let nowDay = nowDate.getDay();

console.log(nowDay);

for (;nowDay >= 0;) {
    if (nowDay === 0) {
        alert('Today is Sunday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 1) {
        alert('Today is Monday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 2) {
        alert('Today is Tuesday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 3) {
        alert('Today is Wednesday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 4) {
        alert('Today is Thursday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 5) {
        alert('Today is Friday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 6) {
        alert('Today is Saturday. Press OK if you wanna know what day will be after it.');
        nowDay = 0;
    }
}
