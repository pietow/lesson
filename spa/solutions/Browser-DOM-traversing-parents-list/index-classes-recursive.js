// get the cite element (our starting point)
const currentElement = document.querySelector('cite');

function getParents(elem, list = []) {
    function getElementNameAndClasses(element) {
        let elementName = element.nodeName.toLowerCase();
        let elementClassStr = Array.from(element.classList).join('.');
        let elementString = elementClassStr ?  elementName + '.' + elementClassStr : elementName;
        return elementString;
    }

    if (elem === null) {
        return list.join(' > ');
    }
    list.unshift(getElementNameAndClasses(elem));
    return getParents(elem.parentElement, list);
}

console.log(getParents(currentElement));
