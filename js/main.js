String.prototype.format = function() {
	let a = this;
	for (let k in arguments) {
		a = a.replace("{" + k + "}", arguments[k])
	}
	return a
};

$(window).ready(function () {
	
	/* Render other SVGs */
	let __e = $('.render-svgs');
	let __b = $('.render-background');
	function render_svg_class(index) {
		if (index >= __e.length)
			return;
		
		let ar = $(__e[index]).data('svgs').split(",");
		
		function render_svg(i) {
			if (i >= ar.length)
				return render_svg_class(++index);
			
			let xhr = new XMLHttpRequest();
			xhr.open("GET", "/img/assets/{0}.svg".format(ar[i]), false);
			xhr.overrideMimeType("image/svg+xml");
			
			xhr.onload = function () {
				__e[index].appendChild(xhr.responseXML.documentElement);
				render_svg(++i);
			};
			
			xhr.send();
		}
		
		render_svg(0);
	}
	
	function render_background (index) {
		if (index >= __b.length)
			return;
		console.log (__b[index]);
		console.log ($(__b[index]).data('background'));
		$(__b[index]).css ("background", "url({0})".format ($(__b[index]).data('background')));
		render_background(++index);
	}
	
	render_svg_class(0);
	render_background(0);
});

function set_pos_svg(e, x, y) { // Use negative for inverse
	$(e).css("transform", "matrix(1, 0, 0, 1, " + $(e).attr('xfactor') * x + " , " + $(e).attr('yfactor') * y + ")");
}

function setup_pos_svg(e, x_scale, y_scale) {
	$(e).attr('xfactor', x_scale);
	$(e).attr('yfactor', y_scale);
}
/*
$(window).scroll(function () {
	let st = $(this).scrollTop();
	if (st === 0) {
		$('.nav').removeClass('down');
	}
	else {
		$('.nav').addClass('down');
	}
});
*/