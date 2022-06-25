let car = {
    color: 'blue',
    maxSpeed: 250,
    cost: 1000,
    audio: {
        brand: 'Sony',
        speakers: 12
    }
}

console.log(car.color);

car.color = 'green'
console.log(car.color);

function colorReset() {
    car.color = 'red';
    console.log(car.color);
}
colorReset();