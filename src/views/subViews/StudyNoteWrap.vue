<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-12 19:42:57
 * @LastEditors: your name
 * @LastEditTime: 2019-12-14 16:59:17
 -->
<template>
  <body-block #module>
    <study-note-main />
  </body-block>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import StudyNoteMain from "../../components/studyNote/StudyNoteMain";
export default {
  components: {
    BodyBlock,
    StudyNoteMain
  }
};
</script>