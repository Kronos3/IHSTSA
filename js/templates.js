class Template {
	constructor(template_file, target_el) {
		this.text = "";
		this.header = "";
		this.template_file = "";
		this.openFile(template_file, (text) => {
			this.template_file = text;
		});
		this.el = target_el;
		this.image = "";
		this.rendered = "";
	}
	
	renderFile(file) {
		this.openFile(file, (text) => {
			this.parseFile(text, 0);
			this.rendered = Mustache.render(this.template_file, {
				header: this.header,
				text: this.text,
				image: this.image
			});
			$(this.el).html(this.rendered);
			$("body").addClass ("open");
		});
	}
	
	parseFile(text, k) {
		if (text.length <= 1)
			return;
		if (k === 0) {
			this.image = Template.readline(text);
			return this.parseFile(text.substring (this.image.length + 1), 1);
		}
		
		let line = Template.readline(text);
		if (line.charAt(0) === '~')
			this.header += line.substring(1);
		else if (line.charAt(0) === '-')
			this.text += "<p>" + line.substring(1) + "</p>\n";
		else
			this.text += line + "\n";
		this.parseFile(text.substring (line.length + 1), 1);
	}
	
	static readline(text) {
		return text.substring(0, text.search("\n"));
	}
	
	openFile(file, callback) {
		let xmlHTTP = new XMLHttpRequest();
		xmlHTTP.open('GET', file, true);
		xmlHTTP.responseType = "text";
		
		xmlHTTP.onload = function () {
			callback(this.response);
		};
		
		xmlHTTP.send();
	}
}