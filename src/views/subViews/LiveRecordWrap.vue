<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-12 21:23:00
 * @LastEditors: your name
 * @LastEditTime: 2019-12-15 22:27:10
 -->
<template>
  <body-block #module>
    <live-record-main />
  </body-block>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import LiveRecordMain from "../../components/liveRecord/LiveRecordMain";
export default {
  components: {
    BodyBlock,
    LiveRecordMain
  }
};
</script>
