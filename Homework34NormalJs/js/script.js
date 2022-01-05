const inputs = document.querySelectorAll('input[name = "number"]')
inputs.forEach(item =>{
  item.addEventListener('input', () =>{
      item.value = item.value.replace(/\D/, '');
  });
});

document.querySelector('button').onclick = function summ (){
  let hour = document.getElementById('hour').value;
  let minut = document.getElementById('minutes').value;
  let sec = document.getElementById('seconds').value;


  let hourtwo = document.getElementById('hour2').value;
  let minuttwo = document.getElementById('minutes2').value;
  let sectwo = document.getElementById('seconds2').value;

  let obj1 = {
    hours : +(hour),
    minuts : +(minut),
    secs : +(sec),
  }

  
  for(let key in obj1){
    if(obj1.secs == 60){
      obj1.minuts = obj1.minuts + 1;
      obj1.secs = '0';
    } else if(obj1.secs == 0){
      obj1.secs = '0';
    } else if(obj1.secs > 60){
      obj1.minuts = obj1.minuts + 1;
      obj1.secs = obj1.secs - 60;
    }
  }

  for(let key in obj1){
    if(obj1.minuts == 60){
      obj1.hours = obj1.hours + 1;
      obj1.minuts = '0';
    } else if(obj1.minuts == 0){
      obj1.minuts = '0';
    } else if(obj1.minuts > 60){
      obj1.hours = obj1.hours + 1;
      obj1.minuts = obj1.minuts - 60;
    }
  };


  for(let key in obj1){
    if(obj1.hours > 24){
      alert('У добі 24 години.')
      obj1.hours = "";
      obj1.minuts = "";
      obj1.secs = "";
    } else if(obj1.hours == 0){
      obj1.hours = '0';
    }
  };
  


  let obj2 = {
    hoursTwo : +(hourtwo),
    minutsTwo : +(minuttwo),
    secsTwo : +(sectwo),
  }
 
  for(let key in obj2){
    if(obj2.secsTwo == 60){
      obj2.minutsTwo = obj2.minutsTwo + 1;
      obj2.secsTwo = '0';
    } else if(obj2.secsTwo > 60){
      obj2.minutsTwo = obj2.minutsTwo + 1;
      obj2.secsTwo = obj2.secsTwo - 60;
    }
  }

  for(let key in obj2){
    if(obj2.minutsTwo == 60){
      obj2.hoursTwo = obj2.hoursTwo + 1;
      obj2.minutsTwo = '0';
    }  else if(obj2.minutsTwo > 60){
      obj2.hoursTwo = obj2.hoursTwo + 1;
      obj2.minutsTwo = obj2.minutsTwo - 60;
    }
  };

  for(let key in obj2){
    if(obj2.hoursTwo > 24){
      alert('У добі 24 години.')
      obj2.hoursTwo = "";
      obj2.minutsTwo = "";
      obj2.secsTwo = "";
    } 
  };



  function summ (){
    let resultHours =  obj1.hours + obj2.hoursTwo;
    let resultMinut =  obj1.minuts + obj2.minutsTwo;
    let resultSecond =  obj1.secs + obj2.secsTwo;

    if(resultSecond == 60){
      resultMinut = resultMinut + 1;
      resultSecond = '00';
    }else if(resultSecond > 60){
      resultMinut = resultMinut + 1;
      resultSecond = resultSecond - 60;

    }else if(resultSecond < 10 && resultSecond != 0 ){
      resultSecond = '0' + resultSecond;
    }


    if(resultMinut == 60){
      resultHours = resultHours + 1;
      resultMinut = '00';
    }else if(resultMinut > 60){
      resultHours = resultHours + 1;
      resultMinut = resultMinut - 60;
    }else if(resultMinut < 10 && resultMinut != 0){
      resultMinut = '0' + resultMinut;
    };

  
    if(resultHours < 10 && resultHours != 0){
      resultHours = '0' + resultHours;
    }else if(resultHours >= 24){
      alert('У добі 24 години.')
      resultHours = "";
      resultMinut = "";
      resultSecond = "";
    };


    document.getElementById('showhour2').innerHTML = resultHours;
    document.getElementById('showminutes2').innerHTML = resultMinut;
    document.getElementById('showseconds2').innerHTML = resultSecond;

  }
  summ();
}
