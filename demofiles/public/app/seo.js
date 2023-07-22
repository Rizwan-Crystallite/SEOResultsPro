function VerticalSlide() {
    ScrollTrigger.defaults({ markers: !1 });
    var t = gsap.utils.toArray(".point1"),
        e = gsap.utils.toArray(".indicator1"),
        o = 100 * t.length;
    gsap.set(".indicators1", { display: "flex" });
    var i = gsap.timeline({ duration: t.length, scrollTrigger: { trigger: ".philosophie1", start: "top center", end: "+=" + o + "%", scrub: !0, id: "points1" } });
    gsap.timeline({ scrollTrigger: { trigger: ".philosophie1 .wrapper1", start: "center center", end: "+=" + o + "%", pin: ".philosophie1", id: "pinning1", markers: !1 } }),
        t.forEach(function (o, r) {
            i.to(e[r], { backgroundColor: "orange", duration: 3 }, r),
                i.from(o.querySelector(".sliders"), { autoAlpha: 0, visibility: "hidden", opacity: 0 }, r),
                r != t.length - 1 && (i.to(e[r], { backgroundColor: "#ADADAD", duration: 3 }, r + 0.75), i.to(o.querySelector(".sliders"), { autoAlpha: 0, visibility: "visible", opacity: 0 }, r + 0.75));
        });
}
function seoservcies() {
    ScrollTrigger.defaults({ markers: !1 });
    var t = gsap.utils.toArray(".point"),
        e = gsap.utils.toArray(".indicator"),
        o = 100 * t.length;
    gsap.set(".indicators", { display: "flex" });
    var i = gsap.timeline({ duration: t.length, scrollTrigger: { trigger: ".philosophie", start: "top center", end: "+=" + o + "%", scrub: !0, id: "points" } });
    gsap.timeline({ scrollTrigger: { trigger: ".philosophie .wrapper", start: "top top", end: "+=" + o + "%", scrub: 5, pin: ".philosophie .wrapper", pinSpacing: !0, id: "pinning", markers: !1 } }),
        t.forEach(function (o, r) {
            gsap.set(o, { position: "absolute", top: 0 }),
                i.to(e[r], { backgroundColor: "orange", duration: 0.25 }, r),
                i.from(o.querySelector("img"), { opacity: 0 }, r),
                i.from(o.querySelector("article"), { autoAlpha: 0 }, r),
                r != t.length - 1 && (i.to(e[r], { backgroundColor: "#ADADAD", duration: 0.25 }, r + 0.75), i.to(o.querySelector("article"), { autoAlpha: 0 }, r + 0.75), i.to(o.querySelector("img"), { opacity: 1 }, r + 0.75));
        });
}
function StepsProgress() {
    $(".progress");
    let t = gsap.timeline({ paused: !0, scrub: 5, pin: !0, defaults: { ease: "expo" } });
    t.to(".progress", { css: { width: "10%", opacity: 1 } })
        .addLabel("#scene-1-content", "+=1")
        .to(".progress", { css: { width: "40%", opacity: 1 } })
        .addLabel("#scene-2-content", "+=1")
        .to(".progress", { css: { width: "60%", opacity: 1 } })
        .addLabel("#scene-3-content", "+=1")
        .to(".progress", { css: { width: "80%", opacity: 1 } })
        .addLabel("#scene-4-content", "+=1")
        .to(".progress", { css: { width: "90%", opacity: 1 } })
        .addLabel("#scene-5-content", "+=1")
        .to(".progress", { css: { width: "100%", opacity: 1 } });
    let e = gsap.timeline({
        paused: !0,
        scrollTrigger: {
            trigger: ".seo-process-path",
            pin: ".seo-process-path",
            start: "top 20%",
            end: "+=6000",
            scrub: 8,
            toggleActions: "restart none none none",
            onUpdate({ progress: e }) {
                t.progress(e);
            },
        },
    });
    e.from("#scene-1-content", { opacity: 0, yPercent: 10, duration: 2 })
        .from("#scene-1-content", { opacity: 0, yPercent: 10, duration: 2 })
        .from("#scene-2-content", { opacity: 0, yPercent: 10, duration: 2 })
        .from("#scene-2-content", { opacity: 0, yPercent: 10, duration: 2 })
        .from("#scene-3-content", { opacity: 0, yPercent: 10, duration: 2 })
        .from("#scene-3-content", { opacity: 0, yPercent: 10, duration: 2 })
        .from("#scene-4-content", { opacity: 0, yPercent: 10, duration: 2 })
        .from("#scene-4-content", { opacity: 0, yPercent: 10, duration: 2 })
        .from("#scene-5-content", { opacity: 0, yPercent: 10, duration: 2 })
        .from("#scene-5-content", { opacity: 0, yPercent: 10, duration: 2 })
        .to("#headings", { opacity: 0, visibility: "hidden", duration: 1.5 })
        .to(".seo-process-points", { opacity: 0, visibility: "hidden", duration: 1.5 })
        .to("#donesend", { opacity: 0, visibility: "hidden", duration: 0 })
        .to(".progress-bar2", { display: "block", visibility: "visible" })
        .to(".progress-bar2", { width: "100vw", position: "absolute", right: "0px", maxWidth: "100vw", left: "-23px", ease: "easeIn", duration: 1 })
        .to(".progress-bar2", { css: { clipPath: "rect(50px 100px 50px 0px)", height: "100vh", duration: 1, top: "0", bottom: "0" } })
        .set(visualText, { opacity: 0, autoAlpha: 0, duration: 0.1, visibility: "hidden", display: "none" })
        .to(visualText, { css: { display: "block", opacity: 1, duration: 0.1, visibility: "visible", autoAlpha: 1 } });
}
$(document).ready(function () {
    VerticalSlide(), seoservcies(), StepsProgress(), gsap.registerPlugin(ScrollTrigger);
});
