import gsap from "gsap";

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const img = entry.target;
//       img.src = img.getAttribute("data-src");
//       observer.unobserve(img);
//     }
//   });
// });

// const lazyImages = document.querySelectorAll(".lazy");

// lazyImages.forEach((img) => {
//   observer.observe(img);
// });

// var button = document.querySelector(".navigation-close");
// var menu = document.querySelector(".navigation-open");
// var navigation = document.querySelector(".navigation-credits-informations");

// var openMenu = function () {
//   menu.classList.toggle("is-open");
//   button.classList.toggle("is-active");
//   navigation.classList.toggle("is-open");
// };

// button.addEventListener("click", openMenu);

// links.forEach((link) => {
//   link.addEventListener("click", openMenu);
// });

var button = document.querySelector(".navigation-close");
var menu = document.querySelector(".navigation-open");
var navigation = document.querySelector(".navigation-credits-informations");

var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
  navigation.classList.toggle("is-open");
};

button.addEventListener("click", openMenu);

links.forEach((link) => {
  link.addEventListener("click", openMenu);
});
