const menuBtn = document.querySelector("#menu__btn");
const navLinks = document.querySelector(".links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile__menu");
});