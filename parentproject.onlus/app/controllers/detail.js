exports.setArticle = function(titleText, descriptionText, articleUrl) {
	$.titolo.text = titleText;
	$.contenuto.html = "<style type='text/css''>p { font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; }</style>" + descriptionText.split("The post")[0];
	
	$.backButton.addEventListener('click', function(e){
    	$.detail.close();
	});
	
	$.goButton.addEventListener('click', function(e){
    	Ti.Platform.openURL(articleUrl);
	});
};