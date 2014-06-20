var args = arguments[0] || {};

$.row.articleUrl = args.articleUrl;
$.row.articleTitle = args.title;
$.row.articleDescription = args.description;

$.image.image = args.image;
$.date.text = args.date;
$.title.text = args.title;
$.category.text = args.category;

if($.category.text==='Area CAD')
	$.category.backgroundColor = '#ef5b2f';	
else if($.category.text==='Eventi locali')
	$.category.backgroundColor = '#7d543e';
else if($.category.text==='Area Scienza')
	$.category.backgroundColor = '#1b7db1';
else if($.category.text==='Comunicati Stampa')
	$.category.backgroundColor = '#940909';
else if($.category.text==='Area Istituzionale')
	$.category.backgroundColor = '#e60a2e';
else if($.category.text==='Primo piano')
	$.category.backgroundColor = '#058b7b';
else
	$.category.backgroundColor = '#2d2d2d';