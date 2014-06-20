$.master.on('detail', function(e) {
	// get the detail controller and window references
	var controller = OS_IOS && Alloy.isTablet ? $.detail : Alloy.createController('detail');
	var win = controller.getView();

	// get boxer stats by name
	controller.setArticle(e.row.articleTitle, e.row.articleDescription, e.row.articleUrl);

	// open the detail windows
	win.open({
        modal : true,
        navBarHidden: true,
    	fullscreen: true
    	});
});

if (OS_ANDROID) {
	$.master.getView().open();
} else {
	$.index.open();
}