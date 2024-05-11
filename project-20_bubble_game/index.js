var timerValue = 30;
var scoreValue = 0;
var hitsValue = 0;
const createBubble = () => {
    var contentbox = '';
    for (let i = 1; i < 208; i++) {
        contentbox += `<div class="bubble"'>${Math.floor(Math.random() * 10)}</div>`;

    }
    document.querySelector('.content').innerHTML = contentbox;
}
const setTimeing = () => {
    var timerNode = document.querySelector('.timer');
    const timeInterval = setInterval(() => {
        if (timerValue > 0) {
            timerValue--;
            timerNode.textContent = timerValue;
        }
        else {
            clearInterval(timeInterval);
            document.querySelector('.content').innerHTML = '<h1 class="gameOver">Game Over <br><button onclick="restartGame()">Restart</button></h1>';
        }
    }, 1000);
}
const hitsgenerate = () => {
    hitsValue = Math.floor(Math.random() * 10);
    console.log(hitsValue);
    document.querySelector('.hitsvalue').textContent = hitsValue;

}
const score = () => {
    scoreValue += 10;
    document.querySelector('.scoreValue').textContent = scoreValue;

}

document.querySelector('.content').addEventListener('click', (e) => {
    if (Number(e.target.textContent) === hitsValue) {
        score();
        createBubble();
        hitsgenerate();
    }
    // console.log(Number(e.target.textContent));
})
const restartGame = () => {
    scoreValue = 0;
    document.querySelector('.scoreValue').textContent = scoreValue;
    timerValue = 30;
    createBubble();
    setTimeing();
    hitsgenerate();
}
const Startingfun = () => {

    createBubble();
    setTimeing();
    hitsgenerate();
}



