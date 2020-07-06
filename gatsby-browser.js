/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


var  __animationInstance = function(){}

 	__animationInstance.prototype.aos = function(){

		// You can also pass an optional settings object
		// below listed default settings
		
		AOS.init({
		  // Global settings:
		  disable: false, 
		  startEvent: 'DOMContentLoaded', 
		  initClassName: 'aos-init', 
		  animatedClassName: 'aos-animate',
		  useClassNames: false,
		  disableMutationObserver: false, 
		  debounceDelay: 50, 
		  throttleDelay: 99,

		  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		  offset: 120, 
		  delay: 0, 
		  duration: 400, 
		  easing: 'ease', 
		  once: false,
		  mirror: false,
		  anchorPlacement: 'top-bottom',

	});
}

var inst = (new __animationInstance);
inst.aos();
