<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 20:59:37
 * @LastEditors: your name
 * @LastEditTime: 2019-12-08 21:02:26
 -->
<template>
  <div class="study-wrap">
    <module-introduce :module="module" />
    <deadline-title head="本栏文章" #module>
      <article-list :articleList="articleList" />
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
  props: ["articleList"],
  components: {
    ArticleList,
    DeadlineTitle,
    ModuleIntroduce
  }
};
</script>