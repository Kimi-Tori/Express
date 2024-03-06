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