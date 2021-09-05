// function with side-effect but no explicit return statement
// console.log('Hello, John!');

// function without side-effect but with explicit return statement
// function declaration
// function add(x, y) {
//     return x + y;
// }

// const sum = add(3, 5); // invoking a function; calling a function; applying the function to certain inputs/arguments
// console.log(sum);

// console.log(add(3, 5));

// function expression (Function expressions are always part of larger statements)
// const add = function (x, y) {
//     return x + y;
// }
// console.log(add(3, 5));

// function declarations are hoisted (moved to the top of their scope),
// so you can access the function before it is declared
// console.log(squared(2));
// function squared (x) {
//     return x * x;
// }

// function expressions are not hoisted
// const cubed = function (x) {
//     return x * x * x;
// }
// console.log(cubed(2));

// traditional function expression
// const double = function (x) {
//     return 2 * x;
// };

// arrow function expression ("return" keyword and braces around function body not needed in this case)
const double = x => 2 * x;

// traditional function expression
// const greet = function (name) {
//     let greeting = 'Hi';
//     return greeting + ', ' + name + '!';
// };
// const greet = name => {
//     let greeting = 'Hi';
//     return greeting + ', ' + name + '!';
// };
// const janeGreeting = greet('Jane');
// console.log(janeGreeting);

// a function within a function
function addSquares(x, y) {
    function square(x) {
        return x * x;
    }
    console.log(square(5));
    return square(x) + square(y);
}
console.log(addSquares(2, 3)); // 13