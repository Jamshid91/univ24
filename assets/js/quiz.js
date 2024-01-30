const quizNext_btn = document.querySelector('.quiz-box .quiz-next'),
      quizSlides = document.querySelectorAll('.quiz-slides .slide'),
      quizRadios = document.querySelectorAll('.quiz-slides .slide li'),
      quizProgress = document.querySelector('.quiz-progress-bar .progress-active'),
      quizProgressCount = document.querySelector('.quiz-progress-bar .progress-info'),
       quizCountActive = document.querySelector('.quiz-count-active'),
       quizFinish_btn = document.querySelector('.quiz-box-btns .quiz-finish'),
       quizBox = document.querySelector('.quiz-box'),
       quizAnswer = document.querySelector('.quiz-answer'),
       quizReplay_btn = document.querySelector('.quiz-answer-replay');

let k = 0;

quizNext_btn.addEventListener("click", moveLeft);
function moveLeft() {
    if (k == quizSlides.length - 1) {
       
    } else {
        quizSlides[k].classList.add('d-none');
        quizSlides[k + 1].classList.remove('d-none');
        k++
    }
    if(k == 1) {
        quizCountActive.innerHTML = 2;
        quizProgress.style.width = '40%';
        quizProgressCount.innerHTML = 40;
    } else  if(k == 2) {
        quizCountActive.innerHTML = 3;
        quizProgress.style.width = '60%';
        quizProgressCount.innerHTML = 60;
    } else  if(k == 3) {
        quizCountActive.innerHTML = 4;
        quizProgress.style.width = '80%';
        quizProgressCount.innerHTML = 80;
    } else  if(k == 4) {
        quizCountActive.innerHTML = 5;
        quizProgress.style.width = '100%';
        quizProgressCount.innerHTML = 100;

        quizNext_btn.disabled = true
    }
}

quizRadios.forEach(check => {
    check.addEventListener('click', () => {
        check.classList.toggle('checked')
    })
});

quizFinish_btn.addEventListener('click', () => {
    quizBox.parentElement.parentElement.classList.add('d-none')
    quizAnswer.parentElement.parentElement.classList.remove('d-none')
});

quizReplay_btn.addEventListener('click', () => {
    window.location.reload();
});