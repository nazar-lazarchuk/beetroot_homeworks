//Мінімум
const age = prompt('Який ваш вік?');
if (age >= 0 && age < 11) {
  alert('Ви дитина');
} else if (age >= 12 && age < 17) {
  alert('Ви підліток');
} else if (age >= 18 && age < 59) {
    alert('Ви дорослий');
} else if (age >= 60 && age < 100) {
    alert('Ви пенсіонер');
} else {
  alert('Неккоректно введенний вік');
}


const number = prompt('Введіть число від 0 до 9?');
if (number == 0) {
  alert(')');
} else if (number == 1) {
  alert('!');
} else if (number == 2) {
    alert('@');
} else if (number == 3) {
    alert('#');
} else if (number == 4) {
    alert('$');
} else if (number == 5) {
    alert('%');
} else if (number == 6) {
    alert('^');
} else if (number == 7) {
    alert('&');
} else if (number == 8) {
    alert('*');
} else if (number == 9) {
    alert('(');
} else {
  alert('Неккоректно введенне число');
}


let n1 = prompt('Введіть перше число?');
let n2 = prompt('Введіть друге число?');
let sum = 0;
while(n1<n2) {

    n1++;
    sum+=n1;
}
alert(`Сума всіх чисел в заданому діапазоні становитиме ${sum}`);


let numb1 = +prompt('Введіть перше число для ділення?');
let numb2 = +prompt('Введіть друге число для ділення?');
let numb3;
calc(numb1, numb2);
function calc(a, b) {
  let c;
  while (a != b) {
    if (a > b) {
      a = a - b;

    } else
    if (a < b) {
      c = a;
      a = b;
      b = c;
    }

  }
  return numb3 = a
};
alert(`загальний дільник буде ${numb3}`);


let numb4 = +prompt(`Введіть друге число щоб отримати всі можливі дільники?`);
for (let i = 1; i <= numb4; i++) {
    if (numb4 % i == 0) {
        console.log(i);
    }
};



