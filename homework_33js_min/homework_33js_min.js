// Мінімум

// 1.Напиши функцію, яка приймає час (години, хвилини, секунди) і виводить його на екран у форматі «гг: хв: сс» .Якщо при виконанні функції хвилини і / або секунди не були надані, то виводити їх як 00.
// 2.Напиши функцію, яка приймає години, хвилини і секунди і повертає цей час в секундах.
// 3.Напиши функцію, яка приймає кількість секунд, переводить їх у години, хвилини і секунди і повертає у вигляді рядка «гг: хв: сс».

//1.
showTime = (hours, minutes, seconds) => {
    const hoursFormate = hours.toString().padStart(2, '0');
    const minutesFormate = minutes.toString().padStart(2, '0');
    const secondsFormate = seconds.toString().padStart(2, '0');
    return `${hoursFormate}:${minutesFormate}:${secondsFormate}`;
};
console.log(showTime(2, 0, 0));

//2
getTimesChangeFormate = (hours, minutes, seconds) => {
    const hoursFormate = (hours * 3600);
    const minutesFormate = (minutes * 60)
    return hoursFormate + minutesFormate + seconds;
}
console.log(getTimesChangeFormate(3, 45, 35));

//3
const getNumbersOfSeconds = function (seconds) {
    const transformHoursFormate = Math.floor(seconds / 60 / 60);
    const transformMinutesFormate = Math.floor((seconds / 60) - (transformHoursFormate * 60));
    const restOfSeconds = seconds % 60;
    return  + (transformHoursFormate) + ':' + transformMinutesFormate + ':' + restOfSeconds;
}
console.log(getNumbersOfSeconds(38555));