//task1

/*
function FunctionDeclaration(parameters) {
  //Function Declaration
  console.log("I do Something");
}

let FunctionExpression = function (parameters) {
  //Function Expression
  console.log("I do Something");
};

let ArrowFunction = (parameters) => {
  //Arrow Function
  console.log("I do Something");
};

let Anonymous = function () {
  //Anonymous Function
  console.log("I do Something");
};

//Higher-Order Function

function(){               //immediately-invoked function expressions
    console.log("I do Something");
}();


//task 2
function NumberOfArguments() {
  console.log(arguments.length);
}

NumberOfArguments(1, 2, 3, 4, 5, 6, "a");

//task3
function Comparison(a, b) {
  if (a < b) console.log(-1);
  else if (a > b) console.log(1);
  else if (a === b) console.log(0);
}
Comparison(9, 8);

//task4
function Factorial(a) {
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
function AreaOfRectangle(a, b = a) {
  let area = a * b; //якщо зберігати окремо не треба, то return a*b
  return area;
}
console.log(AreaOfRectangle(5));
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
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}

isPerfect(28);

//task2
function ShowPerfectNumberFromRange(from, to) {
  for (let i = from; i <= to; i++) {
    let temp = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        temp += j;
      }
    }

    if (temp === i && temp !== 0) {
      console.log(i);
    }
  }
}
ShowPerfectNumberFromRange(1, 1000);
