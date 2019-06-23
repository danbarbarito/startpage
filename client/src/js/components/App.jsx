const m = require("mithril");

const SearchEngine = require("./SearchEngine.jsx");
const LocationInfoRow = require("./LocationInfoRow.jsx");

// Generate the URL for the background
const background = (function() {
  const NUMBER_OF_BACKGROUNDS = 6;
  const backgroundNumber =
    Math.floor(Math.random() * NUMBER_OF_BACKGROUNDS) + 1;
  return `/images/background${backgroundNumber}.jpg`;
})();

var App = {
  view: function() {
    return (
      <main
        style={`background:url('${
          background
        }');background-position:center;background-size:cover;`}
      >
        <div className="container">
          <LocationInfoRow />
          <SearchEngine />
        </div>
      </main>
    );
  }
};

module.exports = App;
