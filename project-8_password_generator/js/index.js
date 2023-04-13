// Selecting Element
const passwordInput = document.getElementById("passwordInput");
const copyBtn = document.getElementById("copy-btn");
const rangeSlider = document.getElementById("range");
const sliderNumber = document.getElementById("slider-number");
const generatBtn = document.getElementById("generate-button");

//Generate Password Function
const generatePass = () => {
  let newpass = "";
  let all =
    "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890()[]<>&%@#";
  for (let i = 0; i < rangeSlider.value; i++) {
    newpass += all[Math.floor(Math.random() * all.length)];
  }
  passwordInput.value = newpass;
};

//Calling The Function On Page Load
generatePass();

//Copy Button Click Event Handle
copyBtn.addEventListener("click", () => {
  passwordInput.select();
  document.execCommand("copy");
  //Change The Icon After Copy
  copyBtn.setAttribute("class", "far fa-clipboard");
  
});

//Slider Slide Input Event Handle
rangeSlider.addEventListener("input", () => {
  sliderNumber.textContent = rangeSlider.value;
});

//Genearte Button Click Event Handle
generatBtn.addEventListener("click", generatePass);
