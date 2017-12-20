$(document).ready(function(){
  $(".self-destruct").click(function() {
    $('.ctrl-pnl').toggleClass('self-destruct-animation').delay(6000).queue(function(next){
        $(".ctrl-pnl").removeClass('self-destruct-animation');
        next();
    });
  });

  $(".wiper-switch input").click(function() {
    $('.wiper').toggleClass('wipe-animation');
  });

  $("span.button").click(function() {
    var color = $(this).attr("data-color");
    $(".planet p").css("color", color);
    $(".explore, .return").css("border-color", color);
    $("span.button").mousedown()
  });

  $(".planet").click(function() {
    $(this).toggleClass('transform-active');
    $(this).children('.explore').toggleClass('explore-show');
    $(this).children('.explore-text').toggleClass('explore-text-show');
    $(this).siblings(".planet").toggleClass('go-away');
  });
  $(".explore").click(function() {
    $(this).parent().toggleClass('explore-planet')
    $(this).siblings('.alien').toggleClass('alien-grow')
    $(this).siblings('.return-to-orbit').toggleClass('return-to-orbit-show')

  })
  $(".return").click(function() {
    $(this).parent().toggleClass('explore-planet')
    $(this).siblings('.alien').toggleClass('alien-grow')
    $(this).siblings('.alien').toggleClass('alien-shrink')
    $(this).siblings('.return').toggleClass('return-to-orbit-show')
    $(this).parent().toggleClass('transform-active');
    $(this).siblings('.explore').toggleClass('explore-show');
    $(this).siblings('.explore-text').toggleClass('explore-text-show');
    $(this).parent().addClass('on-top');
    // setTimeout(function() {
      $(this).parent().siblings().toggleClass('go-away');
      $(this).parent().removeClass('on-top');
    // }, 2000);
  })
});

//harlem globetrotter gif
$(document).ready(function() {
  $('.planet-6').click(function(){
    $('#broadcast').addClass('planet-6-gif').delay(10000).queue(function(next){
      $('#broadcast').removeClass('planet-6-gif');
      next();
    })
  })
})
//end globetrotter gif

$(document).ready(function(e) {
    $('.planets > div').click(function(e) {

      var xPercent = e.pageX / $(window).width();
      var yPercent = e.pageY / $(window).height();
      // var xPosition = Math.floor(xPercent*100);
      // var yPosition = Math.floor(yPercent*100);
      var xPosition = Math.floor(xPercent*100);
      var yPosition = Math.floor(yPercent*100);
      console.log(xPosition);
      console.log(yPosition);
      $('#warp').css({perspectiveOrigin: xPosition + "vw " + yPosition + "vh"});
      $('#warp').addClass("center-warp").delay(5000).queue(function(next){
        $('#warp').removeClass("center-warp");
        next();


      });

    });
  });
  $(document).ready(function() {
    $('.planets > div').click(function() {
      $('.meter').addClass("transparent").delay(4000).queue(function(next) {
        $('.meter').removeClass("transparent");
        next();
      });
    });

  });
