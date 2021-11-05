// a callback: a function that is passed as an argument to another function

// example: cb is a callback
function myFun(val, cb) {
    return cb(val);
}
myFun('Hello, class!', console.log);

// synchronous callback: callback that runs immediately, for example,
// the callbacks of the array methods .forEach or .map

// asynchronous callback: callback that waits for something to happen
// and then is "called back", for example, the callbacks of setTimeout
// and addEventListener

// callback hell, a.k.a. the pyramid of doom 
// problems with nested callbacks: unclear, difficult error handling, doesn't scale well

getUser(1, (user) => {
    getBlogPosts(user.name, (blogposts) => {
        getComments(blogposts[0], (comments) => {
            console.log(user, blogposts[0], comments);
        });
    });
});

// promise version
getUser(1)
    .then(user => getBlogPosts(user.name))
    .then(blogposts => getComments(blogposts[0]))
    .then(comments => console.log(comments))
    .catch(err => console.log('Error: ', err.message));
