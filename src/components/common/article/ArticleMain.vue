<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 21:31:42
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 11:48:45
 -->
<template>
  <div class="art-main">
    <location />
    <article-show class="artshow" :article="article" />
    <deadline-title
      #module
      head="文章评论"
      :more="`
      <div style='font-size:18px;'>
        共有
        <a style='color:red;padding:0 5px;font-size:20px;font-weight:600;'>
          ${curCommentCount}
          </a>条评论
        </div>`"
    >
      <comment :commentList="curComment" :articleId="article.id" />
    </deadline-title>
  </div>
</template>
<script>
import Location from "../Location";
import ArticleShow from "./ArticleShow";
import Comment from "../comments/Comment";
import DeadlineTitle from "../DeadlineTitle";
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  watch: {
    "article.id": {
      handler(val, oldVal) {
        if (val && val != oldVal) this.getComment();
      }
    }
  },
  computed: {
    ...mapState(["curComment", "curCommentCount"]),
    ...mapGetters(["siteConfig"])
  },
  props: ["article"],
  components: {
    Location,
    ArticleShow,
    Comment,
    DeadlineTitle
  },
  methods: {
    getComment() {
      this.$axios
        .get(this.siteConfig.getComment, {
          params: { article_id: this.article.id, page: 1, pageSize: 10 }
        })
        .then(res => {
          let data = res.data.data;
          this.$store.commit("updateCurComment", data);
        });
      this.$axios
        .get(this.siteConfig.getCommentCount, {
          params: { article_id: this.article.id }
        })
        .then(res => {
          this.$store.commit("updateCurCommentCount", res.data.data[0].count);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.artshow {
  margin-bottom: 20px;
}
</style>