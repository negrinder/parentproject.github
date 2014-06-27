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
    top: 50 + u, height: 45 + u, color: '#333',
    text: 'digita l\'importo che desideri'
});
$.dona.add(status);

var importo = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#2d2d2d',
	top: 100 + u,
	width: 278, 
	height: 43,
	value: 10,
	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,    
	enableReturnKey: true,
	textAlign: "right"
});
$.dona.add(importo);

importo.addEventListener("click", function()
{
    importo.setSelection(0,importo.value.length);
});

testa.addEventListener("click", function()
{
    importo.blur();
});

var conferma = Ti.UI.createButton({
  top: 150 + u,
  width: 208,
  height: 86,
  backgroundImage: 'dona_button.png'
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