$(document).ready(function(){
  $(".planet-1").click(function() {
    $('.planet-1').toggleClass('transform-active');
  });
  $(".button").click(function() {
    $('.planet-1').toggleClass('explore-planet')
    $('.alien-1').toggleClass('alien-grow')
  })
});
