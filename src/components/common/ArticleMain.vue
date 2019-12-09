<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 21:31:42
 * @LastEditors: your name
 * @LastEditTime: 2019-12-09 13:49:16
 -->
<template>
  <div class="art-main">
    <location :pathList="pathList" />
    <article-show class="artshow" :article="article" />
    <deadline-title
      #module
      head="文章评论"
      :more="`
      <div style='font-size:18px;'>
        共有
        <a style='color:red;padding:0 5px;font-size:20px;font-weight:600;'>
          ${commentTotal}
          </a>条评论
        </div>`"
    >
      <comment />
    </deadline-title>
  </div>
</template>
<script>
import Location from "./Location";
import ArticleShow from "./ArticleShow";
import Comment from "./Comment";
import DeadlineTitle from "../DeadlineTitle";

export default {
  data() {
    return {
      commentTotal: 12
    };
  },
  props: ["pathList", "article"],
  components: {
    Location,
    ArticleShow,
    Comment,
    DeadlineTitle
  }
};
</script>
<style lang="scss" scoped>
.artshow {
  margin-bottom: 20px;
}
</style>