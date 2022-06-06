'use strict'
let buttons = document.querySelectorAll(".leftright");
let slideshowpolotno = document.querySelector(".slidepolotno");
let transcount = 0;
let count = 0;
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
        transcount = -500;
        console.log(count);
        slideshowpolotno.style.transform = `translate(${transcount}%)`
        count = 5;
    }else if(count>5){
        transcount = 0;
        slideshowpolotno.style.transform = `translate(${transcount}%)`
        count = 0;
    }
    
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