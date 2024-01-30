const settingsBtn = document.querySelector('.controls .settings'),
      settingsBg = document.querySelector('.settings-bg'),
      settingsBoxClose = document.querySelector('.settings-box__close'),
      settingsBox = document.querySelector('.settings-box');

settingsBtn.addEventListener('click', () => {
    settingsBg.classList.remove('d-none');
    settingsBox.classList.remove('d-none');
    settingsBtn.classList.add('btnClicked');
});

settingsBoxClose.addEventListener('click', () => {
    settingsBg.classList.add('d-none');
    settingsBox.classList.add('d-none');
    settingsBtn.classList.remove('btnClicked');
});

settingsBg.addEventListener('click', () => {
    settingsBg.classList.add('d-none');
    settingsBox.classList.add('d-none');
    settingsBtn.classList.remove('btnClicked');
});