
import { createSwipers } from 'vuex';

const Swipers = createSwipers('.swiper-container',{
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },

});

export default Swipers;
