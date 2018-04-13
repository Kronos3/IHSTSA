String.prototype.format = function() {
	let a = this;
	for (let k in arguments) {
		a = a.replace("{" + k + "}", arguments[k])
	}
	return a
};

let star_list = ['circle', 'circle-s', 'circle-s-p', 'lines', 'square', 'square-s', 'square-s-p'];

function create_stars(i) {
	if (i >= star_list.length) {
		let svg_ob = $('.stars > svg');
		for (let i = 0; i !== svg_ob.length; i++) {
			setup_pos_svg(svg_ob.get(i), (Math.random() * (-0.04 - 0.04) + 0.04).toFixed(4), (Math.random() * (-0.120 - 0.12) + 0.12).toFixed(4));
			$(svg_ob.get(i)).css("top", (Math.random() * 59).toFixed(0) + "%");
			$(svg_ob.get(i)).css("left", (Math.random() * 100).toFixed(0) + "%");
		}
		return;
	}
	
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "img/assets/stars/{0}.svg".format(star_list[i]));
	console.log ("img/assets/stars/{0}.svg".format(star_list[i]));
	
	return;
	xhr.overrideMimeType("image/svg+xml");
	xhr.send("");
	
	xhr.onload = function () {
		for (let i = 0; i < 4; i++)
			$(".stars").get(0).appendChild(xhr.responseXML.documentElement.cloneNode());
	};
	
	create_stars(i + 1);
}



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

$(window).scroll(function () {
	let st = $(this).scrollTop();
	if (st === 0) {
		$('.nav').removeClass('down');
	}
	else {
		$('.nav').addClass('down');
	}
});
