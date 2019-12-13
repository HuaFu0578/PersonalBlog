<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 15:49:07
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 15:47:19
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
import DeadlineTitle from "../common/DeadlineTitle";
import ArticleList from "../common/article/ArticleList";
import ModuleIntroduce from "../common/ModuleIntroduce";
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
  props: ["articleList"],
  components: {
    ArticleList,
    DeadlineTitle,
    ModuleIntroduce
  }
};
</script>