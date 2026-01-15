

// document.querySelector("#container")addEventListener("mouseover", ).style.backgroundColor = randomColor();


const heading = document.getElementById("heading");
heading.style.color = "red";

var timerInMiliSec = 0;
var timer;

document.querySelector("#start").addEventListener("click", startTimer)

document.querySelector("#pause").addEventListener("click", pauseTimer)
document.querySelector("#reset").addEventListener("click", resetTimer)
// document.querySelector("i").style.color = randomColor();
 

function mouseOver() {
    document.querySelector("#time").style.color = "cyan";

}

function mouseOut() {
    document.querySelector("#time").style.color = "magenta";
}


// function hover(element, enter, leave){
//     element.addEventListener('mouseenter', enter)
//     element.addEventListener('mouseleave', leave)
//     }

function resetTimer() {
    clearInterval(timer)
    timerInMiliSec = 0;
    document.querySelector("#mins").innerText = "00";
    document.querySelector("#secs").innerText = "00";
    document.querySelector("#mili-secs").innerText = "00";

document.querySelector("#reset").style.backgroundColor = "transparent";


}

function pauseTimer() {
    clearInterval(timer);
document.querySelector("#pause").style.backgroundColor = "transparent";

}

function startTimer() {

    timer = setInterval(() => {
        timerInMiliSec += 10;

        updateTimer(timerInMiliSec)
        
    }, 10)

document.querySelector("#start").style.backgroundColor = "transparent";

document.querySelector("audio")

}

function updateTimer(timerInMiliSec) {
    const sec = Math.floor(timerInMiliSec / 1000);
    const min = Math.floor(timerInMiliSec/60000);
    const miliSec = (timerInMiliSec % 1000)/10;
      
    document.querySelector("#mins").innerText = min < 10 ? "0" + (min % 60) : (min % 60);
    document.querySelector("#secs").innerText = sec < 10 ? "0" + (sec % 60) : (sec % 60) ;
    document.querySelector("#mili-secs").innerText = miliSec;


}

function randomColor() {
    let str = "0123456789abcdef";
    let ColorStr = "#";

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * str.length);
        ColorStr += str[randomIndex];

        return ColorStr;
    }
}