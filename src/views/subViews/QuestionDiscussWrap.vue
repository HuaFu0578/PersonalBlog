<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-12 21:16:44
 * @LastEditors: your name
 * @LastEditTime: 2019-12-15 22:25:38
 -->
<template>
  <body-block #module>
    <question-discuss-main />
  </body-block>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import QuestionDiscussMain from "../../components/questionDiscuss/QuestionDiscussMain";
export default {
  components: {
    BodyBlock,
    QuestionDiscussMain
  }
};
</script>
