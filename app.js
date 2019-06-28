// module-scoped variables
console.log('------ module-scoped variables -----------')
// console.log("global: ", global)
console.log("module: ", module)
// console.log("require: ", require)
// console.log("exports: ", exports)
// console.log("__dirname: ", __dirname)
// console.log("__filename: ", __filename)
console.log('-----------------------------------------\n\n\n')


// this keyword
console.log('------ this keywords -----------')

const myVariable = "hello"
const myPublicVariable = "I belongs to this"
const myPublicFuction = () => console.log(myPublicVariable)


this.myPublicVariable = myPublicVariable
this.myPublicFuction = myPublicFuction

this.myPublicFuction()

console.log("this: ", this)


console.log('-----------------------------------------\n\n\n')


console.log('------ module exports -----------')


module.exports = {
    myPublicVariable,
    myPublicFuction
}

console.log("exports: ", exports)
console.log("module: ", module)

console.log('-----------------------------------------\n\n\n')


console.log('------ module require -----------')


const helper = require('./_helper')
this.greeter = "hello"
helper.speak()
// console.log(helper.greeter)


console.log('-----------------------------------------\n\n\n')