$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > -1) {
                    $("#back").css('background-color', 'blue');
                }
                else {
                    $("#back").css('background-color', 'rgba(255,255,255,0)');
                }
            });
        });
