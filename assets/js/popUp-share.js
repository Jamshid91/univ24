const btnCopy = document.querySelector('.copy-link__btn'),
      btnShare = document.querySelector('.share'),
      likeds = document.querySelectorAll('.liked'),
      popUpShare = document.querySelector('.popUp-share');

btnShare.addEventListener('click', () => {
    popUpShare.classList.remove('d-none')
});

btnCopy.addEventListener('click', () => {
let copied = btnCopy.children[1];
let copyText = btnCopy.previousElementSibling.textContent;
let inputElem = document.createElement('input');
inputElem.type = 'text';

inputElem.value = copyText;

document.body.appendChild(inputElem);
inputElem.select();
document.execCommand('copy');
inputElem.style.display = 'none'

copied.style.visibility = 'visible';

setTimeout(() => {
  copied.style.visibility = 'hidden';
}, 800);
});

likeds.forEach(liked => {
    liked.addEventListener('click', () => {
        liked.classList.toggle('clickedLike')
    })
})