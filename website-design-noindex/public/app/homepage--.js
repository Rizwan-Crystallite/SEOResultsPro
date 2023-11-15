function ZoomInOutSection() {
    gsap.registerPlugin(ScrollTrigger), gsap.timeline();
    let e = document.querySelector(".h-scale-cmp"),
        t = gsap.timeline({ scrollTrigger: { trigger: e, start: "top center", end: () => `+=${e.offsetHeight}`, scrub: 2, toggleActions: "play reverse restart reverse" } });
    t.from([e.querySelector("h2"), e.querySelector("p")], { opacity: 0, scale: 0, duration: 2 }),
        t.to([e.querySelector("h2"), e.querySelector("p")], { opacity: 1, scale: 1, duration: 2 }),
        // ScrollTrigger.create({
        //     trigger: e,
        //     start: "top top",
        //     end: "bottom bottom",
        //     markers: !1,
        //     onEnter: () => gsap.to(e, { backgroundColor: "#000000", duration: 1.5 }),
        //     onLeave: () => gsap.to(e, { backgroundColor: "#000000", duration: 1.5 }),
        //     onLeaveBack: () => gsap.to(e, { backgroundColor: "#000000", duration: 1.5 }),
        //     onEnterBack: () => gsap.to(e, { backgroundColor: "#000000", duration: 1.5 }),
        // }),
        ScrollTrigger.create({
            // trigger: e,
            // start: "top top",
            // end: "bottom bottom",
            // markers: !1,
            // onEnter: () => gsap.to(e.querySelector("p"), { color: "#FFFFFF", duration: 1.5 }),
            // onLeave: () => gsap.to(e.querySelector("p"), { color: "#FFFFFF", duration: 1.5 }),
            // onLeaveBack: () => gsap.to(e.querySelector("p"), { color: "#333333", duration: 1.5 }),
            // onEnterBack: () => gsap.to(e.querySelector("p"), { color: "#FFFFFF", duration: 1.5 }),
        });
 }
function tilltabs() {
    let e = gsap.utils.toArray("#tilltabs"),
        t = gsap.timeline({ scrollTrigger: { trigger: e, scrub: 5, pinSpacing: !1, ease: "sine.inOut", start: "top top", end: "bottom bottom", toggleActions: "play reverse", onEnter: () => t.play(), onLeaveBack: () => t.pause() } });
    t.from(".flipIm", { duration: 4, rotateX: 90, ease: "none" }).to(".flipIm", { duration: 4, rotateX: 0, ease: "expo.out" });
}
function discoverSect() {
    let e = gsap.utils.toArray("#discoverSect"),
        t = gsap.timeline({
            scrollTrigger: { trigger: e, pin: !0, scrub: 2, ease: "sine.inOut", start: "top top +=1000", end: "bottom bottom +=2000", toggleActions: "play reverse play reverse", onEnter: () => t.play(), onLeaveBack: () => t.pause() },
        });
    t.from("#desktopImg", { duration: 3, scale: 2, ease: "easeIn", backgroundColor: "#000", autoplay: 0.2 }).to("#desktopImg", { duration: 5, scale: 1, opacity: 1, scrub: 2, ease: "expo.out", transformOrigin: "50% 100%" });
}
function textBluredSlides() {
    ((e) => {
        document.querySelectorAll(e).forEach((e) => {
            let t = gsap.timeline({ scrollTrigger: { trigger: e, start: "top center+=30%", end: "top center-=30%", scrub: 5, pin: !1, scrub: !0, invalidateOnRefresh: !0 } });
            t.fromTo( 
                e,{ opacity: 0, scale: 0.2 },
                { opacity: 0, scale: 0.5 }, 
                { opacity: 1, scale: 3, delay:2, duration: 2 }), 
                (e, {delay:1, opacity: 1, duration: 1 }
            );
        });
    })(".fade-pinned-title");
}
function ViewSectionPlayVideo() {
    let e = "#webSection";
    gsap.registerPlugin(ScrollTrigger),
        (e = new timeline({ paused: !0, delay: 1 })),
        ScrollTrigger.create({ trigger: e, delay: 5, onEnter: () => e.play(), onEnterBack: () => e.play(), onLeave: () => e.pause(), onLeaveBack: () => e.pause() });
}
$(document).ready(function () {
    ZoomInOutSection(), tilltabs(), discoverSect(), textBluredSlides(), ViewSectionPlayVideo();
});


ScrollTrigger.defaults({
    markers:false
  })

  var points = gsap.utils.toArray('.point1');
  var indicators = gsap.utils.toArray('.indicator');
  var height = 100 * points.length;

//   gsap.set('.indicators', {display: "flex"});

  var tl = gsap.timeline({
    duration: points.length,
    scrollTrigger: {
      trigger: ".philosophie1",
      start: "top center",
      end: "+="+height+"%",
      scrub: 5,
      id: "points",
    }
  })
//   var tl = gsap.timeline({
//     duration: points.length,
//     scrollTrigger: {
//       trigger: ".philosophie1",
//       start: "top bottom",
//       end: "+="+20+"%",
//       scrub: 5,
//       id: "point22",
//     }
//   })
  
  var pinner = gsap.timeline({
    scrollTrigger: {
      trigger: ".philosophie1 .wrapper1",
      start: "top top",
      end: "+="+height+"%",
      scrub: 5,
      pin: ".philosophie1 .wrapper1",
      pinSpacing: true,
      id: "pinning",
    //   markers: true
    }
  })
  
  points.forEach(function(elem, i) {
    gsap.set(elem, {position: "absolute", top: 0});
  
    // tl.to(indicators[i], {backgroundColor: "orange", duration: 0.25}, i)
    // tl.from(elem.querySelector('img'), {autoAlpha:0}, i)
    tl.from(elem.querySelector('article'), {autoAlpha:0,scale:0.9, translateY: 100}, i)
    
    if (i != points.length-1) {
    //   tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+1.75)
      tl.to(elem.querySelector('article'), {autoAlpha:0, scale:1.2}, i + 0.75)
    //   tl.to(elem.querySelector('img'), {autoAlpha:0}, i + 0.75)
    }
    //  if(i != points22.length) {
    // //   tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+1.75)
    //   tl.to(elem.querySelector('article'), {autoAlpha:1, scale:1,  translateY: 0}, i + 0.75)
    // //   tl.to(elem.querySelector('img'), {autoAlpha:0}, i + 0.75)
    // }
  });