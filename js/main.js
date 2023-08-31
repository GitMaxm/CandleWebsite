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

const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        2560: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
        410: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 1,
        },
    },
});

const accordeon = document.querySelector('.accordeon')
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title')

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
    accordeonTitle.addEventListener('click', function () {
        const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');
        
        accordeonTitle.classList.toggle('accordeon__title--active');
        currentText.classList.toggle('accordeon__title--visible');

        if (currentText.classList.contains('accordeon__title--visible')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        } else {
            currentText.style.maxHeight = null
        }
    });
});