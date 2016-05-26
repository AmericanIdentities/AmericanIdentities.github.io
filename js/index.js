
$(document).ready(function() {
  $(".illuminate").mousemove(function(e){
    $(".illuminate").css('background-position',(e.pageX - 250)+'px '+(e.pageY-250)+'px');
  });
});

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['title', 'americanIdentity', 'books', 'illuminate', 'characteristics', 'overview'],
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

$(window).ready(function() {
    $('#magazine1').turn({
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

$(window).ready(function() {
    $('#magazine2').turn({
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


function show(target) {
    document.getElementById(target).style.display = 'block';
}

function hide(target) {
    document.getElementById(target).style.display = 'none';
}
