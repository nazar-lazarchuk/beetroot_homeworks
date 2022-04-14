const time = {
  hours: 20,
  minutes: 47,
  seconds: 23,
  formattedTime: function () {
    const formatedHours = this.hours.toString().padStart(2, "0");
    const formatedMinutes = this.minutes.toString().padStart(2, "0");
    const formatedSeconds = this.seconds.toString().padStart(2, "0");
    return `${formatedHours}:${formatedMinutes}:${formatedSeconds}`;
  },
  changeTheSeconds: function (a) {
    if (typeof a === "number") {
      this.seconds = a + this.seconds;
      if (this.seconds >= 60) {
        const newMinutes = Math.floor(this.seconds / 60);
        this.seconds = this.seconds - newMinutes * 60;
        this.minutes = newMinutes + this.minutes;
      }
      if (this.minutes >= 60) {
        const newHours = Math.floor(this.minutes / 60);
        this.minutes = this.minutes - newHours * 60;
        this.hours = newHours + this.hours;
      }
    }
    return `${this.seconds}`;
  },
  changeTheMinutes: function (a) {
    if (typeof a === "number") {
      this.minutes = a + this.minutes;
      if (this.minutes >= 60) {
        const newHours = Math.floor(this.minutes / 60);
        this.minutes = this.minutes - newHours * 60;
        this.hours = newHours + this.hours;
      }
    }
    return `${this.minutes}`;
  },
  changeTheHours: function (a) {
    if (typeof a === "number") {
      this.hours = a + this.hours;
      if (this.hours >= 24) {
        this.hours = Math.floor(this.hours % 24);
      }
      return `${this.hours}`;
    }
  },
};

time.changeTheSeconds(37);
time.changeTheMinutes(12);
time.changeTheHours(3);
console.log(time.formattedTime());
