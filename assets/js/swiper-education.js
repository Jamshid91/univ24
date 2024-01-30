const education = new Swiper('.swiper-education', {
    watchOverflow: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-education-next',
        prevEl: '.swiper-education-prev',
      },
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            grid: {
                rows: 3,
                fill: 'row'
              },
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
          768: {
              slidesPerView: 2,
          },
          1100: {
              slidesPerView: 3,
          },
      }
  });

  const experts = new Swiper('.swiper-experts', {
    watchOverflow: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-experts-next',
        prevEl: '.swiper-experts-prev',
      },
      breakpoints: {
        0: {
            effect: "cards", 
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
          768: {
              slidesPerView: 3,
          },
          1100: {
              slidesPerView: 4,
          },
      }
  });

  const review = new Swiper('.swiper-review', {
    watchOverflow: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-review-next',
        prevEl: '.swiper-review-prev',
      },
      breakpoints: {
        0: {
            effect: "cards", 
            slidesPerView: 1.1,
            spaceBetween: 12,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
          768: {
              slidesPerView: 3,
          },
          1100: {
              slidesPerView: 4,
          },
      }
  });

  const reviews = document.querySelectorAll('.review-card'),
        licenseImgs = document.querySelectorAll('.education-license__img'),
        popUpLicense = document.querySelector('.popUp-license'),
        diplomImgs = document.querySelectorAll('.get-diplom__img'),
        popUpDiplom = document.querySelector('.popUp-diplom');

  reviews.forEach(review => {
    review.addEventListener('click', () => {
        review.children[1].classList.add('infoTop')
    })
  });


$('.faq-item-head').click(function() {
    $(this).parent().siblings().removeClass('showFaq');
    $(this).parent().toggleClass('showFaq');
  });

  licenseImgs.forEach(img => {
    img.addEventListener('click', () => {
        popUpLicense.classList.remove('d-none')
        popUpLicense.children[0].children[0].src = img.src
    })
  });

  diplomImgs.forEach(img => {
  img.addEventListener('click', () => {
    popUpDiplom.classList.remove('d-none')
    popUpDiplom.children[0].children[0].src = img.src
  })
})