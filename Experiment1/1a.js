// 1. Create a custom EventEmitter that triggers "greet" or "exit"    

const EventEmitter = require("events");

class MyEventEmitter extends EventEmitter {}

const myEmitter = new MyEventEmitter();

myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.on("exit", () => {
    console.log("Exit event triggered. Goodbye!");
});

// Trigger events
myEmitter.emit("greet", "Atul kumar");
myEmitter.emit("exit");