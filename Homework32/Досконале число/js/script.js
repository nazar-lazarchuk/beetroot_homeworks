function setPerfectNumber (num) {
  let sum = 0;

  for (let i = 1; i <= num - 1; i++) {
      if (num % i === 0) {
          sum += i;
      }
  }
  if (num === sum) {
      return true;
  } else {
      return false;
  }
}

console.log(setPerfectNumber(6));



function isNumPerfect (x, y) {

  for (let i = x; i < y; i++) {
      let sum = 0;

      for (let y = 1; y <= i / 2; y++) {
          if (i % y === 0) {
              sum += y; 
          }
      }
      if (i === sum) {
          console.log(i)
      }
  }
}

isNumPerfect(10, 1000);