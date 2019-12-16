<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 20:59:37
 * @LastEditors: your name
 * @LastEditTime: 2019-12-16 10:28:53
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
        name: "问题探讨",
        img: require("@/assets/img/qesdiscuss.png"),
        intro:
          "问题模块主要用供大家提问交流，探讨，也有站主平时遇到的问题记录及解决方案。"
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
          getArticle: { type: "问题探讨" },
          getArticleCount: { type: "问题探讨" }
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