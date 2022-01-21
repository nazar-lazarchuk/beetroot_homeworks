//1.
// alert();
// prompt();
// confirm();
// function name(параметри, через , кому){
//   //Тіло, код функції
// }
// імя();

// let showName = fumction name(параметри, через , кому) {
//   //Тіло, код функції
// }
// імя();

// let getName = function name(параметри, через , кому)  => //Тіло, код функції;

// //2.
function showNumbers() {
  console.log(arguments.length)
}
showNumbers(6, 7, 8, 9, 10);

// // 3.
function getMin(numb1, numb2) {
    let a = -1;
    let b = 1;
    let c = 0;
    if (numb1 < numb2) {
      return a;
    }
    if (numb2 < numb1) {
        return b;
    }
    else {
      return c;
    }
  }
  console.log( getMin(3, 5) );

//4.
function factorialNumber(x) {
  let y = 1;
  for (i = 0; i < x; i++) {
      y = y * (x - i);
  }
  return y;
}
console.log( factorialNumber(6) );

// //5
function factorialNumber(a, b, c) {
  let showNumber = a + `` + b + `` + c;
  console.log(showNumber);
}
factorialNumber(1, 4, 9);

// //6
function calcArea(a, b = a) {
  let area = a * b;
  console.log(area);
}
calcArea(3, 7)

