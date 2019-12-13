<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 17:00:25
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 13:31:05
 -->
<template>
  <div class="live-record">
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
import { mapGetters } from "vuex";
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