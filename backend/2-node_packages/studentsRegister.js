// to make terminal as in\output
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('please enter your first name:\n', firstName=>{
    rl.question('please enter your last name:\n', lastName=>{
        console.log(`Your fullname is ${firstName} ${lastName}`)
        process.exit()
    })
})
/**
 * 1- let the user enter the following data:
 *      a- fitst name
 *      b- last name
 *      c- age (18- 100) number
 *      d- grades (0==>100)
 * 2- create an Object with this data
 *      {firstName:"", lastName:"", age:20, grades:56}
 * 3- display the object in Terminal
 * 4- store (append) this object to students.json file
 * 5- display all students records from the file
 * 6- kill the process
 */