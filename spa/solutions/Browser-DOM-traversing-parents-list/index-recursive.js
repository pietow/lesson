// get the cite element (our starting point)
let currentElement = document.querySelector('cite');

const getParents = function(elem, list = []) {
    if (elem === null) {
        return list.join(' > ');
    }
    list.unshift(elem.nodeName.toLowerCase());
    return getParents(elem.parentElement, list);
}

console.log(getParents(currentElement));