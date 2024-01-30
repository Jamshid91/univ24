const body= document.querySelector('body'),
      popUpLogin = document.querySelector('.popUp-login'),
      login_btn = document.querySelector('.header-login'),
      formLogin = document.querySelector('.form-login'),
      formRegisterPhone = document.querySelector('.form-registration-phone'),
      formCode = document.querySelector('.form-code'),
      formNewPass = document.querySelector('.form-new-pass'),
      loginEmail = document.querySelector('.form-login #email'),
      emailRecovery = document.querySelector('#email-recovery'),
      loginPass = document.querySelector('.form-login #pass'),
      regisPass = document.querySelector('.form-new-pass #pass1'),
      regisPassRepeat = document.querySelector('.form-new-pass #pass2'),
      addCode = document.querySelector('.form-code #code'),
      showPass = document.querySelectorAll('.show-pass'),
      forgotPassword = document.querySelector('.forgot-password'),
      register = document.querySelector('.register'),
      comeInLogin = document.querySelector('.have-account .come-in'),
      loginSubmit = document.querySelector('.form-login .form__btn'),
      toGetCode = document.querySelector('.form-registration-phone .form__btn'),
      openRegister = document.querySelector('.form-code .form__btn'),
      submitNewPass = document.querySelector('.form-new-pass .form__btn'),
      emailRegis = document.getElementById('email-regis'),
      nameRegis = document.getElementById('name-regis'),
      pass1Regis = document.getElementById('pass1-regis'),
      pass2Regis = document.getElementById('pass2-regis'),
      formRegister = document.querySelector('.form-registration'),
      submitRegister = document.querySelector('.form-registration .form__btn');


login_btn.addEventListener('click', () => {
  popUpLogin.classList.remove('d-none')
});

forgotPassword.addEventListener('click', () => {
  formLogin.classList.add('d-none');
  formRegisterPhone.classList.remove('d-none');
});

register.addEventListener('click', () => {
    formLogin.classList.add('d-none');
    formRegister.classList.remove('d-none');
  });

comeInLogin.addEventListener('click', () => {
  formLogin.classList.remove('d-none');
  formRegister.classList.add('d-none');
});

// view password
showPass.forEach(show => {
  show.addEventListener('click', () => {
    let elem = show.parentElement.children[1];
    if(elem.type === 'password') {
      elem.type = 'text';
      show.classList.add('showPass')
    } else {
      elem.type = 'password';
      show.classList.remove('showPass')
    }
  });
})


// Registration
submitRegister.addEventListener('click', () => {
    checkInputsRegis()
    let successpass1Regis = pass1Regis.parentElement.children[2].classList;
    let successpass2Regis = pass2Regis.parentElement.children[2].classList;
    let successemailRegis = emailRegis.parentElement.children[2].classList;
    let successnameRegis = nameRegis.parentElement.children[2].classList;
  
    if(successpass1Regis == 'success' && successpass2Regis == 'success' && successemailRegis == 'success' && successnameRegis == 'success') {
      submitRegister.type = 'submit'   
    }
  });
  // Registration
  function checkInputsRegis() {
    const pass1RegisValue = pass1Regis.value.trim();
    const pass2RegisValue = pass2Regis.value.trim();
    const emailRegisValue = emailRegis.value.trim();
    const nameRegisValue = nameRegis.value.trim();

    if(emailRegisValue === '') {
        setErrorFor(emailRegis, 'Введите ваш email')
      }
      else if(!isEmail(emailRegisValue)) {
        setErrorFor(emailRegis, 'Введите корректный emai')
      }
       else {
        setSuccesFor(emailRegis)
        emailRegis.parentElement.children[2].classList.add('success')
      }

      if(nameRegisValue === '') {
        setErrorFor(nameRegis, 'Введите ваш имя')
      }
       else {
        setSuccesFor(nameRegis)
        nameRegis.parentElement.children[2].classList.add('success')
      }
  
   if(pass1RegisValue === '') {
      setErrorFor(pass1Regis, 'Введите пароль')
    } else {
      setSuccesFor(pass1Regis)
      pass1Regis.parentElement.children[2].classList.add('success')
    }
    if(pass2RegisValue === '' || pass2RegisValue != pass1RegisValue) {
      setErrorFor(pass2Regis, 'Должен совпадать с паролем, введенным выше')
    }
    else {
      setSuccesFor(pass2Regis)
      pass2Regis.parentElement.children[2].classList.add('success')
    }
  }


