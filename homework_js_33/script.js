// Мінімум
/* #1 Напиши функцію, яка приймає час (години, хвилини, секунди) 
і виводить його на екран у форматі «гг: хв: сс» .
Якщо при виконанні функції хвилини і / або секунди не були надані, то виводити їх як 00.*/

function showTimeFormate(hours, minutes = 0, seconds = 0) {

   const hoursFormate = hours < 10 ? `0${hours}` : hours;
   const minutesFormate = minutes < 10 ? `0${minutes}` : minutes;
   const secondsFormate = seconds < 10 ? `0${seconds}` : seconds;

   return '«' + hoursFormate + ': ' + minutesFormate + ': ' + secondsFormate + '»'
}
console.log(showTimeFormate(24, 9))


// #2 Напиши функцію, яка приймає години, хвилини і секунди і повертає цей час в секундах.
function calcTimeInSeconds(hours, minutes, seconds) {
   let secPerHour = hours * 3600;
   let secPerMinute = minutes * 60;
   return secPerHour + secPerMinute + seconds;
}
console.log(calcTimeInSeconds(2, 4, 5));

/* #3 Напиши функцію, яка приймає кількість секунд, переводить їх у години,
хвилини і секунди і повертає у вигляді рядка «гг: хв: сс».*/

function calcTme(seconds) {
   let hours = Math.floor(seconds / 60 / 60);
   let minutes = Math.floor(seconds / 60) - (hours * 60);
   let restOfSeconds = seconds % 60;

   return '«' + hours + ': ' + minutes + ': ' + restOfSeconds + '»'
}
console.log(calcTme(36659));
