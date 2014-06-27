var args = arguments[0] || {};

$.row.articleUrl = args.articleUrl;
$.row.articleTitle = args.title;
$.row.articleDescription = args.description;
$.row.articleCategory = args.category;

if(args.image == '')
	$.image.image = 'blank.jpg';
else
	$.image.image = args.image;

$.date.text = args.date;
$.title.text = args.title.substr(0,1).toUpperCase() + args.title.substr(1,25).toLowerCase() + '...';
$.category.text = args.category;

var sepLine = Ti.UI.createView({
        left : 0,
        right : 0,
        height : 2,
        bottom : 0,
        backgroundColor : '#f1f1f1'
    });
$.row.add(sepLine);
    
if($.category.text==='Area CAD') {
	$.colore.backgroundColor = '#ef5b2f';
	$.category.color = '#ef5b2f';
} else if($.category.text==='Eventi locali') {
	$.colore.backgroundColor = '#7d543e';
	$.category.color = '#7d543e';
} else if($.category.text==='Area Scienza') {
	$.colore.backgroundColor = '#1b7db1';
	$.category.color = '#1b7db1';
} else if($.category.text==='Comunicati Stampa') {
	$.colore.backgroundColor = '#940909';
	$.category.color = '#940909';
} else if($.category.text==='Area Istituzionale') {
	$.colore.backgroundColor = '#e60a2e';
	$.category.color = '#e60a2e';
} else if($.category.text==='Primo piano') {
	$.colore.backgroundColor = '#058b7b';
	$.category.color = '#058b7b';
} else {
	$.colore.backgroundColor = '#2d2d2d';
	$.category.color = '#2d2d2d';
}