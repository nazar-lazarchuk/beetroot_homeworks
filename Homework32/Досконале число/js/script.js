document.getElementById("myBtn").addEventListener("click", PerfectNumber);  

function PerfectNumber(){
  let num = document.getElementById('num').value;
  num = parseInt(num);
  let sum = 0;
  let reminder;
  for (let i = 0; i < num ; i++){
    reminder = num%i;
    if(reminder === 0){
      sum +=i;
    }
  }
  if(num === sum){
    alert(num + ' - Досконале число')
  }else {
    alert(num + ' - це не досконале число')
  }
}
