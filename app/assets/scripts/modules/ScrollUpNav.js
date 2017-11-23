import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ScrollUpNav {
	constructor(els, offset) {
		this.siteHeader = $(".site-header");
		this.triggerElement = els;
		this.offsetPercent = offset;
		this.navUpWaypoint();
	}

	navUpWaypoint() {
		var that = this;
		new Waypoint({
			element: this.triggerElement[0],
			handler: function(direction) {
				if(direction == "up") {
					that.siteHeader.addClass("site-header--nav-up").removeClass("site-header--white");
				} else {
					that.siteHeader.addClass("site-header--white").removeClass("site-header--nav-up");
				}
			},
			offset: that.offsetPercent
		});
	}
}

export default ScrollUpNav;