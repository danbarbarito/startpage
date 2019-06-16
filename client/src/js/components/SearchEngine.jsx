const m = require("mithril");

var SearchEngine = {
  query: "",
  view: function(vnode) {
    return (
      <div className="fade-in-slide-right search-bar">
        <form action="https://google.com/search">
          <input name="q" autofocus placeholder="Enter your Google search query" />
        </form>
      </div>
    )
  }
}


module.exports = SearchEngine;
