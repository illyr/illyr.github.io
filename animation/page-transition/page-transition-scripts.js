$( document ).ready(function() {

  //$('.animsition').animsition();

  $(".animsition").animsition({
    inClass: 'zoom-in',
    outClass: 'zoom-out',
    inDuration: 700,
    outDuration: 700,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ if(url){
        window.location.href = url;
      } else {
        window.location.href = window.location.href;
      }
    }
  });


});
