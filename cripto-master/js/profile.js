//Cancel Exchange request
let del = document.querySelectorAll('.del');
let cancelExchangePopup = document.querySelector('.cancel-exchange-popup');
for (let i=0; i<del.length; i++){
    del[i].addEventListener('click', ()=>{
        cancelExchangePopup.classList.add('active');
    })
}


//Confirm exchange changes
let confirmChange = document.querySelectorAll('.ok');
let confirmChangePopup = document.querySelector('.confirm-change-popup');
for (let i = 0; i<confirmChange.length; i++){
    confirmChange[i].addEventListener('click', ()=>{
        confirmChangePopup.classList.add('active');
    })
}

for (let i=0; i<close.length; i++){
    close[i].addEventListener('click', ()=>{
        exchangePopup.classList.remove('active');
        cancelExchangePopup.classList.remove('active');
        confirmChangePopup.classList.remove('active');
    });
}


//Assets dropdown deposit
function toggleDeposit(depositWindowId, action) {
    let depositPopupDOMElement = document.getElementById(depositWindowId);
    if(action === 'remove')  depositPopupDOMElement.classList.remove('active');
    else depositPopupDOMElement.classList.add('active');
    depositPopupDOMElement.previousSibling.previousSibling.style = 'z-index: 3'
}

//Add style for button onclick
let activeButtonDeposit = document.querySelectorAll('.deposit');
for (let i =0; i<activeButtonDeposit.length; i++){
    activeButtonDeposit[i].addEventListener('click', ()=>{
        activeButtonDeposit[i].classList.toggle('active')
    })
}
let activeButtonWithdraw = document.querySelectorAll('.withdraw');
    for (let i=0; i<activeButtonWithdraw.length; i++){
        activeButtonWithdraw[i].addEventListener('click', ()=>{
            activeButtonWithdraw[i].classList.toggle('active')
        })
    }

//Assets dropdown withdraw
function toggleWithdraw(withdrawWindowId, action) {
    let withdrawPopupDOMElement = document.getElementById(withdrawWindowId);
    if(action === 'remove') {
        withdrawPopupDOMElement.classList.remove('active');
    }
    else withdrawPopupDOMElement.classList.add('active');
    withdrawPopupDOMElement.previousSibling.previousSibling.previousSibling.previousSibling.style = 'z-index: 3';
}