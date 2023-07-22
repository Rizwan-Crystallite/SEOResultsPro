function forHeader() {
    let e = document.querySelector("header .nav--toggle"),
        i = document.querySelector("header .nav--menu--close"),
        t = document.querySelector("header .nav--menu");
    e.addEventListener("click", function () {
        t.classList.add("is-active");
    }),
        i.addEventListener("click", function () {
            t.classList.remove("is-active");
        });
}
function tabbingInsider() {
    $("[data-targetit]").on("click", function () {
        $(this).addClass("active"), $(this).siblings().removeClass("active");
        var e = $(this).data("targetit");
        $("." + e)
            .siblings('[class^="tabs-"]')
            .hide(),
            $("." + e).fadeIn();
    });
}
$(document).ready(function () {
    forHeader(), tabbingInsider();
    var e = document.createElement("script");
    (e.type = "text/javascript"), (e.src = "https://seoresultspro.com/public/app/ms-clarity.js"), $("head").append(e);
}),
    $(window).scroll(function () {
        $(this).scrollTop() > 100 ? $("header").addClass("is-sticky") : $("header").removeClass("is-sticky");
    }),
    window.addEventListener("load", function () {
        document.querySelector(".webiste-loader").style.display = "none";
    });
let swiper1 = new Swiper(".logosInner.seoPage", { loop: !0, spaceBetween: 0, slidesPerView: 3, loop: !0, autoplay: { delay: 1, disableOnInteraction: !0 }, speed: 5e3 }),
    swiper2 = new Swiper(".pkgsSlider", { slidesPerView: "auto", centeredSlides: !0, loop: !0, pagination: { el: ".swiper-pagination", clickable: !0 } }),
    swiper3 = new Swiper(".testimonialSlider", { slidesPerView: 1, spaceBetween: 30, loop: !0, pagination: { el: ".swiper-pagination", clickable: !0 }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } });
$(document).ready(function () {
    $(".accordian .accordion-item:nth-child(1) .accordion-button").addClass("active"),
        $(".accordian .accordion-item:nth-child(1) .accordion-body").slideDown(),
        $(".accordion-button").on("click", function () {
            $(this).hasClass("active")
                ? ($(this).siblings(".accordion-body").slideUp(), $(this).removeClass("active"))
                : ($(".accordion-body").slideUp(), $(".accordion-button").removeClass("active"), $(this).siblings(".accordion-body").slideToggle(), $(this).toggleClass("active"));
        });
});
