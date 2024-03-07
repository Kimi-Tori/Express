const leftImages = document.querySelectorAll('.banner__container-left__block-item__image');
const rightImage = document.querySelector('.banner__container-right__block-image');

const bottomLeftImages = document.querySelectorAll('.banner__container-bottom__left-block__item-image');
const bottomRightImage = document.querySelector('.banner__container-bottom__right-block__image');

const menuButton = document.querySelector('.navbar__right-button');
const mobileMenu = document.querySelector('.navbar__mobile');



leftImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    const index = e.target.getAttribute('data-index');
    rightImage.src = e.target.src;
  });
});

bottomLeftImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    const index = e.target.getAttribute('data-index');
    bottomRightImage.src = e.target.src;
  });
});

menuButton.addEventListener('click', () => {
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    menuButton.textContent = 'Меню';
  } else {
    mobileMenu.classList.add('active');
    menuButton.textContent = 'Закрыть';
  }
});

const navbarMobileItemContainer = document.querySelector('.navbar__mobile-item__container');
const navbarMobileItemAboutTitle = document.querySelector('.navbar__mobile-item__about__title');
const navbarMobileContainer = document.querySelector('.navbar__mobile-container');
const navbarMobileContainerAbout = document.querySelector('.navbar__mobile-container__about');

navbarMobileItemContainer.addEventListener('click', () => {
  navbarMobileContainer.style.display = 'none';
  navbarMobileContainerAbout.style.display = 'block';
});

navbarMobileItemAboutTitle.addEventListener('click', () => {
  navbarMobileContainer.style.display = 'block';
  navbarMobileContainerAbout.style.display = 'none';
});

const slider = document.querySelector('.slider');
const sliderWrapper = slider.querySelector('.slider__wrapper');
const sliderItems = slider.querySelectorAll('.slider__wrapper-item');
const sliderNav = slider.querySelector('.slider__controll-nav');
const sliderNavItems = slider.querySelectorAll('.slider__controll-nav__item');
const sliderArrows = slider.querySelectorAll('.slider__controll-arrow');

let currentSlide = 0;
const marginLeft = 24;

const slideWidth = sliderItems[0].offsetWidth;
const slidesCount = sliderItems.length;

sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

sliderNavItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentSlide = index;
    sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    sliderNavItems.forEach(item => {
      item.classList.remove('active');
    });

    item.classList.add('active');
  });
});

sliderArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('slider-arrow--left')) {
      currentSlide--;
    } else if (arrow.classList.contains('slider-arrow--right')) {
      if (currentSlide < slidesCount - 5) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }
    }

    if (currentSlide < 0) {
      currentSlide = slidesCount - 5;
    } else if (currentSlide >= slidesCount) {
      currentSlide = 0;
    }

    if (currentSlide >= slidesCount - 1) {
      sliderArrows[1].classList.add('disabled');
    } else {
      sliderArrows[1].classList.remove('disabled');
    }

    sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    sliderNavItems.forEach(item => {
      item.classList.remove('active');
    });

    sliderNavItems[currentSlide].classList.add('active');
  });
});