<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 18:54:55
 * @LastEditors: your name
 * @LastEditTime: 2019-12-12 21:36:03
 -->
<template>
  <div class="message-board">
    <div class="main">
      <body-block #module>留言板</body-block>
    </div>
  </div>
</template>
<script>
import BodyBlock from "../components/common/BodyBlock";
export default {
  components: {
    BodyBlock
  }
};
</script>
<style lang="scss" scoped>
.message-board {
  width: 100%;
}
</style>