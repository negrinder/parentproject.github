function Controller() {
    function ApplicationWindow() {
        function refreshRSS() {
            rss.loadRssFeed({
                success: function(data) {
                    masterView.refreshRssTable(data);
                }
            });
        }
        var rss = require("services/rss"), MasterView = require("controllers/MasterView"), DetailView = require("controllers/DetailView");
        var masterView = new MasterView(), detailView = new DetailView();
        var masterContainerWindow = Ti.UI.createWindow({
            title: "Ultime Notizie"
        });
        var button = Ti.UI.createButton({
            systemButton: Ti.UI.iPhone.SystemButton.REFRESH
        });
        button.addEventListener("click", function() {
            refreshRSS();
        });
        masterContainerWindow.rightNavButton = button;
        masterContainerWindow.add(masterView);
        var detailContainerWindow = Ti.UI.createWindow();
        detailContainerWindow.add(detailView);
        var navGroup = Ti.UI.iOS.createNavigationWindow({
            window: masterContainerWindow
        });
        masterView.addEventListener("itemSelected", function(e) {
            detailView.showArticle(e.link);
            navGroup.openWindow(detailContainerWindow);
        });
        refreshRSS();
        return navGroup;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ApplicationWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    module.exports = ApplicationWindow;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;