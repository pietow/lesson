// console.log(process.argv)
// process.argv ===> [array of all arguments passed to the file]
// console.log(process.argv.slice(2))

let agrs = process.argv.slice(2)

function average(){
    // arguments ==> object
    // the number of all arguments is 
    let argumentsLength = agrs.length 
    // console.log(argumentsLength)
    let sum = 0
    agrs.forEach(arg=>{
        // console.log(arguments[key])
        sum += Number(arg)
    })
    console.log(sum / argumentsLength)
}
average()
// average(14, 52, 30, 50, 99, 55)
