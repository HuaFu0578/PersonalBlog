<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 09:33:08
 * @LastEditors: your name
 * @LastEditTime: 2019-12-07 22:40:09
 -->
<template>
  <div class="home-page">
    <body-block #module>
      <home-main />
    </body-block>
  </div>
</template>
<script>
import BodyBlock from "../components/BodyBlock";
import HomeMain from "../components/HomeMain";
export default {
  components: {
    BodyBlock,
    HomeMain
  }
};
</script>
<style lang="scss" scoped>
</style>