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

// Show Me Code plugin
// <use xlink:href="#f-icon-notes" /> <use xlink:href="#f-icon-code" />


  $.fn.showCode = function() {
    var obj = $(this);
    $.each( obj, function(index){
      var html = $(this).html().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      $(this).append('<a href="#" class="toggle-code btn btn-default">code</a>'+
                      '<pre class="code-block"><code class="language-markup">'+html+'</code></pre>');
    });
    $('.code-block').hide();
    $('.toggle-code').click(function(e){
      e.preventDefault();
      $(this).next('.code-block').slideToggle('fast');
      // $(this).text(($(this).text() === 'Hide Code') ? 'Show Code' : 'Hide Code');
    }).css({
      'position':'absolute',
      'top': 0,
      'right': 15+'px'
    }).hide();
  };

$.fn.addUIMenu = function() {
    var obj = $(this);
      obj.append('<div class="page-menu btn-group" style="position:fixed;right:25px;top:65px;">'+
                    // '<a href="#" class="btn btn-default" id="show-help-trigger">Help</a>'+
                    '<a href="#" class="btn btn-default id="show-code-trigger">Code</a>'+
                  '</div>');
    
    $('#show-code-trigger').click(function(){
      $('.toggle-code').toggle();
      console.log('clicked!');
    });

    // $('#show-help-trigger').click(function(){
    //   $('body').toggleClass('show-index-true');
    // }).hide();
  };

(function () {

	tk.buildSwatches();
  $('.container').addUIMenu();
  $('.show-code').showCode();

}());