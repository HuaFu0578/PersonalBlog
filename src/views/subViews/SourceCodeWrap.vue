<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-12 21:04:47
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 15:49:09
 -->
<template>
  <body-block #module>
    <source-code-main :articleList="articleList" />
  </body-block>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import SourceCodeMain from "../../components/sourceCode/SourceCodeMain";
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
  }
};
</script>
