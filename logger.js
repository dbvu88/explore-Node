const Events = require('events')
// const event = new Events()

class Logger extends Events {
    log(message) {
        console.log(message)

        this.emit('callLister', {
            id: 1,
            url: 'http://'
        })
    }

}

module.exports = Logger