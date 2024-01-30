const myCourseRemove_btns = document.querySelectorAll('.my-course-card-remove .remove'),
      popUpRemove = document.querySelector('.popUp-remove'),
      removeBtn_yes = document.querySelector('.popUp-remove .yes'),
      removeBtn_no = document.querySelector('.popUp-remove .no');



myCourseRemove_btns.forEach(removeBtn => {
    removeBtn.addEventListener('click', () => {
        popUpRemove.classList.remove('d-none');
        
        removeBtn_yes.addEventListener('click', () => {
            removeBtn.parentElement.parentElement.parentElement.remove();
            popUpRemove.classList.add('d-none')
        });
        removeBtn_no.addEventListener('click', () => {
            popUpRemove.classList.add('d-none');
        });
    });
  
});



