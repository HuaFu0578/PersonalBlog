<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 22:00:40
 * @LastEditors: your name
 * @LastEditTime: 2019-12-12 20:15:24
 -->
<template>
  <div class="tag-list clearfix" >
    <tag-module
      :to="item.to"
      :style="randomBg()"
      v-for="(item,index) in tagList"
      :key="index"
    >{{item.tag}}({{item.count}})</tag-module>
  </div>
</template>
<script>
import TagModule from "./TagModule";
export default {
  name: "tagListModule",
  props: ["tagList"],
  components: {
    TagModule
  },
  methods: {
    randomBg() {
      let r = this.randomNum(0),
        g = this.randomNum(0),
        b = this.randomNum(0);
      return `backgroundColor:rgb(${r},${g},${b})`;
    },
    randomNum(floor, ceil = 240) {
      return Math.random() * ceil + floor;
    }
  }
};
</script>
<style lang="scss" scoped>
.tag-list {
  width: 100%;
  word-break: break-all;
  word-wrap: break-word;
}
</style>