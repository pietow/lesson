// Create empty array to collect name names with their classes
const parentsList = [];
// Get starting element
let currentElement = document.querySelector('cite');
// We need to do it once for the first element
let currentElementName = currentElement.nodeName;
parentsList.unshift(currentElementName.toLowerCase());
currentElement = currentElement.parentElement;

// Keep looping until there are no more parents
while(currentElement) {
    let currentElementName = currentElement.nodeName;
    parentsList.unshift(currentElementName.toLowerCase());
    // Update current element to its parent
    // if there is no parent currentElement will become null and the while loop will break
    currentElement = currentElement.parentElement;
}

// Print to the console as a string
console.log(parentsList.join(' > '));
