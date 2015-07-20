/*console.log('DEBUG 1');
$(document).ready(function(){
    console.log('DEBUG doc ready');
    $('.ryu').mouseenter(function() {
        console.log('DEBUG %o',$('.ryu-still'),1+1);
        $('.ryu-still').hide();
        //$('.ryu-ready').show();
    });
});*/

$(document).ready(function(){
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
        if (e.keyCode == 88) {
        playCool();
            $('.ryu-still','.ryu-ready').hide();
            $('.ryu-cool').show();
        }
    })
    .keyup(function(e){
        if (e.keyCode == 88) {
            $('#Cool')[0].pause();
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
        $('#Cool-sound')[0].volume = 0.25;
        $('#Cool-sound')[0].load();
        $('#Cool-sound')[0].play();
    };