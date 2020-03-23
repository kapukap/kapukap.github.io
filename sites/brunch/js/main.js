let brunchLogo = document.querySelector(".logo");
let  r, g, b, rgbString;
    
    
    function runLogo() {
        

    brunchLogo.addEventListener("mouseover", () => {
            r = Math.floor(Math.random() * 129) +44,
            g = Math.floor(Math.random() * 50)+58,
            b = Math.floor(Math.random() * 48)+18;

        brunchLogo.style.color = "rgb(" + r + "," + g + "," + b + ")";
        // if ((r == 255) && (g == 255) && (b == 255)) {
        //     runLogo();
        // }
        // else brunchLogo.style.color = "rgb(" + r + "," + g + "," + b + ")";
    });
    
}

runLogo();






// let user = {
//     colors: [
//         '#C89F04',//кукурузно-жёлтый
//         '#F4B752',//шафраново-жёлтый
//         '#C63927',//алый
//         '#E1A6AD',//светло-розовый
//         '#8A5A83',//красно-сиреневый
//         '#691639',//бордово-фиолетовый
//         '#384C70',//фиолетово-синий
//         '#21888F',//бирюзово-синий
//         '#9C6B30',//охра коричневая
//         '#2A2D2F'//транспортный чёрный

//     ]
// }


//console.log(Math.round( Math.random()* user.colors.length ) );  // 0 - 10

// let prev='',
//     currentColor;

// function returnColor(){


//     brunchLogo.addEventListener("mouseover", () => {
        
//         currentColor = user.colors[Math.round(Math.random() * user.colors.length)]; 

//         if (prev == currentColor){
//             returnColor();
//         } else brunchLogo.style.color = currentColor;

//         prev = brunchLogo.style.color;
        
//     });
// }

// returnColor();






// Burger-toggle
let burg_menu = document.querySelector(".burger-menu-toggle"),
    burg_BTN = document.querySelector(".toggle-img"),
    exit_BTN = document.querySelector(".exit-btn"),
    body = document.querySelector("body");

let menuBtn = document.getElementById("menu"),
    discoverBtn = document.getElementById("discover"),
    eventsBtn = document.getElementById("events"),
    contactBtn = document.getElementById("contact");


function exitBTN() {
    burg_menu.style.height = "0vh";
    burg_menu.style.zIndex = "0";
    body.style.overflow = "scroll";

    menuBtn.style.transitionDelay = "0s"
    discoverBtn.style.transitionDelay = "0s";
    eventsBtn.style.transitionDelay = "0s";
    contactBtn.style.transitionDelay = "0s";

    menuBtn.style.left = "100vw";
    discoverBtn.style.left = "100vw";
    eventsBtn.style.left = "100vw";
    contactBtn.style.left = "100vw";
}


burg_BTN.addEventListener("click",()=>{
    burg_menu.style.height = "100vh";
    burg_menu.style.width = "100vw";
    burg_menu.style.zIndex="999";
    body.style.overflow="hidden";

    
    discoverBtn.style.transitionDelay = ".6s";
    eventsBtn.style.transitionDelay = "1.2s";
    contactBtn.style.transitionDelay = "1.8s";

    menuBtn.style.left="0vw";
    discoverBtn.style.left = "0vw";
    eventsBtn.style.left = "0vw";
    contactBtn.style.left = "0vw";

});

exit_BTN.addEventListener("click",()=>{
    exitBTN();
});





menuBtn.addEventListener("click",()=>{
    exitBTN();
    
});
discoverBtn.addEventListener("click", () => {
    exitBTN();
});
eventsBtn.addEventListener("click",()=>{
    exitBTN();
});
contactBtn.addEventListener("click",()=>{
    exitBTN();
});








