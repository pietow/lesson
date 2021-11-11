// what we can't do because setTimeout is asynchronous
let greeting = setTimeout(function() {
    return 'Hi!';
}, 3000);
console.log(greeting); // undefined

// what we can do with promises
let greeting = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Hi!');
    }, 3000);
});
greeting.then((result) => { console.log(result) }); //  Hi!

// what we can do with async/await
async function greetWithDelay() {
    let greeting = new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('Hello!');
        }, 3000);
    });
    let myGreeting = await greeting;
    console.log(myGreeting);
}
greetWithDelay(); // Hello!

// after refactoring
function getGreeting() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('Ciao!');
        }, 3000);
    });
}

async function greetWithDelay() {
    let myGreeting = await getGreeting();
    console.log(myGreeting);
}
greetWithDelay(); // Ciao!
