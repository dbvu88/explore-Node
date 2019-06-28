const Logger = require('./logger')
const logger = new Logger()

logger.on('callLister', args => {
    console.log(args)
})

logger.log('message')