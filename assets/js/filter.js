const search = document.querySelector('.search-input input'),
      searchResult = document.querySelector('.search-result'),
      filtersShowBtn = document.querySelector('.filters__btn')


search.addEventListener('input', () => {
    if(search.value.length > 2) {
        searchResult.classList.remove('d-none')
    } else if (search.value.length < 1) {
        searchResult.classList.add('d-none') 
    }
});

filtersShowBtn.addEventListener('click', () => {
    filtersShowBtn.previousElementSibling.classList.toggle('d-none');
    filtersShowBtn.nextElementSibling.classList.toggle('d-none');
});

filtersShowBtn.previousElementSibling.addEventListener('click', () => {
    filtersShowBtn.previousElementSibling.classList.toggle('d-none');
    filtersShowBtn.nextElementSibling.classList.toggle('d-none');
})