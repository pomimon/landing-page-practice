$('.sign a').on('click', function (event) {
  var clickedOn = $(this);

  event.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.form-container').not(target).removeClass('active');

  $(target).addClass('active').fadeIn(600);

});
