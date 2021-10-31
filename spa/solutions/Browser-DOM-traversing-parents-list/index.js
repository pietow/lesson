// create an empty array to collect the element names
const parentsList = [];

// get the cite element (our starting point)
let currentElement = document.querySelector('cite');

// keep looping until currentElement is null
while (currentElement) {
    parentsList.unshift(currentElement.nodeName.toLowerCase());
    currentElement = currentElement.parentElement;
}

// convert the parentsList array to a string and print the result to the console
console.log(parentsList.join(' > '));