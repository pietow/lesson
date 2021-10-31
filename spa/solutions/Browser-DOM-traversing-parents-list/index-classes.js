// Extract a function to avoid repetition
function getElementNameAndClasses(element) {
    let elementName = element.nodeName.toLowerCase();
    let elementClassStr = Array.from(element.classList).join('.');
    let elementString = elementClassStr ?  elementName + '.' + elementClassStr : elementName;
    return elementString;
}

// Create an empty array to collect the element names with classes
const parentsList = [];
// get the cite element (our starting point)
let currentElement = document.querySelector('cite');

// Keep looping until there are no more parents
while(currentElement) {
    parentsList.unshift(getElementNameAndClasses(currentElement));
    // Update current element to its parent. If there is no parent, currentElement will become null and the while loop will break
    currentElement = currentElement.parentElement;
}

// Print to the console as a string
console.log(parentsList.join(' > '));
