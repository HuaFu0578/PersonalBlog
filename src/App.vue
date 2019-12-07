<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-06 10:14:24
 * @LastEditors: your name
 * @LastEditTime: 2019-12-07 19:52:29
 -->
<template>
  <div id="app">
    <home />
  </div>
</template>
<script>
import Home from "./views/Home.vue";
export default {
  components: {
    Home
  }
};
</script>
//元素样式设置
<style>
#app {
  width: 100%;
  background-color: #eee;
}
</style>
//备用样式
<style>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
</style>
//初始化样式
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
a {
  color: inherit;
}
:root,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: "华文楷体", "宋体", "SimSum", "Sans-serif ";
}
input {
  border: none;
  outline: none;
}
</style>