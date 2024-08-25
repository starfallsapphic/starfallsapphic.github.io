const eebtn = document.getElementById("ee-btn");
const eebg = document.getElementById("ee-bg");

eebtn.addEventListener("click", (e) => {
    eebg.classList.add("ee-ani");
    eebg.style.zIndex = 100;
    eebg.style.display = "block";
    sfx = new Audio('./assets/ee.mp3');
    sfx.volume = 0.5;
    sfx.play();
    eebtn.style.animationDuration = "2s";
    eebtn.classList.add('fade-out');
    eebtn.addEventListener('animationend', () => {
        eebtn.remove();
    })
    // setTimeout(() => eebtn.remove(), 1000);
    setTimeout(() => {
        eebg.style.zIndex = null;
        eebg.style.display = null;
    }, 4000);
});