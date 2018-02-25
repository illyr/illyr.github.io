$( document ).ready(function() {

  var myAnimation = anime({
      targets: '#toto',
      loop: true,
      rotate: {
       easing: 'linear',
        value: 360,
        duration: 2000,

      }

    });

});
