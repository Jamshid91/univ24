const headerSwitch = document.querySelector('.header-switch'),
      toggleTheme = document.querySelectorAll('.themeBtn'),
      loginBtn = document.querySelector('.header-login-active .header-login-btn');
let el = document.documentElement;



loginBtn.addEventListener('click', () => {
    loginBtn.parentElement.parentElement.classList.toggle('showLogin')
});


document.addEventListener("click",(function(e){
    loginBtn.parentElement.parentElement.contains(e.target)||(loginBtn.parentElement.parentElement.classList.remove("showLogin"))
}));


function theme() {
     headerSwitch.addEventListener('click', () => {
        if(el.hasAttribute ('date-theme')) {
            el.removeAttribute('date-theme');
            localStorage.removeItem('theme');
        }   else {
            el.setAttribute('date-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        if(localStorage.getItem('theme') !== null) {
            el.setAttribute('date-theme', 'dark');
        }
    })
}
theme();


function themeMob() {
    toggleTheme.forEach(btn => {
        btn.addEventListener('click', () => {
            if(el.hasAttribute('date-theme')) {
                el.removeAttribute('date-theme');
                localStorage.removeItem('theme');
            } else {
                el.setAttribute('date-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }   
        });
    })

    if(localStorage.getItem('theme') !== null) {
        el.setAttribute('date-theme', 'dark');
    }
}
themeMob();