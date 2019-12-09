<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 18:54:55
 * @LastEditors: your name
 * @LastEditTime: 2019-12-08 17:10:06
 -->
<template>
  <div class="message-board">
    <div class="main">
      <body-block #module>留言板</body-block>
    </div>
  </div>
</template>
<script>
import BodyBlock from "../components/BodyBlock";
import StudyMain from "../components/studyNote/StudyMain";
export default {
  components: {
    BodyBlock,
    StudyMain
  }
};
</script>
<style lang="scss" scoped>
.message-board {
  width: 100%;
}
</style>