$('.my-note-head').click(function() {
    $(this).parent().siblings().removeClass('showInfo');
    $(this).parent().toggleClass('showInfo');
  });