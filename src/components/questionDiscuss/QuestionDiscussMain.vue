<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 20:59:37
 * @LastEditors: your name
 * @LastEditTime: 2019-12-11 21:20:01
 -->
<template>
  <div class="study-wrap">
    <module-introduce :module="module" />
    <deadline-title head="本栏文章" #module>
      <article-list :articleList="articleList" :readArticle="readArticle"/>
    </deadline-title>
  </div>
</template>
<script>
import DeadlineTitle from "../DeadlineTitle";
import ArticleList from "../ArticleList";
import ModuleIntroduce from "../ModuleIntroduce";
export default {
  data() {
    return {
      module: {
        name: "问题探讨",
        img: require("@/assets/img/qesdiscuss.png"),
        intro: "问题模块主要用供大家提问交流，探讨，也有站主平时遇到的问题记录及解决方案。"
      }
    };
  },
  props: ["articleList","readArticle"],
  components: {
    ArticleList,
    DeadlineTitle,
    ModuleIntroduce
  }
};
</script>