const submitBtn = document.getElementById('submitBtn');
const title = document.getElementById('title');
const body = document.getElementById('body');
const userId = document.getElementById('userId');
const list = document.getElementById('list');

// check if localStorage stores a value at key "textArr"; if so, parse this value 
// as JSON and assign it to the textArr constant; else assign an empty array
const textArr = JSON.parse(localStorage.getItem('textArr')) || [];

// for each string (text) in textArr, create a list item with this string (text)
// as textContent and append it to the list
textArr.forEach(text => {
    let listItem = document.createElement('li');
    listItem.textContent = text;
    list.appendChild(listItem);
});

const handleSubmit = function () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: userId.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(obj => {
        let listItem = document.createElement('li');
        let text = `Title: ${obj.title}, body: ${obj.body}, userId: ${obj.userId}`;
        textArr.push(text);
        listItem.textContent = text;
        localStorage.setItem('textArr', JSON.stringify(textArr));
        list.appendChild(listItem);
    });
};

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    handleSubmit();
    title.value = '';
    body.value = '';
    userId.value = '';
});
