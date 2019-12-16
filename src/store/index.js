/*
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-06 10:17:32
 * @LastEditors: your name
 * @LastEditTime: 2019-12-16 12:19:37
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        host: 'http://127.0.0.1:3000',
        API: {
            addDailySentence: '/PersonalBlog/addDailySentence', //添加每日一句
            getDailySentence: '/PersonalBlog/getDailySentence', //获取每日一句
            addArticle: '/PersonalBlog/addArticle', //添加文章
            // modifyArticle: '/PersonalBlog/modifyArticle', //修改文章
            getArticle: '/PersonalBlog/getArticle', //通过更新的时间获取文章
            getArticleById: '/PersonalBlog/getArticleById', //通过文章id获取文章
            getArticleByType: '/PersonalBlog/getArticleByType', //通过分类类型获取文章
            getArticleByTag: '/PersonalBlog/getArticleByTag', //通过标签类型获取文章
            getArticleListByKeyWords: '/PersonalBlog/getArticleListByKeyWords', //通过文章关键词和标签获取文章列表
            getArticleCount: "/PersonalBlog/getArticleCount", //获取所有文章数量
            getArticleCountByType: "/PersonalBlog/getArticleCountByType", //获取指定类型的所有文章数量
            getArticleCountByKeyWords: "/PersonalBlog/getArticleCountByKeyWords", //获取指定关键词的所有文章数量
            getArticleCountByTag: "/PersonalBlog/getArticleCountByTag", //获取相应标签对应的文章数量 TODO:
            addComment: '/PersonalBlog/addComment', //添加评论
            modifyComment: '/PersonalBlog/modifyComment', //修改评论 TODO:
            getComment: '/PersonalBlog/getComment', //通过文章获取相关的评论
            getCommentCount: '/PersonalBlog/getCommentCount', //获取相应文章的总评论条数
            setArticleViews: '/PersonalBlog/setArticleViews', //浏览量累加
            getTags: '/PersonalBlog/getTags', //获取所有的标签
            getRecommendArticle: '/PersonalBlog/getRecommendArticle', //获取推荐的文章
            getHotArticle: '/PersonalBlog/getHotArticle', //获取最热文章
            getCommentRandomAvatar: '/PersonalBlog/getCommentRandomAvatar', //获取评论时随机使用的头像
        },
        curModule: '',
        curArticle: {},
        curComment: [],
        curCommentCount: 0,
    },
    getters: {
        siteConfig(state, getters) {
            let siteObj = {
                host: state.host
            };
            Object.keys(state.API).forEach(key => {
                let value = state.API[key];
                siteObj[key] = `${state.host}${value}`;
            })
            return siteObj;
        }
    },
    mutations: {
        changeCurModule(state, payload) {
            if (!state.door) state.door = true;
            state.curModule = payload;
        },
        setCurArticle(state, payload) {
            if (!state.door) state.door = true;
            state.curArticle = payload;
        },
        updateCurArticleViews(state, payload) {
            if (!state.door) state.door = true;
            state.curArticle = Object.assign({}, state.curArticle, payload);
        },
        updateCurComment(state, payload) {
            if (!state.door) state.door = true;
            state.curComment = payload;
        },
        updateCurCommentCount(state, payload) {
            if (!state.door) state.door = true;
            state.curCommentCount = payload;
        }
    },
});