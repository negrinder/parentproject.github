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
            top: 200 + u,
            language: "en_US",
            textStyle: Paypal.PAYPAL_TEXT_DONATE,
            appID: "<<<YOUR APP ID HERE>>>",
            paypalEnvironment: Paypal.PAYPAL_ENV_NONE,
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
            status.text = "Donazione cancellata.";
            addButtonToWindow();
        });
        button.addEventListener("paymentSuccess", function(e) {
            status.text = "Donazione avvenuta con successo.  TransactionID: " + e.transactionID + ", Caricamento...";
            addButtonToWindow();
        });
        button.addEventListener("paymentError", function(e) {
            status.text = "Errore di pagamento,  errorCode: " + e.errorCode + ", errorMessage: " + e.errorMessage;
            addButtonToWindow();
        });
        button.addEventListener("buttonDisplayed", function() {
            status.text = "Sostieni Parent Project adesso!";
        });
        button.addEventListener("buttonError", function() {
            status.text = "Sostieni Parent Project adesso!";
        });
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
        layout: "vertical",
        id: "donate"
    });
    $.__views.donate && $.addTopLevelView($.__views.donate);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var Paypal = require("ti.paypal");
    var win = $.donate;
    var u = void 0 != Ti.Android ? "dp" : 0;
    var indietro = Ti.UI.createButton({
        top: 50 + u,
        width: 278,
        height: 43,
        title: "Annulla"
    });
    win.add(indietro);
    indietro.addEventListener("click", function() {
        $.donate.close();
    });
    var status = Ti.UI.createLabel({
        top: 150 + u,
        height: 45 + u,
        color: "#333",
        text: "Loading, please wait..."
    });
    win.add(status);
    var button;
    addButtonToWindow();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;