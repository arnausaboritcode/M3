/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

/* Boilerplate default JS code

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

*/

// ------ Homepage JS code ------

//Toogle responsive nav, menu and logo

const toogleMenuElement = document.getElementById('toogle-menu');
const mainMenuElement = document.getElementById('main-menu');
const nav = document.getElementById('main-nav');
const logo = document.getElementById('logo');

toogleMenuElement.addEventListener('click', () => {
  mainMenuElement.classList.toggle('c-main-nav__main-menu__show');
  nav.classList.toggle('c-main-nav__toggle');
  logo.classList.toggle('c-main-nav__logoResponsive');
});

//Slider. Photo slide and anclas functionality

const slider = document.querySelector('.c-slider-container__slider');
const links = document.querySelectorAll('.c-slider-container__slider-nav a');


slider.addEventListener('scroll', function () {
  const scrollLeft = slider.scrollLeft;
  const imageWidth = slider.clientWidth;

  links.forEach(function (link, index) {
    if (scrollLeft >= index * imageWidth && scrollLeft < (index + 1) * imageWidth) {
      links.forEach(function (el) {
        el.classList.remove('c-slider-container__slider-nav--active');
      });
      link.classList.add('c-slider-container__slider-nav--active');
    }
  });
});

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
    e.preventDefault();

    links.forEach(function (el) {
      el.classList.remove('c-slider-container__slider-nav--active');
    });

    this.classList.add('c-slider-container__slider-nav--active');

    const index = Array.from(this.parentElement.children).indexOf(this);

    const slider = document.querySelector('.c-slider-container__slider');
    slider.scrollLeft = index * slider.clientWidth;
  });
});


//Initialize Aos library

AOS.init();
