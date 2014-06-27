function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        backgroundColor: "#ffffff",
        selectedBackgroundColor: "#c0c0c0",
        height: 72,
        className: "itemRow",
        hasChild: false,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.colore = Ti.UI.createView({
        top: 3,
        bottom: 3,
        left: 3,
        width: 7,
        height: 64,
        borderRadius: 3,
        id: "colore"
    });
    $.__views.row.add($.__views.colore);
    $.__views.foto = Ti.UI.createView({
        top: 3,
        bottom: 3,
        left: 13,
        width: 64,
        height: 64,
        borderColor: "#eee",
        borderRadius: 3,
        borderWidth: 1,
        id: "foto"
    });
    $.__views.row.add($.__views.foto);
    $.__views.image = Ti.UI.createImageView({
        width: 60,
        id: "image"
    });
    $.__views.foto.add($.__views.image);
    $.__views.category = Ti.UI.createLabel({
        top: 45,
        left: 88,
        right: 3,
        height: 15,
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        color: "#000",
        borderRadius: 3,
        textAlign: "left",
        id: "category"
    });
    $.__views.row.add($.__views.category);
    $.__views.title = Ti.UI.createLabel({
        top: 20,
        left: 86,
        height: 25,
        right: 3,
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        textAlign: "left",
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_TOP,
        id: "title"
    });
    $.__views.row.add($.__views.title);
    $.__views.date = Ti.UI.createLabel({
        top: 45,
        left: 86,
        right: 6,
        height: 15,
        font: {
            fontSize: "12dp"
        },
        color: "#868686",
        textAlign: "right",
        id: "date"
    });
    $.__views.row.add($.__views.date);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.articleUrl = args.articleUrl;
    $.row.articleTitle = args.title;
    $.row.articleDescription = args.description;
    $.row.articleCategory = args.category;
    $.image.image = "" == args.image ? "blank.jpg" : args.image;
    $.date.text = args.date;
    $.title.text = args.title.substr(0, 1).toUpperCase() + args.title.substr(1, 25).toLowerCase() + "...";
    $.category.text = args.category;
    var sepLine = Ti.UI.createView({
        left: 0,
        right: 0,
        height: 2,
        bottom: 0,
        backgroundColor: "#f1f1f1"
    });
    $.row.add(sepLine);
    if ("Area CAD" === $.category.text) {
        $.colore.backgroundColor = "#ef5b2f";
        $.category.color = "#ef5b2f";
    } else if ("Eventi locali" === $.category.text) {
        $.colore.backgroundColor = "#7d543e";
        $.category.color = "#7d543e";
    } else if ("Area Scienza" === $.category.text) {
        $.colore.backgroundColor = "#1b7db1";
        $.category.color = "#1b7db1";
    } else if ("Comunicati Stampa" === $.category.text) {
        $.colore.backgroundColor = "#940909";
        $.category.color = "#940909";
    } else if ("Area Istituzionale" === $.category.text) {
        $.colore.backgroundColor = "#e60a2e";
        $.category.color = "#e60a2e";
    } else if ("Primo piano" === $.category.text) {
        $.colore.backgroundColor = "#058b7b";
        $.category.color = "#058b7b";
    } else {
        $.colore.backgroundColor = "#2d2d2d";
        $.category.color = "#2d2d2d";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;