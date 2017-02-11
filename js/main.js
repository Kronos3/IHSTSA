$(window).scroll(function () {
    var y = $(window).scrollTop(),
        readmore = $('#event-read-more').offset().top - $(window).height();
        creator = $('#creator-box').offset().top - $(window).height();
    if (y > creator) {
        $( "#creator-box" ).children().css('opacity', '0');
        $( "#creator-box" ).children().css('animation', 'creator-content-load 1s');
        $( "#creator-box" ).children().css('animation-fill-mode', 'forwards');
        $( "#creator-box" ).children().css('animation-delay', '1s');
        $('#creator-box').css('animation', 'creators-load 1s');
    }
});

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

$( document ).ready(function() {
    for (var i=0; i != $('.navmk2 > li').length; i++){
        $('.navmk2 > li')[i].addEventListener('click', function () {
            window.location.href = $(this).data ('href');
        }, false);
    }
    for (var i=0; i != $('.navmk3 > li').length; i++){
        $('.navmk3 > li')[i].addEventListener('click', function () {
            window.location.href = $(this).data ('href');
        }, false);
    }
});


