const btn = document.getElementById("change-page-btn");
const menu = document.getElementById("change-page");
const filter = document.getElementById("change-page-dark-filter");
const pageBtns = document.getElementById("change-page-buttons").children;
const once = { once: true };

let pageMenuActive = false;

btn.addEventListener("click", loadMenu);

function loadMenu(e) {
    // initialise menu
    if(!pageMenuActive){
        pageMenuActive = true;
        createMenu();

        // load buttons
        for(let i=0; i<pageBtns.length; i++){
            slideInBtn(pageBtns[i], i);
        }
    // get rid of menu
    }else{
        runningAnimations = [];

        filter.classList.add('fade-out-80');
        runningAnimations.push(filter.id);
        filter.addEventListener('animationend', () => {
            filter.classList.remove('fade-out-80');
            let index = runningAnimations.indexOf(filter.id);
            runningAnimations.splice(index, 1);
        }, once);

        for(let i=0; i<pageBtns.length; i++){
            slideOutBtn(pageBtns[i], i);
            runningAnimations.push(pageBtns[i].id);
            pageBtns[i].addEventListener('animationend', () => {
                let index = runningAnimations.indexOf(pageBtns[i].id);
                runningAnimations.splice(index, 1);
            }, once)
        }

        watchAniInterval = setInterval(closeMenu, 50);
    }
}

function createMenu(){
    // opacity = 0;
    filter.style.opacity = 0;
    menu.style.display = "flex";
    // fadeTimer = setInterval(fadeInBg, 25);
    filter.classList.add('fade-in-80');
    filter.addEventListener('animationend', () => {
        filter.classList.remove('fade-in-80')
        filter.style.opacity = null;
    }, once)
}

function slideInBtn(btn, n){
    btn.style.opacity = 0;
    let aniDelay = n*0.1;
    btn.style.animationDelay = aniDelay+'s';
    btn.classList.add('slide-in');
    btn.addEventListener("animationend", () => {
        btn.classList.remove('slide-in');
        btn.style.opacity = null;   
    }, once);
}

function slideOutBtn(btn, n){
    // btn.style.opacity = 0;
    let aniDelay = n*0.1;
    btn.style.animationDelay = aniDelay+'s';
    btn.classList.add('slide-out');
    btn.addEventListener("animationend", () => {
        btn.classList.remove('slide-out');
        btn.style.opacity = 0; 
    }, once);
}

let closeMenu = function () {
    if(runningAnimations.length === 0){
        menu.style.display = null;
        for(let i=0; i<pageBtns.length; i++){
            btn.style.opacity = null;
        }
        clearInterval(watchAniInterval);
        pageMenuActive = false;
    }
}

// let fadeInBg = function() {
//     if(opacity < 80){
//         opacity += 10;
//         filter.style.opacity = opacity + "%";
//     }else{
//         clearInterval(fadeTimer);
//     }
// }

// let fadeOutBg = function(){
//     if(opacity > 0){
//         opacity += 10;
//         filter.style.opacity = opacity + "%";
//     }
// }

