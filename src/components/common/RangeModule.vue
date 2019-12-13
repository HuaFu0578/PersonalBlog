<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 21:03:51
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 17:11:20
 -->
<template>
  <ul class="list">
    <li class="item" v-for="(item,index) in titleList" :key="index">
      <span class="order">{{index + 1}}</span>
      <router-link
        :to="{name:'home_article',query:{article_id:item.id,title:item.title}}"
        class="title"
      >{{item.title}}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["titleList"]
};
</script>
<style lang="scss" scoped>
.list {
  width: 100%;

  .item {
    width: 100%;
    line-height: 25px;
    padding: 3px 0;

    &:nth-of-type(2n + 1) {
      background-color: rgb(250, 255, 255);
    }
    &:nth-of-type(2n) {
      background-color: rgb(255, 250, 255);
    }

    .order {
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 4px;
      color: #fff;
      background-color: rgb(117, 112, 117);
      margin-right: 8px;
    }

    .title:hover {
      color: #f20;
    }

    &:nth-of-type(1) .order {
      background-color: #f40;
    }
    &:nth-of-type(2) .order {
      background-color: rgb(245, 159, 62);
    }
    &:nth-of-type(3) .order {
      background-color: rgb(15, 213, 240);
    }
  }
}
</style>