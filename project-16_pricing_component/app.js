"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const toggleArea = document.querySelector(".toggle-area");
const basicPrice = document.querySelector(".price-1");
const profPrice = document.querySelector(".price-2");
const masterPrice = document.querySelector(".price-3");

toggleArea.addEventListener("click", function (e) {
  e.preventDefault();
  if (toggleArea.classList.contains("monthly")) {
    toggleArea.classList.remove("monthly");
    toggleArea.classList.add("anually");
    basicPrice.innerHTML = `<p class="price-1"> <span class="dollar-sign">&dollar;</span>199.99</p>`;
    profPrice.innerHTML = `  <p class="price-2"> <span class="dollar-sign">&dollar;</span>249.99</p>`;
    masterPrice.innerHTML = `  <p class="price-3"> <span class="dollar-sign">&dollar;</span>399.99</p>`;
  } else {
    toggleArea.classList.add("monthly");
    toggleArea.classList.remove("anually");
    basicPrice.innerHTML = `<p class="price-1"> <span class="dollar-sign">&dollar;</span>19.99</p>`;
    profPrice.innerHTML = `  <p class="price-2"> <span class="dollar-sign">&dollar;</span>24.99</p>`;
    masterPrice.innerHTML = `  <p class="price-3"> <span class="dollar-sign">&dollar;</span>39.99</p>`;
  }
});
