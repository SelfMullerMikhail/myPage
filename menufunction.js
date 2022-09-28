"use strict"

// links
const twitter = document.querySelector(".twitter");
const telegramm = document.querySelector(".telegramm");
const instagramm = document.querySelector(".instagramm");
const whatsapp = document.querySelector(".whatsapp");
const number = document.querySelector(".number");
const github = document.querySelector('.github')
const linkedin = document.querySelector(".linkedin")
const hhanter = document.querySelector(".hhanter")
const messegeButton = document.querySelector(".messege");
const writeMe = document.querySelector(".writeMe");




function copyHidden(el, time) {
    function hidden() {
        el.style.display = "none"
    }
    setTimeout(hidden, time);
}

twitter.addEventListener("click", () => {
    window.open('https://twitter.com/Preensikl', '_blank');
})

telegramm.addEventListener("click", () => {
    window.open('https://t.me/mihail_muller', '_blank');
})

instagramm.addEventListener("click", () => {
    window.open("https://www.instagram.com/mihail_muller_", "_blank");
})

whatsapp.addEventListener("click", () => {
    window.open("https://wa.me/79996149718", "_blank");
})

linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/mihail-kornyushenko-864734233/", "_blank");
})

hhanter.addEventListener("click", () => {
    window.open("https://hh.ru/resume/f984a146ff0b280d290039ed1f5a3263745a67", "_blank")
})



github.addEventListener("click", () => {
    window.open("https://github.com/preensikl", "_blank");
})

number.addEventListener("click", () => {
    navigator.clipboard.writeText("905075310855")
    number.children[2].style.display = "block";
    number.children[1].style.display = 'block';
    copyHidden(number.children[2], 3000);
    copyHidden(number.children[1], 15000);

})

// function lockScreenHidden
function lockScreenHidden() {
    lockScreen.style.opacity = ".5";
    lockScreen.style.zIndex = "2";
    lockScreen.style.display = 'block';
}

// screensLock
const lockScreen = document.querySelector(".lockScreen");
const commentsButton = document.querySelector(".commentsButton");
const comments = document.querySelector(".comments2");

lockScreen.addEventListener("click", () => {
    lockScreen.style.zIndex = '0';
    lockScreen.style.display = 'none';
    writeMe.style.display = "none";
})

messegeButton.addEventListener('click', () => {
    writeMe.style.display = "block";
    lockScreenHidden();
})

const borderCollor = document.querySelector(".borderCollor")
// messege
borderCollor.addEventListener("click", el => {
    if (el.target.classList.contains('borderCollor')) {
        return;
    }
    el.target.style.boxShadow = "0 0 10px 5px rgba(221, 221, 221, 1)";
    console.log(el.target)
})
borderCollor.addEventListener("focusout", el => {
    el.target.style.boxShadow = "";
})

commentsButton.addEventListener("click", () => {
    comments.classList.toggle('hidden');
})





