const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

//1
let userTime = (hours, minutes, seconds) => {
    let formatedHours = hours.toString().padStart(2, '0');
    let formatedMinutes = minutes.toString().padStart(2, '0');
    let formatedSeconds = seconds.toString().padStart(2, '0');
    console.log(`${formatedHours} : ${formatedMinutes} : ${formatedSeconds}`)
}
userTime(12, 2, 23)

//2
let howManySeconds = (hours, minutes, seconds) =>{
    let hoursToSeconds =  hours * SECONDS_IN_HOUR;
    let minutesrToSeconds =  minutes * SECONDS_IN_MINUTE;
    console.log("Секунд в заданому Вами часі дорівнює " + (hoursToSeconds+minutesrToSeconds+seconds))
}
howManySeconds(1, 3, 50)

//3

let getTime = (usersSeconds) =>{
    let hours = Math.floor(usersSeconds / SECONDS_IN_HOUR);
    let seconds = usersSeconds % 3600;
    let minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
    seconds = seconds % 60;
    console.log(`${hours} годин ${minutes} хвилин  ${seconds} секунд`)
}

getTime(14131); //3:55:31
getTime(1131); //0:18:51
