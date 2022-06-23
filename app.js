let car = {
    color: 'blue',
    maxSpeed: 250,
    cost: 1000,
    audio: {
        brand: 'Sony',
        speakers: 12
    }
}

if(car.cost >= '500') {
    console.log('Автомобиль дешовый');
}
else{
    console.log('Автомобиль дорогой');
}