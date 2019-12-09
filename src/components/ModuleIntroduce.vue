<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 19:48:16
 * @LastEditors: your name
 * @LastEditTime: 2019-12-08 20:41:29
 -->
<template>
  <div class="module-intro">
    <img :src="module.img" :alt="module.name" class="pic" />
    <p class="intro">{{module.intro}}</p>
  </div>
</template>
<script>
export default {
  props: ["module"]
};
</script>
<style lang="scss" scoped>
.module-intro {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;

  .pic {
    width: 200px;
  }

  .intro {
    // align-self: flex-start;
    margin-left: 5px;
    text-indent: 2em;
    line-height: 1.5;
    font-size: 18px;
  }
}
</style>
