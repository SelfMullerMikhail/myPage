"use strict"

const headBlockButtom = document.querySelectorAll(".headBlockButtom")

document.addEventListener("mouseover", el => {
    if (!el.target.classList.contains("headBlockButtom")) {
        return;
    }
    el.target.setAttribute("style", "color:black");
    console.log(el);
})

document.addEventListener("mouseout", el => {
    if (!el.target.classList.contains("headBlockButtom")) {
        return;
    }
    el.target.setAttribute("style", "color:white");
    console.log(el);
})

console.log(headBlockButtom)

