<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 17:07:01
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 13:30:50
 -->
<template>
  <div class="question-discuss">
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
