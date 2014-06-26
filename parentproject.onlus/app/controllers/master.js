var rss = require('rss');

// open detail window
function openDetail(e) {
	$.trigger('detail', e);
}

// Refresh table data from remote RSS feed
function refreshRss() {
	rss.loadRssFeed({
		success: function(data) {
			var rows = [];
			_.each(data, function(item) {
				rows.push(Alloy.createController('row', {
					articleUrl: item.link,
					image: item.image,
					title: item.title,
					date: item.pubDate,
					category: item.category,
					description: item.description
				}).getView());
			});
			$.notizie.setData(rows);
		}
	});
}

// do initial load of RSS
refreshRss();

// reload RSS news on pulldown
$.notizie.addEventListener('dragEnd', function (e) {
	refreshRss();
});

// change view
$.btn1.addEventListener('click', function (e) {
	$.notizieContainer.animate({opacity:1,duration:500});
	$.chisiamoContainer.animate({opacity:0,duration:500});
	$.contattiContainer.animate({opacity:0,duration:500});
	$.donaContainer.animate({opacity:0,duration:500});
});
$.btn2.addEventListener('click', function (e) {
	$.notizieContainer.animate({opacity:0,duration:500});
	$.chisiamoContainer.animate({opacity:1,duration:500});
	$.contattiContainer.animate({opacity:0,duration:500});
	$.donaContainer.animate({opacity:0,duration:500});
});
$.btn3.addEventListener('click', function (e) {
	$.notizieContainer.animate({opacity:0,duration:500});
	$.chisiamoContainer.animate({opacity:0,duration:500});
	$.contattiContainer.animate({opacity:1,duration:500});
	$.donaContainer.animate({opacity:0,duration:500});
});
$.btn4.addEventListener('click', function (e) {
	$.notizieContainer.animate({opacity:0,duration:500});
	$.chisiamoContainer.animate({opacity:0,duration:500});
	$.contattiContainer.animate({opacity:0,duration:500});
	$.donaContainer.animate({opacity:1,duration:500});
});

$.notizieContainer.opacity = 1;
$.chisiamoContainer.opacity = 0;
$.contattiContainer.opacity = 0;
$.donaContainer.opacity = 0;