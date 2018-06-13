/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles', './assets/js/particles.json', function () {
    console.log('callback - particles.js config loaded');
});


let scrollToElement = (el, ms) => {
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}

$(document).ready(function () {
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        var el = $(this).attr('href');
        scrollToElement(el);
    });

    $(window).scroll(function () {
        var x = $(window).scrollTop();

        if (x >= 42) {
            $('#navbar').fadeIn(300);
        } else {
            $('#navbar').fadeOut(300);
        }

    });
});