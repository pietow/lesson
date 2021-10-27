// Create empty array to collect element names
const parentsList = [];

// Get starting element
let currentElement = document.querySelector('cite');

// Keep looping until there are no more parent elements
while(currentElement) {
    let currentElementName = currentElement.nodeName;
    parentsList.unshift(currentElementName.toLowerCase());
    // Update current element to its parent. if there is no parent currentElement will become null and the while loop will break
    currentElement = currentElement.parentElement;
}

// Print to the console as a string
console.log(parentsList.join(' > '));
