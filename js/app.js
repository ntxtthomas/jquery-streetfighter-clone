var pressed=false
$(document).ready(function(){
    doIntro();

    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
        })
    .mouseleave(function(){
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        })
    .mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).stop();
                $(this).hide();
                $(this).css('left', '520px');
        })
        })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        })
});
$(document).keydown(function(e){
        if(pressed)
            return;
        if (e.keyCode == 88) {
            pressed=true;
        playCool();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        }
    })
    .keyup(function(e){
        if (e.keyCode == 88) {
            pressed=false;
            $('#Cool-sound')[0].pause();
            $('#Cool-sound')[0].load();
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    });
function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    };
function playCool() {
        $('#Cool-sound')[0].volume = 0.3;
        $('#Cool-sound')[0].load();
        $('#Cool-sound')[0].play();
    };
function doIntro() {
        $('#theme-song')[0].volume = 0.0;
        $('#theme-song')[0].load();
        $('#theme-song')[0].play();
        $('.sf-logo').fadeIn(3500, function() {
            $(this).fadeOut(1000, function() {
                $('.brought-by').fadeIn(1500, function() {
                    $(this).fadeOut(1000, function() {
                        $('.jquery-logo').fadeIn(1500, function() {
                            $(this).fadeOut(1500, function() {
                                $('.how-to').fadeIn(1000);
            })
          })
        })
      })
    })
  })
};
