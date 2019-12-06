/*
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-06 10:17:40
 * @LastEditors: your name
 * @LastEditTime: 2019-12-06 15:47:40
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: Home
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router