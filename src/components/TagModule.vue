<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 21:27:00
 * @LastEditors: your name
 * @LastEditTime: 2019-12-07 22:10:34
 -->
<template>
  <router-link :to="to" class="tag">
    <slot />
  </router-link>
</template>
<script>
export default {
  props: ["to"]
};
</script>
<style lang="scss" scoped>
.tag {
  padding: 5px 8px;
  margin: 3px;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  float: left;
}
</style>