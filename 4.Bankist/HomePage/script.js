'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
const imgTarget = document.querySelectorAll('img[data-src]');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Navbar fade Animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//Scrolling effect on navbar
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const navHeight = nav.getBoundingClientRect().height;

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  rootMargin: `-${navHeight}px`, //'-90px'
  threshold: 0,
});

headerObserver.observe(header);

//Smooth Scrolling
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Scrolling with event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Scrolling Effect on the Section
const revealSection = function (entries, observer) {
  entries.forEach(function (entry) {
    // const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return; //Guard Clause
    // if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
    // }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: [0.15, 1],
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//Lazy Loading Images
const lazyLoading = function (entries, observer) {
  entries.forEach(entry => {
    // const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return; //Guard Clause
    //Changing the image
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', () =>
      entry.target.classList.remove('lazy-img')
    );
    observer.unobserve(entry.target);
  });
};

const imgObserver = new IntersectionObserver(lazyLoading, {
  root: null,
  threshold: [0, 1],
});

imgTarget.forEach(img => imgObserver.observe(img));

//Tabbed Components
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //Guard Clause
  if (!clicked) return;
  //making the tabs reactive
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  //Deactivate the content area
  tabContent.forEach(c => c.classList.remove('operations__content--active'));
  //Activete the clicked content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;
  //Function
  const gotoSLide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //Function for Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    gotoSLide(curSlide);
  };

  //Function for Previous Slide
  const previousSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;
    gotoSLide(curSlide);
  };

  //button Add Event listner in Slider
  btnLeft.addEventListener('click', previousSlide);
  btnRight.addEventListener('click', nextSlide);
  //Slider on arrow key press
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && previousSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  //Creating the bullets for slider
  const createDots = function () {
    slides.forEach((_, i) =>
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
    );
  };
  //Activating the Dots
  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  const init = function () {
    gotoSLide(0);
    createDots();
    activateDots(0);
  };
  init();

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      gotoSLide(slide);
      activateDots(slide);
    }
  });
};
slider();
