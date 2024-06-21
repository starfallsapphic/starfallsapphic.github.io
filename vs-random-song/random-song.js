const spinBtn = document.getElementById("spin-btn");

const diffInputs = document.querySelectorAll("#difficulty-levels input");

const minCCInput = document.getElementById("min-cc");
const maxCCInput = document.getElementById("max-cc");

const repeatChart = document.getElementById("repeat-chart");
const repeatSong = document.getElementById("repeat-song");

const instaSpin = document.getElementById("insta-spin-toggle");
const showCC = document.getElementById("show-cc-toggle");
const spoilerToggle = document.getElementById("spoiler-toggle")

const songDisplay = document.getElementById("song-display");

const allNumInputs = document.querySelectorAll("input[type=number]");

const difficulties = ["OPN", "MID", "FIN", "ENC"];
let chartsOnCooldown = [];
let songsOnCooldown = [];

const spinBtnColours = ["pink-bg", "blue-bg"]
spinBtn.classList.add((spinBtnColours)[Math.floor(Math.random()*2)]);

spinBtn.addEventListener("click", chooseSong);
showCC.addEventListener("click", ccToggle);
minCCInput.addEventListener("keypress", convertPlus);
maxCCInput.addEventListener("keypress", convertPlus);

allNumInputs.forEach(input => 
    input.addEventListener("input", () => {
        if(input.value === ""){ 
            input.classList.add("text-red");
        }else{
            input.classList.remove("text-red");
        }
    })
)

function chooseSong(){
    // removes the effects from last spin
    songDisplay.classList.remove("flash");
    difficulties.forEach(d => songDisplay.classList.remove(d.toLowerCase() + "-glow"));

    eligibleCharts = [];
    eligibleDiffs = getEligibleDifficulties();
    minCC = +minCCInput.value;
    maxCC = +maxCCInput.value;

    glowThreshold = minCC + 0.8*(maxCC - minCC);
    console.log(glowThreshold)

    purgeCooldowns();

    for(let song of songs){
        addEligibleCharts(song);
    }

    filterByDiff();
    filterByCooldown();
    
    if(!spoilerToggle.checked){
        filterBySpoiler();
    }

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
        alert.innerHTML = "Many listed chart constants may not be accurate!";
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
        diffDisplay = s.cc % 1 <= 0.5 ? Math.floor(s.cc) : Math.floor(s.cc) + "+"; 
    }
    songDisplay.classList.remove("unk-bg", "opn-bg", "mid-bg", "fin-bg", "enc-bg");
    songDisplay.classList.add(s.diff.toLowerCase()+"-bg");
    songDisplay.children[0].innerHTML = s.title;
    songDisplay.children[2].innerHTML = s.diff + " " + diffDisplay;

    
}

function finaliseSongChoice(){
    shuffle(eligibleCharts);
    clearInterval(shuffleInterval);

    let s = eligibleCharts[0]

    setSongDisplay(s);
    setOnCooldown(s);
    if(s.cc >= glowThreshold){
        songDisplay.classList.add(s.diff.toLowerCase() + "-glow");
    }else{
        songDisplay.classList.add("flash");
    }
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

function filterBySpoiler(){
    for(let songName of spoilerSongNames){
        eligibleCharts = eligibleCharts.filter(c => !(c.title === songName));
    }
}

function purgeCooldowns(){
    songsOnCooldown = songsOnCooldown.filter(s => s.sinceLast < repeatSong.value);
    chartsOnCooldown = chartsOnCooldown.filter(c => c.sinceLast < repeatChart.value);
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

