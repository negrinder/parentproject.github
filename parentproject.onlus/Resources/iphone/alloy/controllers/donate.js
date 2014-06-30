function Controller() {
    function addButtonToWindow() {
        if (button) {
            win.remove(button);
            button = null;
        }
        button = Paypal.createPaypalButton({
            width: 278 + u,
            height: 43 + u,
            buttonStyle: Paypal.BUTTON_278x43,
            bottom: 30 + u,
            language: "en_US",
            textStyle: Paypal.PAYPAL_TEXT_DONATE,
            appID: "APP-12345678912345",
            paypalEnvironment: Paypal.PAYPAL_ENV_LIVE,
            feePaidByReceiver: false,
            enableShipping: false,
            payment: {
                paymentType: Paypal.PAYMENT_SUBTYPE_DONATIONS,
                subtotal: parseInt(args.donazione),
                tax: 0,
                shipping: 0,
                currency: "EUR",
                recipient: "presidenza@parentproject.org",
                customID: "",
                invoiceItems: [ {
                    name: "La mia donazione",
                    totalPrice: parseInt(args.donazione),
                    itemPrice: parseInt(args.donazione),
                    itemCount: 1
                } ],
                ipnUrl: "http://www.parentproject.it/",
                merchantName: "Parent Project Onlus",
                memo: "Una terapia per la Distrofia!"
            }
        });
        button.addEventListener("paymentCancelled", function() {
            addButtonToWindow();
        });
        button.addEventListener("paymentSuccess", function() {
            addButtonToWindow();
        });
        button.addEventListener("paymentError", function() {
            addButtonToWindow();
        });
        button.addEventListener("buttonDisplayed", function() {});
        button.addEventListener("buttonError", function() {});
        button.addEventListener("click", function() {
            myPayment.subtotal = importo.value;
        });
        win.add(button);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "donate";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.donate = Ti.UI.createWindow({
        backgroundColor: "#f4f4f4",
        titleAttributes: {
            color: "#ffffff"
        },
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "donate"
    });
    $.__views.donate && $.addTopLevelView($.__views.donate);
    $.__views.paypalView = Ti.UI.createView({
        id: "paypalView"
    });
    $.__views.donate.add($.__views.paypalView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var Paypal = require("ti.paypal");
    var win = $.paypalView;
    var u = void 0 != Ti.Android ? "dp" : 0;
    var indietro = Ti.UI.createButton({
        top: 10 + u,
        image: "/arrow110.png",
        width: 64,
        height: 64,
        tintColor: "#585858",
        backgroundSelectedColor: "#ff0000"
    });
    win.add(indietro);
    indietro.addEventListener("click", function() {
        $.donate.close();
    });
    var button;
    addButtonToWindow();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;