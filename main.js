/* -)----------------BURGER----------------- */

$('.box').click(function(){
  $('.box').toggleClass('active');
  $('nav ul').toggleClass('active');
})

/* -------------scrollmagic -------------------- */
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement:".deux",
  reverse:false
})
.setClassToggle(".deux", "arrive") 
.addTo(controller);
var scene2 = new ScrollMagic.Scene({
    triggerElement:".trois",
  })
  .setClassToggle(".trois", "arrive") 
  .addTo(controller);
var scene3 = new ScrollMagic.Scene({
    triggerElement:".banner",
    reverse:false
  })
  .setClassToggle(".banner", "arrive") 
  .addTo(controller);

  /* -------------popup -------------------- */
  /* appl pop up */
  $('.banner button').click(function(){
    $(".popup_concours").addClass('active');
    $(".hoverpop").addClass('active');
  })
  /* retirer pop up cross */
  $('#cross').click(function(){
    $(".popup_concours").removeClass('active');
    $(".hoverpop").removeClass('active');
  })
  $('.hoverpop').click(function(){
    $(".popup_concours").removeClass('active');
    $(".hoverpop").removeClass('active');
  })
  /* retirer pop up si scroll */
  window.addEventListener('scroll', ()=>{
    $(".popup_concours").removeClass('active');
    $(".hoverpop").removeClass('active');
  })

  /* scrolltop */
  $(".scrolltotop").click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
 });
  
 /* ------------------------------ */

 window.addEventListener('load', ()=>{
    console.log("yo");
    $('.scene').addClass('arrive')
 })

 /* --------------validetta-------------------------- */
 var $form = $("form"),
 $successMsg = $(".alert");
$form.validetta({
 bubblePosition: "bottom",
 bubbleGapTop: 10,
 bubbleGapLeft: -5,
 onValid: function(e) {
   e.preventDefault();
   $successMsg.show();
 }
});
/* infoooo a propos */

$('.acti1 .img').click(function(){
  $('.acti .img').next().removeClass('active');
  $('.acti1 .img').next().toggleClass('active');
})
$('.acti2 .img').click(function(){
  $('.acti .img').next().removeClass('active');
  $('.acti2 .img').next().toggleClass('active');
})
$('.acti3 .img').click(function(){
  $('.acti .img').next().removeClass('active');
  $('.acti3 .img').next().toggleClass('active');
})
  

