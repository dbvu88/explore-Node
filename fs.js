const fs = require('fs')

const files = fs.readdirSync('./')
const file = fs.readFileSync('./app.js')
console.log(files)
console.log(file)

fs.readdir('./', (err, files) => {
    if (err) console.log(err)

    console.log(files)
})