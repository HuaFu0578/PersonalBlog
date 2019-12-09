<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 17:09:48
 * @LastEditors: your name
 * @LastEditTime: 2019-12-08 17:09:23
 -->
<template>
  <div class="about">
    <div class="main">
      <body-block #module>
        关于区
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
.about {
  width: 100%;
}
</style>