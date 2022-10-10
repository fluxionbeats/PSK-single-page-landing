import init from "./map.js";
import './form.js';

const hamburgerElement = document.querySelector('.hamburger');
const mobileMenuElement = document.querySelector('.mobile-menu');
const shadowElement = document.querySelector('.shadow');
const headerElement = document.querySelector('.header');
const heroElement = document.querySelector('.hero');
const currentYearValueElement = document.querySelector('.copyright__year');
const scrollLinkElements = document.querySelectorAll('[data-scrollto]');

const toggleMobileMenu = () => {
  hamburgerElement.classList.toggle('active');
  mobileMenuElement.classList.toggle('active');
  shadowElement.classList.toggle('active');
  document.body.classList.toggle('modal-open');
};

hamburgerElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleMobileMenu();
});

const setContentMargin = () => {
  headerElement.nextElementSibling.style.marginTop = headerElement.offsetHeight + "px";
};

const setHeroHeight = () => {
  heroElement.style.height = `calc(100vh - ${headerElement.offsetHeight}px)`;
};

const setCurrentYear = () => {
  const currentDate = new Date();
  currentYearValueElement.innerHTML = currentDate.getFullYear();
};


const scrollToElement = (element) => {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  })
};

const addScrollListener = (elements) => {
  Array.from(elements).forEach((element) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      if(element.classList.contains('navigation__link--mobile')){
        toggleMobileMenu();
      }
      const purposeElement = document.querySelector(element.dataset.scrollto);
      if (purposeElement) {
        scrollToElement(purposeElement);
      }
    })
  });
};

setContentMargin();
setHeroHeight();
setCurrentYear();
addScrollListener(scrollLinkElements);


ymaps.ready(init);
