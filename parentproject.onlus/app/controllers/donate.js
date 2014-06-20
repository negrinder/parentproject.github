var args = arguments[0] || {};

var Paypal = require('ti.paypal');

var win = $.donate;
var u = Ti.Android != undefined ? 'dp' : 0;

var indietro = Ti.UI.createButton({
  top: 50 + u,
  width: 278, 
  height: 43,
  title: "Annulla"
});
win.add(indietro);

indietro.addEventListener('click', function (e) {
	$.donate.close();
});

var status = Ti.UI.createLabel({
    top: 150 + u, height: 45 + u, color: '#333',
    text: 'Loading, please wait...'
});
win.add(status);

var button;
function addButtonToWindow() {
    if (button) {
        win.remove(button);
        button = null;
    }
    button = Paypal.createPaypalButton({
        // NOTE: height/width only determine the size of the view that the button is embedded in - the actual button size
        // is determined by the buttonStyle property!
        width: 278 + u, height: 43 + u,
        buttonStyle: Paypal.BUTTON_278x43, // The style & size of the button
        top: 200 + u,
  
        language: 'en_US',
        textStyle: Paypal.PAYPAL_TEXT_DONATE, // Causes the button's text to change from "Pay" to "Donate"

        appID: '<<<YOUR APP ID HERE>>>', // The appID issued by Paypal for your application; for testing, feel free to delete this property entirely.
        paypalEnvironment: Paypal.PAYPAL_ENV_NONE, // Sandbox, None or Live

        feePaidByReceiver: false,
        enableShipping: false, // Whether or not to select/send shipping information

        payment:  {    
					paymentType: Paypal.PAYMENT_SUBTYPE_DONATIONS, // The type of payment
					subtotal: parseInt(args.donazione), // The total cost of the order, excluding tax and shipping
					tax: 0,
					shipping: 0,
					currency: 'EUR',
					recipient: 'presidenza@parentproject.org',
					customID: '',
					invoiceItems: [
					    { name: 'La mia donazione', totalPrice: parseInt(args.donazione), itemPrice: parseInt(args.donazione), itemCount: 1 }
					],
					ipnUrl: 'http://www.parentproject.it/',
					merchantName: 'Parent Project Onlus',
					memo: 'Una terapia per la Distrofia!'
				  }
});

// Events available
button.addEventListener('paymentCancelled', function (e) {
    status.text = 'Donazione cancellata.';
    // The button should only be used once; so after a payment is cancelled, succeeds, or errors, we must redisplay it.
    addButtonToWindow();
});
button.addEventListener('paymentSuccess', function (e) {
    status.text = 'Donazione avvenuta con successo.  TransactionID: ' + e.transactionID + ', Caricamento...';
    // The button should only be used once; so after a payment is cancelled, succeeds, or errors, we must redisplay it.
    addButtonToWindow();
});
button.addEventListener('paymentError', function (e) {
    status.text = 'Errore di pagamento,  errorCode: ' + e.errorCode + ', errorMessage: ' + e.errorMessage;
    // The button should only be used once; so after a payment is cancelled, succeeds, or errors, we must redisplay it.
    addButtonToWindow();
});

button.addEventListener('buttonDisplayed', function () {
    status.text = 'Sostieni Parent Project adesso!';
});
button.addEventListener('buttonError', function () {
    status.text = 'Sostieni Parent Project adesso!';
});
button.addEventListener('click', function () {
        myPayment.subtotal = importo.value;
	});
    win.add(button);
}
addButtonToWindow();