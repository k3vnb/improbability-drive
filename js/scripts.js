$(document).ready(function(){
  $(".laser-lime").click(function() {
    $(".pew").css('background-color', "lime");
    $(".pew").toggleClass('fire-animation');
  });
  $(".laser-red").click(function() {
    $(".pew").css('background-color', "red");
    $(".pew").toggleClass('fire-animation');
  });
  $(".laser-blue").click(function() {
    $(".pew").css('background-color', "blue");
    $(".pew").toggleClass('fire-animation');
  });
  $(".laser-orange").click(function() {
    $(".pew").css('background-color', "orange");
    $(".pew").toggleClass('fire-animation');
  });
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
//space-tomatoes
$(document).ready(function() {
  $('.pannel-center-left .grid-2 > div').click(function() {
    $('.space-tomato').append("<img src='img/tomato.gif>'");
    $('.space-tomatoes').show();
  })
  $(".wiper-switch input").click(function(){
    $('.space-tomatoes').hide(500);
    $('.space-tomato').children().remove(500);
  })
})
//end of space-tomatoes
