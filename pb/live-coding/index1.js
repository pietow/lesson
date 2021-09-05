// pre-increment and post-increment operator
let count = 1;
console.log(++count); // increments count by 1 and returns the incremented count
console.log(count++); //returns count, then increments count by 1
console.log(count); // 2

// the decrement operator "--" works in the same way
let num = 10;
console.log(--num); // decrements num by 1 and returns the decremented num
console.log(num--); // returns num and decrements num by 1
console.log(num);

console.log(4); // integers
console.log(4.1); // floating point number (floats)

// implicitly converting strings to numbers
console.log(typeof (1 * '3')); // implicit type conversion / type coercion
console.log(+'3'); // implicitly converts string to number
console.log(1 * '3'); // implicit type conversion / type coercion

// explicitly converting strings to numbers
let str = '3';
console.log(parseInt(str));
console.log(parseInt('3.1'));
console.log(parseInt('3.9'));

console.log(parseFloat('3.9'));
console.log(Number('3.9'));

// NaN
console.log(3 * 'John'); // NaN
console.log(typeof NaN); // number
console.log(NaN === NaN); // false

// isNaN(x) determines if a value is NaN; so does x !== x
let myProduct = 3 * 'John'; // NaN
console.log('myProduct is ' + myProduct); 
console.log(isNaN(myProduct)); // true
console.log(myProduct !== myProduct); // true

let myFraction = 0/0;
console.log('myFraction is ' + myFraction); // NaN
console.log(isNaN(myFraction)); // true
console.log(myFraction === myFraction); // false (correct answer);

let myOtherFraction = 1/0;
console.log('myOtherFraction is', myOtherFraction);
console.log(isNaN(myOtherFraction));
console.log(myOtherFraction !== myOtherFraction);

// but beware of false positives 
console.log(isNaN('Hello'));

// reliable tests
console.log(Number.isNaN('Hello'));
console.log('Hello' === 'Hello'); 

// statements vs expressions
// expressions have a value, statements end in a semicolon and do something
console.log('hi'); // statement
2 + 2 === 5 // expression with value false

// escape characters (\), escape sequences (\')
console.log('I can\'t do this.'); // single (double) quotes are string delimiters
console.log("I can't do this.");
console.log(`I can't do this.`);
console.log('He said "Yes" first, then "No"')

// use the escape sequence \n to start a new line
console.log('Line 1 \nLine 2'); 
console.log(`Line 1
Line 2`);

// string interpolation, template strings: embedding expressions in strings
let firstName = 'Don';
console.log(`Hi, ${firstName}.`);

// string methods (String.prototype.<methodname>)
let str = 'Hello';
console.log(str.length);
console.log(str[0]); // index: position in the string; strings are 0-indexed: the first character is at position 0
console.log(str[str.length - 1]); 
console.log(str.toUpperCase());
console.log(str);
console.log(str.toLowerCase());
console.log(str.substring(1, 3)); // str.substring(startIndex, endIndex) (startIndex: included, endIndex: not included)
console.log(str.slice(1, 3));
console.log(str.includes('lo'));
console.log(str.substring(0, 3).toUpperCase()); // HEL

let myStr = ' hi ';
console.log(myStr);
console.log(myStr.trim().length);




