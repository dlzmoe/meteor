$(function () {
  $('.post-content iframe').wrap('<div class="iframe"></div>');

  $('nav a').each(function () {
    if ($(this).attr('href') == window.location.pathname) {
      $(this).addClass('active');
    }
  })
})