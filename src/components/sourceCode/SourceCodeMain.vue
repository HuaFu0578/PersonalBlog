<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 20:52:32
 * @LastEditors: your name
 * @LastEditTime: 2019-12-16 10:28:10
 -->
<template>
  <div class="study-wrap">
    <module-introduce :module="module" />
    <deadline-title head="本栏文章" #module>
      <article-list :api="api" />
    </deadline-title>
  </div>
</template>
<script>
import DeadlineTitle from "../common/DeadlineTitle";
import ArticleList from "../common/article/ArticleList";
import ModuleIntroduce from "../common/ModuleIntroduce";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      module: {
        name: "源码分析",
        img: require("@/assets/img/sourcecode.png"),
        intro: "源码分析模块主要用来记录学习探究各种框架语言源码的过程！"
      }
    };
  },
  computed: {
    ...mapGetters(["siteConfig"]),
    api() {
      return {
        getArticle: this.siteConfig.getArticleByType,
        getArticleCount: this.siteConfig.getArticleCountByType,
        params: {
          getArticle: { type: "源码学习" },
          getArticleCount: { type: "源码学习" }
        }
      };
    }
  },
  components: {
    ArticleList,
    DeadlineTitle,
    ModuleIntroduce
  }
};
</script>