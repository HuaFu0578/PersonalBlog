<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 19:41:56
 * @LastEditors: your name
 * @LastEditTime: 2019-12-07 21:48:40
 -->
<template>
  <div class="module">
    <h3 class="head">{{head}}</h3>
    <slot name="module"></slot>
  </div>
</template>
<script>
export default {
  props: ["titleList", "head"]
};
</script>
<style lang="scss" scoped>
.module {
  background-color: #fff;
  padding: 10px 10px 20px;
  margin-bottom: 20px;

  .head {
    width: 100%;
    padding-left: 5px;
    box-sizing: border-box;
    border-left: 8px solid #f40;
    position: relative;
    margin-bottom: 20px;

    &::after {
      content: "";
      display: block;
      position: absolute;
      left:0;
      bottom: -10px;
      width:100%;
      height:0;
      border-bottom: 2px solid rgb(82, 120, 247);
    }
  }
}
</style>