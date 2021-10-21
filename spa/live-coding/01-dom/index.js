let title = document.createElement('h1');
title.textContent = 'DOM Manipulation';
console.log(title);
let body = document.querySelector('body');
body.appendChild(title);

title.classList.add('hot');

setTimeout(function() {
    title.classList.replace('hot', 'cold');
}, 5000);

let book = {
    title: "Elquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"

}

let image = document.createElement('img');
image.src = book.img;
// image.src = 'https://eloquentjavascript.net/img/cover.jpg';
body.appendChild(image);
body.style.backgroundColor = 'grey';
title.style.fontSize = "20px";