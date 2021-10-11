(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/sales-960.jpg' : 'images/sales-960.jpg');
var a='data-src'; if($('.js2').hasAttr('src')) { a='src'; } $('.js2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/sales-960.jpg' : 'images/sales-960.jpg') : 'images/sales-960.jpg');
var a='data-src'; if($('.js3').hasAttr('src')) { a='src'; } $('.js3').attr(a, (dpi>1) ? ((dpi>2) ? 'images/sales-960.jpg' : 'images/sales-960.jpg') : 'images/sales-960.jpg');
var a='data-src'; if($('.js4').hasAttr('src')) { a='src'; } $('.js4').attr(a, (dpi>1) ? ((dpi>2) ? 'images/sales-960.jpg' : 'images/sales-960.jpg') : 'images/sales-960.jpg');
$('.js5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/sales-960.jpg' : 'images/sales-960.jpg') : 'images/sales-960.jpg');
$('.js6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/sales-960.jpg' : 'images/sales-960.jpg') : 'images/sales-960.jpg');
$('.js7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/sales-960.jpg' : 'images/sales-960.jpg') : 'images/sales-960.jpg');
$('.js8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/sales-960.jpg' : 'images/sales-960.jpg') : 'images/sales-960.jpg');
$('.js9').attr('src', (dpi>1) ? ((dpi>2) ? 'images/sales-960.jpg' : 'images/sales-960.jpg') : 'images/sales-960.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
$('.js2').unveil(50);
$('.js10 source').unveil(50);
$('.js3').unveil(50);
$('.js11 source').unveil(50);
$('.js4').unveil(50);
$('.js12 source').unveil(50);
$('.c37').Stickyfill();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js4')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});