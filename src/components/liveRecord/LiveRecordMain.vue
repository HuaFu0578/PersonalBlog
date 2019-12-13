<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 21:03:11
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 15:50:43
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
        name: "生活随记",
        img: require("@/assets/img/liverecord.png"),
        intro: "生活随记模块主要用来记录平时的点滴生活。随记，让生活更高效！"
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