
let btn = document.getElementById('btn');
let prNum = Math.floor((Math.random() * 100) + 1);
btn.addEventListener('click', f1);

function f1 () {
  let num, out;
  
  num = document.getElementById ('mynum').value;
  out = document.getElementById('out')
  if(num == prNum){
    out.innerHTML = 'Ви вгадали';
    out.style.background = 'green';
  }else if(num > prNum){
    out.innerHTML = 'Ви ввели число більше ніж те що загадала програма';
    out.style.background = 'red';
  }else {
    out.innerHTML = 'Ви ввели число менше ніж те що загадала програма';
    out.style.background = 'blue';
    out.style.color = 'white';
  }

}
