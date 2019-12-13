<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 09:33:08
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 15:01:58
 -->
<template>
  <div class="home-page">
    <header-bar />
    <div class="home-page-router">
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
.home-page-router {
  width: 1170px;
  margin: 20px auto;
}
</style>