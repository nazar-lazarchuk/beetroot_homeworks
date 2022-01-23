//мінімум
function showTime(hour, minutes, seconds) {
let hourFormat = hour.toString().padStart(2, "0");
let minutesFormat = minutes.toString().padStart(2, "0");
let secondsFormat = seconds.toString().padStart(2, "0");
return `${hourFormat} : ${minutesFormat} : ${secondsFormat}`;
}

console.log(showTime(5, 4, 7));

function showTimeInSeconds(hour, minutes, seconds) {
  let hourFormatInSeconds = hour * 3600;
  let minutesFormatInSeconds = minutes * 60;
  return hourFormatInSeconds + minutesFormatInSeconds + seconds;
}
  
console.log(showTimeInSeconds(5, 4, 7));

function showTimeInStandart(seconds) {
  let formatInHour = Math.floor(seconds / 60 / 60);
  let formatInMinutes = Math.floor(seconds / 60) - (formatInHour * 60);
  let formatInSeconds = seconds % 60;
  let hourFormat = formatInHour.toString().padStart(2, "0");
  let minutesFormat = formatInMinutes.toString().padStart(2, "0");
  let secondsFormat = formatInSeconds.toString().padStart(2, "0");
  return `${hourFormat} : ${minutesFormat} : ${secondsFormat}`;
}    

console.log(showTimeInStandart(8300));
  
