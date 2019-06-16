const m = require("mithril");

const Greeting = require("./Greeting.jsx");
const SearchEngine = require("./SearchEngine.jsx");
const LocationInfo = require("./LocationInfo.jsx");

var App = {
  view: function() {
    return (
      <main>
        <Greeting />
        <SearchEngine />
        <LocationInfo />
      </main>
    )
  }
}


module.exports = App;
