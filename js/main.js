// VARIABLES
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const arrowPrev = document.querySelector('.slider-button-prev');
const arrowNext = document.querySelector('.slider-button-next');
const totalSliders = document.querySelectorAll('.slider');
const sliderBar = document.querySelector('.slider-bar-selector');
let slideBarSelectorWidth = document.querySelector('.slider-bar-selector').offsetWidth;

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// !!!!!!! THIS NEEDS TO BE UPDATED ON EVERY SCREEN ADJUSTMENT !!!!!!!
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
window.addEventListener('resize', function() {
    slideBarSelectorWidth = document.querySelector('.slider-bar-selector').offsetWidth;
    sliderBar.style.left = slideBarSelectorWidth * parseInt(document.querySelector('.slider.active').getAttribute('data-slider')-1) + 'px';
});

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
function removeaddClasses (activeSlider, num, firstClass, secondClass) {
    totalSliders[parseInt(activeSlider.getAttribute('data-slider'))-1].classList.remove('active');
    totalSliders[parseInt(activeSlider.getAttribute('data-slider'))-1].classList.add(firstClass);
    totalSliders[num].classList.add('active');
    totalSliders[num].classList.remove(secondClass);

    sliderBar.style.left = slideBarSelectorWidth * num + 'px';
}

// LOOPING SLIDER
function restartSlider(x, firstClass, secondClass) {
    totalSliders.forEach(el => {
        el.classList.remove('active', firstClass);
        el.classList.add(secondClass);
    });

    totalSliders[x].classList.add('active');
    totalSliders[x].classList.remove(secondClass);        
};

// PREVIOUS SLIDE
arrowPrev.addEventListener('click', function() {
    const activeSlider = document.querySelector('.slider.active');
    const num = parseInt(activeSlider.getAttribute('data-slider'))-2;

    if (num == -1) {
        restartSlider(6, 'slider-next', 'slider-prev');
        sliderBar.style.left = slideBarSelectorWidth * 6 + 'px';
    }
    else {
        removeaddClasses(activeSlider, num, 'slider-next', 'slider-prev');
    }
});

// NEXT SLIDE
arrowNext.addEventListener('click', function() {
    const activeSlider = document.querySelector('.slider.active');
    const num = parseInt(activeSlider.getAttribute('data-slider'));

    if (parseInt(activeSlider.getAttribute('data-slider')) == totalSliders.length) {
        restartSlider(0, 'slider-prev', 'slider-next');
        sliderBar.style.left = '0px';
    }
    else {
        removeaddClasses(activeSlider, num, 'slider-prev', 'slider-next');
    }

});
