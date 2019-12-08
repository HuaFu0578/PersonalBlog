<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 11:08:44
 * @LastEditors: your name
 * @LastEditTime: 2019-12-08 15:41:40
 -->
<template>
  <div class="wrapper">
    <div class="img-show">
      <img class="img" :src="article.img" :alt="article.title" />
    </div>
    <div class="profit">
      <h3 class="title">{{article.title}}</h3>
      <p class="content">{{article.content}}</p>
      <div class="info">
        <div class="author front-ico">{{article.author}}</div>
        <div class="date front-ico">{{article.date}}</div>
        <div class="tags front-ico">{{article.tags}}</div>
        <div class="read-all">阅读全文</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["article"]
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 2px 3px 2px rgb(233, 232, 232);
  transform: scale(1);
  transition: 0.3s linear box-shadow, 0.3s linear transform;

  &:hover {
    box-shadow: 3px 4px 4px #777;
    transform: scale(1.01);
  }

  .img-show {
    width: 200px;
    max-height: 200px;
    overflow: hidden;

    .img {
      width: 100%;
      height: 100%;
      transform: scale(1);
      transition: 0.8s linear transform;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
  .profit {
    width: 100%;
    height: 200px;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    .title {
      width: 100%;
      height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
    }

    .content {
      width: 100%;
      height: 120px;
      margin-bottom: 15px;
      text-indent: 2em;
      font-size: 18px;
      line-height: 1.8;
      text-align: justify;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    .info {
      width: 100%;
      height: 30px;
      padding-left: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;

      .front-ico {
        padding: 0 25px 0 24px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 2px;
          margin: auto;
          width: 1em;
          height: 1em;
          background-position: center center;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
      .author {
        &::before {
          background-image: url("~@/assets/img/author.png");
        }
      }

      .date {
        &::before {
          background-image: url("~@/assets/img/date.png");
        }
      }

      .tags {
        &::before {
          background-image: url("~@/assets/img/tags.png");
        }
      }

      .read-all {
        position: absolute;
        z-index: 1;
        right: 20px;
        bottom: 0;
        top: 0;
        margin: auto;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 80px;
        background-color: rgb(253, 104, 241);
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: rgb(250, 144, 241);
        }
      }
    }
  }
}
</style>