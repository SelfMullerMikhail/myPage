"use strict"

const twitter = document.querySelector(".twitter");
const telegramm = document.querySelector(".telegramm");
const instagramm = document.querySelector(".instagramm");
const whatsapp = document.querySelector(".whatsapp");
const number = document.querySelector(".number");
const github = document.querySelector('.github')
const linkedin = document.querySelector(".linkedin")
const hhanter = document.querySelector(".hhanter")


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

// const expiriencePhoto = document.querySelectorAll(".expiriencePhoto");

// console.log(expiriencePhoto)
// document.addEventListener("mouseover", el => {
//     if (!el.target.classList.contains("expiriencePhoto")) {
//         return;
//     }
//     console.log(el);
//     el.style.x = "100";
// })