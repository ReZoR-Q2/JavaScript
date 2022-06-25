let car = {
    color: 'red',
};
let car2 = {
    color: 'green',
};

colorChange(car);
colorChange(car2);

function colorChange(theCar) {
    theCar.color = 'yellow';

}

console.log("Car: " + car.color);
console.log("Car2: " + car2.color);