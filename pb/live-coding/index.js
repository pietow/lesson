// The JavaScript console
console.log("Hi, there!");

// EXPRESSIONS, VALUES, VARIABLES
console.log("James Bond");

// let, const, var

// assignment statement: assigns the value of the expression on the right to the variable on the left 

// "=": assignment operator

// The assignment statement below does 2 things:
// 1. it declares the variable "myName", using the keyword "let" (variable declaration)
// 2. it initializes the variable "myName", in other words, it assigns it a value -- the value of the expression
// on the right side, the string "James Bond" (variable initialization)
let myName = "James Bond";
console.log(myName);

// variable reassignment
myName = "Dr. No";
console.log(myName); // "Dr. No"

// Updating the value of a variable in terms of its old value
let balance = 100;
balance = balance + 20; // balance is 120
balance += 20; // balance is 140
console.log(balance); // 140

// SCOPE

// the scope of a variable is the region of source code where it is defined;
// it determines the visibility of the variable.

// const, let: global scope or block scope
// var: global scope or function scope

// block: region of source code within curly braces

// Variables defined inside a block are not visible from outside the block
{
    let a = 10;
}
console.log(a); // Reference Error: a is not defined

// Variables defined outside a block are visible from inside the block
let a = 10;
{
    a = 20;
}
console.log(a);

// Accessing a let or const variable before it is declared results in a reference error
console.log(borogove);
let borogove = "mimsy";

// var variable declarations are hoisted to the top, let declarations are not
var borogove;
console.log(borogove);
borogove = "mimsy";
console.log(borogove);

// A let variable that has been declared but not yet initialized has the default value of undefined
let a;
console.log(a);

// Declaring a const variable without initializing it is a syntax error
const a;
console.log(a);

// Redeclaring a let or const variable is a syntax error
let a = 10;
let a = 10;

// A variable that has been declared outside a block can be redeclared inside the block
let wocky = 11;
{
    let wocky = 13;
    console.log(wocky);
}
console.log(wocky);

// The value of a const variable cannot be changed through reassignment
const balance = 100;
balance += 10; // Type error: no reassignment of values to const variables
console.log(balance); // does not get executed

// let variables are mutable, const variables are not.
// Don't confuse the mutability of values with the mutability of variables!!!!!

// assigning a new value to a const variable is a type error.
// changing the value of a const variable is OK if that value is mutable
// changing the existing value of a const variable is not the same as replacing the value
// of a const variable wth a new value
const obj = { a: 1 };
obj = "Hello"; // reassignment; attempt to replace the value of obj with a new value fails; throws an error
obj.b = 2; // mutating the obj value by adding a property
obj.b = 3; // mutating the obj value by adding another property
console.log(obj); // { a: 1, b: 2, c: 3 }

// string concatenation
const str1 = "Hello, ";
const str2 = "world!";
console.log(str1 + str2);
console.log(str1 + ", " + str2 + "!"); // Hello, world!
console.log(str1 + str2);
console.log("Hi" + ", there");

const str1 = "Tom";
const str2 = "Tom";
console.log(str1 === str2); // true

const num1 = 4;
const num2 = 4;
console.log(num1 === num2); // true

const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 === obj2); // false

// ternary operator
let num1 = 2 < 3 ? "Tom" : "Jerry";
let num2 = 2 > 3 ? "Tom" : "Jerry";
console.log(num1);
console.log(num2);

// lazy evaluation; logical short-circuiting
console.log(jubjub);
console.log(false && jubjub);
console.log(true && jubjub);
console.log(true || jubjub);
console.log(jubjub || true);
console.log(false || jubjub);
console.log(jubjub || false);

const port = process.env.PORT || 3000;


// True, False, Truthy, Falsy
// 1. 
console.log(true == 1); // true; == implicity converts the type of 1 to true

//2.
console.log(true === 1); // false; the values are not strictly equal

//3.
console.log(true && 1); // 1; if the first conjunct is true, && returns the second conjunct

//4.
console.log(1 && true); // true; if the first conjunct is truthy, && returns the second conjunct

//5. 
console.log(null || false); // false; if the first disjunct is falsy, || returns the second disjunct

//6. 
console.log(false || null); // null; if the first disjunct is falsy, || returns the second disjunct

//7., 8., 9., 10.
let num1;
let num2 = 11;
let num = num1 || num2;
console.log(num); // 11; 

// 11.
console.log(z || true); // ReferenceError: z is undefined

//12. 
console.log(true || z); // true

//13.
console.log(1 && 2); // 2

//14.
console.log(null || undefined); // undefine

//15.
console.log('Hi' || undefined); // "Hi"


// Evaluation Rule for &&:
// if the first operand is falsy, && returns the first operand; else the second operand

// Evaluation Rule for ||:
// if the first operand is truthy, || returns the first operand; else the second operand