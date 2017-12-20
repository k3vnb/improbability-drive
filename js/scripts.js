$(document).ready(function(){
  $(".self-destruct").click(function() {
    $('.ctrl-pnl').toggleClass('self-destruct-animation');
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

  $(".planet-1").click(function() {
    $('.planet-1').toggleClass('transform-active');
    $('.explore-1').toggleClass('explore-show');
    $('.explore-text-1').toggleClass('explore-text-show');
    $('.planet-2, .planet-3, .planet-4, .planet-5').toggleClass('go-away');
  });
  $(".explore-1").click(function() {
    $('.planet-1').toggleClass('explore-planet-1')
    $('.alien-1').toggleClass('alien-grow')
    $('.return-to-orbit-1').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit-1").click(function() {
    $('.planet-1').toggleClass('explore-planet-1')
    $('.alien-1').toggleClass('alien-grow')
    $('.alien-1').toggleClass('alien-shrink')
    $('.alien-1').toggleClass('alien-shrink')
    $('.return-to-orbit-1').toggleClass('return-to-orbit-show')
    $('.planet-1').toggleClass('transform-active');
    $('.explore-1').toggleClass('explore-show');
    $('.explore-text-1').toggleClass('explore-text-show');
    $('.planet-1').addClass('on-top');
    setTimeout(function() {
      $('.planet-2, .planet-3, .planet-4, .planet-5').toggleClass('go-away');
      $('.planet-1').removeClass('on-top');
    }, 2000);
  })


  $(".planet-2").click(function() {
    $('.planet-2').toggleClass('transform-active');
    $('.explore-2').toggleClass('explore-show');
    $('.explore-text-2').toggleClass('explore-text-show');
    $('.planet-5, .planet-3, .planet-4, .planet-1').toggleClass('go-away');
  });
  $(".explore-2").click(function() {
    $('.planet-2').toggleClass('explore-planet-2')
    $('.alien-2').toggleClass('alien-grow')
    $('.return-to-orbit-2').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit-2").click(function() {
    $('.planet-2').toggleClass('explore-planet-2')
    $('.alien-2').toggleClass('alien-grow')
    $('.alien-2').toggleClass('alien-shrink')
    $('.alien-2').toggleClass('alien-shrink')
    $('.return-to-orbit-2').toggleClass('return-to-orbit-show')
    $('.planet-2').toggleClass('transform-active');
    $('.explore-2').toggleClass('explore-show');
    $('.explore-text-2').toggleClass('explore-text-show');
    $('.planet-2').addClass('on-top');
    setTimeout(function() {
      $('.planet-5, .planet-3, .planet-4, .planet-1').toggleClass('go-away');
      $('.planet-2').removeClass('on-top');
    }, 2000);
  })


  $(".planet-3").click(function() {
    $('.planet-3').toggleClass('transform-active');
    $('.explore-3').toggleClass('explore-show');
    $('.explore-text-3').toggleClass('explore-text-show');
    $('.planet-2, .planet-5, .planet-4, .planet-1').toggleClass('go-away');
  });
  $(".explore-3").click(function() {
    $('.planet-3').toggleClass('explore-planet-3')
    $('.alien-3').toggleClass('alien-grow')
    $('.return-to-orbit-3').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit-3").click(function() {
    $('.planet-3').toggleClass('explore-planet-3')
    $('.alien-3').toggleClass('alien-grow')
    $('.alien-3').toggleClass('alien-shrink')
    $('.alien-3').toggleClass('alien-shrink')
    $('.return-to-orbit-3').toggleClass('return-to-orbit-show')
    $('.planet-3').toggleClass('transform-active');
    $('.explore-3').toggleClass('explore-show');
    $('.explore-text-3').toggleClass('explore-text-show');
    $('.planet-3').addClass('on-top');
    setTimeout(function() {
      $('.planet-2, .planet-5, .planet-4, .planet-1').toggleClass('go-away');
      $('.planet-3').removeClass('on-top');
    }, 2000);
  })


  $(".planet-4").click(function() {
    $('.planet-4').toggleClass('transform-active');
    $('.explore-4').toggleClass('explore-show');
    $('.explore-text-4').toggleClass('explore-text-show');
    $('.planet-2, .planet-3, .planet-5, .planet-1').toggleClass('go-away');
  });
  $(".explore-4").click(function() {
    $('.planet-4').toggleClass('explore-planet-4')
    $('.alien-4').toggleClass('alien-grow')
    $('.return-to-orbit-4').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit-4").click(function() {
    $('.planet-4').toggleClass('explore-planet-4')
    $('.alien-4').toggleClass('alien-grow')
    $('.alien-4').toggleClass('alien-shrink')
    $('.alien-4').toggleClass('alien-shrink')
    $('.return-to-orbit-4').toggleClass('return-to-orbit-show')
    $('.planet-4').toggleClass('transform-active');
    $('.explore-4').toggleClass('explore-show');
    $('.explore-text-4').toggleClass('explore-text-show');
    $('.planet-4').addClass('on-top');
    setTimeout(function() {
      $('.planet-2, .planet-3, .planet-5, .planet-1').toggleClass('go-away');
      $('.planet-4').removeClass('on-top');
    }, 2000);
  })


  $(".planet-5").click(function() {
    $('.planet-5').toggleClass('transform-active');
    $('.explore-5').toggleClass('explore-show');
    $('.explore-text-5').toggleClass('explore-text-show');
    $('.planet-2, .planet-3, .planet-4, .planet-1').toggleClass('go-away');
  });
  $(".explore-5").click(function() {
    $('.planet-5').toggleClass('explore-planet-5')
    $('.alien-5').toggleClass('alien-grow')
    $('.return-to-orbit-5').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit-5").click(function() {
    $('.planet-5').toggleClass('explore-planet-5')
    $('.alien-5').toggleClass('alien-grow')
    $('.alien-5').toggleClass('alien-shrink')
    $('.alien-5').toggleClass('alien-shrink')
    $('.return-to-orbit-5').toggleClass('return-to-orbit-show')
    $('.planet-5').toggleClass('transform-active');
    $('.explore-5').toggleClass('explore-show');
    $('.explore-text-5').toggleClass('explore-text-show');
    $('.planet-5').addClass('on-top');
    setTimeout(function() {
      $('.planet-2, .planet-3, .planet-4, .planet-1').toggleClass('go-away');
      $('.planet-5').removeClass('on-top');
    }, 2000);
  })
  $(".btn-grid-flat div").click(function() {
    $(this).addClass('active');
    $(".btn-grid-flat div").not(this).removeClass('active');
  });
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
