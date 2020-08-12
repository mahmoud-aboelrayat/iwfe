$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:'<span class="carousel_arrow next_arrow fa-2x"><i class="fas fa-angle-right"></i></span>',
        prevArrow:'<span class="carousel_arrow prev_arrow fa-2x"><i class="fas fa-angle-left"></i></span>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            },
            ]
    });
  });