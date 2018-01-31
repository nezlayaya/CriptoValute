//Dropdown
let wrapperDropdown = document.querySelectorAll('.wrapper-dropdown');
for (let i = 0; i<wrapperDropdown.length; i++){
   wrapperDropdown[i].onclick = wrapperDropdownActive;
}



function wrapperDropdownActive() {
    this.classList.toggle('active');
}



//Login popup
let close = document.querySelectorAll('.close');
let loginButton = document.querySelector('.login');
let loginPopup = document.querySelector('.login-popup');

loginButton.addEventListener('click', () =>{
    closeMobileMenuIfLoginOrSignUpOpen();
   loginPopup.classList.add('active')
});



//Sign-up popup
let signUp = document.querySelector('.sign-up');
let signUpPopup = document.querySelector('.sign-up-popup');
signUp.addEventListener('click', () =>{
    closeMobileMenuIfLoginOrSignUpOpen();
   signUpPopup.classList.add('active');
});



//Exchange-popup
let exchangeBtn = document.querySelectorAll('.exchange-btn');
let exchangePopup = document.querySelector('.exchange-popup');

for (let i=0; i<exchangeBtn.length; i++){
    exchangeBtn[i].addEventListener('click', ()=>{
        exchangePopup.classList.add('active');
    })
}


//Open mobile menu
let mobileButton = document.querySelector('.mobile-menu');
let mobileMenu = document.querySelector('nav');

mobileButton.addEventListener('click', ()=>{
   mobileMenu.classList.add('mobile');
});



function closeMobileMenuIfLoginOrSignUpOpen () {
    mobileMenu.classList.remove('mobile')
}


//Button close popup
for (let i = 0; i<close.length; i++) {
    close[i].addEventListener('click', () => {
        loginPopup.classList.remove('active');
        signUpPopup.classList.remove('active');
        exchangePopup.classList.remove('active');
        mobileMenu.classList.remove('mobile');
    });
}