<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 22:38:01
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 15:48:51
 -->
<template>
  <div class="main-section">
    <div class="slider">轮播图</div>
    <div class="last-article">
      <deadline-title head="最近更新" #module>
        <article-list :articleList="articleList" />
      </deadline-title>
    </div>
  </div>
</template>
<script>
import DeadlineTitle from "../../components/common/DeadlineTitle";
import ArticleList from "../../components/common/article/ArticleList";
export default {
  props: ["articleList"],
  components: {
    DeadlineTitle,
    ArticleList
  }
};
</script>
<style lang="scss" scoped>
.main-section {
  width: 100%;

  .slider {
    width: 100%;
    height: 260px;
    background-color: #f40;
    margin-bottom: 20px;
  }

  .recommend {
    width: 100%;
    margin-bottom: 20px;
  }

  .last-article {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>