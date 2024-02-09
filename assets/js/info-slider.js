let button = document.querySelectorAll(".slider-btns button");


let [right, left] = button

let reviews = document.querySelectorAll(".info-slide");
let k = 0;
left.addEventListener("click", slideLeft);
right.addEventListener("click", moveRight);


let views = document.querySelectorAll(".view-page-list");

let [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide_finish] = views;

function slideLeft() {
    if (k == reviews.length - 1) {
        reviews[k].style.display = "none";
        k = 0;
        reviews[k].style.display = "block";
    } else {
        reviews[k].style.display = "none";
        reviews[k + 1].style.display = "block";
        k++
    }

    if(k == 1) {
        slide1.classList.add('view');
        slide2.classList.add('active');
        right.disabled = false
    } else if(k == 2) {
        slide2.classList.add('view');
        slide3.classList.add('active');
    }else if(k == 3) {
        slide3.classList.add('view');
        slide4.classList.add('active');
    }else if(k == 4) {
        slide4.classList.add('view');
        slide5.classList.add('active');
    }else if(k == 5) {
        slide5.classList.add('view');
        slide6.classList.add('active');
    }else if(k == 6) {
        slide6.classList.add('view');
        slide7.classList.add('active');
    }else if(k == 7) {
        slide7.classList.add('view');
        slide_finish.classList.add('view');
        left.disabled = true
    }
}



function moveRight() {
    if (k == 0) {
        reviews[k].style.display = "none";
        k = reviews.length - 1;
        reviews[reviews.length - 1].style.display = "block";

    } else {
        reviews[k].style.display = "none";
        reviews[k - 1].style.display = "block";
        k--;
    }

    if(k == 0) {
        slide1.classList.remove('view');
        slide2.classList.remove('active');
        right.disabled = true
    } 
    else if(k == 1) {
        slide2.classList.remove('view');
        slide3.classList.remove('active');
    }
    else if(k == 2) {
        slide3.classList.remove('view');
        slide4.classList.remove('active');
    }else if(k == 3) {
        slide4.classList.remove('view');
        slide5.classList.remove('active');
    }else if(k == 4) {
        slide5.classList.remove('view');
        slide6.classList.remove('active');
    }else if(k == 5) {
        slide6.classList.remove('view');
        slide7.classList.remove('active');
    }else if(k == 6) {
        slide7.classList.remove('view');
        slide_finish.classList.remove('view');
        left.disabled = false
    }

}

const infoFaqBtn = document.querySelector('.sub-info__btn');
const sub_info = document.querySelector('.sub-info');

infoFaqBtn.addEventListener('click', () => {
    sub_info.classList.toggle('showSubInfo')
});