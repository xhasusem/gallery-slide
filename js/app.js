(function(){

    var swiper = new Swiper('.slide .swiper-container', {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        speed: 600,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            1280: {
                slidesPerView: 4,
                slidesPerGroup: 2,
            },
        },
        navigation: {
            prevEl: '.slide-actions .slide-prev',
            nextEl: '.slide-actions .slide-next',
        },
    });

})()