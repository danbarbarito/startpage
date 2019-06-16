const m = require("mithril");
const moment = require("moment");

const Greeting = require("./Greeting.jsx");

const getCurrentTime = function() {
  return moment().format("hh:mm:ss");
}

var WeatherInfo = {
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
      <div className="fade-in-slide-right location-info">
        {vnode.attrs.geolocation ?
         <div class="fade-in-slide-right weather-info">
           <div className="temp-info">
             <div>
               <strong>Temperature: </strong> {vnode.attrs.geolocation.main.temp}°
             </div>
             <div>
               <strong>High: </strong> {vnode.attrs.geolocation.main.temp_max}°
             </div>
             <div>
               <strong>Low: </strong> {vnode.attrs.geolocation.main.temp_min}°
             </div>
           </div>
           {vnode.attrs.geolocation.weather.length ?
            <div className="weather-bullets">
              <h2>Weather</h2>
              {vnode.attrs.geolocation.weather.map((weather) => {
                return <div className="weather-bullet">{weather.description}</div>;
              })}
            </div>
           :
            null}
           <div className="other-info">
             <div>
               <strong>Wind Speed: </strong> {vnode.attrs.geolocation.wind.speed} mph
             </div>
             <div>
               <strong>Visibility: </strong> {vnode.attrs.geolocation.visibility}
             </div>
             <div>
               <strong>Pressure: </strong> {vnode.attrs.geolocation.main.pressure}
             </div>
           </div>
         </div>
        :
         null
        }
      </div>
    )
  }
}


module.exports = WeatherInfo;
