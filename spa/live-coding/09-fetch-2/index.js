const submitBtn = document.getElementById('submitBtn');
const title = document.getElementById('title');
const body = document.getElementById('body');
const userId = document.getElementById('userId');
const list = document.getElementById('list');

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
    .then((response) => response.json())
    .then((obj) => {
        let listItem = document.createElement('li');
        listItem.textContent = `Title: ${obj.title}, body: ${obj.body}, userId: ${obj.userId}`;
        // let textNode = document.createTextNode(text);
        // listItem.appendChild(textNode);
        list.appendChild(listItem);
    });
};

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    handleSubmit();
    title.value = '';
    body.value = '';
    userId.value = '';
});