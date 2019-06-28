module.exports = {
    greeter: "hello from module helpers",
    speak: function () {
        console.log(this.greeter)
    }
}