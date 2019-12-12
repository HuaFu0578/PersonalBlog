<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 17:03:51
 * @LastEditors: your name
 * @LastEditTime: 2019-12-11 21:11:19
 -->
<template>
  <div class="source-code">
    <div class="main">
      <body-block #module>
        <source-code-main :articleList="articleList" :readArticle="readArticle" />
      </body-block>
    </div>
  </div>
</template>
<script>
import BodyBlock from "../components/BodyBlock";
import SourceCodeMain from "../components/sourceCode/SourceCodeMain";
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
    SourceCodeMain
  },
  created() {
    this.$axios
      .get(this.siteConfig.getArticleByType, {
        params: { type: "源码学习", page: 1, pageSize: 10 }
      })
      .then(res => {
        let data = res.data.data;
        this.articleList = data;
      });
  },
  methods: {
    readArticle(article) {
      this.$store.commit("changeCurModule", "源码学习");
      this.$store.commit("setCurArticle", article);
    }
  }
};
</script>
<style lang="scss" scoped>
.source-code {
  width: 100%;
}
</style>