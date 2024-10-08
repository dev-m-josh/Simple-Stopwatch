const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn')
let timer  = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

startBtn.addEventListener("click", start);

stopBtn.addEventListener("click", stop);

resetBtn.addEventListener("click", reset);
function start() {
    
//check if watch is running  
    if (!isRunning) {
        //then start the watch and set the start time
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}


function stop() {

    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}


function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.innerText = "00:00:00:00";

}


function update() {
    
const currentTime = Date.now();
elapsedTime = currentTime- startTime;

let hours = Math.floor(elapsedTime / (1000 * 60 *60));
let minutes = Math.floor(elapsedTime /(1000 * 60) % 60 );
let seconds = Math.floor((elapsedTime / 1000) % 60);
let milliseconds = Math.floor((elapsedTime % 1000) / 10);

hours = String(hours).padStart(2, '0');
minutes = String(minutes).padStart(2, '0');
seconds = String(seconds).padStart(2, '0');
milliseconds = String(milliseconds).padStart(2, '0');

display.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}










































