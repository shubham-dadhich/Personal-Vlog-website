const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.horizontal-list');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});