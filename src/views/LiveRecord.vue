<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 17:00:25
 * @LastEditors: your name
 * @LastEditTime: 2019-12-11 21:18:25
 -->
<template>
  <div class="live-record">
    <div class="main">
      <body-block #module>
        <live-main :articleList="articleList" :readyArticle="readArticle" />
      </body-block>
    </div>
  </div>
</template>
<script>
import BodyBlock from "../components/BodyBlock";
import LiveMain from "../components/liveRecord/LiveMain";
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
    LiveMain
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
  },
  methods: {
    readArticle(article) {
      this.$store.commit("changeCurModule", "生活随记");
      this.$store.commit("setCurArticle", article);
    }
  }
};
</script>
<style lang="scss" scoped>
.live-record {
  width: 100%;
}
</style>