document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.burger-menu');

  button.addEventListener('click', () => {
    button.classList.toggle('active');
    document.body.classList.toggle('open');
    document.querySelector('.header').classList.toggle('open');
  });
});
