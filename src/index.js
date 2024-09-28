/* eslint-disable no-undef */
import './styles/index.scss';


const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 19,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const button = document.querySelector(".burger-menu");

button.addEventListener("click", () => {
	button.classList.toggle("active");
	document.body.classList.toggle("open");
	document.querySelector('.header').classList.toggle("open");

});



// function isDesktop() {
//   return !('ontouchstart' in window) || !('onmsgesturechange' in window);
// }

if (window.innerWidth >= 1024) {
  console.log(window.innerWidth)
  document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
        body.classList.add('scrolling');
    } else {
        window.scrollBy({
            top: -window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
        body.classList.remove('scrolling');
    }
  });

  document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const num = -1612;
    document.querySelector('.body-bg').style.backgroundPositionY = num - -(scrolled / 24 ) + 'px';
  });
}

// if (isDesktop()) {
// document.addEventListener('wheel', function(event) {
//   if (event.deltaY > 0) {
//       window.scrollBy({
//           top: window.innerHeight,
//           left: 0,
//           behavior: 'smooth'
//       });
//       body.classList.add('scrolling');
//   } else {
//       window.scrollBy({
//           top: -window.innerHeight,
//           left: 0,
//           behavior: 'smooth'
//       });
//       body.classList.remove('scrolling');
//   }
// });

// window.addEventListener('scroll', function() {
//   const scrolled = window.pageYOffset;
//   const num = -1612;
//   document.querySelector('.body-bg').style.backgroundPositionY = num - -(scrolled / 24 ) + 'px';
// });
// }
