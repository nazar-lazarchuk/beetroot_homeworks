// Мінімум

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
// Висновок на екран з інформацією про автомобіль.
// Додавання водія, який має право керувати автомобілем.
// Заправка автомобіля.
// Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.

const carDescription = {
    producer: "toyota",
    model: "corola E180",
    production_year: "2016",
    averageSpeed: "75",
    tankCapacity: "55",
    averageConsumption: "12",
    drivers: ["Vasyl", "Stepan"],
};

//Висновок на екран
console.log(carDescription);

// Додавання водія
carDescription.drivers.push('Ostap');
// carDescription.drivers[2] = "Ostap";
console.log(carDescription);

// Заправка автомобіля
carDescription.isTankFull = true;
console.log(carDescription);

// Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю

function timeTravel(distance) {
    let timeTravel = distance / carDescription.averageSpeed;
    let timeRest =
        timeTravel % 4 == 0 ? ((timeTravel / 4) | 0) - 1 : (timeTravel / 4) | 0;
    let timeTotal = timeTravel + timeRest;
    console.log(`Total time in travel = ${timeTotal} hours`);
}

function isPersonDriver(drivers) {
    
        if (carDescription.drivers.includes(drivers)) {

        console.log(`${drivers} - The person is driver of the car`);
    } else {
        console.log(`${drivers} - !!! The person not driver of the car`);
    }
}

//Перевірка
timeTravel(600, "Stepan");
isPersonDriver("Ostap");
isPersonDriver("Stepan");
isPersonDriver("MamaRika");

// Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.

function isFuelEnoughToTravel(distance, fuelInTank) {
  let fuelConsumption = Math.floor(distance / 100 * carDescription.averageConsumption);

    if (fuelConsumption > fuelInTank) {
        console.log(`You have ${fuelInTank} gallons in your tank. It isn't enough for a travel ${distance}km`)
    } else {
        console.log(
            `You have ${fuelInTank} gallons in your tank. It is enough to travel on a distance ${distance} km`
        )
    }
}

isFuelEnoughToTravel(330, 45);

