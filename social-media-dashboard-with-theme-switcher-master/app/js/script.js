// Dark Mode Toggle Button
const toggleDark = document.querySelector(".header__toggle--wrap");
const btnColor = document.querySelector(".header__dark-mode--toggle");
const toggleCircle = document.querySelector(".header__toggle--circle");

//
const body = document.querySelector("body");
const headerBackground = document.querySelector(".header__background");
const header = document.querySelector("header");
const headerDark = document.querySelector(".header__dark-mode");
const headerTitle = document.querySelector(".header__title");
const headerSub = document.querySelector(".header__sub");
const cards = document.querySelectorAll(".cards__item");
const cardsNumber = document.querySelectorAll(".cards__number--total");
const cardsName = document.querySelectorAll(".cards__name");
const cardFollow = document.querySelectorAll(".cards__followers");
const overviewCards = document.querySelectorAll(".overview__item");
const overviewTitle = document.querySelector(".overview__title");
const overviewNumber = document.querySelectorAll(".overview__number");
const overviewHeading = document.querySelectorAll(".overview__heading");
const footerLink = document.querySelectorAll(".footer__link");
const footer = document.querySelector(".footer");

toggleDark.addEventListener("click", () => {
 if (toggleDark.classList.contains("active")) {
  toggleDark.classList.toggle("active");
  btnColor.classList.toggle("active");
  toggleCircle.classList.toggle("active");
  toggleCircle.classList.toggle("dark");
 } else {
  toggleDark.classList.add("active");
  btnColor.classList.add("active");
  toggleCircle.classList.add("active");
  toggleCircle.classList.add("dark");
 }

 // Dark
 body.classList.toggle("dark");
 headerBackground.classList.toggle("dark");
 header.classList.toggle("dark");
 headerDark.classList.toggle("dark");
 headerTitle.classList.toggle("dark");
 headerSub.classList.toggle("dark");
 overviewTitle.classList.toggle("dark");

 cards.forEach((card) => {
  card.classList.toggle("dark");
  card.classList.toggle("dt-hover");
 });

 cardsNumber.forEach((number) => {
  number.classList.toggle("dark");
 });

 cardsName.forEach((name) => {
  name.classList.toggle("dark");
 });

 cardFollow.forEach((follow) => {
  follow.classList.toggle("dark");
 });

 overviewCards.forEach((card) => {
  card.classList.toggle("dark");
  card.classList.toggle("dt-hover");
 });

 overviewNumber.forEach((number) => {
  number.classList.toggle("dark");
 });

 overviewHeading.forEach((heading) => {
  heading.classList.toggle("dark");
 });

 footerLink.forEach((link) => {
  link.classList.toggle("dark");
 });
 footer.classList.toggle("dark");
});
