/**
 * Created by Alex on 11/10/2016.
 */
$('.visible.example .ui.sidebar')
    .sidebar({
      context: '.visible.example .bottom.segment'
    })
    .sidebar('hide')
;

$('.dropdown')
    .dropdown({
      action: 'ready'
    })
;

$(".dropdown").ready(function() {
  $('html,body').animate({
        scrollTop: $("#testDiv").offset().top},
      'slow');
});