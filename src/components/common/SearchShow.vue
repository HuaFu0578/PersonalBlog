<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-13 19:25:57
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 19:58:29
 -->
<template>
  <div class="search-show">
    <div class="main">
      <body-block #module>
        <location :pathList="pathList" />
        <deadline-title
          :head="head"
          #module
          :more="`共
          <span style='color:red;font-size:18px;font-weight:600;'>
            &nbsp;${resultCount}&nbsp;
            </span>篇`"
        >
          <article-list :articleList="articleList" />
        </deadline-title>
      </body-block>
    </div>
  </div>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import ArticleList from "../../components/common/article/ArticleList";
import DeadlineTitle from "../../components/common/DeadlineTitle";
import Location from "../../components/common/Location";
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      pathList: [
        { to: "/studyNote", name: "学习笔记" },
        { to: "/sourceCode", name: "源码分析" },
        { to: "/liveRecord", name: "生活随记" }
      ]
    };
  },
  props: ["head", "resultCount", "articleList"],
  components: {
    BodyBlock,
    ArticleList,
    DeadlineTitle,
    Location
  }
};
</script>
<style lang="scss" scoped>
.search-show {
  width: 100%;
}
</style>