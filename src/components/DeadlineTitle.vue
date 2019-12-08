<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 10:07:03
 * @LastEditors: your name
 * @LastEditTime: 2019-12-08 10:54:13
 -->
<template>
  <div class="line-title">
    <div class="head">
      <h3>{{head}}</h3>
    </div>
    <slot/>
  </div>
</template>
<script>
export default {
    props:["head"]
}
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

    h3 {
      display: inline-block;
      padding: 5px;
      border-bottom: 2px solid #333;
    }
  }
}
</style>