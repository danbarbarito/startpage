const m = require("mithril");

const SearchEngine = require("./SearchEngine.jsx");
const LocationInfoRow = require("./LocationInfoRow.jsx");

var App = {
  view: function() {
    return (
      <main>
        <LocationInfoRow />
        <SearchEngine />
      </main>
    )
  }
}


module.exports = App;
