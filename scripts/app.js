$(document).ready(function(){
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
  $('.slider').slider({full_width: true, height: 700, interval: 5000});
  $('.parallax').parallax();
  $('.modal-trigger').leanModal();
});
