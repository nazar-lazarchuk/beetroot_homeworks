// Point 1. The creation of functions

/*
function имя(параметры, через, запятую) {
  // тело, код функции
}
имя();

let numberOne = function имя(параметры, через, запятую) {
  // тело, код функции
}
имя();

let numberTwo = function имя(параметры, через, запятую) => // тело, код функции ;

alert();
prompt();
confirm();
*/

// Point 2. Number of arguments

function argumentCounter() {
    console.log(Array.isArray(arguments));
    console.log(arguments.length);
}

argumentCounter(1, 2, 3); // the answer is '3'

// Point 3. Comparison of two numbers

function numberComparison(x, y) {
    if (x === y) {
        return 0;
    }
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
}

let result = numberComparison(10, 10);
alert(result);

// Point 4. 

function factorialNumber(x) {
    let y = 1;
    for (i = 0; i < x; i++) {
        y = y * (x - i);
    }
    return y;
}

let factorialResult = factorialNumber(7);
alert(factorialResult);

// Point 5. Combination of three numbers

function numberCombination(x, y, z) {
    return x + "" + y + "" + z;
}

let combinationResult = numberCombination(1, 5, 3);
alert(combinationResult);

// Point 6. 

function rectangleArea (x, y = x) { 
    return x * y;
}

let rectangleAreaResult = rectangleArea(8, 2);
alert(rectangleAreaResult);