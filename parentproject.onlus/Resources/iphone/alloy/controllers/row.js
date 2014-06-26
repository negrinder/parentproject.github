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
        height: "96dp",
        className: "itemRow",
        hasChild: false,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.image = Ti.UI.createImageView({
        width: "66dp",
        left: "5dp",
        top: "24dp",
        bottom: "6dp",
        touchEnabled: false,
        gallerytype: "gallery",
        borderColor: "#c0c0c0",
        borderRadius: 10,
        borderWidth: 1,
        hires: true,
        id: "image"
    });
    $.__views.row.add($.__views.image);
    $.__views.category = Ti.UI.createLabel({
        height: "15dp",
        left: "3dp",
        right: "3dp",
        top: "3dp",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        color: "#ffffff",
        borderRadius: 3,
        textAlign: "center",
        touchEnabled: false,
        id: "category"
    });
    $.__views.row.add($.__views.category);
    $.__views.title = Ti.UI.createLabel({
        height: "55dp",
        left: "83dp",
        right: "3dp",
        top: "24dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: "left",
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_TOP,
        touchEnabled: false,
        id: "title"
    });
    $.__views.row.add($.__views.title);
    $.__views.date = Ti.UI.createLabel({
        height: "15dp",
        left: "83dp",
        right: "6dp",
        top: "75dp",
        font: {
            fontSize: "10dp"
        },
        color: "#2d2d2d",
        textAlign: "right",
        touchEnabled: false,
        id: "date"
    });
    $.__views.row.add($.__views.date);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.articleUrl = args.articleUrl;
    $.row.articleTitle = args.title;
    $.row.articleDescription = args.description;
    $.image.image = "" == args.image ? "blank.jpg" : args.image;
    $.date.text = args.date;
    $.title.text = args.title.substr(0, 1).toUpperCase() + args.title.substr(1).toLowerCase();
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
        $.category.backgroundColor = "#ef5b2f";
        $.date.color = "#ef5b2f";
    } else if ("Eventi locali" === $.category.text) {
        $.category.backgroundColor = "#7d543e";
        $.date.color = "#7d543e";
    } else if ("Area Scienza" === $.category.text) {
        $.category.backgroundColor = "#1b7db1";
        $.date.color = "#1b7db1";
    } else if ("Comunicati Stampa" === $.category.text) {
        $.category.backgroundColor = "#940909";
        $.date.color = "#940909";
    } else if ("Area Istituzionale" === $.category.text) {
        $.category.backgroundColor = "#e60a2e";
        $.date.color = "#e60a2e";
    } else if ("Primo piano" === $.category.text) {
        $.category.backgroundColor = "#058b7b";
        $.date.color = "#058b7b";
    } else {
        $.category.backgroundColor = "#2d2d2d";
        $.date.color = "#2d2d2d";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;