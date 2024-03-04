const leftImages = document.querySelectorAll('.banner__container-left__block-item__image');
const rightImage = document.querySelector('.banner__container-right__block-image');

const bottomLeftImages = document.querySelectorAll('.banner__container-bottom__left-block__item-image');
const bottomRightImage = document.querySelector('.banner__container-bottom__right-block__image');

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