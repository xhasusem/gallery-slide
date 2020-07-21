(function(){

    var swiper = new Swiper('.slide .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            1280: {
                slidesPerView: 4,
            },
        },
    });

})()