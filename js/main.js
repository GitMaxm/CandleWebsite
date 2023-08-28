const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');
menuBtn.addEventListener('click', function (e) {
    menuMobile.classList.toggle('menu__open')
});

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
});