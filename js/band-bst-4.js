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
