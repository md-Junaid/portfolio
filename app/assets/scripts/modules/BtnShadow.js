import $ from 'jquery';

class BtnShadow {
	constructor() {
		this.btn = $('.btn');
		this.events();
	}

	events() {
		this.btn.mouseup(this.addShadow.bind(this));
		this.btn.mousedown(this.removeShadow.bind(this));
	}

	addShadow() {
		this.btn.addClass("shadow");
	}

	removeShadow() {
		this.btn.removeClass("shadow");
	}
}

export default BtnShadow;