var args = arguments[0] || {};

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

// change view
$.btn1.addEventListener('click', function (e) {
	$.notizieContainer.visible = true;
	$.chisiamoContainer.visible = false;
	$.contattiContainer.visible = false;
	$.donaContainer.visible = false;
});
$.btn2.addEventListener('click', function (e) {
	$.notizieContainer.visible = false;
	$.chisiamoContainer.visible = true;
	$.contattiContainer.visible = false;
	$.donaContainer.visible = false;
});
$.btn3.addEventListener('click', function (e) {
	$.notizieContainer.visible = false;
	$.chisiamoContainer.visible = false;
	$.contattiContainer.visible = true;
	$.donaContainer.visible = false;
});
$.btn4.addEventListener('click', function (e) {
	$.notizieContainer.visible = false;
	$.chisiamoContainer.visible = false;
	$.contattiContainer.visible = false;
	$.donaContainer.visible = true;
});

$.chisiamoContainer.visible = false;
$.contattiContainer.visible = false;
$.donaContainer.visible = false;