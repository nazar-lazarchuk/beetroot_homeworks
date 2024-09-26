//task1

/*
function functionDeclaration(parameters) {
  //Function Declaration
  console.log("I do Something");
}

let functionExpression = function (parameters) {
  //Function Expression
  console.log("I do Something");
};

let arrowFunction = (parameters) => {
  //Arrow Function
  console.log("I do Something");
};

let anonymous = function () {
  //Anonymous Function
  console.log("I do Something");
};

//Higher-Order Function

function(){               //immediately-invoked function expressions
    console.log("I do Something");
}();


//task 2
function numberOfArguments() {
  console.log(arguments.length);
}

numberOfArguments(1, 2, 3, 4, 5, 6, "a");

//task3
function comparison(a, b) {
  if (a < b) console.log(-1);
  else if (a > b) console.log(1);
  else if (a === b) console.log(0);
}
comparison(9, 8);

//task4
function factorial(a) {
  let factorial = 1;
  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(Factorial(6));

//task5
function doConversionToOneNumber(a, b, c) {
  let newNumber = +`${a}${b}${c}`;
  return newNumber;
}
console.log(doConversionToOneNumber(1, 2, 3));

//task6
function areaOfRectangle(a, b = a) {
  let area = a * b; //якщо зберігати окремо не треба, то return a*b
  return area;
}
console.log(areaOfRectangle(5));
*/

// NORMA
//task1
function isPerfect(a) {
  let temp = 0;
  for (let i = 1; i <= a / 2; i++) {
    if (a % i === 0) {
      temp += i;
    }
  }

  if (temp === a && temp !== 0) {
    return true;
  } else {
    return false;
  }
}

function showPerfectOrNot(a) {
  if (isPerfect(a)) console.log('This number is perfect')
  else  console.log('This number is not perfect');
}
showPerfectOrNot(29);

//task2
function showPerfectNumberFromRange(from, to) {
  for (let i = from; i <= to; i++) {
    let temp = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        temp += j;
      }
    }

    if (isPerfect(i)) console.log(i);
  }
}

showPerfectNumberFromRange(1, 1000);
