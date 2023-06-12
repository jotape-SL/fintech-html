const navHamburger = document.querySelector('.icone-hamburger');

navHamburger.addEventListener('click', () => {
  navHamburger.classList.toggle('menu-lateral__active');
  const active = navHamburger.classList.contains('menu-lateral__active');
  if (active) {
    navHamburger.setAttribute('aria-label', 'Fechar Menu');
    navHamburger.setAttribute('aria-expanded', true);
  } else {
    navHamburger.setAttribute('aria-label', 'Abrir Menu');
    navHamburger.setAttribute('aria-expanded', false);
  }
});
