function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "donaweb";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.donaweb = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        id: "donaweb"
    });
    $.__views.donaweb && $.addTopLevelView($.__views.donaweb);
    $.__views.backButton = Ti.UI.createButton({
        top: 10,
        image: "/arrow110.png",
        tintColor: "#585858",
        backgroundSelectedColor: "#ff0000",
        id: "backButton"
    });
    $.__views.donaweb.add($.__views.backButton);
    $.__views.paypalView = Ti.UI.createWebView({
        top: 90,
        id: "paypalView"
    });
    $.__views.donaweb.add($.__views.paypalView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.paypalView.html = "<html><head><title>Parent Project Onlus - Insieme X fermare la Duchenne!</title><style type='text/css'>body { margin-top:0; margin-right:0; margin-left:0; background-image: url('bgdona.png'); background-repeat: no-repeat; background-position:50% 50%; width:100%; } </style></head><body><center><form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'><div style='margin-top:100px;'></div><input type='image' src='https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donateCC_LG.gif' border='0' name='submit' alt='PayPal - Il metodo rapido, affidabile e innovativo per pagare e farsi pagare.'><img alt='' border='0' src='https://www.paypalobjects.com/it_IT/i/scr/pixel.gif' width='1' height='1'><input type='hidden' name='cmd' value='_xclick'><br /><input type='hidden' name='business' value='presidenza@parentproject.org'><br /><input type='hidden' name='item_name' value='Parent Project Onlus - Insieme X fermare la Duchenne!'><br /><input type='hidden' name='currency_code' value='EUR'><input type='hidden' name='amount' value='" + args.donazione + ".00'></form></center></body></html>";
    $.backButton.addEventListener("click", function() {
        $.donaweb.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;