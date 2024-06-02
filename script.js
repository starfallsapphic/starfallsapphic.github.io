const eebtn = document.getElementById("ee-btn");
const eebg = document.getElementById("ee-bg");
const motionBtn = document.getElementById("motion-btn")
console.log(motionBtn)
let motionEnabled = true;
let hasMouseLeft = true;

eebtn.addEventListener("click", (e) => {
    eebg.classList.add("ee-ani");
    eebg.style.zIndex = 100;
    sfx = new Audio('assets/ee.mp3');
    sfx.volume = 0.5;
    sfx.play();
    setTimeout(() => eebtn.remove(), 1000);
    setTimeout(() => eebg.style.zIndex = null, 4000);
});

motionBtn.addEventListener("click", (e) => {
    if(motionEnabled){
        motionEnabled = false;
        clearInterval(starsInterval);
    }else{
        motionEnabled = true;
        starsInterval = setInterval(manageStars, 50000/innerWidth+150);
    }

    if(!hasMouseLeft){
        if(motionEnabled){
            motionBtn.classList.remove("btn-enabled");
            motionBtn.classList.add("btn-disabled");
        }else{
            motionBtn.classList.remove("btn-disabled");
            motionBtn.classList.add("btn-enabled");
        }
    }

    hasMouseLeft = false;
});

motionBtn.addEventListener("mouseleave", (e) => {
    if(!hasMouseLeft){
        if(motionEnabled){
            motionBtn.classList.remove("btn-disabled");
            motionBtn.classList.add("btn-enabled");
        }else{
            motionBtn.classList.remove("btn-enabled");
            motionBtn.classList.add("btn-disabled");
        }
        hasMouseLeft = true;
    }
});

let starsbg = document.getElementById("stars-bg")

function stars() {
    let e = document.createElement("div");
    starsbg.appendChild(e);

    let xPos = Math.random()*99;
    e.style.left = xPos + "%";

    if(xPos < 10 || xPos > 90){
        e.setAttribute("class", "star star-lblue");
    }else if(xPos < 35 || xPos > 65){
        e.setAttribute("class", "star star-pink");
    }else{
        e.setAttribute("class", "star");
    }

    let duration = Math.random() * 3;
    let size = Math.random() * 12 + 6;

    e.style.fontSize = size + "px";
    e.style.animationDuration = 6 + duration + "s";
    setTimeout(function () {
        starsbg.removeChild(e);
    }, (duration+6)*1000);
}

// setInterval(function () {
//     stars();
// }, 50);

let prevInnerWidth = innerWidth;

let count = 0;
let manageStars = function () {
    stars();
    if(prevInnerWidth !== innerWidth){
        prevInnerWidth = innerWidth;
        clearInterval(starsInterval);
        starsInterval = setInterval(manageStars, 50000/innerWidth+150);
    }
}

let starsInterval = setInterval(manageStars, 50000/innerWidth+150);