function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.master = Alloy.createController("master", {
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.master.on("detail", function(e) {
        var controller = true && Alloy.isTablet ? $.detail : Alloy.createController("detail");
        var win = controller.getView();
        controller.setArticle(e.row);
        win.open({
            modal: true,
            navBarHidden: true,
            fullscreen: true
        });
    });
    setTimeout(function() {
        $.master.getView().open();
    }, 1e4);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;