/*
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-06 10:17:40
 * @LastEditors: your name
 * @LastEditTime: 2019-12-07 20:41:24
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: HomePage,
}, {
    path: '/home',
    name: 'main',
    redirect: '/'
}, {
    path: '/studyNote',
    name: 'studyNote',
    component: () => import('../views/StudyNote.vue')
}, {
    path: '/sourceCode',
    name: 'sourceCode',
    component: () => import('../views/SourceCode.vue')
}, {
    path: '/qesDiscuss',
    name: 'qesDiscuss',
    component: () => import('../views/QuestionDiscussion')
}, {
    path: '/About',
    name: 'about',
    component: () => import('../views/About.vue')
}, {
    path: '/msgBoard',
    name: 'msgBoard',
    component: () => import('../views/MessageBoard.vue')
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    linkExactActiveClass: 'exact-active',
    routes
});

export default router