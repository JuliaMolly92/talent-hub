// VARIABLES
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const arrowPreview = document.querySelector('.slider-button-prev');
const arrowNext = document.querySelector('.slider-button-next');
const totalSliders = document.querySelectorAll('.slider');
const sliderBar = document.querySelector('.slider-bar-selector');

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// !!!!!!! THIS NEEDS TO BE UPDATED ON EVERY SCREEN ADJUSTMENT !!!!!!!
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
const slideBarSelectorWidth = window.innerWidth / 7;

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
});

// Sliderers moving back and forth
arrowNext.addEventListener('click', function() {
    const activeSlider = document.querySelector('.slider.active');
    const barLeft = slideBarSelectorWidth * parseInt(activeSlider.getAttribute('data-slider'));

    if(parseInt(activeSlider.getAttribute('data-slider')) == totalSliders.length) {
        totalSliders.forEach(el => {
            el.classList.remove('active', 'slider-prev');
            el.classList.add('slider-next');
        });
        totalSliders[0].classList.add('active');
        totalSliders[0].classList.remove('slider-next');
        sliderBar.style.left = '0px';
    }
    else {
        totalSliders[parseInt(activeSlider.getAttribute('data-slider'))-1].classList.remove('active');
        totalSliders[parseInt(activeSlider.getAttribute('data-slider'))-1].classList.add('slider-prev');
        totalSliders[parseInt(activeSlider.getAttribute('data-slider'))].classList.add('active');
        totalSliders[parseInt(activeSlider.getAttribute('data-slider'))].classList.remove('slider-next');
        sliderBar.style.left = barLeft + 'px';
    }
})