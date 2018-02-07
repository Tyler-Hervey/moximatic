$(document).ready(function () {

    $(".slider").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        mobileFirst: true,
        customPaging: function (slider, i) {
            return '<img class="slider-dot-icon" src="../img/slider-icon-' + (parseInt(i)+1) + '.png">';
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }

        ]
    });

});