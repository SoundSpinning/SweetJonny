// Initialize Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
  });
  $('[data-toggle="tooltip"]').on('click', function () {
    $(this).tooltip('hide')
  });
})


// Register service worker to control making site work offline

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./serviceWorker.js')
           .then(function() { console.log('Service Worker Registered'); });
}
