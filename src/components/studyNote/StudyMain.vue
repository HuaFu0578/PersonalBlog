<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 15:49:07
 * @LastEditors: your name
 * @LastEditTime: 2019-12-12 16:29:59
 -->
<template>
  <div class="study-wrap">
    <module-introduce :module="module" />
    <deadline-title head="本栏文章" #module>
      <article-list :articleList="articleList" :readArticle="readArticle" />
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
        name: "学习笔记",
        img: require("@/assets/img/studynote.png"),
        intro: "学习笔记模块主要用来记录平时学习过程的经验，心得！"
      }
    };
  },
  props: ["articleList", "readArticle"],
  components: {
    ArticleList,
    DeadlineTitle,
    ModuleIntroduce
  }
};
</script>