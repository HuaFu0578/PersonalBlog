<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-13 15:19:45
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 19:33:42
 -->
<template>
  <div class="tag-show">
    <div class="main">
      <body-block #module>
        <location :pathList="pathList" />
        <deadline-title
          head="标签搜索结果"
          #module
          :more="`共
          <span style='color:red;font-size:18px;font-weight:600;'>
            &nbsp;${resultCount}&nbsp;
            </span>篇`"
        >
          <article-list :articleList="articleList" />
        </deadline-title>
      </body-block>
    </div>
  </div>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import ArticleList from "../../components/common/article/ArticleList";
import DeadlineTitle from "../../components/common/DeadlineTitle";
import Location from "../../components/common/Location";
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      pathList: [
        { to: "/studyNote", name: "学习笔记" },
        { to: "/sourceCode", name: "源码分析" },
        { to: "/liveRecord", name: "生活随记" }
      ],
      articleList: []
    };
  },
  computed: {
    ...mapState(["curArticle"]),
    ...mapGetters(["siteConfig"]),

    resultCount() {
      return this.$route.params.count || this.$route.query.count || 0;
    }
  },
  components: {
    BodyBlock,
    ArticleList,
    DeadlineTitle,
    Location
  },
  methods: {
    //通过标签id来获取文章列表
    getArticlesByTagId(tag_id, success) {
      this.$axios
        .get(this.siteConfig.getArticleByTag, {
          params: { tag_id: parseInt(tag_id), page: 1, pageSize: 10000 }
        })
        .then(res => {
          let data = res.data.data;
          this.articleList = data;
          typeof success == "function" && success(res);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getArticlesByTagId(to.params.tag_id || to.query.tag_id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.getArticlesByTagId(to.params.tag_id || to.query.tag_id);
    next();
  }
};
</script>
<style lang="scss" scoped>
.tag-show {
  width: 100%;
}
</style>