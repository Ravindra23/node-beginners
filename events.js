const events = require('events');
const eventEmitter = new events.EventEmitter(); 

// assign listen
eventEmitter.on("register",()=>{
    console.log("this is the some event");
})
// call fire an event
eventEmitter.emit("register");
