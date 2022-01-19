/** @format */

const bcrypt = require('bcrypt')

function hash(originalPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(originalPassword, 10, (err, hash) => {
            if (err) {
                reject(err)
            } else {
                resolve(hash)
            }
        })
    })
}

/**
 * compare.
 * check if password is right
 * @param {String} plainPass
 * @param {String} hash
 * @return __ promise with true or false
 */
function compare(plainPass, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainPass, hash, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = {
    hash,
    compare,
}
