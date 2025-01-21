const hamburger = document.querySelector(".header__hamburger-icon");
const box = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__nav--mobile");

const toogleMenu = () => {
  if (box.classList.contains("visible")) {
    box.classList.remove("visible");
    nav.classList.remove("visible")
} else {
    box.classList.add("visible");
    nav.classList.add("visible")
  }
};

hamburger.addEventListener("touchstart", toogleMenu);
