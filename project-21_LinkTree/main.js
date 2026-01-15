// YouTube Redirect Button...
const youtube = document.querySelector(".youtube");

youtube.addEventListener("click", () => {
  let confirmtoYoutube = confirm("redirect to YouTube");
  console.log('user confirm', confirmtoYoutube);

  if (confirmtoYoutube) {
    window.location.href = "https://youtube.com/@lainkillaz?si=jwtnFg-r6OT31OaI";
  } else {
    console.log('cancel YouTube redirect');
  }
});

// email copy text
const toastmsg = document.querySelector(".toast");

function copyText() {
  let tempTextArea = document.createElement("textarea");
  tempTextArea.value = "ashishekka447@gmail.com";
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(tempTextArea);

  // toast message
  toastmsg.style.top = "1.5rem";
  toastmsg.style.opacity = "1";

  setTimeout(() => {
    toastmsg.style.top = "-10rem";
    toastmsg.style.opacity = "0";
  }, 5000);

  // time counter
  const counter = document.querySelector(".countdown");
  count = 5;

  let interval = setInterval(() => {
    if (count > 1) {
      count--;
      counter.textContent = count;
    } else {
      counter.textContent = 1;
      clearInterval(interval);
    }
  }, 1000);
}
