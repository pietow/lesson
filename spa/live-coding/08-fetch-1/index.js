// fetch('https://my-json-server.typicode.com/typicode/demo/posts')
//     .then(response => response.json())
//     .then(data => console.log(data));

async function getPosts() {
    let response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
    let dataJson = await response.json();
    console.log('with async/await: ', dataJson);
}
getPosts();

// fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => response.json())
//     .then(data => console.log(data.value));

async function getJoke() {
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    let dataJson = await response.json();
    console.log(dataJson.value);
}
getJoke();