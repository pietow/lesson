
// this file accepts 3 arguments:
// 1- the characture etc "*"
// 2- number (rows)
// 3- number (columns)
// ex: * 3 5
/**
 *  *****
 *  *****
 *  *****
 */

/*dfgsdfg
adsfgadsfg
adsfg*/

/**
 * this for args
 */
let args = process.argv.slice(2)
/**
 * this is for charactor
 */
let ch = args[0]
let rows = args[1]
// let rows = args[1]? args[1]: 5
let columns = args[2]

/**
 * This Function Creates a stars
 * @author Mostafa
 * @param {boolean} character 
 * @param {number} rows 
 * @param {number} columns 
 */
function createStars(character="*", rows=2, columns=5){
    let str = ""
    for(let j=0; j< rows; j++){
        for(let i=0; i<columns; i++){
            str += character
        }
        str +="\n"
    }
    console.log(str)
}

createStars(ch, rows, columns)
foo({})
/**
 * 
 * @param {object} a 
 * @returns 
 */
function foo(a={}){
    return 0
}

console.log(args)