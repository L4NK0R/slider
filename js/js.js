'use strict'
let buttons = document.querySelectorAll(".leftright");
let slideshowpolotno = document.querySelector(".slidepolotno");
let transcount = -100;
let count = 0;
slideshowpolotno.style.transform = "translate(-100%)";
slideshowpolotno.style.transition = "0s";
// let transfun =
// transform: translate(transcount+"%");
buttons.forEach(item => item.addEventListener("click", slide));
function slide(event){
    
    if(event.currentTarget.classList.contains("but1")){
        transcount += 100;
        slideshowpolotno.style.transform = `translate(${transcount}%)`
        count--;
    }else if(event.currentTarget.classList.contains("but2")){
        transcount -= 100;
        slideshowpolotno.style.transform = `translate(${transcount}%)`
        count++;
    }
    if(count<0){
          //a1
        count = 5;
        setTimeout(gotoA1, 1000);
    }else if(count>5){
         //a6   
        count = 0;
        setTimeout(gotoA6, 1000);
    }
    
}

function gotoA1(){
    slideshowpolotno.style.transition = "0s";
    transcount = -600;
    slideshowpolotno.style.transform = `translate(${transcount}%)`
    setTimeout(function(){slideshowpolotno.style.transition = "1s"},100);
}

function gotoA6(){
    slideshowpolotno.style.transition = "0s";
    transcount = -100;
    slideshowpolotno.style.transform = `translate(${transcount}%)`
    count = 0;
    setTimeout(function(){slideshowpolotno.style.transition = "1s"},100)
}

// Функция времени, вызывается из консоли, ибо пока не сделал функцию обрывания
function inftimer(){
    setTimeout(infslide, 3000);
}
function infslide(){
    slideshowpolotno.style.transform = `translate(${transcount}%)`
    transcount -= 100;
    if(transcount<-500){
        transcount = 0;
    }
    inftimer();
}

setTimeout(function (){slideshowpolotno.style.transition = "1s";},0);
