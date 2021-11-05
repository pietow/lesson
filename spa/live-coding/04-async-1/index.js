// alert is blocking
alert('Hello, class');

// setTimeout is non-blocking; pElem appears without delay
setTimeout(function() {
    alert('Hello, class!');
}, 5000);

// .addEventListener is non-blocking; pElem appears without delay
let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    alert('Hello, class');
})

let pElem = document.createElement('p');
let str = 'All work and no play make Jack a dull boy. ';
pElem.textContent = str.repeat(10);
let container = document.querySelector('.container');
container.appendChild(pElem);
