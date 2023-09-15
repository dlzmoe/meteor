$(function () {
  $('.post-content img').addClass('slb');
  $('.post-content iframe').wrap('<div class="iframe"></div>');
  
  $('.slb').simplebox({
    fadeSpeed: 100
  });

  $(document).on('scroll', function () {
    var $pageScrollTop = $(this).scrollTop()
    if ($pageScrollTop > 200) {
      $('.gotop').addClass('act')
    } else {
      $('.gotop').removeClass('act')
    }
  })

  $('.gotop').on('click', function () {
    $('html, body').stop().animate({
      scrollTop: 0
    })
  })

  $('.menu-icon').click(function () {
    $(this).toggleClass('act');
    $('.menu .trigger').slideToggle();
  })

  $('nav ul a').each(function () {
    if ($(this).attr('href') == window.location.pathname) {
      $(this).addClass('active');
    }
  })

})

$("#searchTerm").focus();

// 黑夜模式
function themedark() {
  var themedark = localStorage.getItem('themedark');
  if (themedark == 'dark') {
    $('html').addClass('dark');
  }
  $('#theme-toggle').click(function () {
    $('html').toggleClass('dark');
    if ($('.dark').length > 0) {
      localStorage.setItem('themedark', 'dark');
    } else {
      localStorage.setItem('themedark', 'light');
    }

  })
}
themedark();

// 显示目录
function TableOfContents(){
  if($('#TableOfContents').html() != ''){
    $('.toc').addClass('act');
  }
}
TableOfContents();