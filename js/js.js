'use strict'
let buttons = document.querySelectorAll(".leftright");
let slideshowpolotno = document.querySelector(".slidepolotno");
let transcount = -100;
let count = 0;
let countOfSlides = 0;
let countOfslidesWithPercent =0;
slideshowpolotno.style.transform = "translate(-100%)";
slideshowpolotno.style.transition = "0s";

countOfSlides = +document.querySelectorAll(".slidepolotno div").length - 3;
countOfslidesWithPercent = countOfSlides *100 +200;
buttons.forEach(item => item.addEventListener("click", slide));
function slide(event) {

    if (event.currentTarget.classList.contains("but1")) {
        transcount += 100;
        slideshowpolotno.style.transform = `translate(${transcount}%)`
        count--;
    } else if (event.currentTarget.classList.contains("but2")) {
        transcount -= 100;
        slideshowpolotno.style.transform = `translate(${transcount}%)`
        count++;
    }
    if (count < 0) {
        //a1
        count = countOfSlides;
        setTimeout(gotoA1, 1000);
    } else if (count > countOfSlides) {
        //a6   
        count = 0;
        setTimeout(gotoA6, 1000);
    }

}

function gotoA1() {
    slideshowpolotno.style.transition = "0s";
    transcount = -countOfslidesWithPercent + 100;
    slideshowpolotno.style.transform = `translate(${transcount}%)`;
    count = countOfSlides;
    setTimeout(function () { slideshowpolotno.style.transition = "1s" }, 100);
}

function gotoA6() {
    slideshowpolotno.style.transition = "0s";
    transcount = -100;
    slideshowpolotno.style.transform = `translate(${transcount}%)`;
    count = 0;
    setTimeout(function () { slideshowpolotno.style.transition = "1s" }, 100)
}

// Функция времени, вызывается из консоли, ибо пока не сделал функцию обрывания
function inftimer() {
    setTimeout(infslide, 3000);
}
function infslide() {
    slideshowpolotno.style.transform = `translate(${transcount}%)`
    transcount -= 100;
    if (transcount < -500) {
        transcount = 0;
    }
    inftimer();
}

setTimeout(function () { slideshowpolotno.style.transition = "1s"; }, 0);






//Acardeon

let akardeonHead = document.querySelector('.acardeon');
akardeonHead.addEventListener("click", acard);
function acard(event) {
    let parent = event.target.closest(".ak_header");
    AkardCleaner();
    parent.style.height = "fit-content";
    parent.querySelector(".logo").classList.add("rotated");
}

function AkardCleaner(){
    document.querySelectorAll(".ak_header").forEach(item => item.style.height = "60px");
    document.querySelectorAll(".logo").forEach(item => item.classList.remove("rotated"));
}
