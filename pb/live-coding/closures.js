// You already know that inner functions have access to the variables of outer functions
function outer() {
    let count = 0;
    function inner() {
        return count;
    }
    return inner();
}
let myCount = outer();
console.log(myCount); // 0

// You may not know that inner functions have access to the variables of outer functions even after the outer functions
// have returned.  Such functions are called "closures".
function outer1() {
    let count = 13;
    function inner1() {
        return count;
    }
    return inner1;
}
let thirteenCounter = outer1();
console.log(thirteenCounter());

// inner functions have access to the parameters of outer functions after the outer functions
// have returned
function outer2(count) {
    function inner2() {
        return count;
    }
    return inner2;
}
let myCounter = outer2(13);
console.log(myCounter());

// inner functions can update the variables of outer functions even after those outer functions
// have returned
function outer3() {
    let count = 0;
    function inner3() {
        count += 1;
        return count;
    }
    return inner3;
}
let getCount = outer3();
console.log(getCount()); // 1
console.log(getCount()); // 2
let getOtherCount = outer3(); // 3
console.log(getOtherCount()); // 1
console.log(getCount()); // 4

