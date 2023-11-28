const EventEmitter = require("events");
const { v4: uuid } = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid(), msg });
  }
}

module.exports = Logger;

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", msg => {
  console.log(`Called listener:`, msg);
});

logger.log("Hello World!");
logger.log("Hello ");
logger.log("Hi!");
