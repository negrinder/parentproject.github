exports.setArticle = function(riga) {
	$.titolo.text = riga.articleTitle;
	$.contenuto.html = "<style type='text/css''>p { font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; text-align: justify; }</style>" + riga.articleDescription.split("The post")[0];
	
	if(riga.articleCategory==='Area CAD') {
		$.colore.backgroundColor = '#ef5b2f';
		$.goButton.tintColor = '#ef5b2f';
	} else if(riga.articleCategory==='Eventi locali') {
		$.colore.backgroundColor = '#7d543e';
		$.goButton.tintColor = '#7d543e';
	} else if(riga.articleCategory==='Area Scienza') {
		$.colore.backgroundColor = '#1b7db1';
		$.goButton.tintColor = '#1b7db1';
	} else if(riga.articleCategory==='Comunicati Stampa') {
		$.colore.backgroundColor = '#940909';
		$.goButton.tintColor = '#940909';
	} else if(riga.articleCategory==='Area Istituzionale') {
		$.colore.backgroundColor = '#e60a2e';
		$.goButton.tintColor = '#e60a2e';
	} else if(riga.articleCategory==='Primo piano') {
		$.colore.backgroundColor = '#058b7b';
		$.goButton.tintColor = '#058b7b';
	} else {
		$.colore.backgroundColor = '#2d2d2d';
		$.goButton.tintColor = '#2d2d2d';
	}
		
	$.backButton.addEventListener('click', function(e){
    	$.detail.close();
	});
	
	$.goButton.addEventListener('click', function(e){
    	Ti.Platform.openURL(riga.articleUrl);
	});
};