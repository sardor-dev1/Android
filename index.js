"use strict";

let toggleBtn = document.querySelector(".hamburger--btn");
let toggleMenu = document.querySelector(".nav__list");
let body = document.querySelector("body");

function menuToggle() {
  toggleMenu.classList.toggle("nav__list-toggle");
  body.classList.toggle("nav__list-toggle2");
}

toggleBtn.addEventListener("click", () => {
  menuToggle();
});
