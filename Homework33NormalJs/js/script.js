const time = function (hour, minutes, seconds) {
  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHour} : ${formattedMinutes} : ${formattedSeconds}`;
};

console.log(time(2, 14, 5));



const seconds = function (hour, minutes, seconds) {
  let hourToSeconds = hour * 3600;
  let minutesToSeconds = minutes * 60;

  return hourToSeconds + minutesToSeconds + seconds;
};

console.log(seconds(1, 1, 1));



const timeInSeconds = function (seconds) {
  let transHours = Math.floor(seconds / 60 / 60);
  let transMinutes = Math.floor(seconds / 60) - transHours * 60;
  let transSeconds = seconds % 60;

  return time(transHours, transMinutes, transSeconds);
};

console.log(timeInSeconds(2400));



const differenceInTime = function (h1, m1, s1, h2, m2, s2) {
  let firstDate = seconds(h1, m1, s1);
  let secondDate = seconds(h2, m2, s2);
  let difference = firstDate - secondDate;

  return timeInSeconds(difference);
};

console.log(differenceInTime(5, 9, 4, 5, 1, 1));