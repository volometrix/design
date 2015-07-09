'use strict';

var tk = window.tk = {};

tk.buildSwatches = function () {

	var swatches = document.querySelectorAll('.swatch'), color;

	for (var i = swatches.length - 1; i >= 0; i--) {
		color = swatches[i].querySelector('.swatch-color').innerHTML;
		swatches[i].style.backgroundColor = color;
		swatches[i].style.color = '#ffffff';
	}

	// TODO Finish color conversions

// 	function componentToHex(c) {
//     var hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
// 	}

// 	function rgbToHex(r, g, b) {
// 	    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// 	}

// 	function hexToRgb(hex) {
//     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     return result ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16)
//     } : null;
// }

// console.log( hexToRgb(color).g ); // "51";

// console.log( rgbToHex(color) ); // #0033ff
	

	return this;

};

(function () {

	tk.buildSwatches();

}());