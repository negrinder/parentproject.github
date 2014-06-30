function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.__alloyId1 = Ti.UI.createView({
        id: "__alloyId1"
    });
    $.__views.detail.add($.__views.__alloyId1);
    $.__views.backButton = Ti.UI.createButton({
        top: 10,
        image: "/arrow110.png",
        tintColor: "#585858",
        backgroundSelectedColor: "#ff0000",
        id: "backButton"
    });
    $.__views.__alloyId1.add($.__views.backButton);
    $.__views.colore = Ti.UI.createView({
        top: 80,
        bottom: 3,
        left: 3,
        width: 7,
        borderRadius: 3,
        id: "colore"
    });
    $.__views.__alloyId1.add($.__views.colore);
    $.__views.titolo = Ti.UI.createLabel({
        top: 90,
        left: 15,
        right: 15,
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        color: "#000",
        textAlign: "center",
        id: "titolo"
    });
    $.__views.__alloyId1.add($.__views.titolo);
    $.__views.contenuto = Ti.UI.createWebView({
        top: 130,
        left: 15,
        right: 15,
        id: "contenuto"
    });
    $.__views.__alloyId1.add($.__views.contenuto);
    $.__views.goButton = Ti.UI.createButton({
        bottom: 20,
        tintColor: "#1b7db1",
        id: "goButton",
        title: "Leggi tutta la notizia"
    });
    $.__views.__alloyId1.add($.__views.goButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.setArticle = function(riga) {
        $.titolo.text = riga.articleTitle;
        $.contenuto.html = "<style type='text/css''>p { font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; text-align: justify; }</style>" + riga.articleDescription.split("The post")[0];
        if ("Area CAD" === riga.articleCategory) {
            $.colore.backgroundColor = "#ef5b2f";
            $.goButton.tintColor = "#ef5b2f";
        } else if ("Eventi locali" === riga.articleCategory) {
            $.colore.backgroundColor = "#7d543e";
            $.goButton.tintColor = "#7d543e";
        } else if ("Area Scienza" === riga.articleCategory) {
            $.colore.backgroundColor = "#1b7db1";
            $.goButton.tintColor = "#1b7db1";
        } else if ("Comunicati Stampa" === riga.articleCategory) {
            $.colore.backgroundColor = "#940909";
            $.goButton.tintColor = "#940909";
        } else if ("Area Istituzionale" === riga.articleCategory) {
            $.colore.backgroundColor = "#e60a2e";
            $.goButton.tintColor = "#e60a2e";
        } else if ("Primo piano" === riga.articleCategory) {
            $.colore.backgroundColor = "#058b7b";
            $.goButton.tintColor = "#058b7b";
        } else {
            $.colore.backgroundColor = "#2d2d2d";
            $.goButton.tintColor = "#2d2d2d";
        }
        $.backButton.addEventListener("click", function() {
            $.detail.close();
        });
        $.goButton.addEventListener("click", function() {
            Ti.Platform.openURL(riga.articleUrl);
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;