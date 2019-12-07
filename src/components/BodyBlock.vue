<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 22:30:03
 * @LastEditors: your name
 * @LastEditTime: 2019-12-07 22:32:09
 -->
<template>
  <div class="wrapper">
    <div class="main-wrap">
      <div class="main">
          <slot name="module"/>
      </div>
      <aside-menu class="aside-menu" />
    </div>
  </div>
</template>
<script>
import AsideMenu from "../components/AsideMenu";
export default {
  components: { AsideMenu }
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  .main-wrap {
    width: 100%;
    min-height: 500px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .main {
      flex: 1;
      min-width: 280px;
      background-color: pink;
    }

    .aside-menu {
      width: 300px;
      margin-left: 20px;
    }
  }
}
</style>