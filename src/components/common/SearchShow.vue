<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-13 19:25:57
 * @LastEditors: your name
 * @LastEditTime: 2019-12-16 12:44:43
 -->
<template>
  <div class="search-show">
    <div class="main">
      <body-block #module>
        <location  />
        <deadline-title
          :head="head"
          #module
          :more="`共
          <span style='color:red;font-size:18px;font-weight:600;'>
            &nbsp;${resultCount}&nbsp;
            </span>篇`"
        >
          <article-list :api="api" @localCount="localCount" />
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
export default {
  data() {
    return {
      resultCount: 0
    };
  },
  props: ["head","api"],
  components: {
    BodyBlock,
    ArticleList,
    DeadlineTitle,
    Location
  },
  methods: {
    localCount(val) {
      this.resultCount = val;
    }
  },
};
</script>
<style lang="scss" scoped>
.search-show {
  width: 100%;
}
</style>