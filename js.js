var slideIndex = 0;
showSlides();

function showSlides() {
  $(".slide").each(function() {
    $(this).hide()
  });
  slideIndex++;
  if (slideIndex > $(".slide").length) {
    slideIndex = 1
  }
  $(".dot").each(function() {
    $(this).removeClass("active");
  });
  $('.slide').eq(slideIndex - 1).show();
  $('.dot').eq(slideIndex - 1).addClass("active");
  setTimeout(showSlides, 6000); 
}
