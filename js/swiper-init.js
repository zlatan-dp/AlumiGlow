const alumiglowSwiper = new Swiper('.tv-mount-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 24,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        561: {
            spaceBetween: 48,
        },
    },
});
