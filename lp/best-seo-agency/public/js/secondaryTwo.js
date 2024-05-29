const emblaNodeForIndustries = document.querySelector('.__industries .embla')
const optionsForIndustries = { loop: true, }
const pluginsForIndustries = [EmblaCarouselClassNames(), EmblaCarouselAutoplay({ delay: 4000 })]
const emblaApiForIndustries = EmblaCarousel(emblaNodeForIndustries, optionsForIndustries, pluginsForIndustries)