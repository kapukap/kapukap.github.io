
function toggle() {
    let trailer = document.querySelector('.trailer');
    let video = document.querySelector('video');
    trailer.classList.add('active');
    video.currentTime = 0;
    video.pause();
}

function closeToggle(){
    let trailer = document.querySelector('.trailer');
    let video = document.querySelector('video');

    trailer.classList.remove('active');
    video.currentTime = 0;
    video.pause();
}


let play = document.querySelector('.play');
play.addEventListener("click", function(){
    toggle();
});



let close = document.querySelector('.close');
close.addEventListener('click', function (){
    closeToggle();
});