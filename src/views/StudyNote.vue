<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 15:43:55
 * @LastEditors: your name
 * @LastEditTime: 2019-12-08 15:54:17
 -->
<template>
  <div class="study-note">
    <div class="main">
      <body-block #module>
        <study-main />
      </body-block>
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
.study-note {
  width: 100%;
}
</style>