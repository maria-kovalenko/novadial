document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');
  const links = document.querySelectorAll('.menu__link');

  button.addEventListener('click', () => {
    button.classList.toggle('active');
    document.body.classList.toggle('open');
    document.querySelector('.header').classList.toggle('open');

    if (button.classList.contains('active')) {
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
      links.forEach((link) => link.setAttribute('tabindex', '0'));
    } else {
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      links.forEach((link) => link.setAttribute('tabindex', '-1'));
    }
  });
});
