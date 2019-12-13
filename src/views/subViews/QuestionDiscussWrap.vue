<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-12 21:16:44
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 15:49:45
 -->
<template>
  <body-block #module>
    <question-discuss-main :articleList="articleList" />
  </body-block>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import QuestionDiscussMain from "../../components/questionDiscuss/QuestionDiscussMain";
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
    QuestionDiscussMain
  },
  created() {
    this.$axios
      .get(this.siteConfig.getArticleByType, {
        params: { type: "问题探讨", page: 1, pageSize: 10 }
      })
      .then(res => {
        let data = res.data.data;
        this.articleList = data;
      });
  }
};
</script>
