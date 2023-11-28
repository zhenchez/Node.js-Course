const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Evenmt listener
myEmitter.on("log", () => {
  console.log("Log event emitted!");
});

// Init event
myEmitter.emit("log");
myEmitter.emit("log");
