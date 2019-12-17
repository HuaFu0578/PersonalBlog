/*
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-06 09:55:59
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';
import {
    Pagination
} from 'element-ui';

import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(vueSwiper);


import CKeditor from '@ckeditor/ckeditor5-vue'
Vue.use(CKeditor)

Vue.use(Pagination)

Vue.prototype.$axios = axios;


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');