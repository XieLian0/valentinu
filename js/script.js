const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');

let buttonYesFontSize = 2;
let buttonNoFontSize = 2;

buttonNo.addEventListener('click', doYesNo);
buttonYes.addEventListener('click', buttonYesPushed);

function doYesNo (){
    buttonYesFontSize += .4;
    buttonYes.style.fontSize = buttonYesFontSize + 'em';
    buttonNoFontSize -= .2;
    buttonNo.style.fontSize = buttonNoFontSize + 'em';
}

function buttonYesPushed(){
    location.href = './page2.html' //перенепрапвление на другой адресс
}


