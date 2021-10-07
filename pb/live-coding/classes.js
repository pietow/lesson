// classes introduced in 2015 (ES6)
// classes are wrappers over prototyped inheritance, syntactic sugar, 
// a new syntax, but nothing essentially new

// the basic syntax is:

// class declaration (class declarations are not hoisted like function declarations)
// class MyClass {
//     // class methods
//     constructor() {
//         //
//     }
//     method1() { ... }
//     method2() { ... }
//     ... 
// }

// use MyClass class new MyClass()

class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}
// Usage
let user = new User('John');
console.log('user is ', user);
user.sayHi(); // 'John'

// What happens is:
// 1. a function named "User" is created, which becomes the result of the class declaration
// 2. class methods, such as sayHi, are stored in User.prototype

console.log(typeof User);
// a class is just a special kind of function

console.log(User === User.prototype.constructor);

console.log(user.prototype.sayhi);
console.log(object.getownpropertynames(user.prototype));

// class expressions
let user2 = class {
    sayhi() {
        console.log('hello');
    }
}
new user2().sayhi();

let user3 = class myclass {
    sayhi() {
        console.log(myclass);
    }
}
new user3().sayhi()
console.log(myclass);


function makeClass(phrase) {
    // declare a class and immediately return it
    return class {
        sayHi() {
            console.log(phrase);
        }
    }
}
let User4 = makeClass('Hello');
let carlos = new User4();
carlos.sayHi();
new User4().sayHi(); // Hello

// Carlos is an instance of the class of humans
// The 911 in front of my dentist's house is an instance of the 
// class of 911 Porsche cars.
// If you own a German Shepherd named "Fido", then Fido is an instance of the class of 
// German Shepherds.
// Class A is a subclass of class B if and only if every member of A is a member of B.
// The class of German Shepherds in HH is a subclass of the class of German Shepherds in Germany. 
// The class of even numbers is a subclass of the class of integers.

class Vehicle {
    constructor(type, speed) {
        this.type = type;
        this.speed = speed;
    }
    move() {
        console.log(`vehicle.move: ${this.type}, ${this.speed}`)
    }
    stop() {
        console.log(`vehicle.stop: ${this.type}, ${this.speed}`);
    }
    // static: call directly on the class
    static info() {
        console.log("Vehicle is a base vehicle class");
    }
}
let rustyCar = new Vehicle('car', 10);
rustyCar.move();
console.log(rustyCar);
rustyCar.stop();
Vehicle.info();

// 1. super.method(...) to call a parent method
// 2. super(...) to call a parent constructor (inside our constructor only!)

class Car extends Vehicle {
    constructor(speed) {
        super("car", speed);
        this.jet = false;
    }
    // extends the stop method
    emergencyStop() {
        console.log(`car.emergencyStop ${this.type}, ${this.speed}`);
        this.jet = true;
        this.stop();
    }
}
let newCar = new Car(20);
newCar.move();
Car.info();

class SuperCar extends Car {
    constructor() {
        super(200); // since the car constructor  takes only one argument (speed)
        this.jet = false;
    }
    move() {
        console.log(`supercar.move ${this.type}, ${this.speed}`);
        this.jet = true;
        super.move(); //
    }
}
let coolCar = new SuperCar();
console.log(coolCar.jet);
coolCar.move();
console.log(coolCar.jet);



