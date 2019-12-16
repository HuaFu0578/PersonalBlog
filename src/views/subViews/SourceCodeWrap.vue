<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-12 21:04:47
 * @LastEditors: your name
 * @LastEditTime: 2019-12-15 22:21:46
 -->
<template>
  <body-block #module>
    <source-code-main />
  </body-block>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import SourceCodeMain from "../../components/sourceCode/SourceCodeMain";

export default {
  components: {
    BodyBlock,
    SourceCodeMain
  }
};
</script>
