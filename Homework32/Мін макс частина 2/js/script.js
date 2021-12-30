
document.getElementById("myBtn").addEventListener("click", PerfectNumber);  

function PerfectNumber(){
  let start = document.getElementById('start').value;
  start = parseInt(start);
  let end = document.getElementById('end').value;
  end = parseInt(end);
  let i = 1;
  let total = 0;
  let flag = 0;

  for(start = start; start <= end; start++){
    for(i=1; i < start; i++){
      if(start % i == 0)
      total += i;
    }
    if((total == start) && (start != 0)){
      if(flag < 1)  {
        document.write("Досконалими числами є: ");
        flag = 1;
      }
        document.write( start + ' ');
    }
      total = 0;
  }

  if(flag == 0)
    document.write("В цьому діапазоні відсутні досконалі числа");
}