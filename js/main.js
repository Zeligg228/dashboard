$(document).ready(function() {
  $('.menu__open').click(function() {
    $('.sidebar').addClass('active');
    $('.mobile__close-menu').show();
    $('body').addClass('modal-open');
  });
  $('.mobile__close-menu').on('click', function() {
    $('.sidebar').removeClass('active');
    $(this).hide();
    $('body').removeClass('modal-open');
  });
})