// Predict what will be logged to the console
let o = { x: 1 };
let p = o;
console.log(o.x);
o = { y: 2 };
console.log(o.x);
console.log(p.x);
console.log(o.y);
o.z = 3;
console.log(o);

// reserved words are allowed (but not recommended) as property names
const resObj = {
    let: 1, 
    const: 2,
    return: 3
}
console.log('let + const + return is ', resObj.let + resObj.const + resObj.return);

// property value shorthand notation
function createUser(name, age) {
    return {
        // name: name,
        // age: age,
        // logUser: function() {
        //     console.log(`${this.name} is ${this.age} years old.`);
        // }
        name,
        age,
        logUser() {
            console.log(`${this.name} is ${this.age} years old.`);
        }
    }
}
const salvatore = createUser('Salvatore', 43);
const ivo = createUser('Ivo', 30);
console.log(salvatore);
salvatore.logUser();
console.log(ivo);

// nested objects
const user1 = {
    name: 'Sanfilippo',
    address: {
        city: {
            zip: 92023,
            name: 'Campobello di Licata'
        },
        country: 'Italy'
    }
}
console.log(user1.address.city.name)

// properties whose names are symbols are ignored by for/in loops
const price = Symbol();
const car = {
    make: 'alfa',
    model: 'giulia',
    year: 2020,
    [price]: 173000
}
console.log('The price of car is ' + car[price]);
for (let key in car) {
    console.log(key); // does not log price
}

// the prop's of built-in objects, such as the Math object, are non-enumerable
// non-enumerable prop's are ignored by for/in loops
for (let key in Math) {
    console.log(key); // nothing is logged to the console
}

// non-enumerable prop's are ignored by Object.keys
console.log(Object.keys(Math));

// own vs. inherited properties
const car1 = {
    make: 'porsche'
}

const car2 = Object.create(car1);
car2.model = 911; // own property

console.log(car2.make); // inherited from car1
console.log(car2.model); // own property of car2

console.log(car2.hasOwnProperty('make')); // false
console.log(car2.hasOwnProperty('model')) // true

// Object.keys() lists only own properties
console.log(Object.keys(car2)); // ['model']

// for/in loops loop over all enumerable properties whose names are strings
for (let key in car2) {
    console.log(key);
}

