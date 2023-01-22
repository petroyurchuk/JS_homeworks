//==================================================ES6

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  constructor({ maxSpeed, speed, isOn, distance, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = isOn;
    this.distance = 0;
    this.price = price;
  }

  get forPrice() {
    return this.price;
  }
  set Add(price) {
    return this.price + price;
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    this.speed = 0;
    return (this.isOn = false);
  }

  accelerate(value) {
    return this.speed + value <= this.maxSpeed ? (this.speed += value) : false;
  }

  decelerate(value) {
    return this.speed - value > 0 ? (this.speed -= value) : false;
  }

  drive(hours) {
    return this.isOn ? (this.distance += hours * this.speed) : false;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

//==================================================ES5

function CarS({ maxSpeed, speed, isOn, distance, price }) {
  this.maxSpeed = maxSpeed;
  this.speed = 0;
  this.isOn = isOn;
  this.distance = 0;
  this.price = price;
}
CarS.getSpecs = function (car) {
  console.log(
    `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
  );
};
CarS.prototype.getter = function () {
  return this.price;
};
CarS.prototype.setter = function (price) {
  return this.price + price;
};
CarS.prototype.turnOn = function () {
  return (this.isOn = true);
};
CarS.prototype.turnOff = function () {
  this.speed = 0;
  return (this.isOn = false);
};
CarS.prototype.accelerate = function (value) {
  return this.speed + value <= this.maxSpeed ? (this.speed += value) : false;
};
CarS.prototype.decelerate = function (value) {
  return this.speed - value > 0 ? (this.speed -= value) : false;
};
CarS.prototype.drive = function (hours) {
  return this.isOn ? (this.distance += hours * this.speed) : false;
};
console.log("");
console.log("ES5");

const mustangS = new CarS({ maxSpeed: 200, price: 2000 });

mustangS.turnOn();
mustangS.accelerate(50);
mustangS.drive(2);

CarS.getSpecs(mustangS);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustangS.decelerate(20);
mustangS.drive(1);
mustangS.turnOff();

CarS.getSpecs(mustangS);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustangS.price); // 2000
mustangS.price = 4000;
console.log(mustangS.price); // 4000
