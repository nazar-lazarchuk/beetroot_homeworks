const DRIVER_BREAK = 1;
const car = {
  manufacturer: "VAZ",
  model: 2107,
  year: 2011,
  averageSpeed: 60,
  tank: 39,
  averageFuelConsumption: 7.2,
  drivers: ["Elon Musk", "Volodymyr Zelenskiy", "Igor Kolomoisky"],
};

//ВИВІД НА ЕКРАН ПРО ХАРАКТЕРИСТИКИ МАШИНИ
console.log(`
CAR MANUFACTURER : ${car.manufacturer},
MODEL: ${car.model},
YEAR: ${car.year},
AVERAGE SPEED: ${car.averageSpeed},
TANK: ${car.tank},
AVERAGE FUEL CONSUMPTION : ${car.averageFuelConsumption}
`)

//ДОДАВАННЯ ВОДІЯ
const addDriver = (newDriver) => {
  const arrayDrivers = car.drivers;
  return arrayDrivers.push(newDriver);
};
addDriver("Oleksandr Oleksandrovych");
console.log(car);

//ЗАПРАВКА АВТО
function refuelingСar(currentFuel, distance) {
  const howManyFuelNeeded = (distance * car.averageFuelConsumption) / 100;

  if (currentFuel > howManyFuelNeeded && currentFuel <= 39) {
    return true;
  }
  if (currentFuel <= howManyFuelNeeded) {
    if (howManyFuelNeeded > car.tank) {
      const howTimesYouNeedToRefuel = Math.round(howManyFuelNeeded / car.tank);
      return `You need to stop ${howTimesYouNeedToRefuel} times to reach the destination and refuel in total ${howManyFuelNeeded - currentFuel} liters`;
    }
    return `Refuel the car on ${Math.round(howManyFuelNeeded)} liters to reach the destination`;
  }
  return "enter the correct data";
}

//ПЕРЕВІРКА ХТО МОЖЕ КЕРУВАТИ
function whoCanDriveTheCar(driver) {
  for (carDriver of car.drivers) {
    if (driver === carDriver) {
      return true
    }
  }
  return `You are not allowed to drive the car`
}

//Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю
function tripDuration(distance) {
  let tripDuration = distance / car.averageSpeed;
  if (tripDuration / 4 > 1) {
    const howManyBreaks = Math.floor(tripDuration / 4);
    tripDuration = tripDuration + DRIVER_BREAK * howManyBreaks;
  }
  return `Good speed! Your trip will continue for ${Math.ceil(tripDuration)} hours`;
}

//ФІНАЛЬНИЙ РЕЗУЛЬТАТ
function tripСalculation(distance, driver, currentFuel) {
  if(whoCanDriveTheCar(driver) === true && refuelingСar(currentFuel, distance) === true) {
    return tripDuration(distance)
  }
  if(whoCanDriveTheCar !== true){
    return whoCanDriveTheCar(driver)
  }
  if(refuelingСar !== true){
    return refuelingСar(currentFuel, distance)
  }
}
console.log(tripСalculation(100, "Elon Musk", 10));

