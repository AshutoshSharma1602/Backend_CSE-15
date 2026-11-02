// Using Node.js's built-in events module,create an eventemitter . registor multiple listeners for a response event,then emit the event by passing name and id as arguments and display them in the console.

const EventEmitter = require("events");

// Create EventEmitter object
const emitter = new EventEmitter();

// First listener
emitter.on("response", (name, id) => {
    console.log("Listener 1");
    console.log("Name:", name);
    console.log("ID:", id);
});

// Second listener
emitter.on("response", (name, id) => {
    console.log("Listener 2");
    console.log("Name:", name);
    console.log("ID:", id);
});

// Emit the event
emitter.emit("response", "Atul", 101);