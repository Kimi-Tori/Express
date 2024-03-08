/* const leftImages = document.querySelectorAll('.banner__container-left__block-item__image');
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
}); */

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

const sliderFirst = document.querySelector('.slider__first');
const sliderFirstWrapper = sliderFirst.querySelector('.slider__first-wrapper');
const sliderFirstItems = sliderFirst.querySelectorAll('.slider__first-wrapper__item');
const sliderFirstNav = sliderFirst.querySelector('.slider__first-controll__nav');
const sliderFirstNavItems = sliderFirst.querySelectorAll('.slider__first-controll__nav-item');
const sliderFirstArrows = sliderFirst.querySelectorAll('.slider__first-controll__nav-arrow');

let currentSlideFirst = 0;
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

const slideFirstWidth = sliderFirstItems[0].offsetWidth + 24; // Добавили отступ справа к ширине карточки
const slidesFirstCount = sliderFirstItems.length;

sliderFirstWrapper.style.transform = `translateX(-${currentSlideFirst * slideFirstWidth}px)`;

sliderFirstNavItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentSlideFirst = index;
    sliderFirstWrapper.style.transform = `translateX(-${currentSlideFirst * slideFirstWidth}px)`;

    sliderFirstNavItems.forEach(item => {
      item.classList.remove('active');
    });

    item.classList.add('active');
  });
});

sliderFirstArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('slider-first-arrow--left')) {
      currentSlideFirst--;
    } else if (arrow.classList.contains('slider-first-arrow--right')) {
      if (currentSlideFirst < slidesFirstCount - 3) {
        currentSlideFirst++;
      } else {
        currentSlideFirst = 0;
      }
    }

    if (currentSlideFirst < 0) {
      currentSlideFirst = slidesFirstCount - 3;
    } else if (currentSlideFirst >= slidesFirstCount) {
      currentSlideFirst = 0;
    }

    if (currentSlideFirst >= slidesFirstCount - 1) {
      sliderFirstArrows[1].classList.add('disabled');
    } else {
      sliderFirstArrows[1].classList.remove('disabled');
    }

    sliderFirstWrapper.style.transform = `translateX(-${currentSlideFirst * slideFirstWidth}px)`;

    sliderFirstNavItems.forEach(item => {
      item.classList.remove('active');
    });

    sliderFirstNavItems[currentSlideFirst].classList.add('active');
  });
});

sliderFirstWrapper.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.clientX;
  prevTranslate = currentTranslate;
});

sliderFirstWrapper.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  currentTranslate = prevTranslate + (e.clientX - startPosition);
  sliderFirstWrapper.style.transform = `translateX(${currentTranslate}px)`;
});

sliderFirstWrapper.addEventListener('mouseup', () => {
  isDragging = false;

  if (currentTranslate > 0) {
    currentSlideFirst = 0;
  } else if (currentTranslate < -slideFirstWidth * (slidesFirstCount - 1)) {
    currentSlideFirst = slidesFirstCount - 1;
  } else {
    currentSlideFirst = Math.round(-currentTranslate / slideFirstWidth);
  }

  sliderFirstWrapper.style.transform = `translateX(-${currentSlideFirst * slideFirstWidth}px)`;

  sliderFirstNavItems.forEach(item => {
    item.classList.remove('active');
  });

  sliderFirstNavItems[currentSlideFirst].classList.add('active');
});

