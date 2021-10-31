const wrapper = document.getElementById('wrapper');

// 1.
// Getting the children of the element with id `wrapper` and
// printing to the console as a list.
console.log(wrapper.children, wrapper.childElementCount);

// Iterating over wrapper children, and printing to the console their children,
// as well as how many they are
for (let index = 0; index < wrapper.children.length; index++) {
    const element = wrapper.children[index];

    console.log(element.children, element.children.length);
}

// 2.
// a function to return an object
// that contains the element with the highest number of classes and 
// the total number of classes
const getElementWithMostClasses = (list) => {
    let el = null;
    let maxLength = 0;

    for (let index = 0; index < list.length; index++) {
        const element = list[index];

        if (element.classList.length > maxLength) {
            maxLength = element.classList.length;
            el = element;
        }
    }

    return {
        element: el,
        numberOfClasses: maxLength
    };
}

console.log(getElementWithMostClasses(wrapper.children));
