/*
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-06 09:55:59
 * @LastEditors: your name
 * @LastEditTime: 2019-12-16 17:11:06
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';
import {
    Pagination
} from 'element-ui';

// import vueSwiper from 'vue-awesome-swiper'
// /* 样式的话，我这里有用到分页器，就在全局中引入了样式 */
// import 'swiper/dist/css/swiper.css'
// Vue.use(vueSwiper);


// 引入 Froala Editor js file.
// require('froala-editor/js/froala_editor.pkgd.min')

//引入中文语言包
// require('froala-editor/js/languages/zh_cn')

//引入 Froala Editor css files.
// require('froala-editor/css/froala_editor.pkgd.min.css')
// require('font-awesome/css/font-awesome.css') //此处可在index.html中引入：font-awesome cdn地址：<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
// require('froala-editor/css/froala_style.min.css')
// Import and use Vue Froala lib.
// import VueFroala from 'vue-froala-wysiwyg'
// Vue.use(VueFroala)





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