if (window.innerWidth <= 1280) {
  let currentSlideFirst = 0;

  const slideFirstWidth = sliderFirstItems[0].offsetWidth; // Добавили отступ справа к ширине карточки
  const slidesFirstCount = sliderFirstItems.length;

  sliderFirstWrapper.style.transform = `translateX(-${currentSlideFirst * slideFirstWidth}px)`;

  sliderFirstNavItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentSlideFirst = index;
      sliderFirstWrapper.style.transform = `translateX(-${currentSlideFirst * slideFirstWidth}px)`;

      sliderFirstNavItems.forEach(item => {
        item.classList.remove('active');
      });

      item.classList.add('active');
    });
  });

  sliderFirstArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.classList.contains('slider-first-arrow--left')) {
        currentSlideFirst--;
      } else if (arrow.classList.contains('slider-first-arrow--right')) {
        if (currentSlideFirst < slidesFirstCount - 3) {
          currentSlideFirst++;
        } else {
          currentSlideFirst = 0;
        }
      }

      if (currentSlideFirst < 0) {
        currentSlideFirst = slidesFirstCount - 3;
      } else if (currentSlideFirst >= slidesFirstCount) {
        currentSlideFirst = 0;
      }

      if (currentSlideFirst >= slidesFirstCount - 1) {
        sliderFirstArrows[1].classList.add('disabled');
      } else {
        sliderFirstArrows[1].classList.remove('disabled');
      }

      sliderFirstWrapper.style.transform = `translateX(-${currentSlideFirst * slideFirstWidth}px)`;

      sliderFirstNavItems.forEach(item => {
        item.classList.remove('active');
      });

      sliderFirstNavItems[currentSlideFirst].classList.add('active');
    });
  });

  sliderFirstWrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    startPosition = e.touches[0].clientX;
    prevTranslate = currentTranslate;
  });

  sliderFirstWrapper.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    currentTranslate = prevTranslate + (e.touches[0].clientX - startPosition);
    sliderFirstWrapper.style.transform = `translateX(${currentTranslate}px)`;
  });

  sliderFirstWrapper.addEventListener('touchend', () => {
    isDragging = false;

    if (currentTranslate > 0) {
      currentSlideFirst = 0;
    } else if (currentTranslate < -slideFirstWidth * (slidesFirstCount - 1)) {
      currentSlideFirst = slidesFirstCount - 1;
    } else {
      currentSlideFirst = Math.round(-currentTranslate / slideFirstWidth);
    }

    sliderFirstWrapper.style.transform = `translateX(-${currentSlideFirst * slideFirstWidth}px)`;

    sliderFirstNavItems.forEach(item => {
      item.classList.remove('active');
    });

    sliderFirstNavItems[currentSlideFirst].classList.add('active');
  });
}

const sliderDelivery = document.querySelector('.delivery__mobile-slider');
const sliderItemsDelivery = document.querySelectorAll('.delivery__mobile-slider__wrapper-item');
const sliderWidthDelivery = sliderItemsDelivery[0].offsetWidth;

let currentSlideDelivery = 0;
let isDraggingDelivery = false;
let startPositionDelivery = 0;
let currentTranslateDelivery = 0;
let prevTranslateDelivery = 0;

const slideDeliveryWidth = sliderItemsDelivery[0].offsetWidth; // Добавили отступ справа к ширине карточки
const slidesDeliveryCount = sliderItemsDelivery.length;

sliderDelivery.style.transform = `translateX(-${currentSlideDelivery * slideDeliveryWidth}px)`;

sliderItemsDelivery.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentSlideDelivery = index;
    sliderDelivery.style.transform = `translateX(-${currentSlideDelivery * slideDeliveryWidth}px)`;
  });
});

sliderDelivery.addEventListener('touchstart', (e) => {
  isDraggingDelivery = true;
  startPositionDelivery = e.touches[0].clientX;
  prevTranslateDelivery = currentTranslateDelivery;
});

sliderDelivery.addEventListener('touchmove', (e) => {
  if (!isDraggingDelivery) return;

  currentTranslateDelivery = prevTranslateDelivery + (e.touches[0].clientX - startPositionDelivery);
  sliderDelivery.style.transform = `translateX(${currentTranslateDelivery}px)`;
});

sliderDelivery.addEventListener('touchend', () => {
  isDraggingDelivery = false;

  if (currentTranslateDelivery > 0) {
    currentSlideDelivery = 0;
  } else if (currentTranslateDelivery < -slideDeliveryWidth * (slidesDeliveryCount - 1)) {
    currentSlideDelivery = slidesDeliveryCount - 1;
  } else {
    currentSlideDelivery = Math.round(-currentTranslateDelivery / slideDeliveryWidth);
  }

  sliderDelivery.style.transform = `translateX(-${currentSlideDelivery * slideDeliveryWidth}px)`;
});