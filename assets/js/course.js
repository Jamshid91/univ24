$('.modul-item-head').click(function() {
    $(this).parent().siblings().removeClass('showModul');
    $(this).parent().toggleClass('showModul');
  });

