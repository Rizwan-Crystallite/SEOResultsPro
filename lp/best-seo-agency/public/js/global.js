// Register Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

// Header Hamburger
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".__hamburger");

    hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 1200) {
        const __hamburger = document.querySelector(".__hamburger");
        const __hamburgerMenu = document.querySelector('.mainHeader nav');
        const __hamburgerMenuLinks = document.querySelectorAll('.mainHeader nav ul li');

        let tlForHeader = gsap.timeline({ paused: true });

        tlForHeader.to(__hamburgerMenu, {
            duration: 1,
            opacity: 1,
            height: 'auto', // change this to 100vh for full-height menu
            ease: 'expo.inOut',
        })
        tlForHeader.from(__hamburgerMenuLinks, {
            duration: 1,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            ease: 'expo.inOut',
        }, "-=0.5");

        tlForHeader.reverse();

        __hamburger.addEventListener('click', () => {
            tlForHeader.reversed(!tlForHeader.reversed());
            console.log(__hamburger, __hamburgerMenu, __hamburgerMenuLinks);
        });
    }
});

// Awards Slider
const emblaNodeForAwards = document.querySelector('.awardsSliderFold .embla')
const optionsForAwards = { loop: true }
const pluginsForAwards = [EmblaCarouselAutoScroll({ playOnInit: true, speed: 0.5 })]
const emblaApiForAwards = EmblaCarousel(emblaNodeForAwards, optionsForAwards, pluginsForAwards)

// Reviews Slider
const emblaNodeForReviews = document.querySelector('.reviewsFold .embla')
const optionsForReviews = { loop: true, }
const pluginsForReviews = [EmblaCarouselClassNames(), EmblaCarouselAutoplay({ delay: 4000 })]
const emblaApiForReviews = EmblaCarousel(emblaNodeForReviews, optionsForReviews, pluginsForReviews)

// Solutotions Slider
const emblaNodeForSolutions = document.querySelector('.solutionsFold .embla')
const dotsNodeForSolutions = emblaNodeForSolutions.querySelector('.emblaDots')
const totalSlidesNodeForSolutions = emblaNodeForSolutions.querySelector('.totalSlides') // Selecting the totalSlides element
const optionsForSolutions = { loop: true }
const emblaApiForSolutions = EmblaCarousel(emblaNodeForSolutions, optionsForSolutions)

const addDotBtnsAndClickHandlersForSolutions = (emblaApiForSolutions, dotsNodeForSolutions, totalSlidesNodeForSolutions) => {
    let dotNodes = []

    const addDotBtnsWithClickHandlers = () => {
        const totalSlides = emblaApiForSolutions.slideNodes().length; // Get total number of slides
        totalSlidesNodeForSolutions.textContent = `0${totalSlides}`; // Update totalSlidesNodeForSolutions content
        dotsNodeForSolutions.innerHTML = emblaApiForSolutions
            .scrollSnapList()
            .map((e, i) => `<button class="embla__dot" type="button">0${i + 1}</button>`)
            .join('')

        const scrollTo = (index) => {
            emblaApiForSolutions.scrollTo(index)
        }

        dotNodes = Array.from(dotsNodeForSolutions.querySelectorAll('.embla__dot'))
        dotNodes.forEach((dotNode, index) => {
            dotNode.addEventListener('click', () => scrollTo(index), false)
        })
    }

    const toggleDotBtnsActive = () => {
        const previous = emblaApiForSolutions.previousScrollSnap()
        const selected = emblaApiForSolutions.selectedScrollSnap()
        dotNodes[previous].classList.remove('embla__dot--selected')
        dotNodes[selected].classList.add('embla__dot--selected')
    }

    emblaApiForSolutions
        .on('init', addDotBtnsWithClickHandlers)
        .on('reInit', addDotBtnsWithClickHandlers)
        .on('init', toggleDotBtnsActive)
        .on('reInit', toggleDotBtnsActive)
        .on('select', toggleDotBtnsActive)

    return () => {
        dotsNodeForSolutions.innerHTML = ''
    }
}

const removeDotBtnsAndClickHandlersForSolutions = addDotBtnsAndClickHandlersForSolutions(
    emblaApiForSolutions,
    dotsNodeForSolutions,
    totalSlidesNodeForSolutions
)
emblaApiForSolutions.on('destroy', removeDotBtnsAndClickHandlersForSolutions)

// Hero Fold
document.addEventListener("DOMContentLoaded", function () {
    function rotateAndPositionImagesForHero() {
        gsap.to('.transformSlides img:nth-child(1)', {
            rotation: -20,
            x: "-60px",
            duration: 1,
            ease: "none"
        });

        gsap.to('.transformSlides img:nth-child(2)', {
            rotation: 5,
            x: "-110px",
            duration: 1,
            ease: "none"
        });

        gsap.to('.transformSlides img:nth-child(3)', {
            rotation: 25,
            x: 250,
            y: 50,
            duration: 1,
            ease: "none"
        });

        gsap.to('.transformSlides img:nth-child(4)', {
            rotation: -5,
            x: 130,
            duration: 1,
            ease: "none"
        });

        gsap.to('.transformSlides img:nth-child(5)', {
            rotation: 25,
            x: 70,
            duration: 1,
            ease: "none"
        });
    }

    function resetRotationAndPositionForHero() {
        gsap.to('.transformSlides img', {
            rotation: 0,
            x: 0,
            duration: 1,
            ease: "none"
        });
    }

    gsap.to("#heroFold", {
        scrollTrigger: {
            trigger: "#heroFold",
            start: "center 30%",
            end: "center center",
            toggleActions: "play none none reverse",
            onEnter: resetRotationAndPositionForHero,
            onLeaveBack: rotateAndPositionImagesForHero,
            markers: false
        }
    });
})