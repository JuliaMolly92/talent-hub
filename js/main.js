// VARIABLES
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Adding and removing open/close classes for hamburger
hamburger.addEventListener('click', function() {
    if (hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        hamburger.classList.add('close');
        hamburgerMenu.classList.remove('fade-menu-in');
        hamburgerMenu.classList.add('fade-menu-out');
    }
    else {
        hamburger.classList.remove('close');
        hamburger.classList.add('open');
        hamburgerMenu.classList.add('fade-menu-in');
        hamburgerMenu.classList.remove('fade-menu-out');
    }
})