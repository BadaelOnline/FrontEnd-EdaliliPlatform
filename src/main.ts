import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/Store';
import i18n from './js/i18n';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import Aos from 'aos';
import VueLazyLoad from 'vue3-lazyload';
import 'aos/dist/aos.css';
import 'animate.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'normalize.css';
import '../public/fontawesome-free-5.15.1-web/css/all.css';
import "../public/css/icofont.css";
import "jquery";
// Swiper style : navigation and  pagination
import '../src/assets/css/navigation.scss';
import '../src/assets/css/pagination.scss';
import Notifications from '@kyvg/vue3-notification'
// import VueCardCarousel from
require('./store/subscriber');
// store.dispatch('attempt', localStorage.getItem('token'));
//  axios.defaults.headers['Accept-Language'] = lang;

const lang: string = localStorage.getItem('lang') || 'en';
const server: string = localStorage.getItem('server') || 'edalily';
document.documentElement.lang = lang;
store.dispatch('attempt', localStorage.getItem('token')).then(() => {
    Aos.init();
    // axios.defaults.baseURL = 'http://edalili.e-dalely.com/public';
    if (server == 'admin') {
        axios.defaults.baseURL = 'http://admin.e-dalely.com';
    } else if (server == 'edalily') {
        axios.defaults.baseURL = 'http://edalili.e-dalely.com';
    }
    axios.defaults.headers.common = {
        Authorization: `bearer ${localStorage.getItem('token')}`,
    };
    const app = createApp(App).use(store).use(Notifications).use(VueLazyLoad).use(router, axios).use(i18n, VueI18n);
    app.config.globalProperties.axios = axios;

    app.mount('#app');
});
