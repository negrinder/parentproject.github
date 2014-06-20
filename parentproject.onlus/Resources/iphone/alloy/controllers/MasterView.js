function Controller() {
    function MasterView() {
        var self = Ti.UI.createView({
            backgroundColor: "#fff"
        });
        var table = Ti.UI.createTableView();
        self.add(table);
        table.addEventListener("click", function(e) {
            self.fireEvent("itemSelected", {
                link: e.row.link
            });
        });
        self.refreshRssTable = function(data) {
            if ("[object Array]" === Object.prototype.toString.apply(data)) {
                var rows = [];
                for (var i = 0; data.length > i; i++) rows.push(createRssRow(data[i]));
                table.setData(rows);
            }
        };
        return self;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MasterView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var createRssRow = function(item) {
        var tablerow = Ti.UI.createTableViewRow({
            height: 70,
            link: item.link,
            className: "itemRow",
            hasChild: true
        });
        var imageview = Ti.UI.createImageView({
            image: item.image,
            height: 42,
            width: 68,
            left: 5,
            top: 3
        });
        var titleview = Ti.UI.createLabel({
            text: item.title,
            color: "#000",
            height: 70,
            font: {
                fontSize: 16
            },
            left: 83,
            right: 5
        });
        var dateview = Ti.UI.createLabel({
            text: item.pubDate,
            textAlign: "center",
            color: "#444",
            font: {
                fontSize: 12
            },
            height: "auto",
            width: 68,
            left: 5,
            bottom: 3
        });
        tablerow.add(imageview);
        tablerow.add(dateview);
        tablerow.add(titleview);
        return tablerow;
    };
    module.exports = MasterView;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;