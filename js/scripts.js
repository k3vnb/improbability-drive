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



  $(".planet-1").click(function() {
    $('.planet-1').toggleClass('transform-active');
    $('.explore-1').toggleClass('explore-show');
    $('.explore-text-1').toggleClass('explore-text-show');
    $('.planet-2, .planet-3, .planet-4, .planet-5, .planet-6').toggleClass('go-away');
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
      $('.planet-2, .planet-3, .planet-4, .planet-5, .planet-6').toggleClass('go-away');
      $('.planet-1').removeClass('on-top');
    }, 2000);
  })


  $(".planet-2").click(function() {
    $('.planet-2').toggleClass('transform-active');
    $('.explore-2').toggleClass('explore-show');
    $('.explore-text-2').toggleClass('explore-text-show');
    $('.planet-5, .planet-3, .planet-4, .planet-1, .planet-6').toggleClass('go-away');
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
      $('.planet-5, .planet-3, .planet-4, .planet-1, .planet-6').toggleClass('go-away');
      $('.planet-2').removeClass('on-top');
    }, 2000);
  })


  $(".planet-3").click(function() {
    $('.planet-3').toggleClass('transform-active');
    $('.explore-3').toggleClass('explore-show');
    $('.explore-text-3').toggleClass('explore-text-show');
    $('.planet-2, .planet-5, .planet-4, .planet-1, .planet-6').toggleClass('go-away');
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
      $('.planet-2, .planet-5, .planet-4, .planet-1, .planet-6').toggleClass('go-away');
      $('.planet-3').removeClass('on-top');
    }, 2000);
  })


  $(".planet-4").click(function() {
    $('.planet-4').toggleClass('transform-active');
    $('.explore-4').toggleClass('explore-show');
    $('.explore-text-4').toggleClass('explore-text-show');
    $('.planet-2, .planet-3, .planet-5, .planet-1, .planet-6').toggleClass('go-away');
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
      $('.planet-2, .planet-3, .planet-5, .planet-1, .planet-6').toggleClass('go-away');
      $('.planet-4').removeClass('on-top');
    }, 2000);
  })


  $(".planet-5").click(function() {
    $('.planet-5').toggleClass('transform-active');
    $('.explore-5').toggleClass('explore-show');
    $('.explore-text-5').toggleClass('explore-text-show');
    $('.planet-2, .planet-3, .planet-4, .planet-1, .planet-6').toggleClass('go-away');
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
      $('.planet-2, .planet-3, .planet-4, .planet-1, .planet-6').toggleClass('go-away');
      $('.planet-5').removeClass('on-top');
    }, 2000);
  })
  $("span.button").click(function() {
    var color = $(this).attr("data-color");
    $(".planet p").css("color", color);
    $(".explore, .return").css("border-color", color);
    $("span.button").mousedown()
  });
  $(".btn-grid-flat div").click(function() {
    $(this).addClass('active');
    $(this).parent().children().not(this).removeClass('active');
  });
    $(".ch-1").click(function() {
      $('#broadcast').addClass('channel-1').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-1');
        next();
      });
    });
    $(".ch-2").click(function() {
      $('#broadcast').addClass('channel-2').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-2');
        next();
      });
    });
    $(".ch-3").click(function() {
      $('#broadcast').addClass('channel-3').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-3');
        next();
      });
    });
    $(".ch-4").click(function() {
      $('#broadcast').addClass('channel-4').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-4');
        next();
      });
    });
    $(".ch-5").click(function() {
      $('#broadcast').addClass('channel-5').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-5');
        next();
      });
    });
    $(".ch-6").click(function() {
      $('#broadcast').addClass('channel-6').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-6');
        next();
      });
    });
    $(".ch-7").click(function() {
      $('#broadcast').addClass('channel-7').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-7');
        next();
      });
    });
    $(".ch-8").click(function() {
      $('#broadcast').addClass('channel-8').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-8');
        next();
      });
    });
    $(".ch-9").click(function() {
      $('#broadcast').addClass('channel-9').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-9');
        next();
      });
    });
    $(".ch-10").click(function() {
      $('#broadcast').addClass('channel-10').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-10');
        next();
      });
    });
    $(".ch-11").click(function() {
      $('#broadcast').addClass('channel-11').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-11');
        next();
      });
    });
    $(".ch-12").click(function() {
      $('#broadcast').addClass('channel-12').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-12');
        next();
      });
    });
    $(".ch-13").click(function() {
      $('#broadcast').addClass('channel-13').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-13');
        next();
      });
    });
    $(".ch-14").click(function() {
      $('#broadcast').addClass('channel-14').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-14');
        next();
      });
    });
    $(".ch-15").click(function() {
      $('#broadcast').addClass('channel-15').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-15');
        next();
      });
    });
    $(".ch-16").click(function() {
      $('#broadcast').addClass('channel-16').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-16');
        next();
      });
    });
    $(".ch-17").click(function() {
      $('#broadcast').addClass('channel-17').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-17');
        next();
      });
    });
    $(".ch-18").click(function() {
      $('#broadcast').addClass('channel-18').delay(5000).queue(function(next){
        $('#broadcast').removeClass('channel-18');
        next();
      });
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
//disco gif
$(document).ready(function() {
  $('.planet-7').click(function(){
    $('#broadcast').addClass('planet-7-gif').delay(10000).queue(function(next){
      $('#broadcast').removeClass('planet-7-gif');
      next();
    })
  })
})
//end disco gif
$(document).ready(function() {
  $('.planet-7').one("click", function(){
    $('#discoworld').addClass('discoworlds').delay(10000).queue(function(next){
      $('#discoworld').removeClass('discoworlds');
      next();
    })
  })
})
//start of doom gif
$(document).ready(function() {
  $('.btn-lg').click(function(){
    $('#broadcast').addClass('dooms-gif').delay(3800).queue(function(next){
      $('#broadcast').removeClass('dooms-gif');
      next();
    })
  })
})
//end of doom gif
//planet zoom locator
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
  //end of planet zoom locator
  //sliders go red
  $(document).ready(function() {
    $('.planets > div').click(function() {
      $('.meter').addClass("red-sliders").delay(4000).queue(function(next) {
        $('.meter').removeClass("red-sliders");
        next();
      });
    });
  });
//end of sliders going red
