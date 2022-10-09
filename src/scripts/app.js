import init from "./map.js";

const hamburgerElement = document.querySelector('.hamburger');
const mobileMenuElement = document.querySelector('.mobile-menu');
const shadowElement = document.querySelector('.shadow');
const headerElement = document.querySelector('.header');
const heroElement = document.querySelector('.hero');

hamburgerElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  hamburgerElement.classList.toggle('active');
  mobileMenuElement.classList.toggle('active');
  shadowElement.classList.toggle('active');
  document.body.classList.toggle('modal-open');
});

const setContentMargin = () => {
  headerElement.nextElementSibling.style.marginTop = headerElement.offsetHeight + "px";
}

const setHeroHeight = () => {
  heroElement.style.height = `calc(100vh - ${headerElement.offsetHeight}px)`;
}

setContentMargin();
setHeroHeight();

ymaps.ready(init);
