const langActive = document.querySelectorAll('.header-lang-btn'),
      langs = document.querySelectorAll('.header-lang-list li');


langActive.forEach(active => {
    active.addEventListener('click', () => {
        active.nextElementSibling.classList.toggle('d-none')
    });
})

langs.forEach(lang =>  {
    lang.addEventListener('click', () => {
        langActive.forEach(active => {
            active.children[0].textContent = lang.textContent;
            active.nextElementSibling.classList.toggle('d-none');
        })
    })
});

const circleAnims = document.querySelectorAll('.circle-anim');
      let i = 50;
      let a =setInterval(() => {
        i= i+2
        circleAnims.forEach(anim => {
            anim.setAttribute('stroke-dasharray', `${i} 1000`);
            if(i == 1050) {
                return i = 50;
            }
        })
       
}, 5);