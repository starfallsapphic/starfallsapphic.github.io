const spinBtn = document.getElementById("spin-btn");
const diffInputs = document.querySelectorAll("#difficulty-levels input");

const minCCInput = document.getElementById("min-cc");
const maxCCInput = document.getElementById("max-cc");

const repeatChart = document.getElementById("repeat-chart");
const repeatSong = document.getElementById("repeat-song");

const instaSpin = document.getElementById("insta-spin-toggle");
const showCC = document.getElementById("show-cc-toggle");

const songDisplay = document.getElementById("song-display");
const difficulties = ["OPN", "MID", "FIN", "ENC"];
let chartsOnCooldown = [];
let songsOnCooldown = [];

const spinBtnColours = ["pink-bg", "blue-bg"]
spinBtn.classList.add((spinBtnColours)[Math.floor(Math.random()*2)]);

spinBtn.addEventListener("click", chooseSong);
showCC.addEventListener("click", ccToggle);
minCCInput.addEventListener("keypress", convertPlus);
maxCCInput.addEventListener("keypress", convertPlus);

function chooseSong(){
    eligibleCharts = [];
    eligibleDiffs = getEligibleDifficulties();
    minCC = minCCInput.value;
    maxCC = maxCCInput.value;

    purgeCooldowns();

    for(let song of songs){
        addEligibleCharts(song);
    }

    filterByDiff();
    filterByCooldown();

    if(eligibleCharts.length === 0){
        document.getElementById("spin-error").innerHTML = "no charts matched these settings!";
        return;
    }else{
        document.getElementById("spin-error").innerHTML = "";
    }

    shuffle(eligibleCharts);
    if(instaSpin.checked){
        setSongDisplay(eligibleCharts[0]);
        setOnCooldown(eligibleCharts[0]);
    }else{
        spinBtn.removeEventListener("click", chooseSong);
        let count = 0;
        shuffleInterval = setInterval(() => {
            setSongDisplay(eligibleCharts[count % eligibleCharts.length]);
            count += 1;
        }, 50);

        setTimeout(finaliseSongChoice, 2000);
    }

    advanceCooldowns();
}

function ccToggle() {
    const alert = document.getElementById("cc-alert")
    if(showCC.checked){
        alert.innerHTML = "many listed chart constants may not be accurate!";
    }else{
        alert.innerHTML = "";
    }

    if(typeof displayedSong !== "undefined"){
        setSongDisplay(displayedSong);
    }
}


function getEligibleDifficulties(){
    let eligibleDiffs = []
    for(let i=0; i<diffInputs.length; i++){
        if(diffInputs[i].checked){
            eligibleDiffs.push(difficulties[i]);
        }
    }
    return eligibleDiffs;
}


function addEligibleCharts(s){
    for(let key in s){
        if(eligibleDiffs.includes(key) && s[key] !== ""){
            eligibleCharts.push({
                title: s.title,
                diff: key,
                cc: s[key],
            });
        }
    }
}


function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}




function setSongDisplay(s){
    displayedSong = s;

    if(showCC.checked){
        diffDisplay = s.cc.toFixed(1);
    }else{
        diffDisplay = s.cc % 1 <= 0.4 ? Math.floor(s.cc) : Math.floor(s.cc) + "+"; 
    }

    songDisplay.classList.remove("unk-bg", "opn-bg", "mid-bg", "fin-bg", "enc-bg");
    songDisplay.classList.add(s.diff.toLowerCase()+"-bg");
    songDisplay.children[0].innerHTML = s.title;
    songDisplay.children[2].innerHTML = s.diff + " " + diffDisplay;
}

function finaliseSongChoice(){
    shuffle(eligibleCharts);
    clearInterval(shuffleInterval);
    setSongDisplay(eligibleCharts[0]);
    setOnCooldown(eligibleCharts[0]);
    songDisplay.classList.add("flash");
    songDisplay.addEventListener("animationend", () => songDisplay.classList.remove("flash"));
    spinBtn.addEventListener("click", chooseSong);
}

function filterByDiff(){
    eligibleCharts = eligibleCharts.filter(s => s.cc >= minCC && s.cc <= maxCC);
}

function setOnCooldown(c){
    chartsOnCooldown.push({
        chart: c,
        sinceLast: 0,
    });
    songsOnCooldown.push({
        title: c.title,
        sinceLast: 0,
    });
}

function filterByCooldown(){
    for(let song of songsOnCooldown){
        eligibleCharts = eligibleCharts.filter(c => c.title !== song.title);
    }

    for(let chart of chartsOnCooldown){
        eligibleCharts = eligibleCharts.filter(c => !(c.title === chart.chart.title && c.diff === chart.chart.diff));
    }
}

function purgeCooldowns(){
    songsOnCooldown = songsOnCooldown.filter(s => s.sinceLast <= repeatSong.value);
    chartsOnCooldown = chartsOnCooldown.filter(c => c.sinceLast <= repeatChart.value);
}

function advanceCooldowns(){
    songsOnCooldown.forEach(s => s.sinceLast += 1);
    chartsOnCooldown.forEach(c => c.sinceLast += 1);
}

function convertPlus(e){
    if(e.key === "+"){
        e.preventDefault();
        e.target.value += ".9";
    }
}