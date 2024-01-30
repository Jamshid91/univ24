const modulNext_btn = document.querySelector('.modul-btns-next'),
      moduls = document.querySelectorAll('.moduls .row'),
      modulsActive = document.querySelector('.moduls-active');

let j = 0;
modulNext_btn.addEventListener("click", moveLeft);
function moveLeft() {
    if (j == moduls.length - 1) {
       
    } else {
        moduls[j].classList.add('d-none');
        moduls[j + 1].classList.remove('d-none');
        j++
    }
    if(j == 1) {
        modulsActive.innerHTML = 2
    }
}