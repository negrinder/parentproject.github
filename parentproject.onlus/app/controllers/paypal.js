var args = arguments[0] || {};

var u = Ti.Android != undefined ? 'dp' : 0;

var testa = Ti.UI.createView({
    top: 0 + u, 
    height: 27 + u, 
    color: '#fff',
    backgroundColor: '#e5a200'
});
var titolo = Ti.UI.createLabel({
    color: '#fff',
    font: {
    	fontSize: '20dp',
    	fontWeight:'bold'
    },
    text: 'Donazione'
});
testa.add(titolo);
$.dona.add(testa);

var status = Ti.UI.createLabel({
    top: 40 + u, height: 35 + u, color: '#333',
    text: 'digita l\'importo che desideri'
});
$.dona.add(status);

/*
---------------------------------------------
*/

var flexSpace = Titanium.UI.createButton({
    systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var Done = Titanium.UI.createButton({
    title : 'Conferma',
});
    
var importo = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#2d2d2d',
	top: 75 + u,
	width: 278, 
	height: 40,
	value: 10,
	textAlign: "right",
	
	keyboardToolbar : [flexSpace, Done],
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    returnKeyType:Titanium.UI.RETURNKEY_DONE,
    clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONBLUR,
    keyboardType:  Titanium.UI.KEYBOARD_NUMBER_PAD,
    enableReturnKey: true,
    keyboardAppearance: Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT
});

Done.addEventListener('click', function(e) {
    importo.blur();
});

$.dona.add(importo);

var conferma = Ti.UI.createButton({
  top: 110 + u,
  width: 208,
  height: 86,
  backgroundImage: '/dona_button.png'
});
$.dona.add(conferma);

conferma.addEventListener('click', function (e) {
	var controller = Alloy.createController('donaweb', {
						donazione: importo.value
					 }).getView().open({ modal : true,
								         navBarHidden: true,
								    	 fullscreen: true
								    	});
});