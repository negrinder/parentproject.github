$.master.on('detail', function(e) {
	// get the detail controller and window references
	var controller = OS_IOS && Alloy.isTablet ? $.detail : Alloy.createController('detail');
	var win = controller.getView();

	// get boxer stats by name
	controller.setArticle(e.row);

	// open the detail windows
	win.open({
        modal : true,
        navBarHidden: true,
    	fullscreen: true
    	});
});

$.master.getView().open();