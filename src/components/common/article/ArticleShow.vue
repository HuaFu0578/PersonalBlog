<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 21:43:18
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 09:15:51
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
    <div class="tick">
      <div class="tick-ico like" @click="toggleClass('like')" :class="{liked:tickResult=='like'}"></div>
      <div
        class="tick-ico unlike"
        @click="toggleClass('unlike')"
        :class="{unliked:tickResult=='unlike'}"
      ></div>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      tickResult: ""
    };
  },
  props: ["article"],
  methods: {
    joinTags(tags) {
      if (!tags) return;
      return tags.replace(/,|，/g, " | ");
    },
    toggleClass(tick) {
      if (tick == this.tickResult) this.tickResult = "";
      else this.tickResult = tick;
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
      margin-right: 20px;
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
  .tick {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .tick-ico {
      width: 80px;
      height: 80px;
      margin-right: 30px;
      background-size: 80% 80%;
      background-position: center center;
      background-repeat: no-repeat;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &.like {
        background-image: url("~@/assets/img/like.png");
        &.liked {
          background-image: url("~@/assets/img/like_fill.png");
        }
      }

      &.unlike {
        background-image: url("~@/assets/img/unlike.png");
        &.unliked {
          background-image: url("~@/assets/img/unlike_fill.png");
        }
      }
    }
  }
}
</style>