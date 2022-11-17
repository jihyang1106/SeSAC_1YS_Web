const { Car } = require('./07_class');
console.log(Car); // 클래스로 가져오게됨! [class Car]

let car1 = new Car("red");
console.log(car1.returnColor()); // red
let car2 = new Car("blue");
console.log(car2.returnColor()); // blue
let car3 = new Car("green");
console.log(car3.returnColor()); // green