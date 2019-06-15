const m = require("mithril");

// Set <title> to the current time
require('./titleTime');

var MyComponent = require("./app.jsx");

m.mount(document.body, MyComponent);
