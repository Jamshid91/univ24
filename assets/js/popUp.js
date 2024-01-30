const popUp = document.querySelectorAll('.popUp');

window.addEventListener('click', (e) => {
    popUp.forEach(popup => {
      if(e.target == popup) {
        popup.children[0].classList.add('popUpHide')
        setTimeout(() => {
          popup.classList.add('d-none')
          popup.children[0].classList.remove('popUpHide')
        }, 450);
    }
    })
});