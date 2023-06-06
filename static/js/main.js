$(function () {
  $('.post-content a').attr('target', '_blank');
  $('#TableOfContents a').attr('target', '')
  $('.post-content img').addClass('slb');
  $('.slb').simplebox({
    fadeSpeed: 100
  });
  $('iframe').wrap('<p class="iframe"></p>');

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

  $('.mob-menu').click(function () {
    $(this).toggleClass('act');
    $('.nav').toggleClass('active');
  })

  $('.nav a').each(function () {
    if ($(this).attr('href') == window.location.pathname) {
      $(this).addClass('active');
    }
  })
})

// 统计总数字和文章数
$(document).ready(function () {
  $.ajax({
    url: '/index.json',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      const pageUrls = data;
      const totalNum = pageUrls.length;
      $('#totalNum').html(totalNum);
      let totalWords = 0;
      pageUrls.forEach(urlObj => {
        $.get(urlObj.permalink, function (data) {
          const content = data.replace(/(<([^>]+)>)/gi, " ").replace(/[^\w\s]/gi, " ");
          const words = content.split(" ");
          const wordCount = words.filter(word => word !== "").length;
          totalWords += wordCount;
          $('#totalWords').html(totalWords);
        });
      });
    },
    error: function () {
      console.log('error')
    }
  })
});

function isMob() {
  if ($(window).width() <= 1000) {
    return true;
  } else {
    return false;
  }
}

if (!isMob()) {
  $('header').append($('footer'))
}