const $button = document.getElementById("header__menu");
const $links = document.getElementById("header__links");

$button.addEventListener('click', () => {
  $links.classList.toggle('header__menu--close');
  $links.classList.toggle('header__menu--open');
})