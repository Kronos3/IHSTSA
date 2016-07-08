$(window).scroll(function () {
    var y = $(window).scrollTop(),
        one = $('#off-one').offset().top - $(window).height();
        three = $('#off-three').offset().top - $(window).height();
        four = $('#off-four').offset().top - $(window).height();
        five = $('#off-five').offset().top - $(window).height();
        readmore = $('#event-read-more').offset().top - $(window).height();
        creator = $('#creator-box').offset().top - $(window).height();
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
    if (y > creator) {
        $( "#creator-box" ).children().css('opacity', '0');
        $( "#creator-box" ).children().css('animation', 'creator-content-load 1s');
        $( "#creator-box" ).children().css('animation-fill-mode', 'forwards');
        $( "#creator-box" ).children().css('animation-delay', '1s');
        $('#creator-box').css('animation', 'creators-load 1s');
    }
});

$(".officer-card").hover(function(){
    $(this).find(".officer-name").css("opacity", "1");
    $(this).find(".officer-name::after").css("margin-bottom:", "130px");
    }
);

var navOpened = 0;
var navIn = "slideInRight";
var navOut = "slideOutRight";

function openNav () {
    if (navOpened == 0) {
        $("#nav").css("right", "0px");
        $("#hamburger").css("color", "rgb(255, 255, 255)");
        navOpened = 1;
    }
    else {
        $("#nav").css("right", "-500px");
        $("#hamburger").css("color", "rgb(80, 77, 71)");
        navOpened = 0;
    }
}
