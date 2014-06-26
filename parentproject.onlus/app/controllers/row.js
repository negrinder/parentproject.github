var args = arguments[0] || {};

$.row.articleUrl = args.articleUrl;
$.row.articleTitle = args.title;
$.row.articleDescription = args.description;

if(args.image == '')
	$.image.image = 'blank.jpg';
else
	$.image.image = args.image;

$.date.text = args.date;
$.title.text = args.title.substr(0,1).toUpperCase() + args.title.substr(1).toLowerCase();
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
	$.category.backgroundColor = '#ef5b2f';
	$.date.color = '#ef5b2f';
} else if($.category.text==='Eventi locali') {
	$.category.backgroundColor = '#7d543e';
	$.date.color = '#7d543e';
} else if($.category.text==='Area Scienza') {
	$.category.backgroundColor = '#1b7db1';
	$.date.color = '#1b7db1';
} else if($.category.text==='Comunicati Stampa') {
	$.category.backgroundColor = '#940909';
	$.date.color = '#940909';
} else if($.category.text==='Area Istituzionale') {
	$.category.backgroundColor = '#e60a2e';
	$.date.color = '#e60a2e';
} else if($.category.text==='Primo piano') {
	$.category.backgroundColor = '#058b7b';
	$.date.color = '#058b7b';
} else {
	$.category.backgroundColor = '#2d2d2d';
	$.date.color = '#2d2d2d';
}