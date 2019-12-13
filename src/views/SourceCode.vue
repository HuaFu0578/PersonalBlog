<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 17:03:51
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 13:30:42
 -->
<template>
  <div class="source-code">
    <header-bar />
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <footer-bar />
  </div>
</template>
<script>
import HeaderBar from "../components/common/HeaderBar";
import FooterBar from "../components/common/FooterBar";

export default {
  components: {
    HeaderBar,
    FooterBar
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 1170px;
  margin: 20px auto;
}
</style>