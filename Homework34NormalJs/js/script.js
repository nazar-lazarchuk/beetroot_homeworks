const times = {
  hour: 0,
  minute: 0,
  second: 0,
};



const time = () => {
  const formattedHour = times.hour.toString().padStart(2, "0");
  const formattedMinutes = times.minute.toString().padStart(2, "0");
  const formattedSeconds = times.second.toString().padStart(2, "0");

  return `${formattedHour} : ${formattedMinutes} : ${formattedSeconds}`;
}




const seconds = (seconds) => {
  let secondsToSeconds = (seconds % 60);
  let secondsToMinute = Math.floor((seconds / 60) % 60);
  let secondsToHour = Math.floor(seconds / 3600);
  newSecond = times.second + secondsToSeconds;
  newMinute = times.minute + secondsToMinute;
  newHour = times.hour + secondsToHour;

  if (seconds > 60) {
      return Object.assign(times, {second: newSecond}, {minute: newMinute}, {hour: newHour});
  } else
      return Object.assign(times, {second: seconds});
}

console.log(seconds(89));


const minutes = (minutes) => {
  let minutesToMinutes = (minutes % 60);
  let minutesToHours = Math.floor((minutes / 60) % 60);
  newMinute2 = times.minute + minutesToMinutes;
  newHour2 = times.hour + minutesToHours;

  if (minutes > 60) {
      return Object.assign(times, {minute: newMinute2}, {hour: newHour2});
  } else
      return Object.assign(times, {minute: minutes});
}

console.log(minutes(12));



const hours = (hours) => {
  let hourToHours = (hours % 24);
  let hourtoDays = (hours / 24) % 24;
  newHour3 = times.hour + hourToHours;
  newDay = hourtoDays;

  if (hours > 24) {
      return Object.assign(times, {hour: newHour3}, {day: 'Це наступний день'});
  } else
      return Object.assign(times, {hour: hours});
}

console.log(hours(45));

console.log(time());