$(function () {
    $('.services-first-tab').focus();
    $('.services-first-tab').click(function () {
        $('.services-tab-1').addClass('fade').show();
        $("[class^=services-tab]").not('.services-tab-1').hide();
        $("[class^=services-tab]").not('.services-tab-1').removeClass('fade');

    });

    $('.services-second-tab').click(function () {
        $('.services-tab-2').addClass('fade').show();
        $("[class^=services-tab]").not('.services-tab-2').hide();

    });

    $('.services-third-tab').click(function () {
        $('.services-tab-3').addClass('fade').show();
        $("[class^=services-tab]").not('.services-tab-3').hide();
    });
});