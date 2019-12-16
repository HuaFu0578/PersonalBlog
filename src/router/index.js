/*
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-06 10:17:40
 * @LastEditors: your name
 * @LastEditTime: 2019-12-14 14:10:17
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import HomeWrap from '../views/subViews/HomeWrap.vue'
Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: HomePage,
    meta: {
        name: '首页',
        to: {
            name: 'home'
        }
    },
    children: [{ //首页
        path: '',
        name: 'home',
        component: HomeWrap,

    }, {
        path: 'article',
        name: 'home_article',
        meta: {
            name: "文章展示",
        },
        component: () => import('../views/subViews/FormalArticle.vue'),
    }, {
        path: 'tags/:count',
        name: 'tagClassify',
        meta: {
            name: "标签搜索",
        },
        component: () => import('../views/subViews/TagSearch.vue')
    }, {
        path: 'article',
        name: 'tagClassify_article',
        redirect: {
            name: 'home_article'
        }
    }, {
        path: 'keywords',
        name: 'keywordClassify',
        meta: {
            name: "关键词搜索"
        },
        component: () => import('../views/subViews/KeyWordsSearch.vue')
    }, {
        path: 'article',
        name: 'keywordClassify_article',
        redirect: {
            name: 'home_article'
        }
    }]
}, { //首页重定向
    path: '/home',
    redirect: '/'
}, { //学习笔记
    path: '/studyNote',
    meta: {
        name: '学习笔记',
        to: {
            name: 'studyNote'
        }
    },
    component: () => import('../views/StudyNote.vue'),
    children: [{
            path: '',
            name: 'studyNote',
            component: () => import('../views/subViews/StudyNoteWrap.vue')
        },
        {
            path: 'article',
            name: 'studyNote_article',
            meta: {
                name: '文章展示',
            },
            component: () => import('../views/subViews/FormalArticle.vue'),
        }
    ]
}, { //源码学习
    path: '/sourceCode',
    meta: {
        name: '源码学习',
        to: {
            name: 'sourceCode'
        }
    },
    component: () => import('../views/SourceCode.vue'),
    children: [{
        path: '',
        name: 'sourceCode',
        component: () => import('../views/subViews/SourceCodeWrap.vue')
    }, {
        path: 'article',
        name: 'sourceCode_article',
        meta: {
            name: "文章展示"
        },
        component: () => import('../views/subViews/FormalArticle.vue'),
    }]
}, { //问题探讨
    path: '/questionDiscuss',
    meta: {
        name: '问题探讨',
        to: {
            name: 'questionDiscuss'
        }
    },
    component: () => import('../views/QuestionDiscussion.vue'),
    children: [{
        path: '',
        name: 'questionDiscuss',
        component: () => import('../views/subViews/QuestionDiscussWrap.vue')

    }, {
        path: 'article',
        name: 'questionDiscuss_article',
        meta: {
            name: '文章展示'
        },
        component: () => import('../views/subViews/FormalArticle.vue'),
    }]
}, { //生活随记
    path: '/liveRecord',
    meta: {
        name: '生活随记',
        to: {
            name: 'liveRecord'
        }
    },
    component: () => import('../views/LiveRecord.vue'),
    children: [{
        path: '',
        name: 'liveRecord',
        component: () => import('../views/subViews/LiveRecordWrap.vue')
    }, {
        path: 'article',
        name: 'liveRecord_article',
        meta: {
            name: '文章展示'
        },
        component: () => import('../views/subViews/FormalArticle.vue'),
    }]
}, { //关于
    path: '/About',
    name: 'about',
    component: () => import('../views/About.vue')
}, { //留言板
    path: '/msgBoard',
    name: 'msgBoard',
    component: () => import('../views/MessageBoard.vue')
}, { //文章编辑
    path: '/articleEditor',
    name: 'articleEditor',
    component: () => import('../views/subViews/other/ArticleEditor.vue')
}, { //每日一句编辑
    path: '/dailySentenceEditor',
    name: 'dailySentenceEditor',
    component: () => import('../views/subViews/other/DailySentenceEditor.vue')
}, { //404
    path: '*',
    redirect: '/'
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    linkExactActiveClass: 'exact-active',
    routes
});

export default router