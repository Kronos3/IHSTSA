var lastScrollTop = 0;

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop()+$(window).height();
    var position = $('#one').offset().top;
    
    if (position > scroll && scroll > lastScrollTop) {
        $('#one').addClass('animated bounceInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#one').removeClass('animated bounceInUp');
        });
    }
    lastScrollTop = scroll;
});
