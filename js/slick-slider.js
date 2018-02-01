$(document).ready(function () {
    $(".slider").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
        
        // var slickOptions = {
        //     centerMode= true;
        //     centerPadding = 0;
        //     slidesToShow: 1;
        // }
    });

    $(".slider-circle").click(function (e) {
        e.preventDefault();
        slideIndex = $(this).index();

        $('.slider').slick('slickGoTo', parseInt(slideIndex));
    });
});