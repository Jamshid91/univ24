const magazineMoreBtn = document.querySelector('.magazine-blog .more'),
      magazineInfo = document.querySelectorAll('.magazine-blog li'),
      mediaBlogs = document.querySelector('.media-blog-last'),
      edicationMoreBtn = document.querySelector('.education-blog .more'),
      mediaMoreBtn = document.querySelector('.media-blog .more'),
      edicationInfo = document.querySelectorAll('.education-blog-card')


let count = 0;
magazineMoreBtn.addEventListener('click', () => {
    if(count == 0) {
        magazineMoreBtn.innerText = 'Свернуть'
        magazineMoreBtn.classList.add('moreShow')
        magazineInfo.forEach(info => {
            info.classList.add('d-block')
        });
        mediaBlogs.classList.remove('d-none')
        return count = 1;
    } else {
        magazineMoreBtn.innerText = 'Еще'
        magazineMoreBtn.classList.remove('moreShow')
        magazineInfo.forEach(info => {
            info.classList.remove('d-block')
        });
        mediaBlogs.classList.add('d-none')
        return count = 0;
    }
});

let count2 = 0;
edicationMoreBtn.addEventListener('click', () => {
    if(count2 == 0) {
        edicationMoreBtn.innerText = 'Свернуть'
        edicationMoreBtn.classList.add('moreShow')
        edicationInfo.forEach(info => {
            info.classList.add('d-block')
        });
        return count2 = 1;
    } else {
        edicationMoreBtn.innerText = 'Еще'
        edicationMoreBtn.classList.remove('moreShow')
        edicationInfo.forEach(info => {
            info.classList.remove('d-block')
        });
        return count2 = 0;
    }
});

let count3 = 0;
mediaMoreBtn.addEventListener('click', () => {
    if(count3 == 0) {
        mediaMoreBtn.innerText = 'Свернуть'
        mediaMoreBtn.classList.add('moreShow')
        mediaBlogs.parentElement.classList.remove('d-none')
        mediaBlogs.classList.remove('d-none')
        return count3 = 1;
    } else {
        mediaMoreBtn.innerText = 'Еще'
        mediaMoreBtn.classList.remove('moreShow')
        mediaBlogs.parentElement.classList.add('d-none')
        mediaBlogs.classList.add('d-none')
        return count3 = 0;
    }
});