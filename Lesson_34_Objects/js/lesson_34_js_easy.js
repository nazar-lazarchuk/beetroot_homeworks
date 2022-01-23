// Point 1. Object - car

const objCar = {
    producedBy: "China Guangzhou Manufacture Ali Express", // by old freaks at warehouse of uncle Li
    model: "A bucket with rusty nuts", // the best description of it`s quality
    yearOfProduce: 2020, // with technologies from 19th century
    averageSpeed: 40, // while running down the mountain
    fuelTank: 120, // li = 1/100 of litres
    averageFuelConsumption: 10, // with power off engine. because of a hole in the gas tank
    drivers: ["Uncle Li", "No one knows him", "Godness help me stay alive"],
}

// Task 1. Show the full information

function carInfo(obj) {
    return `The car is produced by: ${obj.producedBy}. 
    Car model: ${obj.model}. 
    Production year: ${obj.yearOfProduce}.
    The average speed: ${obj.averageSpeed} km/hour. 
    The capacity os the fuel tank: ${obj.fuelTank} liters. 
    Average fuel consumption: ${obj.averageFuelConsumption} liters/100km.
    Licensed drivers: ${obj.drivers}.`;
}

console.log(carInfo(objCar));

// Task 2. Adition of a new driver

objCar.drivers.push("Bob");

console.log(carInfo(objCar));

// Task 3. Refuel the car

objCar['currentFuelAmount'] = 100;

let currentFuelAmountMessage = (objCar.currentFuelAmount > objCar.fuelTank) ? 
    `You can not put more than 120 litres.`:
    `The current quantity if fuel is: ${objCar.currentFuelAmount} litres.`;

console.log(currentFuelAmountMessage);


// Task 4. Time to ride

// checking the driver 

const CURRENT_DRIVER = "Bob";

function driverForRide(x) {
    x = false;
    for (i = 0; i < objCar.drivers.length; i++) {
        if (CURRENT_DRIVER == objCar.drivers[i]) {
            x = true;
            return `The driver ${CURRENT_DRIVER} is allowed to ride this shit with wheels.`;
        }
    };
    if (x == false) {
        return `${CURRENT_DRIVER}! Go away and buy the driver lisence!!!`;
    }
}

console.log(driverForRide(CURRENT_DRIVER));

// checking the fuel

const RIDE_DISTANCE = 500; // km

function checkingFuelForRide(x) {
    if (objCar.currentFuelAmount * objCar.averageFuelConsumption > x) {
        return `You have enough fuel to ride.`;
    }
    else {
        return `You have to refuel your fuel tank.`;
    }
}

console.log(checkingFuelForRide(RIDE_DISTANCE));

// time to ride

function timeToRide(x) {
    x = RIDE_DISTANCE / objCar.averageSpeed;
    // console.log(x); // ---- clear time to ride
    if ((x / 4) > 1) {
        let y = Math.floor(x / 4);
        // console.log(y); // ---- breaks
        x = x + y;
    }
    console.log(`The time to ride is ${x} hours including breaks.`);
}
timeToRide();

// console.log(timeToRide(objCar));