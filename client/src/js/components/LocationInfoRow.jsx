const m = require("mithril");
const moment = require("moment");

const Greeting = require("./Greeting.jsx");
const LocationInfo = require("./LocationInfo.jsx");
const WeatherInfo = require("./WeatherInfo.jsx");

const getCurrentTime = function() {
  return moment().format("hh:mm:ss");
}

var LocationInfoRow = {
  geolocation: null,
  oninit: function(vnode) {
    // Get location info
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      m.request({
        method: "GET",
        url: `/api/location-info?lat=${lat}&lon=${lon}`,
        withCredentials: true,
      }).then(function(result) {
        vnode.state.geolocation = result.geolocation;
      });
    });
  },
  view: function(vnode) {
    return (
      <div className="row">
        <div class="col-lg-8">
          <Greeting />
          <LocationInfo geolocation={this.geolocation} />
        </div>
        <div class="col-lg-4">
          <WeatherInfo geolocation={this.geolocation} />
        </div>
      </div>
    )
  }
}


module.exports = LocationInfoRow;
