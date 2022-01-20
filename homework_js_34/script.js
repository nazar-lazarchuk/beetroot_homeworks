// Мінімум
/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску,
середня швидкість, обсяг паливного бака, середня витрата палива на 100 км.,
водії), і наступні функції для роботи з цим об'єктом:*/

let vehicleDescription = {
   manufacturer: "Mazda",
   model: "Mazda 6",
   "release date": 2002,
   "average speed": 50,
   "fuel tank consumption": 62,
   "average fuel consumption per 100 km": 9.8,
   drivers: ["Lena Ostapenko", "Marat Muratov"],
}

// 1)Висновок на екран з інформацією про автомобіль.
function showCarInformation() {
   for (let key in vehicleDescription) {
      console.log(key + ': ' + vehicleDescription[key])
   }
}


// 2)Додавання водія, який має право керувати автомобілем.
vehicleDescription.drivers[2] = "Eva Muratova";


// 3)Заправка автомобіля.
vehicleDescription['amount petrol the moment'] = 40;
showCarInformation();
let refuelingFullTank = vehicleDescription['fuel tank consumption'] - vehicleDescription['amount petrol the moment'];
console.log(`Для полного бака, Вам нужно залить ${refuelingFullTank} литров`);

/*4)Підрахунок необхідного часу для подолання переданої відстані з середньою 
швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити
перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати
даним автомобілем (ім'я водія функція приймає другим аргументом). 
акож потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, 
якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати
заправити автомобіль.*/
function calcTimeTheTravel(distance, drivers) {
   // время потраченое на дарогу = расстояние : скорость
   let timeInWay = distance / vehicleDescription["average speed"];
   let timeInRest = (timeInWay % 4 == 0) ? (timeInWay / 4 | 0) - 1 : timeInWay / 4 | 0; /* | - побитовое или*/
   let timeTotal = distance / vehicleDescription["average speed"] + timeInRest;
   console.log(`Общее время в пути = ${timeTotal} часов`);
   if (drivers == vehicleDescription.drivers[0] || drivers == vehicleDescription.drivers[1] || drivers == vehicleDescription.drivers[2]) {
      console.log(`${drivers} вы водитель Mazda 6`)
   } else {
      console.log(`${drivers} вы не являетесь водителем Mazda 6`)
   }
}
calcTimeTheTravel(700, "Lena Ostapenko") /*- вы водитель Mazda 6*/
calcTimeTheTravel(132, "Mari") /*-вы не являетесь водителем Mazda 6*/

function сheckingFuelForTrip(distance, fuel) {
   // Расход топлива = растояние : 100 * расход топлива на 100 км
   let fuelConsumption = Math.floor(distance / 100 * vehicleDescription["average fuel consumption per 100 km"]);
   if (fuelConsumption > fuel) {
      console.log(`Тебе нужно заправиться потому, что у тебя ${fuel} литров, а твой расход составляет ${fuelConsumption} литров`)
   } else {
      console.log(`Не переживай, доедшь`)
   }
}

сheckingFuelForTrip(132, 5)
