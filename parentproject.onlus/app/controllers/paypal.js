var args = arguments[0] || {};

var win = $.dona;
var u = Ti.Android != undefined ? 'dp' : 0;

var status = Ti.UI.createLabel({
    top: 50 + u, height: 45 + u, color: '#333',
    text: 'Digita la tua donazione'
});
win.add(status);

var importo = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: 100 + u,
  width: 278, 
  height: 43,
  value: 10,
  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  textAlign: "right"
});
win.add(importo);

var conferma = Ti.UI.createButton({
  top: 150 + u,
  width: 278,
  height: 43,
  title: "Avanti"
});
win.add(conferma);

conferma.addEventListener('click', function (e) {
	if (Ti.Platform.osname == "android") {
	}
	else
	{
		var controller = Alloy.createController('donate', {
							donazione: importo.value
						}).getView().open({ modal : true,
									        navBarHidden: true,
									    	fullscreen: true
									    	});
	}
});