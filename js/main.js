const shadow = document.querySelector(".shadow");
const display = document.querySelectorAll(".dis-video");
const video = document.querySelector(".video-none");


display.forEach(btn =>{
    btn.addEventListener("click",() =>{
        shadow.classList.toggle("active");
        video.classList.toggle("active");
    })
})