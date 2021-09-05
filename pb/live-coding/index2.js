// Statements vs expressions
// expressions have a value, statements end in a semicolon
console.log('hi'); // statement
2 + 2 === 5 // expression

// escape sequences
console.log('I can't do this');
console.log('I can\'t do this.');
console.log('hello \nworld');

// string interpolation with template strings: embedding expressions in strings
let name = 'Don';
console.log(`Hi, ${name}!`);

// string methods
let str = 'Hello';
console.log(str.length);
console.log(str[0]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(1, 3));
console.log(str.includes('lo'));
console.log(str.substring(0, 3).toUpperCase());

// removing whitespace from both ends of a string with .trim()
let myStr = ' hi ';
console.log(myStr);
console.log(myStr.trim());

/* BASIC STRING METHODS ASSIGNMENT */