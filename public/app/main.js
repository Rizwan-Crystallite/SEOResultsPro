function forHeader(){let e=document.querySelector("header .nav--toggle"),t=document.querySelector("header .nav--menu--close"),s=document.querySelector("header .nav--menu");e.addEventListener("click",function(){s.classList.add("is-active")}),t.addEventListener("click",function(){s.classList.remove("is-active")})}function tabbingOutsider(){$("[data-targetit]").on("click",function(e){$(this).parent().siblings().find(".cstmTabs.active").removeClass("active"),$(this).addClass("active");var t=$(this).data("targetit");$("."+t).siblings('[class^="tabs-"]').hide(),$("."+t).fadeIn()})}function tabbingInsider(){$("[data-targetit]").on("click",function(){$(this).addClass("active"),$(this).siblings().removeClass("active");var e=$(this).data("targetit");$("."+e).siblings('[class^="tabs-"]').hide(),$("."+e).fadeIn()})}function prfrmnceSlider(){$(".prfrmnceSlider").slick({slidesToShow:1,dots:!0,arrows:!1,autoplay:!0,adaptiveHeight:!0,dots:!1})}function webLogoSlider(){$(".logosInner.web").slick({speed:7e3,autoplay:!0,cssEase:"linear",slidesToShow:4,infinite:!0,swipeToSlide:!0,autoplaySpeed:0})}function SEOLogoSlider(){$(".logosInner.seoPage").slick({speed:7e3,autoplay:!0,cssEase:"linear",slidesToShow:7,centerMode:!0,centerPadding:"46px",infinite:!0,swipeToSlide:!0,autoplaySpeed:0,infinite:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0,dots:!0,cssEase:"linear",autoplaySpeed:0,speed:3e3,swipeToSlide:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}},]})}function testCardSlider(){$(".testCardSlider").slick({slidesToShow:1,dots:!1,arrows:!0,prevArrow:".prevArrow",nextArrow:".nextArrow",autoplay:!0})}function mobileSlider(){1200>$(window).width()&&($(".logosInner").slick({slidesToShow:3,arrows:!1,autoplay:!0,responsive:[{breakpoint:991,settings:{slidesToShow:2,centerPadding:"35px"}},{breakpoint:767,settings:{slidesToShow:1,centerPadding:"35px"}},]}),$(".awardSlider > .row").slick({slidesToShow:5,arrows:!1,autoplay:!0,centerMode:!0,centerPadding:"40px",responsive:[{breakpoint:991,settings:{slidesToShow:4}},{breakpoint:767,settings:{slidesToShow:2,centerPadding:"35px"}},]}),$(".main-page .logos-component > .logosInner").slick({slidesToShow:4,arrows:!1,autoplay:!0,infinite:!0,responsive:[{breakpoint:991,settings:{slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:2}},]}))}function SlideUpDownTxt(){$(".reasonCard").on("mouseenter",function(){$(this).addClass("active"),$(this).parent().siblings().find(".reasonCard.active").removeClass("active"),$(!1)&&$(".reasonCard.active .hideTxt").slideDown()}),$(".reasonCard").on("mouseleave",function(){$(".hideTxt").slideUp()})}function onHoverMove(){$(".circleBtn").on("mouseenter",function(){$(".handImg").css("transform","translateY(15px)")}),$(".circleBtn").on("mouseleave",function(){$(".handImg").css("transform","translateY(120px)")})}function onLoadCounter(){$(".counter").each(function(){var e=$(this),t=e.attr("data-number");$({countNum:e.text()}).animate({countNum:t},{duration:2e3,easing:"swing",step:function(){e.text(Math.ceil(this.countNum).toLocaleString("en"))},complete:function(){e.text(Math.ceil(this.countNum).toLocaleString("en"))}})})}function onScollCounter(){var e=0;$(window).scroll(function(){var t=$("#counter-box-onScoll").offset().top-window.innerHeight;0==e&&$(window).scrollTop()>t&&($(".counter_onScroll").each(function(){var e=$(this),t=e.attr("data-number");$({countNum:e.text()}).animate({countNum:t},{duration:2e3,easing:"swing",step:function(){e.text(Math.ceil(this.countNum).toLocaleString("en"))},complete:function(){e.text(Math.ceil(this.countNum).toLocaleString("en"))}})}),e=1)})}function pkgsSlider(){800>$(window).width()&&$(".pkgsCardsList.new > .row").slick({slidesToShow:1,arrows:!1,dots:!0})}$(document).ready(function(){onLoadCounter(),forHeader(),tabbingOutsider(),tabbingInsider(),prfrmnceSlider(),mobileSlider(),testCardSlider(),onHoverMove(),SlideUpDownTxt(),onScollCounter(),pkgsSlider(),webLogoSlider(),SEOLogoSlider(),$("video").bind("contextmenu",function(){return!1});var e=document.createElement("script");e.type="text/javascript",e.src="https://seoresultspro.com/public/app/ms-clarity.js",$("head").append(e)}),$(window).scroll(function(){$(this).scrollTop()>100?$("header").addClass("is-sticky"):$("header").removeClass("is-sticky")}),$(".accordion-item").click(function(){$(this).addClass("active"),$(this).siblings().removeClass("active")}),$(function(){var e=location.pathname;$(".nav-menu ul li a,footer .links li a").each(function(){var t=$(this);-1!==t.attr("href").indexOf(e)&&t.addClass("active")})}),$("#webSection").click(function(){$("html, body").animate({scrollTop:$("#webSectionContent").offset().top})}),$("#seoSection").click(function(){$("html, body").animate({scrollTop:$("#seoSectionContent").offset().top})}),$("#GoToseoPkg").click(function(){$("html, body").animate({scrollTop:$("#seoPkgsSec").offset().top})}),$(".btn-next").on("click",function(){var e=$("#checkout-progress").data("current-step"),t=e+1,s=$(".step.step-"+e),o=$(".step.step-"+t),i=$("#checkout-progress");$(".btn-prev").removeClass("disabled"),$("#points"+e).toggle(),$("#points"+t).toggle(),4==t&&$(".btn-next").addClass("invisible "),t>1&&$(".btn-prev").removeClass("invisible"),$(".checkout-progress").removeClass(".step-"+e).addClass(".step-"+(e+1)),s.removeClass("active").addClass("valid"),s.find("span").addClass("opaque"),s.find(".fa.fa-check").removeClass("opaque"),o.addClass("active"),i.removeAttr("class").addClass("step-"+t).data("current-step",t)}),$(".btn-prev").on("click",function(){var e=$("#checkout-progress").data("current-step"),t=e-1,s=$(".step.step-"+e),o=$(".step.step-"+t),i=$("#checkout-progress");$("#points"+e).toggle(),$("#points"+t).toggle(),$(".checkout-progress").removeClass(".step-"+e).addClass(".step-"+t),t<4&&$(".btn-next").removeClass("invisible"),1==t&&$(".btn-prev").addClass("invisible"),s.removeClass("active"),o.find("span").removeClass("opaque"),o.find(".fa.fa-check").addClass("opaque"),o.addClass("active").removeClass("valid"),i.removeAttr("class").addClass("step-"+t).data("current-step",t)}),$(".sections-to-sections-slider").slick({dots:!1,infinite:!0,speed:2e3,slidesToShow:1,prevArrow:'<img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/83238319-407d-4488-7b85-5fe17e8ece00/public" alt="prevArrow" class="prevArrowSect" width="60px" height="36" />',nextArrow:'<img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/e60b124f-fc36-4332-4be0-37ebbc765c00/public" alt="nextArrow" class="nextArrowSect" width="60px" height="36" />',responsive:[{breakpoint:1024,settings:{slidesToShow:1,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:1}},{breakpoint:480,settings:{slidesToShow:1}},]});