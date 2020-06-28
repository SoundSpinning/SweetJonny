// 
// lazyloading of images
// https://www.smashingmagazine.com/2019/05/hybrid-lazy-loading-progressive-migration-native/

// (function() {
//   if ("loading" in HTMLImageElement.prototype) {
//     var lazyEls = document.querySelectorAll("[loading=lazy]");
//     lazyEls.forEach(function(lazyEl) {
//       lazyEl.setAttribute(
//         "src",
//         lazyEl.getAttribute("data-src")
//       );
//     });
//   } else {
//     // Dynamically include a lazy loading library of your choice
//     // Here including vanilla-lazyload
//     var script = document.createElement("script");
//     script.async = true;
//     script.src =
//       "https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.0.0/dist/lazyload.min.js";
//     window.lazyLoadOptions = {
//       elements_selector: "[loading=lazy]"
//       //eventually more options here
//     };
//     document.body.appendChild(script);
//   }
// })();


// Initialize Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
})

// Get the height of the fixed nav bar
var elnav = $("nav");

// var elnav = document.querySelector('.navbar');
var headerHeight = 12.0;
if (elnav !== null) {
    headerHeight = headerHeight + elnav.height();
} 
// Smooth scroll snippet
// =====================
$(document).ready(function(){
    $('a[href*="#"]:not([href*="#ns-"]').on('click',function (e) {
    e.preventDefault();
    var thistarget = this.hash;
    $thistarget = $(thistarget);
    $('html, body').stop().animate({
        'scrollTop': $thistarget.offset().top - headerHeight
        }, 1000, 'swing' 
    );
});
return false;
});

