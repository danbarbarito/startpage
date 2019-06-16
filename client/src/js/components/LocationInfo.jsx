const m = require("mithril");
const moment = require("moment");

const Greeting = require("./Greeting.jsx");

const getCurrentTime = function() {
  return moment().format("hh:mm:ss");
}

var LocationInfo = {
  currentTime: getCurrentTime(),
  oninit: function(vnode) {
    // Current time
    setInterval(function() {
      vnode.state.currentTime = getCurrentTime();
      m.redraw();
    }, 1000);
  },
  view: function(vnode) {
    return (
      <div className="fade-in-slide-left location-info">
        {vnode.attrs.geolocation ?
         <div class="fade-in-slide-left city-info">It is <span class="time-info">{this.currentTime}</span> in <strong>{vnode.attrs.geolocation.name}</strong></div>
        :
         <em></em>
        }
      </div>
    )
  }
}


module.exports = LocationInfo;
