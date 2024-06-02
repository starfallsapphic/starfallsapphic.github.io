const eebtn = document.getElementById("ee-btn");
const eebg = document.getElementById("ee-bg");

eebtn.addEventListener("click", (e) => {
    eebg.classList.add("ee-ani");
    eebg.style.zIndex = 100;
    sfx = new Audio('assets/ee.mp3');
    sfx.volume = 0.5;
    sfx.play();
    setTimeout(() => eebtn.remove(), 1000);
    setTimeout(() => eebg.style.zIndex = null, 4000);
});

let starsbg = document.getElementById("stars-bg")

function stars() {
    let e = document.createElement("div");
    starsbg.appendChild(e);

    let xPos = Math.random()*99;
    e.style.left = xPos + "%";

    if(xPos < 20 || xPos > 80){
        e.setAttribute("class", "star star-lblue");
    }else if(xPos < 40 || xPos > 60){
        e.setAttribute("class", "star star-pink");
    }else{
        e.setAttribute("class", "star");
    }

    let duration = Math.random() * 3;
    let size = Math.random() * 6 + 6;

    e.style.fontSize = size + "px";
    e.style.animationDuration = 6 + duration + "s";
    setTimeout(function () {
        starsbg.removeChild(e);
    }, (duration+6)*1000);
}
  
setInterval(function () {
    stars();
}, 50);