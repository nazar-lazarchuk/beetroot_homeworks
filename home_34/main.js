//Min
//1
let vihicle = {
  manufacturer: "Spain",
  model: "Seat",
  year: "2017",
  averageSpeed: "100",
  fuelLevel: "55",
  fuelConsumption: "5",
  driver1: "Ivan",
  driver2: "Alex",
};

//2
function list() {
  for (key in vihicle)
  console.log(`${key}: ${vihicle[key]}`);
};
list();

//3
function addDriver() {
  return Object.assign(vihicle, {driver3: "Vlad"},);
}
addDriver();
console.log(vihicle);

//4
currentFuelLevel = 8;
let FuelLevel = (currentFuelLevel < 10) ? `Потрібна заправка`: `У вас ще ${currentFuelLevel}л`;
console.log(FuelLevel);

//5
function showTimeOnRide(distance, driver) {
let timeOnRoad = +(distance / vihicle.averageSpeed);
if (driver === vihicle.driver1 || driver === vihicle.driver2 || driver === vihicle.driver3) {
  if (timeOnRoad > 4) {
    let longRide = timeOnRoad + 1;
    return console.log(`дорога займе ${longRide}`);
  } else {
    return console.log(`дорога займе ${timeOnRoad}`);
  }
} else 
return console.log(`Ви не водій`);
};
showTimeOnRide(450, "Ivan");

function isFuelEnough(distance, fuel) {
  let fuelForRide = +(distance / 100) * vihicle.fuelConsumption;
  let fuelDifference = +(fuelForRide - fuel);
  if (fuelForRide > fuel) {
    return console.log(`для поїздки вам необхідно ще ${fuelDifference}л`)
  } else {
    return console.log(`Вам достатньо палива для поїздки`);
  }
}
isFuelEnough(450, 20);

