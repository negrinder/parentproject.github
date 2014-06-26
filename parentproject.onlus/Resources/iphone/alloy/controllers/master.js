function Controller() {
    function openDetail(e) {
        $.trigger("detail", e);
    }
    function refreshRss() {
        rss.loadRssFeed({
            success: function(data) {
                var rows = [];
                _.each(data, function(item) {
                    rows.push(Alloy.createController("row", {
                        articleUrl: item.link,
                        image: item.image,
                        title: item.title,
                        date: item.pubDate,
                        category: item.category,
                        description: item.description
                    }).getView());
                });
                $.table.setData(rows);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "master";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.master = Ti.UI.createWindow({
        backgroundColor: "#f8f8f8",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.BLACK_OPAQUE,
        barColor: "#f8f8f8",
        titleAttributes: {
            color: "#2d2d2d",
            font: {
                fontFamily: "Heiti SC",
                fontSize: 22
            }
        },
        title: "Ultime Notizie",
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    $.__views.refreshButton = Ti.UI.createButton({
        color: "red",
        id: "refreshButton",
        image: "refresh.png"
    });
    refreshRss ? $.__views.refreshButton.addEventListener("click", refreshRss) : __defers["$.__views.refreshButton!click!refreshRss"] = true;
    $.__views.master.rightNavButton = $.__views.refreshButton;
    var __alloyId10 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundColor: "#f4f4f4"
    });
    __alloyId10.push($.__views.view1);
    $.__views.image1 = Ti.UI.createImageView({
        image: "foto-Rick.jpg",
        id: "image1"
    });
    $.__views.view1.add($.__views.image1);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "#f4f4f4"
    });
    __alloyId10.push($.__views.view2);
    $.__views.image2 = Ti.UI.createImageView({
        image: "foto-Rick2.jpg",
        id: "image2"
    });
    $.__views.view2.add($.__views.image2);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "#f4f4f4"
    });
    __alloyId10.push($.__views.view3);
    $.__views.image3 = Ti.UI.createImageView({
        image: "foto-Rick3.jpg",
        id: "image3"
    });
    $.__views.view3.add($.__views.image3);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        top: "5",
        left: "5",
        right: "5",
        bottom: "59%",
        separatorStyle: 0,
        borderColor: "#c0c0c0",
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: "transparent",
        showPagingControl: true,
        pagingControlHeight: 30,
        pageIndicatorTintColor: "gray",
        currentPageIndicatorTintColor: "black",
        overlayEnabled: true,
        pagingControlColor: "transparent",
        views: __alloyId10,
        id: "scrollableView"
    });
    $.__views.master.add($.__views.scrollableView);
    $.__views.table = Ti.UI.createTableView({
        top: "40%",
        left: "5",
        right: "5",
        bottom: "5",
        separatorStyle: 0,
        borderColor: "#c0c0c0",
        borderRadius: 3,
        borderWidth: 1,
        id: "table"
    });
    $.__views.master.add($.__views.table);
    openDetail ? $.__views.table.addEventListener("click", openDetail) : __defers["$.__views.table!click!openDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var rss = require("rss");
    refreshRss();
    __defers["$.__views.refreshButton!click!refreshRss"] && $.__views.refreshButton.addEventListener("click", refreshRss);
    __defers["$.__views.table!click!openDetail"] && $.__views.table.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;