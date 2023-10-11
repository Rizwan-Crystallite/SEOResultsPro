function allslider() {
    $(".industries-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        arrows: !0,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !0 } },
            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    }),
        $(".single-item-mobile").slick({ autoplay: !0, autoplaySpeed: 2500, dots: !0, arrows: !1 }),
        $(".topslider1").slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 2e3,
            centerMode: !0,
            centerPadding: "20px",
            arrows: !1,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !0, arrows: !1 } },
                { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1, arrows: !1 } },
                { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 3, centerPadding: "40px", arrows: !1, arrows: !1 } },
            ],
        }),
        $(".testimonialslide").slick({
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: !0, dots: !0 } },
                { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        });
}
function mobileSilder() {
    1024 > $(window).width() && pkgsCardsSlider();
}
function pkgsCardsSlider() {
    $(".slidersection").slick({
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: !0, dots: !0, arrows: !1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !0, arrows: !1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !0, arrows: !1 } },
        ],
    });
}
$(document).ready(function () {
    mobileSilder(),
        allslider(),
        $("#section.packages-section ul#pills-tab li").click(function () {
            window.location.assign("#packages");
        }),
        $(".collapsed").click(function () {
            window.location.assign("#faq");
        }),
        $("#leftside-form-btn").on("click", function () {
            $("#leftside-form, #leftside-form1").css("transform", "inherit");
        }),
        $("#closebtn").on("click", function () {
            $("#leftside-form, #leftside-form1").css("transform", "translateX(-100%)");
        }),
        $("#leftside-form-btn1").on("click", function () {
            $("#leftside-form").css("transform", "inherit");
        }),
        $("#closebtn").on("click", function () {
            $("#leftside-form").css("transform", "translateX(-100%)");
        }),
      
            $(".wrapper-11 .tooltip").addClass("showtooltip"),
             $(".tooltip").on("mouseover",
              function () { $(".tooltip").removeClass("showtooltip"),
               $(this).addClass("showtooltip") }), 
               $(".wrapper-11 .tooltip").addClass("showtooltip"), 
               $(".tooltip").on("mouseover",
                function () { $(".tooltip").removeClass("showtooltip"),
                $(this).addClass("showtooltip") 
            });
            //     $(document).ready(function () {

            //     // $(".wrapper-11 .tooltip").removeClass("showtooltip");
            //     // $(".wrapper-11 .tooltip:hover").removeClass("showtooltip")
            //     // $("tooltip:hover").addClass("showtooltip")
            // }),
            $("button#readMore2").on("click", function () {
                $("#readContent2").toggle("slow");
            }),
            $("div#WordPress-text").show(),
            $("div.tech-logo").on("click", function (i) {
                i.preventDefault(),
                    $("div.technology").hide(),
                    $(".active-div").removeClass("active-div"),
                    $(".active-img").removeClass("active-img"),
                    $("#" + this.id + "-text").show(),
                    $("#" + this.id).addClass("active-div"),
                    $("img[alt=" + this.id + "]").addClass("active-img"),
                    (oldid = this.id),
                    console.log(oldid);
            }),
            $(".counter").each(function () {
                $(this)
                    .prop("Counter", 0)
                    .animate(
                        { Counter: $(this).text() },
                        {
                            duration: 4e3,
                            easing: "swing",
                            step: function (i) {
                                $(this).text(Math.ceil(i));
                            },
                        }
                    );
            }),
            setTimeout(() => {
                $("#beforeimghome").addClass("before-imghome");
            }, 4e3);
        });
    let e = document.querySelector("header .nav--toggle"),
        s = document.querySelector("header .nav--menu--close"),
        t = document.querySelector("header .nav--menu");
    e.addEventListener("click", function () {
        t.classList.add("is-active");
    }),
        s.addEventListener("click", function () {
            t.classList.remove("is-active");
        }),
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $("header").addClass("is-sticky") : $("header").removeClass("is-sticky");
        });
