// exception handling

// throw statement.  You can throw any value, but normally you throw an error.
throw 'hi';
console.log('After throw'); // this line will not be executed

// throwing an error ...
throw new Error('something went wrong');
console.log('After throw error'); // ... will cause code execution to stop

// try ... catch
try {
    console.log('beginning of try block');
    console.log(count);
    console.log('end of try block');
} catch(e) {
    console.log('Error: ', e.message);
}
console.log('After try ... catch');

try {
    func();
} catch(e) {
    console.log(e.message);
}
console.log('After');

function outer() {
    function inner1() {
        function inner2() {
            function inner3() {
                return func();
            }
            return inner3();
        }
        return inner2();
    }
    try {
        return inner1();
    } catch(e) {
        console.log(e.message);
    }
}
outer();
console.log('after outer');

function fun3() {
    try {
        return fun2();
    } catch(e) {
        console.log(e.message);
    }
}
function fun2() {
    return fun1();
}
function fun1() {
    return func();
}
console.log(fun3());
console.log('After fun3');

// try ... catch only works for runtime errors; code must be runnable
try {
    console.log('inside try');
} catch(e) {
    console.log(e.message)
}
console.log('after try ... catch');

try {
    setTimeout(function() {
        return func();
    }, 0);
    console.log('after setTimeout');
} catch(e) {
    console.log(e.message);
}
console.log('After try ... catch');
// the event queue/loop
function func3() {
    console.log('func3');
}
function func2() {
    func3();
    console.log('func2');
}
function func1() {
    setTimeout(function() {
        console.log('first timeout');
    }, 0);
    setTimeout(function() {
        console.log('second timeout');
    }, 0);
    setTimeout(function() {
        console.log('third timeout');
    }, 0)
    func2();
    console.log('func1');
}
func1();

setTimeout(function() {
    try {
        return func();
    } catch(e) {
        console.log(e.message);
    }
}, 0);
console.log('After setTimeout');

// Example: JSON.parse()
let json = '{ "name": "Franco", "age": 32 }';
try {
    let jsonObj = JSON.parse(json); // will throw an error if, say, you remove a double quote from json.
    // throw custom error if jsonObj doesn't have a key "userId"
    if (!jsonObj.userId) {
        throw new Error('missing key');
    }
    console.log(jsonObj);
} catch(e) {
    console.log(e.message);
}

// rethrowing errors
// if you don't know how to handle an error in the catch block, you can rethrow it.
let json = '{"name: "Franco", "age": 32 }';
try {
    let jsonObj = JSON.parse(json); // will throw an error because of incorrect JSON, jump directly to the catch clause, which will rethrow the error
    if (!jsonObj.userId) {
        throw new Error('missing key');
    }
    console.log(jsonObj);
} catch(e) {
    if (e.message === 'missing key') {
        console.log('json is missing a key');
    } else {
        throw e;
    }
}

// try ... catch ... finally
function myFunc() {
    try {
        return 1;
    } catch(e) {
        /* ... */
    } finally {
        console.log('finally');
    }
}
console.log(myFunc());