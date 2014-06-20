function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId1 = [];
    $.__views.master = Alloy.createController("master", {
        id: "master"
    });
    $.__views.tabNews = Ti.UI.createTab({
        window: $.__views.master.getViewEx({
            recurse: true
        }),
        id: "tabNews",
        title: "News",
        icon: "news.png"
    });
    __alloyId1.push($.__views.tabNews);
    $.__views.about = Alloy.createController("about", {
        id: "about"
    });
    $.__views.__alloyId3 = Ti.UI.createTab({
        window: $.__views.about.getViewEx({
            recurse: true
        }),
        title: "Chi Siamo",
        icon: "info.png",
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3);
    $.__views.__alloyId6 = Ti.UI.createWindow({
        backgroundColor: "#f4f4f4",
        titleAttributes: {
            color: "#ffffff"
        },
        title: "Contatti",
        id: "__alloyId6"
    });
    $.__views.contattiView = Ti.UI.createWebView({
        id: "contattiView",
        url: "contatti.html"
    });
    $.__views.__alloyId6.add($.__views.contattiView);
    $.__views.__alloyId5 = Ti.UI.createTab({
        window: $.__views.__alloyId6,
        title: "Contatti",
        icon: "contatti.png",
        id: "__alloyId5"
    });
    __alloyId1.push($.__views.__alloyId5);
    $.__views.paypal = Alloy.createController("paypal", {
        id: "paypal"
    });
    $.__views.__alloyId7 = Ti.UI.createTab({
        window: $.__views.paypal.getViewEx({
            recurse: true
        }),
        title: "Dona",
        icon: "dona.png",
        id: "__alloyId7"
    });
    __alloyId1.push($.__views.__alloyId7);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId1,
        barColor: "#d21100",
        tabsBackgroundColor: "#444",
        tabsTintColor: "#ffffff",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.master.on("detail", function(e) {
        var controller = Alloy.createController("detail");
        var win = controller.getView();
        controller.setArticle(e.row.articleTitle, e.row.articleDescription, e.row.articleUrl);
        win.open({
            modal: true,
            navBarHidden: true,
            fullscreen: true
        });
    });
    $.master.getView().open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;