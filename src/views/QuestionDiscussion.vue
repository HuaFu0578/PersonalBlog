<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 17:07:01
 * @LastEditors: your name
 * @LastEditTime: 2019-12-11 21:14:53
 -->
<template>
  <div class="question-discuss">
    <div class="main">
      <body-block #module>
        <question-discuss-main :articleList="articleList" :readArticle="readArticle" />
      </body-block>
    </div>
  </div>
</template>
<script>
import BodyBlock from "../components/BodyBlock";
import QuestionDiscussMain from "../components/questionDiscuss/QuestionDiscussMain";
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
  },
  methods: {
    readArticle(article) {
      this.$store.commit("changeCurModule", "问题探讨");
      this.$store.commit("setCurArticle", article);
    }
  }
};
</script>
<style lang="scss" scoped>
.question-discuss {
  width: 100%;
}
</style>
