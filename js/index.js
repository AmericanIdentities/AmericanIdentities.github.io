
$(document).ready(function() {
  $("div").mousemove(function(e){
    $("div").css('background-position',(e.pageX - 250)+'px '+(e.pageY-250)+'px');
  });
});

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['title', 'americanIdentity', 'books', 'illuminate', 'characteristics'],
    slidesNavigation: true,
  });
});
