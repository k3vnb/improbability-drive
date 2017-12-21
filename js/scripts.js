$(document).ready(function(){
  var selfDestruct= document.createElement("audio");
  selfDestruct.src="audio/selfDestruct.mp3";
  selfDestruct.volume=1;
  selfDestruct.autoplay=false;
  selfDestruct.autoload=true;

  var buttonClick= document.createElement("audio");
  buttonClick.src="audio/button-3.wav";
  buttonClick.volume=1;
  buttonClick.autoplay=false;
  buttonClick.autoload=true;

  var pewSound = document.createElement("audio");
  pewSound.src="audio/pew.wav";
  pewSound.volume=1;
  pewSound.autoplay=false;
  pewSound.autoload=true;

  $(".laser-lime").click(function() {
    $(".pew").css('background-color', "lime");
    $(".pew").toggleClass('fire-animation');
    pewSound.pause();
    pewSound.currentTime= 0;
    pewSound.play();
    setTimeout(function() {
      $(".pew").removeClass('fire-animation')
    }, 500);
  });
  $(".laser-red").click(function() {
    $(".pew").css('background-color', "red");
    $(".pew").toggleClass('fire-animation');
    pewSound.pause();
    pewSound.currentTime= 0;
    pewSound.play();
    setTimeout(function() {
      $(".pew").removeClass('fire-animation')
    }, 500);
  });
  $(".laser-blue").click(function() {
    $(".pew").css('background-color', "blue");
    $(".pew").toggleClass('fire-animation');
    pewSound.pause();
    pewSound.currentTime= 0;
    pewSound.play();
    setTimeout(function() {
      $(".pew").removeClass('fire-animation')
    }, 500);
  });
  $(".laser-orange").click(function() {
    $(".pew").css('background-color', "orange");
    $(".pew").toggleClass('fire-animation');
    pewSound.pause();
    pewSound.currentTime= 0;
    pewSound.play();
    setTimeout(function() {
      $(".pew").removeClass('fire-animation')
    }, 500);
  });
  $(".self-destruct").click(function() {

      selfDestruct.play();
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
    buttonClick.pause();
    buttonClick.currentTime= 0;
    buttonClick.play();
  });



  $(".planet").click(function() {
      var thisBack = $(this).attr('data-stars');
      $('.space').delay(5000).queue(function(){
        $(this).toggleClass('zoom');
    });
    $(this).toggleClass('transform-active');
    $(this).children('.explore').toggleClass('explore-show');
    $(this).children('.explore-text').toggleClass('explore-text-show');
    $(this).siblings(".planet").toggleClass('go-away');
    if ($('.side').attr('style') === 'background-image: url("img/' + thisBack + '");') {
        $('.side').css('background-image', '');
    } else {
        $('.side').css('background-image', 'url(img/' + thisBack + ')');
    }
  });
  $(".explore").click(function() {
    $(this).parent().toggleClass('explore-planet')
    $(this).siblings('.alien').toggleClass('alien-grow')
    $(this).siblings('.return-to-orbit').toggleClass('return-to-orbit-show')

  })
  $(".return").click(function() {
    $(this).parent().toggleClass('explore-planet');
    $(this).siblings('.alien').toggleClass('alien-grow');
    $(this).siblings('.alien').toggleClass('alien-shrink');
    $(this).siblings('.return').toggleClass('return-to-orbit-show');
    $(this).parent().toggleClass('transform-active');
    $(this).siblings('.explore').toggleClass('explore-show');
    $(this).siblings('.explore-text').toggleClass('explore-text-show');
    $(this).parent().toggleClass('on-top');
    setTimeout(function() {
      $(".planet").addClass('go-away');
      $(".planet").removeClass('on-top');
      $(".planet").removeClass('go-away');
    }, 2400);

  });
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


//change the channel
  $('.channel').click(function(){
      $('#broadcast').html(``);
      $('#broadcast').clearQueue();

      var thisChn = $(this).attr('data-channel');
      $('#broadcast').html(`<img src="img/` + thisChn + `.gif">`).delay(5000).queue(function(next){
         $('#broadcast').html(``);
      });
  })
});

//harlem globetrotter gif
  $('.planet-6').click(function(){
    $('#broadcast').addClass('planet-6-gif').delay(10000).queue(function(next){
      $('#broadcast').removeClass('planet-6-gif');
      next();
  });
});
//end globetrotter gif
//disco gif
  $('.planet-7').click(function(){
    $('#broadcast').addClass('planet-7-gif').delay(10000).queue(function(next){
      $('#broadcast').removeClass('planet-7-gif');
      next();
  });
});
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
      var xPosition = Math.floor(xPercent*100);
      var yPosition = Math.floor(yPercent*100);
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
    $('.space-tomatoes').addClass("space-tomatoes-show");
    $('.space-tomatoes').show(10);
  })
  $(".wiper-switch input").click(function(){
    $('.space-tomatoes').hide(700);
    // $('.space-tomatoes').removeClass("space-tomatoes-show");
  });
})
//end of space-tomatoes

$(function(){
    setInterval(randoFunction, 2000);  //1000 is milliseconds to next random check
});

function randoFunction(){
    var chance = 50;  //1 in 10 chance to show the div
    var rand = Math.floor(Math.random()*chance)+1;  //generate random number 1-chance
    if(rand == 1) {
        $('.space-tomatoes').show();
        $('.space-tomatoes').addClass("space-tomatoes-show");
    }
    else if (rand == 2) {
      $('.space-tomatoes').show();
      $('.space-tomatoes').addClass("space-face");
    }
}
