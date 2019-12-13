<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-12 21:23:00
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 15:50:20
 -->
<template>
  <body-block #module>
    <live-record-main :articleList="articleList" />
  </body-block>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import LiveRecordMain from "../../components/liveRecord/LiveRecordMain";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      articleList: []
    };
  },
  computed: {
    ...mapGetters(["siteConfig"])
  },
  components: {
    BodyBlock,
    LiveRecordMain
  },
  created() {
    this.$axios
      .get(this.siteConfig.getArticleByType, {
        params: { type: "生活随记", page: 1, pageSize: 10 }
      })
      .then(res => {
        let data = res.data.data;
        this.articleList = data;
      });
  }
};
</script>
