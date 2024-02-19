const langActive = document.querySelectorAll('.header-lang-btn'),
      langs = document.querySelectorAll('.all-language-list li a'),
      allLanguageBtn = document.querySelectorAll('.all-language-btn');


langActive.forEach(active => {
    active.addEventListener('click', () => {
        active.parentElement.classList.toggle('showLang')
    });
})

langs.forEach(lang =>  {
    lang.addEventListener('click', () => {
        langActive.forEach(active => {
            active.children[0].textContent = lang.children[0].textContent;
            active.parentElement.classList.toggle('showLang');
        })
    })
});

document.addEventListener('click', (function(e) {
    langActive.forEach(active => {
       active.parentElement.contains(e.target)||active.parentElement.classList.remove('showLang')
    
    })
}));

allLanguageBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.previousElementSibling.classList.toggle('showAllList');
        btn.classList.toggle('rortateBtn')
    })
})

// const circleAnims = document.querySelectorAll('.circle-anim');
//       let i = 50;
//       let a =setInterval(() => {
//         i= i+2
//         circleAnims.forEach(anim => {
//             anim.setAttribute('stroke-dasharray', `${i} 1000`);
//             if(i == 1000) {
//                 return i = 50;
//             }
//         })
       
// }, 25);

const circleAnims = document.querySelectorAll('.circle-anim');
console.log(circleAnims)


      let i = 2;
      setInterval(() => {
        i++
        circleAnims.forEach(anim => {
            anim.setAttribute('stroke-dasharray', `${i} 1000`);
            if(i == 500) {
                anim.setAttribute('stroke', '#FF9700');
                anim.previousElementSibling.setAttribute('stroke', '#0094FF');
            } 
            else if (i == 1000) {
                anim.setAttribute('stroke', '#0094FF');
                anim.previousElementSibling.setAttribute('stroke', '#FF9700');
                return i = 1
            } 
        });
}, 1);

// let j = 2;
// setInterval(() => {
//     j++
//     circleAnims3.forEach(anim => {
//         anim.setAttribute('stroke-dasharray', `${i} 1000`);
//         if(j == 1000) {
//             circleAnims4.forEach(anim2 => {
//                 anim.setAttribute('stroke', '#0094FF');
//                 anim2.setAttribute('stroke', '#FF9700');
//             })
//         } else if (j == 1001) {
//             circleAnims4.forEach(anim2 => {
//                 anim.setAttribute('stroke', '#FF9700');
//                 anim2.setAttribute('stroke', '#0094FF');
//                 return j = 1
//             })
//         }
//     });
// }, 1);