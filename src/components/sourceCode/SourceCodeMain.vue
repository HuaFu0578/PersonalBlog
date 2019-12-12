<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 20:52:32
 * @LastEditors: your name
 * @LastEditTime: 2019-12-11 20:21:48
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
        name: "源码分析",
        img: require("@/assets/img/sourcecode.png"),
        intro: "源码分析模块主要用来记录学习探究各种框架语言源码的过程！"
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