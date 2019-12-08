<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 11:08:20
 * @LastEditors: your name
 * @LastEditTime: 2019-12-08 15:27:09
 -->
<template>
  <div>
    <article-item
      class="art-item"
      :article="article"
      v-for="(article,index) in articleList"
      :key="index"
    />
  </div>
</template>
<script>
import ArticleItem from "./ArticleItem";
export default {
  props: ["articleList"],
  components: {
    ArticleItem
  }
};
</script>
<style lang="scss" scoped>
.art-item {
  padding: 10px 10px 20px;
  margin-bottom: 15px;
  box-sizing: border-box;
  height: 230px;
}
</style>