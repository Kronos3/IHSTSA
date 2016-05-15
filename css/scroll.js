$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 0) {
                    $("#back").css('background-color', '#585858');
                }
                else {
                    $("#back").css('background-color', '#585858');
                }
            });
        });
