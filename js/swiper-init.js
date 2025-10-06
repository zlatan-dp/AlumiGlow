const alumiglowSwiper = new Swiper('.use-cases-swiper', {
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

const sunriseSunsetSwiper = new Swiper('.sunrise-sunset-swiper', {
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
