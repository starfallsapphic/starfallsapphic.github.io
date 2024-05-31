const eebtn = document.getElementById("ee-btn");
const eebg = document.getElementById("ee-bg");

eebtn.addEventListener("click", (e) => {
    eebg.classList.add("ee-ani");
    sfx = new Audio('assets/ee.mp3');
    sfx.volume = 0.5;
    sfx.play();
    setTimeout(() => eebtn.remove(), 1000);
})