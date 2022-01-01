
document.querySelector('button').onclick = function(){
  let newYear = new Date(document.querySelector('#start-date').value);
  let currentDate = new Date(document.querySelector('#end-date').value);
  let sec = (newYear - currentDate) / 1000;
  let h = sec/3600 ^ 0 ;
  let m = (sec-h*3600)/60 ^ 0 ;
  let s = sec-h*3600-m*60 ^ 0 ;
  /* alert((h<10?"0"+h:h)+" ч. "+(m<10?"0"+m:m)+" мин. "+(s<10?"0"+s:s)+" сек.") ;  - цей код я знайшов в інтернеті (але він дуже на мій огляд складний) 
  - тому я переробив його і нижче вивів в alert*/
  alert(('0' + h).slice(1) +" ч. " + " " + ('0' + m).slice(-2)+" мин. " + " " + ('0' + s).slice(-2)+ " сек. ")
}

