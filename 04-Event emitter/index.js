const logEvents = require("./logEvents");

const eventEmitter = require("events");

class MyEmitter extends eventEmitter {}

// Initialize object
const ee = new MyEmitter();

// Add listener for the log event
ee.on("log", msg => logEvents(msg));

setTimeout(() => {
  ee.emit("log", "Log event emitted!");
}, 3000);
