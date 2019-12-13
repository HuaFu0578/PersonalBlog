<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 20:47:30
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 17:18:52
 -->
<template>
  <div class="formal-article">
    <div class="main">
      <body-block #module>
        <article-main :pathList="pathList" :article="curArticle" />
      </body-block>
    </div>
  </div>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import ArticleMain from "../../components/common/article/ArticleMain";
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      pathList: [
        { to: "/studyNote", name: "学习笔记" },
        { to: "/sourceCode", name: "源码分析" },
        { to: "/liveRecord", name: "生活随记" }
      ]
    };
  },
  computed: {
    ...mapState(["curArticle", "door"]),
    ...mapGetters(["siteConfig"])
  },
  components: {
    BodyBlock,
    ArticleMain
  },
  methods: {
    getArticleByIdAndSetViews(article_id, success) {
      //article_id表示页面路由跳转指定的文章id
      this.$axios
        .get(this.siteConfig.getArticleById, {
          params: { article_id: article_id }
        })
        .then(res => {
          let data = res.data.data;
          if (data == null || data.length == 0) return;
          this.$store.commit("setCurArticle", data[0]);
          this.setViews();
          typeof success == "function" && success();
        });
    },
    //添加浏览量
    setViews() {
      if (!this.curArticle.id) return;
      this.$axios
        .get(this.siteConfig.setArticleViews, {
          params: { article_id: this.curArticle.id }
        })
        .then(res => {
          let data = res.data.data;
          this.$store.commit("updateCurArticleViews", { views: data[0].views });
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //如果当前文章是被浏览器强制刷新了，则通过url参数重新获取文章
      if (!from.name) {
        vm.getArticleByIdAndSetViews(
          to.params.article_id || to.query.article_id
        );
      } else {
        vm.setViews();
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.getArticleByIdAndSetViews(to.params.article_id || to.query.article_id);
    next();
  }
};
</script>
<style lang="scss" scoped>
.formal-article {
  width: 100%;
}
</style>