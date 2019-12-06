/*
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-06 09:55:59
 * @LastEditors: your name
 * @LastEditTime: 2019-12-06 15:47:06
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');