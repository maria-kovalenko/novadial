document.addEventListener('DOMContentLoaded', function () {

  document.addEventListener('wheel', function (event) {
    if (window.innerWidth >= 1024) {
      if (event.deltaY > 0) {
        window.scrollBy({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth',
        });
        document.body.classList.add('scrolling');
      } else {
        window.scrollBy({
          top: -window.innerHeight,
          left: 0,
          behavior: 'smooth',
        });
        document.body.classList.remove('scrolling');
      }
    }
  });

  document.addEventListener('scroll', function () {
    if (window.innerWidth >= 1024) {
      const scrolled = window.pageYOffset;
      const num = -1612;
      document.querySelector('.body-bg').style.backgroundPositionY =
        num - -(scrolled / 24) + 'px';
    }
  });
})
