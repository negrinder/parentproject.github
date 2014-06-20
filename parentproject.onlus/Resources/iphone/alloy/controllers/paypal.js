function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "paypal";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.dona = Ti.UI.createWindow({
        backgroundColor: "#f4f4f4",
        titleAttributes: {
            color: "#ffffff"
        },
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "dona",
        title: "Dona Ora!"
    });
    $.__views.dona && $.addTopLevelView($.__views.dona);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    require("ti.paypal");
    var win = $.dona;
    var u = void 0 != Ti.Android ? "dp" : 0;
    var status = Ti.UI.createLabel({
        top: 50 + u,
        height: 45 + u,
        color: "#333",
        text: "Digita la tua donazione"
    });
    win.add(status);
    var importo = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: 100 + u,
        width: 278,
        height: 43,
        value: 10,
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        textAlign: "right"
    });
    win.add(importo);
    var conferma = Ti.UI.createButton({
        top: 150 + u,
        width: 278,
        height: 43,
        title: "Avanti"
    });
    win.add(conferma);
    conferma.addEventListener("click", function() {
        Alloy.createController("donate", {
            donazione: importo.value
        }).getView().open({
            modal: true,
            navBarHidden: true,
            fullscreen: true
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;