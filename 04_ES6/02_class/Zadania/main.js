class Vehicle {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `Hi, my name is ${this.name}`;
    }
}

class Boat extends Vehicle {
    sail() {
        return `${this.name} pływa!`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.name} jedzie!`
    }
}

class Plane extends Vehicle {
    fly() {
        return `${this.name} fly!`
    }
}

const boat = new Boat("Niezatapialna 2");
console.log(boat.name);
console.log(boat.sayHello());
console.log(boat.sail());
// console.log(boat.drive());
// console.log(boat.fly());

const car = new Car("Kit");
console.log(car.drive());