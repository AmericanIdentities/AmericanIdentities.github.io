
$(document).ready(function() {
  $(".illuminate").mousemove(function(e){
    $(".illuminate").css('background-position',(e.pageX - 250)+'px '+(e.pageY-250)+'px');
  });
});

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['title', 'americanIdentity', 'books', 'illuminate', 'characteristics'],
    slidesNavigation: true,
  });
});

$(window).ready(function() {
    $('#magazine').turn({
                        display: 'double',
                        acceleration: true,
                        gradients: !$.isTouch,
                        elevation:50,
                        when: {
                            turned: function(e, page) {
                            }
                        }
                     });
});
$(window).bind('keydown', function(e){
    if (e.keyCode==37)
        $('#magazine').turn('previous');
    else if (e.keyCode==39)
        $('#magazine').turn('next');
});
