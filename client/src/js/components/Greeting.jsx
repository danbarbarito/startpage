const m = require("mithril");
const moment = require("moment");

var Greeting = {
  editingGreeting: false,
  
  oninit: function(vnode) {
    // Get message
    const hour = parseInt(moment().hour());
    let message;
    if (hour > 4 && hour < 12) {
      message = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      message = "Good Afternoon";
    } else {
      message = "Good Evening";
    }
    vnode.state.message = message;
  },
  view: function(vnode) {
    return (
      <div class="fade-in-slide-left greeting-message-wrapper">
        <div className="greeting-message">{vnode.state.message}</div>
        {vnode.state.editingGreeting ?
         <h1>True!</h1>
        : null}
      </div>
    )
  }
}


module.exports = Greeting;
