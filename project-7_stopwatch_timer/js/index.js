      // select elements from the DOM
      const stopwatchEl = document.querySelector(".stopwatch");
      const timerEl = stopwatchEl.querySelector(".timer");
      const startBtn = document.getElementById("start");
      const stopBtn = document.getElementById("stop");
      const resetBtn = document.getElementById("reset");

      // initialize timer variables
      let startTime,
        elapsedTime = 0,
        intervalId;

      // function to pad numbers with zeros
      function pad(num, places) {
        return String(num).padStart(places, "0");
      }

      // function to display the timer
      function displayTimer() {
        let minutes = Math.floor(elapsedTime / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);
        timerEl.textContent = `${pad(minutes, 2)}:${pad(seconds, 2)}:${pad(
          milliseconds,
          2
        )}`;
      }

      // function to start the timer
      function startTimer() {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(() => {
          elapsedTime = Date.now() - startTime;
          displayTimer();
        }, 10);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
      }

      // function to stop the timer
      function stopTimer() {
        clearInterval(intervalId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
      }

      // function to reset the timer
      function resetTimer() {
        clearInterval(intervalId);
        elapsedTime = 0;
        displayTimer();
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = true;
      }

      // add event listeners to the buttons
      startBtn.addEventListener("click", startTimer);
      stopBtn.addEventListener("click", stopTimer);
      resetBtn.addEventListener("click", resetTimer);