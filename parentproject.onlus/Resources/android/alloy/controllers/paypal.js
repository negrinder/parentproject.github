function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "paypal";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.dona = Ti.UI.createView({
        id: "dona"
    });
    $.__views.dona && $.addTopLevelView($.__views.dona);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var u = void 0 != Ti.Android ? "dp" : 0;
    var testa = Ti.UI.createView({
        top: 0 + u,
        height: 27 + u,
        color: "#fff",
        backgroundColor: "#e5a200"
    });
    var titolo = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        text: "Donazione"
    });
    testa.add(titolo);
    $.dona.add(testa);
    var status = Ti.UI.createLabel({
        top: 40 + u,
        height: 35 + u,
        color: "#333",
        text: "digita l'importo che desideri"
    });
    $.dona.add(status);
    var set_importo = Titanium.UI.createButton({
        title: "CONFERMA",
        style: Titanium.UI.iPhone.SystemButtonStyle.DONE
    });
    {
        Titanium.UI.createButton({
            systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
        });
    }
    var importo;
    var importo = Ti.UI.createTextField({
        borderRadius: "3sp",
        borderWidth: "1px",
        borderColor: "#ccc",
        color: "#2d2d2d",
        top: 75 + u,
        width: 278,
        height: 40,
        value: 10,
        textAlign: "right",
        keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        softKeyboardOnFocus: Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS
    });
    set_importo.addEventListener("click", function() {
        importo.blur();
    });
    $.dona.add(importo);
    var conferma = Ti.UI.createButton({
        top: 110 + u,
        width: 208,
        height: 86,
        backgroundImage: "/dona_button.png"
    });
    $.dona.add(conferma);
    conferma.addEventListener("click", function() {
        Alloy.createController("donaweb", {
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