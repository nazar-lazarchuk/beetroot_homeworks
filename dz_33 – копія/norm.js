const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;


let timeDifference = (h1, m1, s1, h2, m2, s2) => {
    let firstDateInSeconds =  (h1 * SECONDS_IN_HOUR) + (m1 * SECONDS_IN_MINUTE) + s1;
    let secondDateInSeconds =  (h2 * SECONDS_IN_HOUR) + (m2 * SECONDS_IN_MINUTE) + s2;
    let resultInSeconds = 0
    if (firstDateInSeconds > secondDateInSeconds) { 
        resultInSeconds = firstDateInSeconds - secondDateInSeconds; 
    }if (secondDateInSeconds > firstDateInSeconds) {
        resultInSeconds = secondDateInSeconds - firstDateInSeconds; }
    let hours = Math.floor(resultInSeconds / SECONDS_IN_HOUR);
    let seconds = resultInSeconds % 3600;
    let minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
    seconds = seconds % 60;
    console.log(`Різниця в ${hours} годину ${minutes} хвилин  ${seconds} секунд`)
}

console.log(timeDifference(13, 11, 3, 12, 1, 3)); 

