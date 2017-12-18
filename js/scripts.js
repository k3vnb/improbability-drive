$(document).ready(function(){
  $(".planet-1").click(function() {
    $('.planet-1').toggleClass('transform-active');
    $('.explore').toggleClass('explore-show');
  });
  $(".explore").click(function() {
    $('.planet-1').toggleClass('explore-planet')
    $('.alien-1').toggleClass('alien-grow')
    $('.return-to-orbit').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit").click(function() {
    $('.planet-1').toggleClass('explore-planet')
    $('.alien-1').toggleClass('alien-grow')
    $('.alien-1').toggleClass('alien-shrink')
    $('.alien-1').toggleClass('alien-shrink')
    $('.return-to-orbit').toggleClass('return-to-orbit-show')
  })

});
