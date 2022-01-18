/** @format */
const fs = require('fs')

const getContent = (htmlPath) => {
    return fs.readFileSync(htmlPath, 'utf8')
}

async function processHTML(htmlPath) {
    return await fs.promises.readFile(htmlPath, 'utf8')
}

function save(obj, path) {
    const jsonText = fs.readFileSync(path, 'utf8')
    console.log(obj)
    let arr
    if (jsonText.trim() === '') {
        arr = []
    } else {
        arr = JSON.parse(jsonText)
    }
    obj.id = arr.length
    const { id, brand, model, power, gear, fuel, prise, doors } = obj
    const dummy = { id, brand, model, power, gear, fuel, prise, doors }
    arr.push(dummy)
    fs.writeFileSync(path, JSON.stringify(arr))
    return arr
}

module.exports = {
    getContent,
    processHTML,
    save,
}
