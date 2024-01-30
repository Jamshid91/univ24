const media = new Swiper('.swiper-media', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-media-next',
        prevEl: '.swiper-media-prev',
      },
      pagination: {
        el: '.swiper-media-pagination',
        clickable: true,
      },
  });