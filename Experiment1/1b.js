// 2. Simulate DOM-like event handling in Node.js using events                                           
const EventEmitter = require("events");

class Button extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  click() {
    console.log(`${this.name} was clicked`);
    this.emit("click");
  }
}

const button = new Button("Login Button");

button.addListener("click", () => {
  console.log("Event handler 1: Login button clicked!");
});

button.on("click", () => {
  console.log("Event handler 2: Performing login...");
});

button.click();