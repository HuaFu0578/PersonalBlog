<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 10:07:03
 * @LastEditors: your name
 * @LastEditTime: 2019-12-09 13:42:26
 -->
<template>
  <div class="line-title">
    <div class="head ">
      <h3>{{head}}</h3>
      <router-link tag="div" :to="to || '/'" :style="to?'cursor:pointer':''" class="more" v-html="more"/>
    </div>
    <slot name="module" />
  </div>
</template>
<script>
export default {
  props: ["head", "more", "to"]
};
</script>
<style lang="scss" scoped>
.line-title {
  width: 100%;
  background-color: #fff;
  padding: 10px 10px 10px 15px;
  box-sizing: border-box;

  .head {
    width: 100%;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    h3 {
      padding: 5px;
      border-bottom: 2px solid #333;
    }

    .more {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>