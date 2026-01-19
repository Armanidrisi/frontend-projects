
let [seconds,minutes,hours] = [0,0,0];
let  displayItem = document.getElementById("displayItem");
let timer = null;

function stopwatch() {
seconds++;
if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
}

let h = hours < 10 ? "0" + hours :hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds


displayItem.innerHTML = h+ ":" + m + ":" + s;
}
function watchStart() {
if(timer!== null){
    clearInterval(timer);
}
timer = setInterval(stopwatch,1000);
}
function watchStop() {
clearInterval(timer);
}
function watchReset() {
clearInterval(timer);
let [seconds,minutes,hours] = [0,0,0];
displayItem.innerHTML = "00:00:00"
}