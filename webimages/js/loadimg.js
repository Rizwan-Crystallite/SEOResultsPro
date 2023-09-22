$(document).ready(function () {
    $.get("../getImages.php", function (i) {
        var o = i - "2",
            t = "1";
        $(function i() {
            var a = "main/" + t + ".svg";
            console.log("this is src=" + a), $('<li class="mix main col-xl-3 col-md-4 col-12 col-sm-6"> <img src="' + a + '" itemprop="thumbnail" alt="illustratorspro" class="img-fluid"/> <div class="portfolio-overlay"> <a data-fancybox="item" title="click to zoom-in" href="' + a + '"> <i class="fa fa-search" aria-hidden="true"></i> </a> </div> </li>').appendTo(".portfolio-item"), t == o || (t++, i())
        })
    }), $.get("../getImages.php", function (i) {
        var o = i - "2",
            t = "1";
        $(function i() {
            var a = "beauty/" + t + ".svg";
            console.log("this is src=" + a), $('<li class="mix beauty col-xl-3 col-md-4 col-12 col-sm-6"> <img src="' + a + '" itemprop="thumbnail" alt="illustratorspro" class="img-fluid"/> <div class="portfolio-overlay"> <a data-fancybox="item" title="click to zoom-in" href="' + a + '"> <i class="fa fa-search" aria-hidden="true"></i> </a> </div> </li>').appendTo(".portfolio-item"), t == o || (t++, i())
        })
    }), $.get("../getImages.php", function (i) {
        var o = i - "2",
            t = "1";
        $(function i() {
            var a = "e-commerce/" + t + ".svg";
            console.log("this is src=" + a), $('<li class="mix e-commerce col-xl-3 col-md-4 col-12 col-sm-6"> <img src="' + a + '" itemprop="thumbnail" alt="illustratorspro" class="img-fluid"/> <div class="portfolio-overlay"> <a data-fancybox="item" title="click to zoom-in" href="' + a + '"> <i class="fa fa-search" aria-hidden="true"></i> </a> </div> </li>').appendTo(".portfolio-item"), t == o || (t++, i())
        })
    }), $.get("../getImages.php", function (i) {
        var o = i - "2",
            t = "1";
        $(function i() {
            var a = "auto/" + t + ".svg";
            console.log("this is src=" + a), $('<li class="mix auto col-xl-3 col-md-4 col-12 col-sm-6"> <img src="' + a + '" itemprop="thumbnail" alt="illustratorspro" class="img-fluid"/> <div class="portfolio-overlay"> <a data-fancybox="item" title="click to zoom-in" href="' + a + '"> <i class="fa fa-search" aria-hidden="true"></i> </a> </div> </li>').appendTo(".portfolio-item"), t == o || (t++, i())
        })
    }), $.get("../getImages.php", function (i) {
        var o = i - "2",
            t = "1";
        $(function i() {
            var a = "../real-estate/" + t + ".svg";
            console.log("this is src=" + a), $('<li class="mix real-estate col-xl-3 col-md-4 col-12 col-sm-6"> <img src="' + a + '" itemprop="thumbnail" alt="illustratorspro" class="img-fluid"/> <div class="portfolio-overlay"> <a data-fancybox="item" title="click to zoom-in" href="' + a + '"> <i class="fa fa-search" aria-hidden="true"></i> </a> </div> </li>').appendTo(".portfolio-item"), t == o || (t++, i())
        })
    }), $.get("../getImages.php", function (i) {
        var o = i - "2",
            t = "1";
        $(function i() {
            var a = "cbd/" + t + ".svg";
            console.log("this is src=" + a), $('<li class="mix cbd col-xl-3 col-md-4 col-12 col-sm-6"> <img src="' + a + '" itemprop="thumbnail" alt="illustratorspro" class="img-fluid"/> <div class="portfolio-overlay"> <a data-fancybox="item" title="click to zoom-in" href="' + a + '"> <i class="fa fa-search" aria-hidden="true"></i> </a> </div> </li>').appendTo(".portfolio-item"), t == o || (t++, i())
        })
    }), $.get("../getImages.php", function (i) {
        var o = i - "2",
            t = "1";
        $(function i() {
            var a = "education/" + t + ".svg";
            console.log("this is src=" + a), $('<li class="mix education col-xl-3 col-md-4 col-12 col-sm-6"> <img src="' + a + '" itemprop="thumbnail" alt="illustratorspro" class="img-fluid"/> <div class="portfolio-overlay"> <a data-fancybox="item" title="click to zoom-in" href="' + a + '"> <i class="fa fa-search" aria-hidden="true"></i> </a> </div> </li>').appendTo(".portfolio-item"), t == o || (t++, i())
        })
    }), $.get("../getImages.php", function (i) {
        var o = i - "2",
            t = "1";
        $(function i() {
            var a = "food/" + t + ".svg";
            console.log("this is src=" + a), $('<li class="mix food col-xl-3 col-md-4 col-12 col-sm-6"> <img src="' + a + '" itemprop="thumbnail" alt="illustratorspro" class="img-fluid"/> <div class="portfolio-overlay"> <a data-fancybox="item" title="click to zoom-in" href="' + a + '"> <i class="fa fa-search" aria-hidden="true"></i> </a> </div> </li>').appendTo(".portfolio-item"), t == o || (t++, i())
        })
    })
}), $(document).ready(function () {
    var i = window.location;
    $('ul.nav a[href="' + i + '"]').parent().addClass("active"), $("ul.nav a").filter(function () {
        return this.href == i
    }).parent().addClass("active")
});
var containerEl = document.querySelector(".portfolio-item"),
    mixer = mixitup(containerEl, {
        animation: {
            effects: "fade translateZ(-100px)",
            effectsIn: "fade translateY(-100%)",
            easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
        }
    });
$("[data-fancybox]").fancybox({
    loop: !0,
    hash: !0,
    transitionEffect: "slide",
    clickContent: function (i, a) {
        return "image" === i.type && "next"
    }
}), jQuery(document).ready(function () {
    $("a.nav-link.bg-purple").click(function () {
        var i = $(this).attr("data-filter");
        console.log(i), "all" == i ? $(".mix").show("3000") : ($(".mix").not("." + i).hide("3000"), $(".mix").filter("." + i).show("3000"))
    })
});