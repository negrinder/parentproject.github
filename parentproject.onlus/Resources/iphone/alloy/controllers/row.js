function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        backgroundColor: "#f4f4f4",
        selectedBackgroundColor: "#ccc",
        height: "70dp",
        className: "itemRow",
        hasChild: true,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.image = Ti.UI.createImageView({
        height: "42dp",
        width: "68dp",
        left: "5dp",
        top: "3dp",
        touchEnabled: false,
        id: "image"
    });
    $.__views.row.add($.__views.image);
    $.__views.date = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: "68dp",
        left: "5dp",
        bottom: "3dp",
        color: "#444",
        font: {
            fontSize: "12dp"
        },
        textAlign: "center",
        touchEnabled: false,
        id: "date"
    });
    $.__views.row.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        height: "42dp",
        top: "3dp",
        font: {
            fontSize: "14dp"
        },
        left: "83dp",
        right: "3dp",
        touchEnabled: false,
        id: "title"
    });
    $.__views.row.add($.__views.title);
    $.__views.category = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        left: "83dp",
        bottom: "3dp",
        font: {
            fontSize: "12dp"
        },
        color: "#ffffff",
        right: "10dp",
        textAlign: "center",
        touchEnabled: false,
        id: "category"
    });
    $.__views.row.add($.__views.category);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.articleUrl = args.articleUrl;
    $.row.articleTitle = args.title;
    $.row.articleDescription = args.description;
    $.image.image = args.image;
    $.date.text = args.date;
    $.title.text = args.title;
    $.category.text = args.category;
    $.category.backgroundColor = "Area CAD" === $.category.text ? "#ef5b2f" : "Eventi locali" === $.category.text ? "#7d543e" : "Area Scienza" === $.category.text ? "#1b7db1" : "Comunicati Stampa" === $.category.text ? "#940909" : "Area Istituzionale" === $.category.text ? "#e60a2e" : "Primo piano" === $.category.text ? "#058b7b" : "#2d2d2d";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;