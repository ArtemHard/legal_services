const $hamburger = document.querySelector(".hamburger");
const $headerInfolinks = document.querySelector(".header-info__links");

// console.log($hamburger);
const openCloseNavBar = (e) => {
  e.preventDefault();
  $hamburger.classList.toggle("active");
  $headerInfolinks.classList.toggle("active");
};

const closeHamburger = (e) => {
  e.preventDefault();
  $hamburger.classList.remove("active");
  $headerInfolinks.classList.remove("active");
};

$hamburger.addEventListener("click", openCloseNavBar);

document.querySelectorAll(".header-info__link").forEach((val) => {
  val.addEventListener("click", closeHamburger);
});
