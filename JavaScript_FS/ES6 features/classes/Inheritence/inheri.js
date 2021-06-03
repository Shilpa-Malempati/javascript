class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}
class Car extends Vehicle {
  constructor(name) {
    super(name, "car");
  }

  getName() {
    return "It is a car: " + super.getName();
  }
}
let car = new Car("Benz");
console.log(car.getName()); // It is a car: Benz
console.log(car.getType()); // car
