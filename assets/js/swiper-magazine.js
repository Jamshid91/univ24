const magazine = new Swiper('.swiper-magazine', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
      pagination: {
        el: '.swiper-magazine-pagination',
        clickable: true,
      },
  });