const m = require("mithril");

var SearchEngine = {
  view: function(vnode) {
    return (
      <div className="fade-in-slide-right search-bar">
        <input autofocus value={vnode.attrs.defaultValue} placeholder="Enter your Google search query" />
      </div>
    )
  }
}


module.exports = SearchEngine;
