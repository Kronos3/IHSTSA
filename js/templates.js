class Template {
	constructor (template_file, target_el) {
		this.text = "";
		this.header = "";
		this.template_file = template_file;
		this.el = target_el;
	}
	
	renderFile (file) {
		this.openFile(file, (text) => {
		
		});
	}
	
	openFile (file, callback) {
		let xmlHTTP = new XMLHttpRequest();
		xmlHTTP.open('GET', file, true);
		xmlHTTP.responseType = "text";
		
		xmlHTTP.onload = function () {
			callback(this.response);
		};
		
		xmlHTTP.send ();
	}
}