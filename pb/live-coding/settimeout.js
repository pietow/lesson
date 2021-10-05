// setTimeout is a method of the window object
function greet() {
    console.log('Howdy!');
}
// setTimeout(greet, 2000);

function makeTalk(animal) {
    const noises = {
        cat: 'purr',
        dog: 'woof',
        cow: 'moo',
        pig: 'oink'
    }
    console.log(`A ${animal} goes ${noises[animal]}.`);
}
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const animals = ['cat', 'dog', 'cow', 'pig'];
const randomAnimal = getRandom(animals);

setTimeout(function() {
    makeTalk(randomAnimal);
}, 2000);

console.log(1);
// asynchronous function; put aside and has to wait until the call stack is empty.
setTimeout(() => { console.log(2); }, 0);
console.log(3);

const dog = {
    sound: 'woof',
    bark() {
        console.log(`Rover says ${this.sound}!`);
    }
};

dog.bark();

// the bark function is called as a function here, not as a method of dog
setTimeout(dog.bark, 2000); // Rover says undefined

const dog2 = {
    thisVal: this,
    sound: 'woof',
    bark: () => {
        console.log(`Rover-2 says ${this.sound}!`);
    }
}
dog2.bark();

let user = {
    firstName: 'John',
    sayHi: function() {
        console.log(`Hello, ${this.firstName}!`);
    }
}
setTimeout(user.sayHi, 1000); // Hello, undefined!
user.sayHi();

// solutions:
// 1. call sayHi as a method, but wrap that call in an outer function
setTimeout(function() {
    user.sayHi();
}, 1000);

// 2. bind user.sayHi to the user object
let sayHi = user.sayHi.bind(user);
setTimeout(sayHi, 1000);

let user2 = {
    firstName: 'Jack',
    say(phrase) {
        console.log(`${phrase}, ${this.firstName}!`);
    }
};
let say = user2.say.bind(user2);
say('Hello');
say('Bye');



