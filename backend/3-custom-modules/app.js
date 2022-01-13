const {toLocal, getCurrentDate} = require('./models/date');
const {email, emailPass, sqlUser} = require('./models/config');
const {hash} = require('./models/passwordManager')

console.log(getCurrentDate());
console.log(toLocal());
console.log(email);
hash('12345678').then(hashedPass => {
    console.log(hashedPass);
}).catch(error => {
    console.log(error);
})

