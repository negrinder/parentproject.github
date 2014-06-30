function Controller() {
    function openDetail(e) {
        $.trigger("detail", e);
    }
    function refreshRss() {
        rss.loadRssFeed({
            success: function(data) {
                var rows = [];
                _.each(data, function(item) {
                    rows.push(Alloy.createController("row", {
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "master_android";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.master_android = Ti.UI.createWindow({
        navBarHidden: true,
        id: "master_android"
    });
    $.__views.master_android && $.addTopLevelView($.__views.master_android);
    $.__views.__alloyId5 = Ti.UI.createView({
        id: "__alloyId5"
    });
    $.__views.master_android.add($.__views.__alloyId5);
    var __alloyId6 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundColor: "#f4f4f4"
    });
    __alloyId6.push($.__views.view1);
    $.__views.image1 = Ti.UI.createImageView({
        image: "/slide/android/comunita.jpg",
        id: "image1"
    });
    $.__views.view1.add($.__views.image1);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "#f4f4f4"
    });
    __alloyId6.push($.__views.view2);
    $.__views.image2 = Ti.UI.createImageView({
        image: "/slide/android/foto-Rick.jpg",
        id: "image2"
    });
    $.__views.view2.add($.__views.image2);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "#f4f4f4"
    });
    __alloyId6.push($.__views.view3);
    $.__views.image3 = Ti.UI.createImageView({
        image: "/slide/android/conferenza.jpg",
        id: "image3"
    });
    $.__views.view3.add($.__views.image3);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        backgroundColor: "#f4f4f4"
    });
    __alloyId6.push($.__views.view4);
    $.__views.image4 = Ti.UI.createImageView({
        image: "/slide/android/daniele.jpg",
        id: "image4"
    });
    $.__views.view4.add($.__views.image4);
    $.__views.view5 = Ti.UI.createView({
        id: "view5",
        backgroundColor: "#f4f4f4"
    });
    __alloyId6.push($.__views.view5);
    $.__views.image5 = Ti.UI.createImageView({
        image: "/slide/android/foto-Rick2.jpg",
        id: "image5"
    });
    $.__views.view5.add($.__views.image5);
    $.__views.view6 = Ti.UI.createView({
        id: "view6",
        backgroundColor: "#f4f4f4"
    });
    __alloyId6.push($.__views.view6);
    $.__views.image6 = Ti.UI.createImageView({
        image: "/slide/android/laboratorio.jpg",
        id: "image6"
    });
    $.__views.view6.add($.__views.image6);
    $.__views.view7 = Ti.UI.createView({
        id: "view7",
        backgroundColor: "#f4f4f4"
    });
    __alloyId6.push($.__views.view7);
    $.__views.image7 = Ti.UI.createImageView({
        image: "/slide/android/ragazzi.jpg",
        id: "image7"
    });
    $.__views.view7.add($.__views.image7);
    $.__views.view8 = Ti.UI.createView({
        id: "view8",
        backgroundColor: "#f4f4f4"
    });
    __alloyId6.push($.__views.view8);
    $.__views.image8 = Ti.UI.createImageView({
        image: "/slide/android/ragazzi2.jpg",
        id: "image8"
    });
    $.__views.view8.add($.__views.image8);
    $.__views.view9 = Ti.UI.createView({
        id: "view9",
        backgroundColor: "#f4f4f4"
    });
    __alloyId6.push($.__views.view9);
    $.__views.image9 = Ti.UI.createImageView({
        image: "/slide/android/puri.jpg",
        id: "image9"
    });
    $.__views.view9.add($.__views.image9);
    $.__views.immagini = Ti.UI.createScrollableView({
        top: 0,
        height: 240,
        separatorStyle: 0,
        borderWidth: 0,
        backgroundColor: "transparent",
        showPagingControl: true,
        pagingControlHeight: 30,
        pageIndicatorTintColor: "gray",
        currentPageIndicatorTintColor: "black",
        overlayEnabled: true,
        pagingControlColor: "transparent",
        views: __alloyId6,
        id: "immagini"
    });
    $.__views.__alloyId5.add($.__views.immagini);
    $.__views.bordoTop = Ti.UI.createView({
        top: 240,
        height: 1,
        backgroundColor: "#9e9e9e",
        id: "bordoTop"
    });
    $.__views.__alloyId5.add($.__views.bordoTop);
    $.__views.barra = Ti.UI.createView({
        top: 241,
        height: 50,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#eeeeee",
                offset: 0
            }, {
                color: "#d0d0d0",
                offset: 1
            } ]
        },
        id: "barra",
        textAlign: "right"
    });
    $.__views.__alloyId5.add($.__views.barra);
    $.__views.btn1 = Ti.UI.createButton({
        right: 247,
        tintColor: "#585858",
        backgroundColor: "transparent",
        borderColor: "transparent",
        id: "btn1",
        image: "/images/couple48.png"
    });
    $.__views.barra.add($.__views.btn1);
    $.__views.btn2 = Ti.UI.createButton({
        right: 173,
        tintColor: "#585858",
        backgroundColor: "transparent",
        borderColor: "transparent",
        id: "btn2",
        image: "/images/chisiamo.png"
    });
    $.__views.barra.add($.__views.btn2);
    $.__views.btn3 = Ti.UI.createButton({
        right: 99,
        tintColor: "#585858",
        backgroundColor: "transparent",
        borderColor: "transparent",
        id: "btn3",
        image: "/images/arroba2.png"
    });
    $.__views.barra.add($.__views.btn3);
    $.__views.btn4 = Ti.UI.createButton({
        right: 20,
        tintColor: "#585858",
        backgroundColor: "transparent",
        borderColor: "transparent",
        id: "btn4",
        image: "/images/heart99.png"
    });
    $.__views.barra.add($.__views.btn4);
    $.__views.bordoBottom = Ti.UI.createView({
        top: 291,
        height: 1,
        backgroundColor: "#9e9e9e",
        id: "bordoBottom"
    });
    $.__views.__alloyId5.add($.__views.bordoBottom);
    $.__views.notizieContainer = Ti.UI.createView({
        top: 292,
        backgroundColor: "#fff",
        id: "notizieContainer"
    });
    $.__views.__alloyId5.add($.__views.notizieContainer);
    $.__views.notizie = Ti.UI.createTableView({
        separatorStyle: 0,
        borderWidth: 0,
        id: "notizie"
    });
    $.__views.notizieContainer.add($.__views.notizie);
    openDetail ? $.__views.notizie.addEventListener("click", openDetail) : __defers["$.__views.notizie!click!openDetail"] = true;
    $.__views.chisiamoContainer = Ti.UI.createView({
        top: 292,
        backgroundColor: "#fff",
        id: "chisiamoContainer"
    });
    $.__views.__alloyId5.add($.__views.chisiamoContainer);
    $.__views.about = Alloy.createController("about", {
        id: "about",
        __parentSymbol: $.__views.chisiamoContainer
    });
    $.__views.about.setParent($.__views.chisiamoContainer);
    $.__views.contattiContainer = Ti.UI.createView({
        top: 292,
        backgroundColor: "#fff",
        id: "contattiContainer"
    });
    $.__views.__alloyId5.add($.__views.contattiContainer);
    $.__views.contatti = Ti.UI.createWebView({
        id: "contatti",
        url: "/contatti.html"
    });
    $.__views.contattiContainer.add($.__views.contatti);
    $.__views.donaContainer = Ti.UI.createView({
        top: 292,
        backgroundColor: "#fff",
        id: "donaContainer"
    });
    $.__views.__alloyId5.add($.__views.donaContainer);
    $.__views.paypal = Alloy.createController("paypal", {
        id: "paypal",
        __parentSymbol: $.__views.donaContainer
    });
    $.__views.paypal.setParent($.__views.donaContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var rss = require("rss");
    refreshRss();
    $.btn1.addEventListener("click", function() {
        $.notizieContainer.visible = true;
        $.chisiamoContainer.visible = false;
        $.contattiContainer.visible = false;
        $.donaContainer.visible = false;
    });
    $.btn2.addEventListener("click", function() {
        $.notizieContainer.visible = false;
        $.chisiamoContainer.visible = true;
        $.contattiContainer.visible = false;
        $.donaContainer.visible = false;
    });
    $.btn3.addEventListener("click", function() {
        $.notizieContainer.visible = false;
        $.chisiamoContainer.visible = false;
        $.contattiContainer.visible = true;
        $.donaContainer.visible = false;
    });
    $.btn4.addEventListener("click", function() {
        $.notizieContainer.visible = false;
        $.chisiamoContainer.visible = false;
        $.contattiContainer.visible = false;
        $.donaContainer.visible = true;
    });
    $.chisiamoContainer.visible = false;
    $.contattiContainer.visible = false;
    $.donaContainer.visible = false;
    __defers["$.__views.notizie!click!openDetail"] && $.__views.notizie.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;