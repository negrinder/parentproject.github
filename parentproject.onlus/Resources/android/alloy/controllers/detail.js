function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "#f4f4f4",
        titleAttributes: {
            color: "#ffffff"
        },
        layout: "vertical",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.backButton = Ti.UI.createButton({
        top: 10,
        tintColor: "#e60a2e",
        id: "backButton",
        title: "Torna alle notizie"
    });
    $.__views.detail.add($.__views.backButton);
    $.__views.titolo = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        id: "titolo"
    });
    $.__views.detail.add($.__views.titolo);
    $.__views.contenuto = Ti.UI.createWebView({
        top: 20,
        left: 10,
        right: 10,
        fullscreen: false,
        height: "70%",
        id: "contenuto"
    });
    $.__views.detail.add($.__views.contenuto);
    $.__views.goButton = Ti.UI.createButton({
        top: 10,
        tintColor: "#1b7db1",
        id: "goButton",
        title: "Leggi tutta la notizia"
    });
    $.__views.detail.add($.__views.goButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.setArticle = function(titleText, descriptionText, articleUrl) {
        $.titolo.text = titleText;
        $.contenuto.html = "<style type='text/css''>p { font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; }</style>" + descriptionText.split("The post")[0];
        $.backButton.addEventListener("click", function() {
            $.detail.close();
        });
        $.goButton.addEventListener("click", function() {
            Ti.Platform.openURL(articleUrl);
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;