function Controller() {
    function DetailView() {
        var self = Ti.UI.createView();
        var webview = Ti.UI.createWebView();
        self.add(webview);
        self.showArticle = function(url) {
            webview.url = url;
        };
        webview.addEventListener("load", function() {
            self.fireEvent("articleLoaded");
        });
        return self;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "DetailView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    module.exports = DetailView;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;