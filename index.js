"use strict";
// const person = {
//     name: "Niklas",
//     age: 40,
// };

// // Source object
// const personDetailedInfo = {
//     lastName: "Fähnrich",
//     occupation: "Developer",
// };

// console.log(person);
// console.log(personDetailedInfo);

// const updatedObject = Object.assign(person, personDetailedInfo);

// console.log(updatedObject);

const house = {
    color: "green",
    area: 200,
    adress: "Drottninggatan",
    city: "Stockholm",
};

// const keys = Object.keys(house);
// console.log(keys);

// const values = Object.values(house);
// console.log(values);

// const entries = Object.entries(house);
// console.log(entries);

// const frozenHouse = Object.freeze(house);

// frozenHouse.color = "Blue";

// const isFrozen = Object.isFrozen(frozenHouse);

// console.log(isFrozen);

// const car = {
//     make: "Saab",
//     model: "93",
//     color: "Silver",
// };

// const sealedCar = Object.seal(car);

// car.color = "Red";
// console.log(sealedCar);

// const carIsSealed = Object.isSealed(car);
// console.log(carIsSealed);

// const newCar = {};
// console.log(car);
// console.log(newCar);

// const anotherCar = {...car};
// console.log(anotherCar);

// anotherCar.transmission = "manual";

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const numbersDoubled = numbers.map( (number) => {
//     return number * 2;
// } );

// console.log(numbersDoubled);

// const volvo = {
//     make: "Volvo",
//     model: "V90",
//     color: "Green",
// }

// const saab = {
//     make: "Saab",
//     model: "93",
//     color: "Blue",
// }

// const vw = {
//     make: "volkswagen",
//     model: "Sharan",
//     color: "Red",
// }

// // Add the objects to the array
// const cars = [volvo, saab, vw];

// const carsAllRed = cars.map((car) => {
//     if (car.color === "Red") {
//         return car;
//     }
//     return {...car, color: "Red"};
// });

// console.log(carsAllRed); // New colors
// console.log(cars); // Old colors

const numbers = [0, 1, 1, 1, 0, 1, 0];

const allOnes = numbers.filter((number) => {
    if (number === 0) {
        return false;
    }
    
    return true;
});

console.log(allOnes);