// login
loginSubmit.addEventListener('click', () => {
      checkInputsLogin()
      let successEmail = loginEmail.parentElement.children[2].classList;
      let successPass = loginPass.parentElement.children[3].classList;
    
      if(successEmail == 'success' && successPass == 'success') {
        loginSubmit.type = 'submit'   
      }
    });
// login
    function checkInputsLogin() {
      const loginEmailValue = loginEmail.value.trim();
      const loginPassValue = loginPass.value.trim();
    
      if(loginEmailValue === '') {
        setErrorFor(loginEmail, 'Введите ваш email')
      }
      else if(!isEmail(loginEmailValue)) {
        setErrorFor(loginEmail, 'Введите корректный emai')
      }
       else {
        setSuccesFor(loginEmail)
        loginEmail.parentElement.children[2].classList.add('success')
      }
      
      if(loginPassValue === '') {
        setErrorFor(loginPass, 'Введите ваш пароль')
      } else {
        setSuccesFor(loginPass)
        loginPass.parentElement.children[3].classList.add('success')
      }
    }

    loginEmail.addEventListener('keypress', () => {
      loginEmail.style.border = `1px solid #366CF6`;
    })

    // phone
  toGetCode.addEventListener('click', () => {
  checkInputsPhone()
  let successphoneNum = emailRecovery.parentElement.children[2].classList;

  if(successphoneNum == 'success') {
    // toGetCode.type = 'submit'   
  formCode.classList.remove('d-none');
  formRegisterPhone.classList.add('d-none');
  }
});
// phone
function checkInputsPhone() {
  const phoneNumlValue = emailRecovery.value.trim();
  
  if(phoneNumlValue === '') {
    setErrorFor(emailRecovery, 'Введите ваш emai')
  }
  else if(!isEmail(phoneNumlValue)) {
    setErrorFor(emailRecovery, 'Введите корректный emai')
  } else {
    setSuccesFor(emailRecovery)
    emailRecovery.parentElement.children[2].classList.add('success')
  }
}

    // code
    openRegister.addEventListener('click', () => {
      checkInputsCode()
      let successaddCode = addCode.parentElement.children[2].classList;
    
      if(successaddCode == 'success') {
        // openRegister.type = 'submit'   
      formCode.classList.add('d-none');
      formNewPass.classList.remove('d-none');
      }
    });
    // code
    function checkInputsCode() {
      const addCodeValue = addCode.value.trim();
      
      if(addCodeValue === '') {
        setErrorFor(addCode, 'Введите 4-х значный код')
      } else {
        setSuccesFor(addCode)
        addCode.parentElement.children[2].classList.add('success')
      }
    }

// new pass
submitNewPass.addEventListener('click', () => {
  checkInputsNewPass()
  let successRegisPass = regisPass.parentElement.children[2].classList;
  let successRegisPassRepeat = regisPassRepeat.parentElement.children[2].classList;

  if(successRegisPass == 'success' && successRegisPassRepeat == 'success') {
    submitNewPass.type = 'submit'   
  }
});
// new pass
function checkInputsNewPass() {
  const regisPassValue = regisPass.value.trim();
  const regisPassRepeatValue = regisPassRepeat.value.trim();

 if(regisPassValue === '') {
    setErrorFor(regisPass, 'Введите пароль')
  } else {
    setSuccesFor(regisPass)
    regisPass.parentElement.children[2].classList.add('success')
  }
  if(regisPassRepeatValue === '' || regisPassRepeatValue != regisPassValue) {
    setErrorFor(regisPassRepeat, 'Должен совпадать с паролем, введенным выше')
  }
  else {
    setSuccesFor(regisPassRepeat)
    regisPassRepeat.parentElement.children[2].classList.add('success')
  }
}
    
function setErrorFor(input, message) {
    let small = input.parentElement.children[2]
        input.classList.add('inputError');
        input.style.borderColor = '#BB4343'
    
        small.innerText = message
    }
    
    function setSuccesFor(input) {
    let small = input.parentElement.children[2]
    input.style.borderColor = '#5FB042'
        small.innerText = ''
    } 
  
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

// input mask
$(".phone").inputmask({"mask": "+7(999) 999-99-99"});
$("#code").inputmask({"mask": "9999"});
