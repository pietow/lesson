// synchronous function
function getUserNameSync() {
    return prompt('What\'s your name?');
}
// works as intended
let fName = getUserNameSync();
console.log(fName);

// asynchronous function
function getUserNameAsync() {
    let username;
    setTimeout(function() {
        username = prompt('What is your name?');
    }, 3000);
    return username;
}

// does not work as intended
let fName = getUserNameAsync();
console.log(fName);

// Problem: we would like to work with the result of the async operation,
// but we don't have it yet. This is where promises come in.
// Promises represent the values we don't have yet but will have eventually.

// Analogy: 
// Suppose you want me to cook dinner tomorrow. I can't give you dinner tomorrow now,
// but I can promise now to prepare dinner tomorrow.  Until I prepare dinner tomorrow,
// you have my promise to do so.  The promise is a placeholder for the value that you
// will get tomorrow.  Just as in real life a promise can be kept or broken, so, too,
// in JavaScript. 

// Terminology: 
// When a promise delivers the promised value, we say that it has been fulfilled;
// when it doesn't, we say that it has been rejected.  In either case, we say that
// it has been resolved.  Before a promise is resolved, it is pending.  

// **************** Diagram *******************************************************

// basic promise
// the invocation of the Promise constructor creates a new promise
let myPromise = new Promise(executorFunction);

let myPromise = new Promise((resolve, reject) => {
    // do some asynchronous task
    // if successful, call resolve()
    // if not successful, call reject()
});

let hasReadDocs = true;

let myPromise = new Promise((resolve, reject) => {
    if (hasReadDocs) {
        resolve('You will understand promises');
    } else {
        reject('You may not understand promises');
    }
});

myPromise.then(successCallback, errorCallback);
myPromise.then(
    result => { alert(result); },
    error => { alert(error); }
);

myPromise.then(
    result => { alert(result); }
).catch(
    error => { alert(error); }
);

myPromise.then(alert, alert); // shorthand for lines 61 - 64
myPromise.then(alert).catch(alert); // shorthand for lines 66 - 70

let promise1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        let name = prompt('What is your name?');
        if (name.length > 1) {
            resolve(`Your name is ${name}.`);
        } else {
            reject('Your name is too short');
        }
    }, 4000)
});

promise1.then(alert, alert);
