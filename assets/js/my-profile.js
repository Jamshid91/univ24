let lastName = document.getElementById('lastName')
let firstName = document.getElementById('firstName')
let userName = document.getElementById('name')
let userEmail = document.getElementById('my-email')
let userPass = document.getElementById('my-pass')
let lastName_en = document.getElementById('lastName_en');
let userName_en = document.getElementById('name_en');
let editBtn = document.getElementById('editBtn')
let changePass = document.querySelector('.change-pass')


editBtn.addEventListener('click', () => {
  checkInputs()
  let successName = userName.parentElement.children[2].classList;
  let successLastName = lastName.parentElement.children[2].classList;
  let successfirstName = firstName.parentElement.children[2].classList;
  let successEmail = userEmail.parentElement.children[2].classList;
  let successPass = userPass.parentElement.children[2].classList;
  let successLastName_en = lastName_en.parentElement.children[2].classList;
  let successUserName_en = userName_en.parentElement.children[2].classList;

  if(successName == 'success' && successLastName == 'success' && successfirstName == 'success' && successEmail == 'success' && successPass == 'success' && successLastName_en == 'success' && successUserName_en == 'success') {
    editBtn.type = 'submit'   
  }

});



function checkInputs() {
  const lastNameValue = lastName.value.trim();
  const userNameValue = userName.value.trim();
  const firstNameValue = firstName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const userPassValue = userPass.value.trim();
  const lastName_enValue = lastName_en.value.trim();
  const userName_enValue = userName_en.value.trim();

  if(lastNameValue === '') {
    setErrorFor(lastName, "Введите свою Фамилию")
  } else {
    setSuccesFor(lastName)
    lastName.parentElement.children[2].classList.add('success')
  }

  if(userNameValue === '') {
    setErrorFor(userName, "Введите ваше Имя")
  } else {
    setSuccesFor(userName)
    userName.parentElement.children[2].classList.add('success')
  }

  if(firstNameValue === '' ) {
    setErrorFor(firstName, "Введите ваше Отчество")
  } else {
    setSuccesFor(firstName)
    firstName.parentElement.children[2].classList.add('success')
  }

  if(userPassValue === '') {
    setErrorFor(userPass, "Введите ваше парол")
    changePass.style.marginTop = '25px'
  } else {
    setSuccesFor(userPass)
    userPass.parentElement.children[2].classList.add('success')
    changePass.style.marginTop = '0'
  }

  if(userEmailValue === '') {
    setErrorFor(userEmail, 'Введите ваш email')
} else if(!test__email(userEmailValue)) {
    setErrorFor(userEmail, 'Введите корректный email')
}
 else {
    setSuccesFor(userEmail)
    userEmail.parentElement.children[2].classList.add('success')
}

if(lastName_enValue === '') {
  setErrorFor(lastName_en, "Введите ваше Фамилию")
} else {
  setSuccesFor(lastName_en)
  lastName_en.parentElement.children[2].classList.add('success')
}

if(userName_enValue === '') {
  setErrorFor(userName_en, "Введите ваше Отчество")
} else {
  setSuccesFor(userName_en)
  userName_en.parentElement.children[2].classList.add('success')
}

userName.addEventListener('input', () => {
  if(userName.value.length > 2) {
    setSuccesFor(userName)
  }
});
lastName.addEventListener('input', () => {
  if(lastName.value.length > 2) {
    setSuccesFor(lastName)
  }
});
firstName.addEventListener('input', () => {
  if(firstName.value.length > 2) {
    setSuccesFor(firstName)
  }
});

userEmail.addEventListener('input', () => {
  if(test__email(userEmailValue)) {
    setSuccesFor(userEmail)
  }
});
userName_en.addEventListener('input', () => {
  if(userName_en.value.length > 2) {
    setSuccesFor(userName_en)
  }
});
lastName_en.addEventListener('input', () => {
  if(lastName_en.value.length > 2) {
    setSuccesFor(lastName_en)
  }
});
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

function test__email (email) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}