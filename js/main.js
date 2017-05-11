if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

function create_stars () {
    /* Create the stars */
    for (var i = 0; i != star_list.length; i++) {
        xhr = new XMLHttpRequest();
        xhr.open("GET","img/assets/stars/{0}.svg".format (star_list[i]), false);
        xhr.overrideMimeType("image/svg+xml");
        xhr.send("");
        var d = xhr.responseXML.documentElement;
        $(".stars").get(0).appendChild(d);
        $(".stars").get(0).appendChild(d.cloneNode(true));
        $(".stars").get(0).appendChild(d.cloneNode(true));
        $(".stars").get(0).appendChild(d.cloneNode(true));
    }
    
    /* Set their positions randomly */
    for (var i = 0; i != $('.stars > svg').length; i++) {
        setup_pos_svg ($('.stars > svg').get(i), (Math.random() * (-0.04 - 0.04) + 0.04).toFixed(4),(Math.random() * (-0.120 - 0.12) + 0.12).toFixed(4));
        $($('.stars > svg').get(i)).css ("top", (Math.random() * (59 - 0) + 0).toFixed(0) + "%");
        $($('.stars > svg').get(i)).css ("left", (Math.random() * (100 - 0) + 0).toFixed(0) + "%");
    }
}

var star_list = ['circle', 'circle-s', 'circle-s-p', 'lines', 'square', 'square-s', 'square-s-p'];
$(window).ready(function () {
    
    /* Catch mouse movement */
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;
        event = event || window.event;
        
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
        for (var i = 0; i != $('.stars > svg').length; i++) {
            set_pos_svg ($('.stars > svg').get(i), event.pageX, event.pageY);
        }
    }
    
    /* Render other SVGs */
    var __e = $('.render-svgs');
    for (var i = 0; i != __e.length; i++) {
        var current_parent = __e.get (i);
        var _data = $(current_parent).data ('svgs').split(",");
        for (var j = 0; j != _data.length; j++) {
            xhr = new XMLHttpRequest();
            xhr.open("GET","img/assets/{0}.svg".format (_data[j]), false);
            xhr.overrideMimeType("image/svg+xml");
            xhr.send("");
            var d = xhr.responseXML.documentElement;
            current_parent.appendChild(d);
        }
    }

});

function set_pos_svg (e, x, y) { // Use negative for inverse
    $(e).css("transform", "matrix(1, 0, 0, 1, " + $(e).attr ('xfactor') * x + " , " + $(e).attr ('yfactor') * y + ")");
}

function set_pos (e, x, y) { // Use negative for inverse
    $(e).css("transform", "matrix(1, 0, 0, 1, " + $(e).data ('xfactor') * x + " , " + $(e).data ('yfactor') * y + ")");
}

function setup_pos_svg (e, x_scale, y_scale) {
    $(e).attr ('xfactor', x_scale);
    $(e).attr ('yfactor', y_scale);
}

function setup_pos (e, x_scale, y_scale) {
    $(e).data ('xfactor', x_scale);
}

function set_rot (e, x, y) { // Use negative for inverse
    $(e).css("transform", "rotateY(" + x * $(e).data ('xfactor') + "deg)" + "rotateX(" + y * $(e).data ('yfactor') + "deg)");
}

$(window).scroll (function (e) {
    var st = $(this).scrollTop();
    if (st != 0) {
        $('#grassland #svg').css ('animation-name', 'none');
    }
    else {
        $('#grassland #svg').css ('animation-name', 'bob');
    }
    var p_rot = 0.02 * st;
    $('#planetsvg').css ('transform', 'translateX(-50%) rotateZ({0}deg)'.format(p_rot));
    $('#grassland').css ('background-position', 'center bottom {0}px, bottom {3}px right 30px, bottom {1}px center, bottom {2}px center'.format(0 - (st * 0.3), 0 - (st * 0.4), 160 - (st * 0.5), 140 - (st * 0.45)));
    if ($( window ).height() > 900) {
        $('#grassland #svg').css ('top', '{0}px'.format(270 + (st * 0.7)));
    }
    else {
        $('#grassland #svg').css ('top', '{0}px'.format(170 + (st * 0.7)));
    }
    $('#grassland #svg').css ('left', '{0}px'.format(60 + (st * 0.3)));
    if (st == 0) {
        $('.nav').removeClass ('down');
    }
    else {
        $('.nav').addClass ('down');
    }
});
