comment = new Swiper('.swiper.comment-faq', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.swiper-comment-next',
      prevEl: '.swiper-comment-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 4,
                fill: 'row'
              },
        },
      576: {
          slidesPerView: 1,
          grid: {
              rows: 5,
              fill: 'row'
            },
      },
  }
});

comment = new Swiper('.swiper.tutor-box', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.swiper-tutor-next',
      prevEl: '.swiper-tutor-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 3,
                fill: 'row'
              },
        },
  }
});

const tutorBtns = document.querySelectorAll('.tutor__btn'),
      popUp_chat = document.querySelector('.popUp-chat'),
      faqViewBtns = document.querySelectorAll('.comment-faq__view'),
      popUp_faq = document.querySelector('.popUp-faq');

  
tutorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popUp_chat.classList.remove('d-none')
  })
});

faqViewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popUp_faq.classList.remove('d-none')
  })
});