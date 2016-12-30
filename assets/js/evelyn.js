/*
* This file contains code for style switcher and reploader.
*/

function expandWidget() {
    var el = $('.style-switcher').toggleClass('open');
}

$(document).ready(function() {

    $('.vis-widget').on('click', function() {
        expandWidget();
    });

    $('.colour-box').on('click', function() {
        var elem = $(this);

        $('#colour').attr('href', 'assets/css/evelyn-' + elem.attr("id") + '.css');

        var col = elem.css('background-color');

        $('.vis-widget i').css('color', col);

    });

});

function removePreloader() {
    var preloader = $('.preloader');
    preloader.css('opacity', 0);

    setTimeout(function() {
        preloader.removeClass('show');
    }, 1000);

    window.scrollTo(0, 0);
}

var preloader = $('.preloader');
setTimeout(removePreloader, 2000);
