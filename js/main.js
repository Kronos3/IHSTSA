$(window).scroll(function () {
    var y = $(window).scrollTop(),
        one = $('#off-one').offset().top - $(window).height();
        three = $('#off-three').offset().top - $(window).height();
        four = $('#off-four').offset().top - $(window).height();
        five = $('#off-five').offset().top - $(window).height();
        readmore = $('#event-read-more').offset().top - $(window).height();
    if (y > one) {
        $('#off-one').addClass('animated slideInLeft');
    }
    if (y > three) {
        $('#off-three').addClass('animated slideInRight');
    }
    if (y > four) {
        $('#off-four').addClass('animated slideInLeft');
    }
    if (y > five) {
        $('#off-five').addClass('animated slideInRight');
    }
    if (y > readmore) {
        $('#event-read-more').addClass('animated flipInX');
    }
    
});

$(".officer-card").hover(function(){
    console.log ("hovered");
    $(this).find(".officer-name").css("opacity", "1");
    $(this).find(".officer-name::after").css("margin-bottom:", "130px");
    }
);
