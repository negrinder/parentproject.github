function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.about = Ti.UI.createView({
        id: "about"
    });
    $.__views.about && $.addTopLevelView($.__views.about);
    var __alloyId0 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundColor: "#f4f4f4"
    });
    __alloyId0.push($.__views.view1);
    $.__views.associazione = Ti.UI.createWebView({
        id: "associazione",
        url: "/associazione.html"
    });
    $.__views.view1.add($.__views.associazione);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "#f4f4f4"
    });
    __alloyId0.push($.__views.view2);
    $.__views.rete = Ti.UI.createWebView({
        id: "rete",
        url: "/rete.html"
    });
    $.__views.view2.add($.__views.rete);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "#f4f4f4"
    });
    __alloyId0.push($.__views.view3);
    $.__views.struttura = Ti.UI.createWebView({
        id: "struttura",
        url: "/struttura.html"
    });
    $.__views.view3.add($.__views.struttura);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId0,
        id: "scrollableView",
        showPagingControl: "true"
    });
    $.__views.about.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;