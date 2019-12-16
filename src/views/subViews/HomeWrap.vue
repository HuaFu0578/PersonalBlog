<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-13 11:10:57
 * @LastEditors: your name
 * @LastEditTime: 2019-12-14 16:45:33
 -->
<template>
  <body-block #module class="home-page-main">
    <home-main />
  </body-block>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import HomeMain from "../../components/home/HomeMain";
export default {
  components: {
    BodyBlock,
    HomeMain
  }
};
</script>