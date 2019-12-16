<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 15:49:07
 * @LastEditors: your name
 * @LastEditTime: 2019-12-16 10:27:39
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
        name: "学习笔记",
        img: require("@/assets/img/studynote.png"),
        intro: "学习笔记模块主要用来记录平时学习过程的经验，心得！"
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
          getArticle: { type: "学习笔记" },
          getArticleCount: { type: "学习笔记" }
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