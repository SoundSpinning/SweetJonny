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
// navigator.serviceWorker.register('serviceWorker.js');

// if('serviceWorker' in navigator) {
//   navigator.serviceWorker
//            .register()
//            .then(function() { console.log('Service Worker Registered'); });
// }
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('./sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }
