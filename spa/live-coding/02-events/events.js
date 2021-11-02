const myBtn = document.getElementById('myBtn');

// 3 ways to attach an event handler to an element

// 1. as an HTML attribute (considered bad practice)

// 2. as a property of the element (disadvantage: allows for only one event handler)

myBtn.onclick = function() { // overwritten by next event handler
    alert('Good afternoon');
}

myBtn.onclick = function() { // overwrites previous event handler
    console.log('Good evening');
}

// 3. with addEventListener (advantage: allows for more than one event handler)
myBtn.addEventListener('click', function() {
    alert('Good morning');
})
myBtn.addEventListener('click', function() { // no conflict with previous event handler; both will be triggered by click events
    console.log('Good evening');
    console.log(this);
})

// the third argument: capture (true, false)
document.getElementById('myDiv').addEventListener('click', function() {
    alert('You clicked on the DIV element');
}, false)

document.getElementById('myP').addEventListener('click', function() {
    alert('You clicked on the P element');
}, false)

document.getElementById('myP2').addEventListener('click', function() {
    alert('You clicked on the P2 element');
}, true)

document.getElementById('myDiv2').addEventListener('click', function() {
    alert('You clicked on the DIV2 element');
}, true)

let submitBtn = document.getElementById('btn');
let inputField = document.getElementById('username');
let para = document.querySelector('p');
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    let userName = inputField.value;
    para.textContent = userName;
})
