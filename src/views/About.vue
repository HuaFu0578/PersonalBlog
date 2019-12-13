<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 17:09:48
 * @LastEditors: your name
 * @LastEditTime: 2019-12-12 21:35:34
 -->
<template>
  <div class="about">
    <div class="main">
      <body-block #module>关于区</body-block>
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
.about {
  width: 100%;
}
</style>