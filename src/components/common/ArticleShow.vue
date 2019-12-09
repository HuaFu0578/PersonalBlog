<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 21:43:18
 * @LastEditors: your name
 * @LastEditTime: 2019-12-09 09:26:35
 -->
<template>
  <article class="article">
    <h1 class="title">{{article.title}}</h1>
    <div class="info">
      <div class="mr-gap author">作者: {{article.author}}</div>
      <div class="mr-gap date">日期: {{article.date}}</div>
      <div class="mr-gap tags">标签: {{joinTags(article.tags)}}</div>
      <div class="mr-gap views">浏览量: {{article.views}}</div>
    </div>
    <section class="section" v-html="article.content" />
  </article>
</template>
<script>
export default {
  props: ["article"],
  methods: {
    joinTags(tags) {
      return tags.join(" | ");
    }
  }
};
</script>
<style lang="scss" scoped>
.article {
  width: 100%;
  background-color: #fff;
  padding: 20px 25px;
  box-sizing: border-box;
  text-align: center;

  .title {
    width: 100%;
    padding: 20px 0;
    margin-bottom: 10px;
  }
  .info {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    margin-bottom: 30px;
    border: 1px dashed #aaa;
    display: flex;
    justify-content: center;
    align-items: center;

    .mr-gap {
      margin-right: 15px;
    }
  }
  .section {
    width: 100%;
    text-align: justify;
    line-height: 1.8;
    letter-spacing: 2px;
    text-indent: 2em;
    font-size: 18px;
  }
}
</style>