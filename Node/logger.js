const EventEmitter = require('events');

let url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);

        this.emit('messageLogged', { message: message });
    }
}

module.exports = Logger;