<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-06 10:25:23
 * @LastEditors: your name
 * @LastEditTime: 2019-12-07 19:19:54
 -->
<template>
  <div class="container">
    <header-bar />
    <router-view class="wrap" />
    <footer-bar />
  </div>
</template>
<script>
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "../components/FooterBar.vue";
export default {
  components: {
    HeaderBar,
    FooterBar
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;

  $wrap-width: 1170px;

  .wrap {
    width: $wrap-width;
    margin: 20px auto 0;
  }
}
</style>