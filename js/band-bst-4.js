// Initialize Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
  });
  $('[data-toggle="tooltip"]').on('click', function () {
    $(this).tooltip('hide')
  });
})

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js');
  });
}
